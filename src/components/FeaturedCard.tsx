interface FeaturedCardProps {
  title: string;
  size?: "large" | "small";
  className?: string;
}

export default function FeaturedCard({ title, size = "large", className = "" }: FeaturedCardProps) {
  const isLarge = size === "large";

  return (
    <div
      className={`flex flex-shrink-0 flex-col items-center justify-center border bg-[#262626] text-center text-white shadow-[#C2B59B] transition duration-500 hover:shadow-lg ${
        isLarge ? "min-h-[400px] w-[685px] px-24 py-8" : "min-h-[200px] w-[342px] px-12 py-4"
      } ${className}`}
    >
      <h1 className={isLarge ? "text-6xl" : "text-3xl"}>{title}</h1>
    </div>
  );
}
