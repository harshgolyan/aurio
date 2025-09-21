"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Heading from "./ui/heading";
import SubHeading from "./ui/sub-heading";
import Button from "./ui/button";
import Image from "next/image";

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    
    const rotateXRaw = useTransform(scrollYProgress, [0, 1], [40, -40]);
    const rotateX = useSpring(rotateXRaw, { stiffness: 80, damping: 20 });

    const scaleRaw = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
    const scale = useSpring(scaleRaw, { stiffness: 80, damping: 20 });

    return (
        <div className="flex flex-col justify-center max-w-4xl mx-auto items-center mt-[5rem] relative z-10">
            <div className="bg-black px-4 py-2 rounded-xl [box-shadow:0px_1px_4px_#8CFF2E] text-primary text-xl font-medium tracking-wide">
                All-in-One Finance Control
            </div>
            <Heading>Take control of your finances — with clarity</Heading>
            <SubHeading>
                All your money insights, finally in one place — track income,
                spending, and reach your goals with ease.
            </SubHeading>
            <Button
                label="Get Started for free"
                className="bg-primary text-black [box-shadow:0px_1px_8px_#8CFF2E] hover:shadow-none transition duration-300"
            />
            <div
                ref={ref}
                className="mt-12 perspective-midrange w-full flex justify-center"
            >
                <motion.div
                    style={{ rotateX, scale }}
                    className="w-full rounded-xl shadow-lg h-[40rem] min-w-[70rem] mask-b-from-30% bg-secondary p-2 overflow-hidden relative"
                >
                    <div className="h-[2px] w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent absolute inset-0 mx-auto"></div>
                    <Image
                        src="/main.avif"
                        alt="Hero Image"
                        width={1080}
                        height={400}
                        className="w-full h-full object-left-top object-cover rounded-xl"
                        priority
                    />
                </motion.div>
            </div>
        </div>
    );
}
