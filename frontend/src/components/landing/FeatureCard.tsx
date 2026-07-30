import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <article className="rounded-[1.25rem] border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur">
      <div className="mb-4 inline-flex rounded-2xl bg-indigo-50 p-3 text-indigo-600">
        <Icon className="size-6" />
      </div>

      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

export default FeatureCard;
