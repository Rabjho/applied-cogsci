import { PropsWithChildren } from "react";

export default function QuestionTitle({
  children,
}: PropsWithChildren<unknown>) {
  return <div className="text-primary m-2 text-2xl">{children}</div>;
}
