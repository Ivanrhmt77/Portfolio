import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="py-8">
      <div className="max-w-[1160px] mx-auto flex justify-between px-4">
        <p>JUDUL</p>
        <Navbar />
      </div>
    </header>
  );
}
