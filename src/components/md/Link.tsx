export function Link(props: any) {
  return (
    <a
      href={props.href}
      className="text-blue-500"
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
}
