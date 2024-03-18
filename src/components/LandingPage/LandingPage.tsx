import HeroText from "./HeroText";
import CallToAction from "./CallToAction";

export default function LandingPage({ shown }: { shown: boolean }) {
  if (!shown) {
    return null;
  }
  return (
    <>
      <div className="vertical center-v h-svh w-full">
        <HeroText />
        <CallToAction />
      </div>
    </>
  );
}
