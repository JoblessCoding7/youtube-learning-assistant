import {
  BookOpenText,
  BrainCircuit,
  ListChecks,
  type LucideIcon,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Summary",
    description: "Get a concise breakdown of the video in seconds.",
    icon: BookOpenText,
  },
  {
    title: "Key Topics",
    description: "Discover the most important ideas and takeaways instantly.",
    icon: ListChecks,
  },
  {
    title: "Ask AI",
    description: "Dive deeper with focused questions about the content.",
    icon: BrainCircuit,
  },
];

function FeatureSection() {
  return (
    <section
      aria-labelledby="features-heading"
      className="grid gap-4 md:grid-cols-3"
    >
      <h2 id="features-heading" className="sr-only">
        Key features
      </h2>

      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </section>
  );
}

export default FeatureSection;
