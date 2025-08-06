export const generateMetadata = () => {
  return {
    title: "Ivan's Works",
  };
};

export default function Works() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-full">
      <h4 className="text-foreground-surface">Works Page</h4>
      <h1>In Progress</h1>
    </div>
  );
}
