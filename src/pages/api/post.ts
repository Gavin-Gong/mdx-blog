import path from "path";
import glob from "glob";
import fs from "fs/promises";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const POST_DIR = path.join(process.cwd(), "_posts");

export async function getPosts() {
  const filePaths = glob.sync(`${POST_DIR}/**/*.mdx`);
  console.log(filePaths);
  return Promise.all(
    filePaths.map((path) => {
      return fs
        .readFile(path, "utf8")
        .then((rawContent) => {
          const { content, data } = matter(rawContent);
          return {
            data,
            content,
          };
        })
        .then((res) => {
          return serialize(res.content).then((reactStr) => {
            return {
              slug: path
                .replace(`${POST_DIR}/`, "")
                .replace(".mdx", "")
                .split("/"),
              filePath: path.replace(POST_DIR, ""),
              source: reactStr,
              content: res.content,
              data: res.data ?? {},
            };
          });
        })
        .then(tap);
    })
  );
}

function tap(v: any) {
  // console.log(v.slug);
  return v;
}
