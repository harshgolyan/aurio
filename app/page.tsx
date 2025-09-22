import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HowClarioWorks from "@/components/how-clario-works";

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <Hero />
            <HowClarioWorks />
        </div>
    );
}
