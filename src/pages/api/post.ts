import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

const POST_DIR = path.join(process.cwd(), "_posts");

export async function getPosts() {
  return fs.readdir(POST_DIR).then((fileList) => {
    console.log(fileList);
    return Promise.all(
      fileList.map((file) => {
        return fs
          .readFile(path.join(POST_DIR, file), "utf8")
          .then((contents) => {
            return {
              ...matter(contents),
              slug: file.replace(".mdx", ""),
              filePath: file.replace(".mdx", ""),
            };
          });
      })
    );
  });
}
