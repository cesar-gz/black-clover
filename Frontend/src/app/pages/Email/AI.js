import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_KEY })
);

const behaviorOfAssistant = `
    The user will give you an input message that he would like revised as a professional email
    that the user can send to a boss.
    Your role is rewrite the given input message, and output
    a formatted email the user can copy and paste.
    Whenever it is appropriate, make the email formal, polite, simple, or genuine.
    `;

let prompt = "I would like to refer my friend Steve as a new intern";

const conversationContext = `
    You're welcome!
    How else can I assist you?
    `;

const GPT35TurboMessage = [
  {
    role: "system",
    content: behaviorOfAssistant,
  },
  {
    role: "user",
    content: prompt,
  },
  {
    role: "assistant",
    content: conversationContext,
  }
];

let GPT35Turbo = async (message) => {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: message,
    temperature: 0,
  });

  return response.data.choices[0].message.content;
};


const askQuestion =  async (prompt) => {

    GPT35TurboMessage[1].content = prompt;

    const response = await GPT35Turbo(GPT35TurboMessage);
    console.log(response + "\n");

    return response;
};

module.exports = askQuestion;

/* askQuestion(prompt); */
