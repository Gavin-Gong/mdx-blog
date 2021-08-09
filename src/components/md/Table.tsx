export function Table(props: any) {
  return (
    <table className="border-collapse border m-auto">{props.children}</table>
  );
}
export function THead(props: any) {
  return <thead>{props.children}</thead>;
}
export function TBody(props: any) {
  return <tbody>{props.children}</tbody>;
}
export function TR(props: any) {
  return <tr>{props.children}</tr>;
}
export function TH(props: any) {
  return <th className="border px-2">{props.children}</th>;
}
export function TD(props: any) {
  return <td className="border px-4">{props.children}</td>;
}
