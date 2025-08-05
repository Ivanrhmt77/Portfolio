import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-6 h-full">
      <div className="col-span-3 bg-background-surface h-full border-2 border-border rounded-xl p-6">
        Content 1
      </div>
      <div className="col-span-9 bg-background-surface h-full border-2 border-border rounded-xl p-6">
        <h2>About Me</h2>
      </div>
    </div>
  );
}
