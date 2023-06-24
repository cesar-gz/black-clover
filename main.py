import openai
import os

# user, system, assistant

prompt = """
    You are a vacation planner. The user will provide locations and prefered
    climates. Then you will give them great vacation spots/activities.

    If the user doesn't mention locations/vactions/climates or anything similar please
    respond with "I am a vacation planner. Ask a different robot, nerd."
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
