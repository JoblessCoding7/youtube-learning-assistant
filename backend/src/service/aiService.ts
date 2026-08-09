import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function generateSummary(
  transcriptText: string,
): Promise<string> {
  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a learning assistant. Summarize educational video transcripts clearly and concisely.",
      },
      {
        role: "user",
        content: `Summarize the following transcript:\n\n${transcriptText}`,
      },
    ],
    model: "llama-3.3-70b-versatile",
  });

  return completion.choices[0]?.message?.content ?? "";
}