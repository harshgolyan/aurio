import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function Heading({ children, className }: HeadingProps) {
  return (
    <div
      className={cn(
        "text-7xl text-center max-w-3xl py-8",
        className
      )}
    >
      {children}
    </div>
  );
}
