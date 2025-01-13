import AboutHero from "../components/About/AboutHero";
import CoreValuesSection from "../components/About/CoreValues";
import MissionVisionSection from "../components/About/MissionVision";
import TeamSection from "../components/About/Team";

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <CoreValuesSection />
      <MissionVisionSection />
      <TeamSection />
    </div>
  );
}
