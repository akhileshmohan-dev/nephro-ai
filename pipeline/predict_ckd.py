import joblib
import pandas as pd

model = joblib.load(
    r"ml/ckd_model.pkl"
)

features = [
    "age_yrs",
    "blood_pressure_mm_hg",
    "specific_gravity",
    "albumin",
    "sugar",
    "blood_glucose_random_mgs_dl",
    "blood_urea_mgs_dl",
    "serum_creatinine_mgs_dl",
    "sodium_meq_l",
    "potassium_meq_l",
    "hemoglobin_gms",
    "packed_cell_volume",
    "white_blood_cells_cells_cmm",
    "red_blood_cells_millions_cmm",
    "pus_cell_clumps_present",
    "bacteria_present",
    "hypertension_yes",
    "hypertension",
    "diabetes_mellitus_yes",
    "coronary_artery_disease_yes",
    "potassium_anomaly",
    "sodium_anomaly",
    "wbc_alert_flag",
    "creatinine_risk",
    "glucose_risk"
]


def predict_ckd(patient_data):
    df = pd.DataFrame([patient_data])
    df = df[features]



    print(patient_data)
    prediction = model.predict(df)[0]
    probability = model.predict_proba(df)[0]

    confidence = float(round(max(probability) * 100, 2))
    override_reason = None

    ckd_prob = probability[1] * 100

    if ckd_prob >= 70:
        diagnosis = "CKD Detected"
        risk_level = "High"
    elif ckd_prob >= 40:
        diagnosis = "Moderate CKD Risk"
        risk_level = "Medium"
    else:
        diagnosis = "No CKD Detected"
        risk_level = "Low"
    # Critical CKD override
    if (
        patient_data["serum_creatinine_mgs_dl"] >= 8
        or patient_data["blood_urea_mgs_dl"] >= 180
        or patient_data["hemoglobin_gms"] <= 7.5
        or patient_data["potassium_meq_l"] >= 5.7
    ):
        diagnosis = "Critical CKD Risk"
        risk_level = "Critical"
        override_reason = "Severe renal biomarkers detected"
    
    # High CKD override
    elif (
        patient_data["serum_creatinine_mgs_dl"] >= 2.0
        or patient_data["blood_urea_mgs_dl"] >= 60
        or patient_data["hemoglobin_gms"] <= 10
    ):
        diagnosis = "High CKD Risk"
        risk_level = "High"
        override_reason = "Abnormal renal biomarkers detected"


    moderate_score = 0

    if patient_data["serum_creatinine_mgs_dl"] >= 1.3:
        moderate_score += 1

    if patient_data["blood_urea_mgs_dl"] >= 40:
        moderate_score += 1

    if patient_data["blood_pressure_mm_hg"] >= 130:
        moderate_score += 1
    
    if patient_data["albumin"] >= 1:
        moderate_score += 1
    
    if patient_data["hypertension_yes"] == 1:
        moderate_score += 1  
    if (
    risk_level == "Low"
    and moderate_score >= 3
    ):
        diagnosis = "Moderate CKD Risk"
        risk_level = "Medium"
        override_reason = (
            "Multiple mild renal abnormalities detected"
        )
    #     # Moderate
    # elif (
    #     patient_data["serum_creatinine_mgs_dl"] >= 1.3
    #     or patient_data["blood_urea_mgs_dl"] >= 25
    #     or patient_data["hemoglobin_gms"] <= 12
    #     or patient_data["blood_pressure_mm_hg"] >= 130
    #     or patient_data["blood_glucose_random_mgs_dl"] >= 140
    # ):
    #     diagnosis = "Moderate CKD Risk"
    #     risk_level = "Medium"
    #     override_reason = "Early renal abnormalities detected"
    # # Normal ML prediction
    # else:
    
    #     if ckd_prob >= 70:
    #         diagnosis = "CKD Detected"
    #         risk_level = "High"
    
    #     elif ckd_prob >= 40:
    #         diagnosis = "Moderate CKD Risk"
    #         risk_level = "Medium"
    
    #     else:
    #         diagnosis = "No CKD Detected"
    #         risk_level = "Low"
    return {
        "diagnosis": diagnosis,
        "risk_level": risk_level,
        "confidence": confidence,
        "probabilities": {
            "No_CKD": float(round(probability[0] * 100, 2)),
            "CKD": float(round(probability[1] * 100, 2)),
        },
        "override_reason": override_reason,
    }
