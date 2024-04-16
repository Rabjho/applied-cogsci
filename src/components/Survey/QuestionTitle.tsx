// Use PropsWithChildren<unknown> instead of { children: React.ReactNode }
export default function QuestionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="text-primary text-2xl">{children}</div>;
}
