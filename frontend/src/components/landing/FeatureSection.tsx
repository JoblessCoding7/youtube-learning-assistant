import {
  BookOpenText,
  BrainCircuit,
  ListChecks,
  type LucideIcon,
} from "lucide-react";

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

      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <article
            key={feature.title}
            className="rounded-[1.25rem] border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur"
          >
            <div className="mb-4 inline-flex rounded-2xl bg-indigo-50 p-3 text-indigo-600">
              <Icon className="size-6" />
            </div>

            <h3 className="text-xl font-semibold text-slate-950">
              {feature.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {feature.description}
            </p>
          </article>
        );
      })}
    </section>
  );
}

export default FeatureSection;