
interface FeatureCardProps {
    item: {
        icon: React.ReactNode;
        heading: string;
        subheading: string;
    }
}
export default function FeatureCard ({ item }: FeatureCardProps) {
    return (
        <>
            <div className="bg-card-bg rounded-xl p-4">
                <div className="bg-black text-primary w-fit p-4 rounded-xl hover:[box-shadow:0px_1px_8px_#8CFF2E] transition duration-300 mb-5">{item.icon}</div>
                <div className="text-2xl font-medium">{item.heading}</div>
                <div className="text-accent max-w-2xs mb-5">{item.subheading}</div>
            </div>
        </>
    )
}