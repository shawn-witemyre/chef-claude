import { HfInference } from "@huggingface/inference";

export const handler = async (event) => {
  try {
    const { ingredients = [] } = JSON.parse(event.body || "{}");
    /* eslint-disable no-undef */

    const hf = new HfInference(process.env.HF_TOKEN);

    const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient. Keep extra ingredients minimal. Respond in markdown.`;

    const r = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredients.join(
            ", "
          )}. Please give me a recipe you'd recommend I make!`,
        },
      ],
      max_tokens: 1024,
    });

    return {
      statusCode: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ content: r.choices[0].message.content }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
