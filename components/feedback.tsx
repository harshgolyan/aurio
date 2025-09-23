import Heading from "./ui/heading";
import SubHeading from "./ui/sub-heading";
import { IconQuote } from "@tabler/icons-react";
import Image from "next/image";

const feedbacks = [
    {
        name: "John Doe",
        designation: "Product Manager",
        feedback: "The dashboard is intuitive and saves a lot of time.",
    },
    {
        name: "Jane Smith",
        designation: "Marketing Lead",
        feedback:
            "Automated reports have improved our campaign tracking significantly.",
    },
    {
        name: "Alex Johnson",
        designation: "Software Engineer",
        feedback: "Syncing accounts across the team is seamless and efficient.",
    },
    {
        name: "Emily Davis",
        designation: "UX Designer",
        feedback:
            "The UI is clean and user-friendly, making daily operations smooth.",
    },
    {
        name: "Michael Brown",
        designation: "CEO",
        feedback: "Priority support response time is impressive and reliable.",
    },
    {
        name: "Sara Wilson",
        designation: "Operations Manager",
        feedback: "Real-time updates help us make quick, informed decisions.",
    },
    {
        name: "David Lee",
        designation: "Sales Lead",
        feedback: "Pricing transparency makes it easier to plan our budgets.",
    },
    {
        name: "Rachel Adams",
        designation: "HR Manager",
        feedback:
            "Team collaboration features have reduced communication gaps.",
    },
    {
        name: "Tom Harris",
        designation: "Finance Analyst",
        feedback:
            "Automated alerts help us catch issues before they become problems.",
    },
    {
        name: "Olivia Clark",
        designation: "Project Manager",
        feedback:
            "Overall, the platform has increased productivity across all teams.",
    },
];

export default function Feedback() {
    return (
        <>
            <div className="mt-20 flex flex-col">
                <div className="flex justify-between items-center">
                    <Heading className="flex text-start text-5xl">
                        Loved by individuals and small teams
                    </Heading>
                    <SubHeading className="flex text-start max-w-sm">
                        People across industries trust Clario to manage money,
                        reduce stress, and make smarter decisions — all in one
                        simple dashboard.
                    </SubHeading>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-8">
                    {feedbacks.map((item, index) => (
                        <div
                            key={index}
                            className="bg-card-bg p-4 rounded-xl w-fit"
                        >
                            <div className="flex items-center gap-2">
                                <IconQuote className="size-20 text-primary fill-primary" />
                                <div className="text-lg">{item.feedback}</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/how-clario-works/image-8.avif"
                                    alt="feedback image"
                                    width={50}
                                    height={50}
                                    className="rounded-full mt-4 mb-2"
                                />
                                <div className="flex flex-col">
                                    <div className="text-xl font-medium">
                                        {item.name}
                                    </div>
                                    <div className="text-sm text-accent">
                                        {item.designation}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
