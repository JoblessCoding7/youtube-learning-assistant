import { YoutubeTranscript } from "youtube-transcript";
import type { TranscriptResponse } from "youtube-transcript";

export async function getTranscript(
  videoId: string,
): Promise<TranscriptResponse[]> {
  const transcript = await YoutubeTranscript.fetchTranscript(videoId);
  console.log(transcript);
  
  return transcript;
}