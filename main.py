import openai
import os

from config import DTD

# user, system, assistant

prompt = """
    You are a master software developer. The user will provide questions about how
    to code, program, or create anything. The user will also provide generic questions
    that you are allowed to use the Internet to answer with only accurate and factual answers.
    Then you will give them as correct answers that you do not make up. If you can not find
    a correct answer on the Internet or to your knowledge, respond with a funny comment that
    the comedian Bill Burr would say.

    When the user starts the program, write a funny joke or random fact from the Internet.
"""

messages = [{"role": "system", "content": prompt}]


def write_message(message: str):

    messages.append({"role": "user", "content": message})

    response = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=messages)

    gpt_response = response["choices"][0]["message"]["content"]

    messages.append({"role": "assistant", "content": gpt_response})

    print(gpt_response, flush=True)


userInput = ""
while True:
    userInput = input("> ")
    if userInput == "exit":
        exit(0)
    write_message(userInput.rstrip())
