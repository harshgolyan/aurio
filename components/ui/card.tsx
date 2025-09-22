import Image from "next/image";
interface CardProps {
    card: {
        image: string;
        step: string;
        heading: string;
        subHeading: string;
    };
}

export default function Card({ card }: CardProps) {
    return (
        <>
            <div className="bg-card-bg rounded-xl p-4 w-fit">
                <Image
                    src={card.image}
                    alt="How Clario Works"
                    width={500}
                    height={300}
                    className=" rounded-xl bg-black w-[20rem] flex justify-center items-center"
                />
                <div className="flex items-center gap-4 w-[6rem] [box-shadow:0px_1px_4px_#8CFF2E] p-2 text-primary rounded-lg my-4">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <div className="font-medium text-lg">{card.step}</div>
                </div>
                <div className="text-2xl font-medium py-4">{card.heading}</div>
                <div className="text-lg text-accent max-w-xs">
                    {card.subHeading}
                </div>
            </div>
        </>
    );
}
