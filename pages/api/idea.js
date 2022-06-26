
const OpenAI = require('openai-api');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async function handler(req, res) {

  const topic = req.query?.topic ? req.query.topic : 'anything'

  let prompt = `Generate a software or app idea about ${topic}`
  const gptResponse = await openai.complete({
    "engine": 'text-davinci-002',
    "prompt": prompt,
    "maxTokens": 35,
    "temperature": 1,
    "top_p": 1,
    "frequency_penalty": 1,
    "presence_penalty": 1,
    "stop": ["."]
  });
  res.status(200).json({text: `${gptResponse.data.choices[0].text}`})
}