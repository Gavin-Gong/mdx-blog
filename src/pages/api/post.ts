import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const POST_DIR = path.join(process.cwd(), "_posts");

export async function getPosts() {
  return fs.readdir(POST_DIR).then((fileList) => {
    console.log(fileList);
    return Promise.all(
      fileList.map((file) => {
        return fs
          .readFile(path.join(POST_DIR, file), "utf8")
          .then((contents) => {
            return serialize(contents) || null;
          })
          .then((contents) => {
            return {
              slug: file.replace(".mdx", ""),
              filePath: file.replace(".mdx", ""),
              source: contents,
            };
          });
      })
    );
  });
}
