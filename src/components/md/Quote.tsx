export function BlockQuote(props: any) {
  return (
    <blockquote className="border-green-500 border-l-4 pl-4 my-4">
      {props.children}
    </blockquote>
  );
}
