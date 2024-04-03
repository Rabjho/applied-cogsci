import HeroText from "./HeroText";
import CallToAction from "./CallToAction";

interface LandingPageProps {
  onAnswer: (answer: string) => void;
}

export default function LandingPage({ onAnswer }: LandingPageProps) {
  return (
    <>
      <div className="vertical center-v h-svh w-full">
        <HeroText />
        <CallToAction onTrigger={onAnswer} />
      </div>
    </>
  );
}
