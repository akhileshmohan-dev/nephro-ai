import os
from google import genai
from dotenv import load_dotenv

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def generate_clinical_explanation(
    patient_data,
    prediction
):
    prompt = f"""
    You are an AI clinical explanation assistant for a Chronic Kidney Disease screening system.

Patient Biomarkers:
{patient_data}

Prediction Results:
Diagnosis: {prediction["diagnosis"]}
Risk Level: {prediction["risk_level"]}
CKD Probability: {prediction["probabilities"]["CKD"]}%

Format EXACTLY like this:

## Clinical Summary
Short paragraph.

## Key Findings
- Finding 1
- Finding 2
- Finding 3

## Interpretation
Short paragraph.

## Recommendations
- Recommendation 1
- Recommendation 2
- Recommendation 3


When mentioning findings, include the actual biomarker values.

Example:
- Serum Creatinine: 6.2 mg/dL (elevated)
- Blood Urea: 160 mg/dL (elevated)
- Blood Pressure: 182 mmHg (elevated)


Rules:
- Use simple language.
- Do not diagnose diseases.
- Do not prescribe medications.
- Do not recommend insulin or dialysis.
- Keep response under 150 words.

Do not use phrases such as:
- strongly suggest
- likely have
- indicates disease

Instead say:
- may be associated with
- warrants further evaluation
- requires clinical assessment
    """

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        return response.text

    except Exception as e:
        print("Gemini Error:", e)

        return f"""
## Clinical Summary
AI-generated explanation is temporarily unavailable.

## Key Findings
- Risk Level: {prediction["risk_level"]}
- CKD Probability: {prediction["probabilities"]["CKD"]}%
- Further clinical assessment may be warranted.

## Interpretation
The machine learning prediction was completed successfully, but the AI explanation service is currently unavailable.

## Recommendations
- Review laboratory values manually.
- Consult a healthcare professional for interpretation.
- Retry later for an AI-generated explanation.
"""


        
# def generate_clinical_explanation(
#     patient_data,
#     prediction
# ):

#     prompt = f"""
# You are an AI clinical explanation assistant for a Chronic Kidney Disease screening system.

# Patient Biomarkers:
# {patient_data}

# Prediction Results:
# Diagnosis: {prediction["diagnosis"]}
# Risk Level: {prediction["risk_level"]}
# CKD Probability: {prediction["probabilities"]["CKD"]}%

# Format EXACTLY like this:

# ## Clinical Summary
# Short paragraph.

# ## Key Findings
# - Finding 1
# - Finding 2
# - Finding 3

# ## Interpretation
# Short paragraph.

# ## Recommendations
# - Recommendation 1
# - Recommendation 2
# - Recommendation 3


# When mentioning findings, include the actual biomarker values.

# Example:
# - Serum Creatinine: 6.2 mg/dL (elevated)
# - Blood Urea: 160 mg/dL (elevated)
# - Blood Pressure: 182 mmHg (elevated)


# Rules:
# - Use simple language.
# - Do not diagnose diseases.
# - Do not prescribe medications.
# - Do not recommend insulin or dialysis.
# - Keep response under 150 words.

# Do not use phrases such as:
# - strongly suggest
# - likely have
# - indicates disease

# Instead say:
# - may be associated with
# - warrants further evaluation
# - requires clinical assessment

# """

#     response = client.models.generate_content(
#         model="gemini-2.5-flash",
#         contents=prompt
#     )

#     return response.text







# def generate_clinical_explanation(
#     patient_data,
#     prediction
# ):
#     prompt = f"""
# You are an AI clinical explanation assistant.

# Patient Biomarkers:
# {patient_data}

# Prediction Results:
# {prediction}

# Format your response EXACTLY like this:

# ## Clinical Summary
# 1-2 sentences

# ## Key Findings
# • Finding 1
# • Finding 2
# • Finding 3

# ## Interpretation
# 1-2 sentences

# ## Recommendations
# • Recommendation 1
# • Recommendation 2
# • Recommendation 3

# IMPORTANT:
# - Use markdown headings (##)
# - Markdown headings must be bold
# - Put each bullet on a new line
# - Do NOT write all findings in one sentence
# - Use bullet points (•)
# - Keep concise

# DO NOT:
# - prescribe medications
# - recommend insulin
# - recommend dialysis
# - provide treatment plans

# Only provide:
# - monitoring advice
# - follow-up testing suggestions
# - healthcare consultation recommendations

# """
#     response = chat(
#         model="gemma3:4b",
#         messages=[
#             {
#                 "role": "user",
#                 "content": prompt
#             }
#         ]
#     )

#     return response["message"]["content"]