import openai


user_input = input("Enter Question: ")

try:
    completion = openai.Completion.create(
        model="",
        prompt=user_input,
        max_tokens=1024,
        temperature=0.5,
        n=1,
        stop=None
    )
    response = completion.choices[0].text
    print(response)

except openai.error.OpenAIError as e:
    print(f"OpenAI Error: {e}")
    # Handle the error appropriately, log it, or display a user-friendly message
