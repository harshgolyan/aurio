import { IconArrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
    label?: string;
    className?: string;
}

export default function Button({
    label = "Button",
    className = "",
}: ButtonProps) {
    return (
        <button
            className={cn(
                "flex items-center gap-4 py-3 px-6 rounded-full font-medium bg-accent text-black text-xl tracking-wide group",
                className
            )}
        >
            {label}
            <IconArrowRight size={28} className="-rotate-45 group-hover:rotate-0 transition duration-300" />
        </button>
    );
}
