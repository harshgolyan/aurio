import { IconTriangleInverted } from "@tabler/icons-react";
import Button from "./ui/button";

export default function Navbar () {
    const navbarItems = ["How it works", "Features", "Pricing", "Blog"];

    return (
        <>
            <div className="flex justify-between max-w-6xl mx-auto items-center bg-transparent backdrop-blur-lg px-4 py-6">
                <div className="flex items-center gap-2 font-bold text-2xl">
                    <IconTriangleInverted size={32} className="fill-white stroke-0" />
                    Aurio
                </div>
                <div className="flex items-center gap-10">
                    {navbarItems.map((item, index) => (
                        <div key={index} className="font-medium text-lg">{item}</div>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <Button label="Waitlist" className="bg-secondary text-white" />
                    <Button label="Contact" className="bg-primary text-black [box-shadow:0px_1px_4px_#8CFF2E] hover:shadow-none transition duration-300"/>
                </div>
            </div>
        </>
    )
}