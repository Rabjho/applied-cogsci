// Breaks because of CORS, makes sense, so use OpenAI API instead

import Anthropic from "@anthropic-ai/sdk";

export default async function QueryClaude(apiKey: string) {
  const anthropic = new Anthropic({
    apiKey: apiKey, // This is the default and can be omitted
  });
  const message = await anthropic.messages.create({
    max_tokens: 1024,
    messages: [{ role: "user", content: "Hello, Claude" }],
    model: "claude-3-opus-20240229",
  });

  console.log(message.content);
}
