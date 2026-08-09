import { Sparkles, CheckCircle2 } from "lucide-react";

type AnalysisResultProps = {
  analysis: any;
};

function AnalysisResult({ analysis }: AnalysisResultProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 bg-gradient-to-r from-indigo-50 to-violet-50 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <Sparkles className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              AI Summary
            </h2>

            <p className="text-sm text-slate-500">
              Key insights from this video
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8 p-6">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Overview
          </h3>

          <p className="mt-3 text-base leading-7 text-slate-700">
            {analysis.summary}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Key Takeaways
          </h3>

          <div className="mt-4 space-y-3">
            {analysis.keyTakeaways?.map(
              (takeaway: string, index: number) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-xl bg-slate-50 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />

                  <p className="leading-6 text-slate-700">
                    {takeaway}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="border-t border-slate-100 pt-4 text-sm text-slate-500">
          <span className="font-medium text-slate-700">
            Video ID:
          </span>{" "}
          {analysis.videoId}
        </div>
      </div>
    </section>
  );
}

export default AnalysisResult;