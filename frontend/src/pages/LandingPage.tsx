import AnalysisResult from "@/components/analysis/AnalysisResult";
import YouTubePlayer from "@/components/analysis/YouTubePlayer";
import FeatureSection from "@/components/landing/FeatureSection";
import HeroSection from "@/components/landing/HeroSection";
import VideoUrlForm from "@/components/landing/VideoUrlForm";
import { useState } from "react";
import type { AnalyzeVideoResponse } from "@/services/youtube";

function LandingPage() {
  const [analysisResult, setAnalysisResult] = useState<AnalyzeVideoResponse | null>(null);
  const [videoId, setVideoId] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.15),_transparent_35%),linear-gradient(135deg,_#f8fafc_0%,_#eef2ff_100%)] px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <HeroSection />

        <VideoUrlForm
          onVideoSelected={setVideoId}
          onAnalysisComplete={setAnalysisResult}
        />

        {videoId && <YouTubePlayer videoId={videoId} />}

        {analysisResult && (
          <AnalysisResult analysis={analysisResult} />
        )}

        <FeatureSection />
      </div>
    </main>
  );
}

export default LandingPage;