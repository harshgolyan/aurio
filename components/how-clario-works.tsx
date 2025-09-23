import Card from "./ui/card";
import Heading from "./ui/heading";
import SubHeading from "./ui/sub-heading";
import Image from "next/image";
import Button from "./ui/button";

export default function HowClarioWorks() {
    const cardItems = [
        {
            image: "/how-clario-works/image-1.avif",
            step: "Step 1",
            heading: "Connect Your Accounts",
            subHeading:
                "Sync all your bank accounts, credit cards, and wallets — securely and instantly.",
        },
        {
            image: "/how-clario-works/image-2.avif",
            step: "Step 2",
            heading: "Track your money",
            subHeading:
                "See where your money goes with real-time spending insights and clear breakdowns.",
        },
        {
            image: "/how-clario-works/image-3.avif",
            step: "Step 3",
            heading: "Set goals & stay on track",
            subHeading:
                "Plan your savings, set monthly budgets, credit cards, wallets and let Clario keep you in control.",
        },
    ];

    return (
        <>
            <div className="mt-10 flex flex-col">
                <Heading>How Clario works ?</Heading>
                <div className="flex items-start justify-center gap-8">
                    {cardItems.map((card, index) => (
                        <Card key={index} card={card} />
                    ))}
                </div>
            </div>
            <div className="mt-20 flex flex-col">
                <div className="flex justify-between items-center">
                    <Heading className="flex text-start text-5xl">
                        See your money in real time, clearly.
                    </Heading>
                    <SubHeading className="flex text-start max-w-sm">
                        Clario shows your income, spending, and goals in simple
                        visuals you can act on — right away.
                    </SubHeading>
                </div>
                <div className="grid grid-cols-3 grid-rows-4 gap-4 p-6 bg-black text-white rounded-2xl">
                    <div className="col-span-2 row-span-2 bg-neutral-900 rounded-2xl p-4">
                        <Image
                            src="/how-clario-works/image-4.avif"
                            alt="Smart Dashboard"
                            width={800}
                            height={400}
                            className="rounded-lg bg-black h-[20rem] object-top-left object-cover mask-b-from-5%"
                        />
                        <Heading className="text-2xl flex justify-start pb-0 ">
                            Smart Dashboard
                        </Heading>
                        <SubHeading className="text-accent text-lg max-w-sm text-start">
                            See all your accounts in one view — balances,
                            spending, and goals.
                        </SubHeading>
                    </div>
                    <div className="bg-neutral-900 rounded-2xl p-4 col-span-1 row-span-2">
                        <Image
                            src="/how-clario-works/image-5.avif"
                            alt="Smart Dashboard"
                            width={800}
                            height={400}
                            className="rounded-lg bg-black h-[20rem] object-top-left object-cover mask-b-from-5%"
                        />
                        <Heading className="text-2xl flex justify-start pb-0 ">
                            Cashflow Overview
                        </Heading>
                        <SubHeading className="text-accent text-lg max-w-sm text-start">
                            Track your daily income and expenses to understand
                            your financial flow.
                        </SubHeading>
                    </div>
                    <div className="bg-neutral-900 rounded-2xl p-4 col-span-1 row-span-2">
                        <Image
                            src="/how-clario-works/image-6.avif"
                            alt="Smart Dashboard"
                            width={800}
                            height={400}
                            className="rounded-lg bg-black h-[20rem] object-top-left object-cover mask-b-from-5%"
                        />
                        <Heading className="text-2xl flex justify-start pb-0 ">
                            Spending Breakdown
                        </Heading>
                        <SubHeading className="text-accent text-lg max-w-sm text-start">
                            See exactly how your money is split across
                            categories.
                        </SubHeading>
                    </div>
                    <div className="bg-neutral-900 rounded-2xl p-4 col-span-1 row-span-2">
                        <Image
                            src="/how-clario-works/image-7.avif"
                            alt="Smart Dashboard"
                            width={800}
                            height={400}
                            className="rounded-lg bg-black h-[20rem] object-top-left object-cover mask-b-from-5%"
                        />
                        <Heading className="text-2xl flex justify-start pb-0 ">
                            Savings Goal
                        </Heading>
                        <SubHeading className="text-accent text-lg max-w-sm text-start">
                            Stay focused on your savings targets and follow your
                            progress.
                        </SubHeading>
                    </div>
                    <div className="bg-neutral-900 rounded-2xl p-4 flex flex-col justify-center">
                        <div className="flex items-center mb-2 relative">
                            <Image
                                src="/how-clario-works/image-8.avif"
                                alt="Smart Dashboard"
                                width={800}
                                height={400}
                                className="rounded-full bg-black h-[3rem] w-[3rem] absolute top-0 left-0 border-neutral-900 border-3"
                            />
                            <Image
                                src="/how-clario-works/image-9.avif"
                                alt="Smart Dashboard"
                                width={800}
                                height={400}
                                className="rounded-full bg-black h-[3rem] w-[3rem] absolute top-0 left-8 border-neutral-900 border-3"
                            />
                            <Image
                                src="/how-clario-works/image-10.avif"
                                alt="Smart Dashboard"
                                width={800}
                                height={400}
                                className="rounded-full bg-black h-[3rem] w-[3rem] absolute top-0 left-16 border-neutral-900 border-3"
                            />
                            <Heading className="text-2xl flex justify-start pb-0 pt-15">
                                Trusted by 3k+ Freelancers
                            </Heading>
                        </div>
                    </div>
                    <div className="bg-neutral-900 rounded-2xl p-4 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold pl-5">$1.2M+ Saved</h3>
                        <p className="text-gray-400 text-sm mb-2 pl-5">
                            Clario helps users save more — and spend smarter.
                        </p>
                        <Button label="Get Started" className="text-primary bg-neutral-900" />
                    </div>
                </div>
            </div>
        </>
    );
}
