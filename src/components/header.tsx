import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="py-8">
      <div className="max-w-[1160px] mx-auto flex justify-between px-4">
        <div className="h-16 flex gap-4 items-center">
          <div className="w-14 h-14 bg-accent rounded-xl border border-border flex items-center justify-center">
            <img src="/icons/logo.svg" alt="Logo" />
          </div>
          <div className="w-fit h-full flex flex-col justify-between">
            <h5>Ivan Rahmat Prakasa</h5>
            <div className="h-px w-full bg-border" />
            <p className="caption text-foreground-surface">
              Computer Science Student
            </p>
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  );
}
