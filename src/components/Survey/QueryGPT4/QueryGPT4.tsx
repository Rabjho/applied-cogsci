import OpenAI from "openai";
import inputPrompt from "./input.json?raw";
import outputPrompt from "./output.json?raw";
import systemPrompt1 from "./systemPrompt1.txt?raw";
import systemPrompt2 from "./systemPrompt2.txt?raw";

export default async function QueryGPT4(
  apiKey: string,
  answers: { [key: string]: string },
) {
  const priorities = answers["Priorities"].split(",").map((x) => parseInt(x));

  const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          systemPrompt1 +
          '\n"""' +
          inputPrompt +
          '\n"""' +
          systemPrompt2 +
          '\n"""' +
          outputPrompt,
      },
      {
        role: "user",
        content: `
          """json
          {
            "scope": "${answers["Scope"]}",
            "type": "${answers["Type"]}",
            "Platform": "${answers["Platform"]},
            "Description": "${answers["Description"]}",
            "Experience": "${answers["Experience"]},
            "Priorities": {
                "Ease to develop": ${priorities[0]},
                "Scaling": ${priorities[1]},
                "Cheap": ${priorities[2]},
                "Performance": ${priorities[3]},
                "Security": ${priorities[4]}
              }
          }
          """
        `,
      },
    ],
    model: "gpt-3.5-turbo",
    response_format: { type: "json_object" },
  });

  const resp = completion.choices[0].message.content;
  const jsonReturn = JSON.parse(resp || "{}");
  return jsonReturn;
}
