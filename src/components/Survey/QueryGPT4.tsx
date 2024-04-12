import OpenAI from "openai";

export default async function QueryGPT4(apiKey: string) {
  const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}
