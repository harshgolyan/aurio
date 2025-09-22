import { cn } from "@/lib/utils";

interface SubHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SubHeading({ children, className }: SubHeadingProps) {
  return (
    <div className={cn("text-xl text-center max-w-xl pb-4 text-accent", className)}>
      {children}
    </div>
  );
}
