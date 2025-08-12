import Image from "next/image";

interface ExplorationCardProps {
  src: string;
  title: string;
  description: string;
}

export default function ExplorationCard({
  src,
  title,
  description,
}: ExplorationCardProps) {
  return (
    <div className="bg-background h-full flex-1 border-2 border-border rounded-xl p-5 flex flex-col gap-4 items-center">
      <div className="w-16 h-16 bg-background-surface rounded-3xl flex justify-center items-center inset-shadow-[2px_2px_4px_var(--color-foreground-50)] shadow-[2px_2px_4px_var(--color-background-50)]">
        <Image
          src={src}
          alt="Icon"
          width={32}
          height={32}
          className="w-8 h-auto"
        />
      </div>
      <h5>{title}</h5>
      <p className="caption text-center">{description}</p>
    </div>
  );
}
