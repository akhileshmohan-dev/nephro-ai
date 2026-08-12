from erpnext_client import create_ckd_assessment

sample_result = {
    "extracted_values": {
        "age_yrs": 58,
        "serum_creatinine_mgs_dl": 8.5,
        "blood_urea_mgs_dl": 190,
        "hemoglobin_gms": 7.2
    },
    "prediction_result": {
        "diagnosis": "Critical CKD Risk",
        "risk_level": "Critical",
        "confidence": 95
    }
}

create_ckd_assessment(sample_result)