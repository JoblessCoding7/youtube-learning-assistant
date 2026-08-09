type YouTubePlayerProps = {
  videoId: string;
};

function YouTubePlayer({ videoId }: YouTubePlayerProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-black shadow-sm">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default YouTubePlayer;