export function Link(props: any) {
  return (
    <a
      href={props.children}
      className="text-blue-500"
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
}
