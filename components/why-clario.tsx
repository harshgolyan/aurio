
import Heading from "./ui/heading";
import { IconCircleX, IconCircleCheck } from "@tabler/icons-react";

const otherTools = [
  { issue: "Messy spreadsheets, manual tracking" },
  { issue: "Complicated pricing, hidden fees" },
  { issue: "Limited automation, manual workflows" },
  { issue: "No team collaboration" },
  { issue: "Generic support, slow replies" },
];

const calrioTools = [
  { feature: "Smart dashboard, real-time updates" },
  { feature: "Simple, transparent pricing" },
  { feature: "Automated reports & smart alerts" },
  { feature: "Team-friendly, sync accounts easily" },
  { feature: "Priority support, fast response" },
];



export default function WhyClario() {
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-30">
                <div className="flex items-center gap-3 text-primary">
                    <div className="size-1.5 bg-primary rounded-full"></div>
                    Why Clario ?
                </div>
                <Heading className="max-w-2xl text-6xl">There&apos;s a smarter way to manage money</Heading>
                <div className="bg-card-bg p-4 rounded-xl flex gap-8 items-center">
                    <div>
                        <div className="text-2xl">Other Tools</div>
                        <div className=" p-6 rounded-xl flex flex-col gap-4">
                            {otherTools.map((tools, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <IconCircleX color="red"/>
                                    {tools.issue}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-black p-4 rounded-xl border border-primary [box-shadow:0px_1px_4px_#8CFF2E]">
                        <div className="text-2xl">Clario</div>
                        <div className=" p-6 rounded-xl flex flex-col gap-4">
                            {otherTools.map((tools, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <IconCircleCheck color="green"/>
                                    {tools.issue}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}