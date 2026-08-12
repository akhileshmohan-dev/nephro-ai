from extract_report import extract_ckd_values
from pipeline.predict_ckd import predict_ckd
from feature_engineering import engineer_features
from ai_explainer import generate_clinical_explanation



def predict_from_report(pdf_path):

    extracted_values = extract_ckd_values(
        pdf_path
    )

    default_values = {
        "specific_gravity": 1.02,
        "albumin": 0,
        "sugar": 0,
        "packed_cell_volume": 45,
        "white_blood_cells_cells_cmm": 8000,
        "red_blood_cells_millions_cmm": 5,
        "pus_cell_clumps_present": 0,
        "bacteria_present": 0,
        "hypertension_yes": 0,
        "hypertension": 0,
        "diabetes_mellitus_yes": 0,
        "coronary_artery_disease_yes": 0
    }

    patient_data = {
        **default_values,
        **extracted_values
    }

    patient_data = engineer_features(
        patient_data
    )

    result = predict_ckd(patient_data)

    ai_explanation = generate_clinical_explanation(
        patient_data,
        result
    )

    print("\n===== AI EXPLANATION =====")
    print(ai_explanation)

    return {
        "extracted_values": extracted_values,
        "prediction_result": result,
        "ai_explanation": ai_explanation
    }