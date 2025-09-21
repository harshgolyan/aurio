
interface SubHeadingProps {
    children: React.ReactNode;
}

export default function SubHeading({ children }: SubHeadingProps) {
    return <div className="text-xl text-center max-w-xl pb-4 text-accent">{children}</div>;
}
