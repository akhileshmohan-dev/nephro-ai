import os
from dotenv import load_dotenv
from ai_explainer import generate_clinical_explanation

load_dotenv()

print(os.getenv("GEMINI_API_KEY"))

print(
    generate_clinical_explanation(
        {"serum_creatinine_mgs_dl": 6.2},
        {
            "diagnosis": "CKD Detected",
            "risk_level": "Critical",
            "probabilities": {
                "CKD": 83
            }
        }
    )
)