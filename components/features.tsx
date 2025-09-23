import FeatureCard from "./featureCard";
import Heading from "./ui/heading";
import { IconBuildingBank, IconTargetArrow, IconFolder, IconCalendar, IconAlarm, IconLock } from "@tabler/icons-react";


const features = [
  {
    icon: <IconBuildingBank />,
    heading: "Multi-account sync",
    subheading: "Connect and track all your bank accounts in one place."
  },
  {
    icon: <IconTargetArrow />,
    heading: "Goal tracking",
    subheading: "Visualize progress toward savings goals in real-time."
  },
  {
    icon: <IconFolder />,
    heading: "Custom categories",
    subheading: "Create and organize spending your way — not the bank's."
  },
  {
    icon: <IconCalendar />,
    heading: "Weekly reports",
    subheading: "Get a snapshot of your finances delivered to your inbox."
  },
  {
    icon: <IconAlarm />,
    heading: "Spending limits",
    subheading: "Set monthly caps and get notified when you're close."
  },
  {
    icon: <IconLock />,
    heading: "Secure & private",
    subheading: "Your data is encrypted and never shared — ever."
  },
];



export default function Features() {
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-30">
                <div className="flex items-center gap-3 text-primary">
                    <div className="size-1.5 bg-primary rounded-full"></div>
                    Features
                </div>
                <Heading className="max-w-4xl text-6xl">Designed for clarity, built for better money decisions</Heading>
                <div className="grid grid-cols-3 gap-8">
                    {features.map((item, index) => (
                        <FeatureCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}