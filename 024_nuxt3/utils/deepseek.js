import OpenAI from "openai";

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: 'sk-3c5d046879cd4d07b46ee4244a0f2038'
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
        { role: "system", content: "预测一下本期双色球开奖号码" },
    ],
    model: "deepseek-chat",
    stream:false,
  });

  console.log(completion.choices[0].message.content);
}

main();