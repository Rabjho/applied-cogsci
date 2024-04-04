import HeroText from "./HeroText";
import CallToAction from "./CallToAction";

interface LandingPageProps {
  onAnswer: (answer: string) => void;
}

export default function LandingPage({ onAnswer }: LandingPageProps) {
  return (
    <>
      <HeroText />
      <CallToAction onTrigger={onAnswer} />
    </>
  );
}
