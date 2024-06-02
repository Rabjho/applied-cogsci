import OpenAI from "openai";
import inputPrompt from "./inputTemplate.json?raw";
import outputPrompt from "./outputTemplate.json?raw";
import systemPrompt1 from "./systemPrompt1.txt?raw";
import systemPrompt2 from "./systemPrompt2.txt?raw";
import { Answer } from "../Survey";

export default async function QueryGPT4(
  apiKey: string,
  answers: Partial<Answer>,
) {
  const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          systemPrompt1 +
          '\n"""' +
          inputPrompt +
          '\n"""\n\n' +
          systemPrompt2 +
          '\n"""' +
          outputPrompt +
          '\n"""',
      },
      {
        role: "user",
        content: `
          """json
          {
            "type": "${answers["Type"]}",
            "Platform": "${answers["Platform"]},
            "Description": "${answers["Description"]}",
            "Experience": "${answers["Experience"]},

          """
        `,
      },
    ],
    model: "gpt-4o",
    response_format: { type: "json_object" },
  });

  const resp = completion.choices[0].message.content || "";
  return resp;
}
