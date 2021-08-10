/* eslint-disable @next/next/no-img-element */
export function Image(props: any) {
  return (
    <div className="text-center">
      <img {...props} className="inline-block" alt="img" />
    </div>
  );
}
