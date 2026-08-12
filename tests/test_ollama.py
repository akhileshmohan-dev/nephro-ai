from ollama import chat

response = chat(
    model="gemma3:4b",
    messages=[
        {
            "role": "user",
            "content": "Explain high creatinine in 100 words."
        }
    ]
)

print(response["message"]["content"])