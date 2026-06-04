def engineer_features(patient_data):

    patient_data["potassium_anomaly"] = (
        1 if patient_data.get(
            "potassium_meq_l", 4
        ) > 5.5 else 0
    )

    patient_data["sodium_anomaly"] = (
        1 if patient_data.get(
            "sodium_meq_l", 140
        ) < 135 else 0
    )

    patient_data["wbc_alert_flag"] = (
        1 if patient_data.get(
            "white_blood_cells_cells_cmm", 8000
        ) > 11000 else 0
    )

    patient_data["creatinine_risk"] = (
        1 if patient_data.get(
            "serum_creatinine_mgs_dl", 1
        ) > 1.3 else 0
    )

    patient_data["glucose_risk"] = (
        1 if patient_data.get(
            "blood_glucose_random_mgs_dl", 100
        ) > 140 else 0
    )



    print(patient_data["creatinine_risk"])
    print(patient_data["glucose_risk"])
    return patient_data