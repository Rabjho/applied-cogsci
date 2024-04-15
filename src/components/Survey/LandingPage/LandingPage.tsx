import HeroText from "./HeroText";
import CallToAction from "./CallToAction";

interface LandingPageProps {
  onAnswer: (answer: string) => void;
}

export default function LandingPage({ onAnswer }: LandingPageProps) {
  const handleTrigger = (answer: string) => {
    onAnswer(answer);
  };

  return (
    <>
      <HeroText />
      <CallToAction onTrigger={handleTrigger} />
    </>
  );
}
