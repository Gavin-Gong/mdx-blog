import Link from "next/link";

export function ArticleCard(props: any) {
  const { slug, data = {}, source } = props;
  console.log(data);
  return (
    <article className="border w-2/4 mx-auto mb-6 p-4 cursor-pointer">
      <Link href={`/${slug.join("/")}`} passHref>
        <h4 className="text-pink-500 text-lg mb-4 font-semibold">
          {data.title}
        </h4>
      </Link>
      {/* <div className="truncate">{{ source }}</div> */}
      <div className="flex">
        <div>{data.date}</div>
        <ul className="flex list-none">
          {data.tag.map((tag: any) => (
            <li
              key={tag}
              className="list-none ml-4 bg-blue-500 text-white px-2 rounded-full text-sm"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
