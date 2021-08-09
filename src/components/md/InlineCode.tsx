import React from "react";

export const InlineCode = (props: any) => {
  return <code className="text-green-600">`{props.children}`</code>;
};
