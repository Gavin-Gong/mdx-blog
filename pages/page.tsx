import { useState } from "react"

export default function Page() {
  const [value, setValue ] = useState(0)
  return (
    <div>
      <h1>Page</h1>
      <p onClick={() => setValue(value + 1)}>{value}</p>
    </div>
  );
}
