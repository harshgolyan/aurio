interface HeadingProps {
    children: React.ReactNode;
}

export default function Heading({ children }: HeadingProps) {
    return <div className="text-7xl text-center max-w-3xl py-8">{children}</div>;
}
