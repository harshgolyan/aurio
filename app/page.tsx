import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HowClarioWorks from "@/components/how-clario-works";
import Features from "@/components/features";
import WhyClario from "@/components/why-clario";
import Feedback from "@/components/feedback";

export default function Home() {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar />
            <Hero />
            <HowClarioWorks />
            <Features />
            <WhyClario />
            <Feedback />
        </div>
    );
}
