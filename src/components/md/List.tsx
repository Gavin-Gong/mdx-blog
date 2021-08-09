export function OL(props: any) {
  return (
    <ol className="pl-4 py-2" style={{ listStyle: "revert" }}>
      {props.children}
    </ol>
  );
}
export function UL(props: any) {
  return <ul className="pl-4 py-2" style={{ listStyle: "revert" }}>{props.children}</ul>;
}
export function LI(props: any) {
  return <li className="ml-2">{props.children}</li>;
}
