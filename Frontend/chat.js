import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from "openai";
import readline from 'readline';

dotenv.config();

// Creating an instance of OpenAIApi with API key from the environment variables
const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_KEY })
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const behaviorOfAssistant = `
    Answer the user's questions with accurate and clear information.
    Do not make up answers.
    If you can not come to a clear answer, tell the user to provide more details
    in areas that you need help understanding.
    `;
/*
let prompt = `
    Execute the following actions:
    1 - Determine what the correct answer is for the following text delimited by <>.
    2 - Format your response as a list of items when appropriate.
    3 - Separate your answer with line breaks when appropriate.

      <
       Type a cheesy joke and a welcome message.
      >
    `;
*/

let prompt = "";

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


const askQuestion = () => {
  rl.question("Enter your question (or type 'exit' to close the program):\n", async (userInput) => {
    if (userInput === "exit") {
      rl.close();
      return;
    }

    prompt = userInput;
    GPT35TurboMessage[1].content = prompt;

    const response = await GPT35Turbo(GPT35TurboMessage);
    console.log(response + "\n");

    askQuestion();
  });
};

askQuestion();

/*
const response = await GPT35Turbo(GPT35TurboMessage);
console.log(response + "\n");
*/
