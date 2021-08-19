import path from "path";
import glob from "glob";
import fs from "fs/promises";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import dayjs from "dayjs";

const POST_DIR = path.join(process.cwd(), "_posts");

export async function getPosts() {
  const filePaths = glob.sync(`${POST_DIR}/**/[!_]*.{md,mdx}`);
  console.log(filePaths);
  return Promise.all(
    filePaths.map((path) => {
      return fs
        .readFile(path, "utf8")
        .then((rawContent) => {
          const { content, data } = matter(rawContent);
          return {
            data: {
              ...data,
              date: dayjs(data.date).format("YYYY-MM-DD"),
              tag: data.tags ?? [],
            },
            content,
          };
        })
        .then((res) => {
          return serialize(res.content).then((reactStr) => {
            return {
              slug: `post/${path
                .replace(`${POST_DIR}/`, "")
                .replace(".mdx", "")}`.split("/"),
              filePath: path.replace(POST_DIR, ""),
              source: reactStr,
              content: res.content,
              data: res.data ?? {},
            };
          });
        });
    })
  ).then((list) => {
    list.sort((a, z) => {
      return dayjs(z.data.date).unix() - dayjs(a.data.date).unix();
    });
    return list;
  });
}

function tap(v: any) {
  // console.log(v.slug);
  return v;
}
