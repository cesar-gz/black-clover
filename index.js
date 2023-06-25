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

let prompt = `
    Execute the following actions:
    1 - Take your time to search the internet to answer the following Text accurately.
    2 - Determine what the correct answer is for the following Text delimited by <>.
    3 - Output the answer in a table with rows ranging from 1 to 15. Each
        row containing the name of the song in the respective order.
        Format everything as HTML that can be used in a website.

    Separate your answer with line breaks when appropriate.

    Text:
      <
       What are the most popular songs in America for the year 2019?
      >
    `;

const conversationContext = `
    You're welcome!
    Thank you for giving me time to determine the right answer for you.
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
  });

  return response.data.choices[0].message.content;
};

/*
const askQuestion = () => {
  rl.question("Hello, enter a question ('exit' to quit):\n", async (userInput) => {
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
*/

const response = await GPT35Turbo(GPT35TurboMessage);
console.log(response + "\n");

/*
Notes for myself:

Prompt Engineering Principle 1: Write clear, long, and specific instructions
        Tactic 1: use delimiters: """ ``` --- < > <tag> </tag>
        Tactic 2: ask for structured output: HTML, JSON
        Tactic 3: check conditions are satisfied, check assumptions required to do task
        Tactic 4: few-shot prompting: give successful examples of completing tasks then ask model to perform the task

Prompt Engineering Principle 2: Give the model time to think
        Tactic 1: Specify the steps required to complete a task
        Tactic 2: Instruct model to work out its own solution before rushing to a conclusion
*/
