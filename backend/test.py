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