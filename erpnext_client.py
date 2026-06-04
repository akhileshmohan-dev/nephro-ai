import requests

from datetime import datetime

ERP_URL = "http://127.0.0.1:8000"

API_KEY = "8103343510aea5e"
API_SECRET = "6d1d8e12170dfcc"


def create_ckd_assessment(result,pdf_path=None):
    
    
    extracted = result["extracted_values"]
    prediction = result["prediction_result"]

    payload = {
    "doctype": "CKD Assessment",
    "patient_name": extracted.get(
        "patient_name",
        "Unknown Patient"
    ),

    "age": extracted.get("age_yrs"),

    "blood_pressure":
        extracted.get("blood_pressure_mm_hg"),

    "specific_gravity":
        extracted.get("specific_gravity"),

    "albumin":
        extracted.get("albumin"),

    "sugar":
        extracted.get("sugar"),

    "blood_glucose_random":
        extracted.get(
            "blood_glucose_random_mgs_dl"
        ),

    "blood_urea":
        extracted.get(
            "blood_urea_mgs_dl"
        ),

    "creatinine":
        extracted.get(
            "serum_creatinine_mgs_dl"
        ),

    "sodium":
        extracted.get(
            "sodium_meq_l"
        ),

    "potassium":
        extracted.get(
            "potassium_meq_l"
        ),

    "hemoglobin":
        extracted.get(
            "hemoglobin_gms"
        ),

    "packed_cell_volume":
        extracted.get(
            "packed_cell_volume"
        ),

    "white_blood_cells":
        extracted.get(
            "white_blood_cells_cells_cmm"
        ),

    "red_blood_cells":
        extracted.get(
            "red_blood_cells_millions_cmm"
        ),

    "diagnosis":
        prediction.get("diagnosis"),

    "risk_level":
        prediction.get("risk_level"),

    "confidence":
        prediction.get("confidence"),

    "ckd_probability":
        prediction["probabilities"]["CKD"],

    "no_ckd_probability":
        prediction["probabilities"]["No_CKD"],

    "override_reason":
        prediction.get("override_reason"),

    "prediction_date":
        datetime.now().strftime(
            "%Y-%m-%d %H:%M:%S"
        ),


    "hypertension":
    extracted.get("hypertension_yes", 0),

    "diabetes_mellitus":
    extracted.get("diabetes_mellitus_yes", 0),

    "coronary_artery_disease":
    extracted.get("coronary_artery_disease_yes", 0),

    "pus_cell_clumps_present":
    extracted.get("pus_cell_clumps_present", 0),

    "bacteria_present":
    extracted.get("bacteria_present", 0)
    }


    response = requests.post(
        f"{ERP_URL}/api/resource/CKD Assessment",
        json=payload,
        headers={
            "Authorization":
            f"token {API_KEY}:{API_SECRET}"
        }
    )
    assessment_name = response.json()["data"]["name"]
    if pdf_path:
        with open(pdf_path, "rb") as file:
            files = {
            "file": file
            }

            data = {
            "doctype": "CKD Assessment",
            "docname": assessment_name,
            "fieldname": "original_report",
            "is_private": 0
            }
    
    
            upload_response = requests.post(
                f"{ERP_URL}/api/method/upload_file",
                files=files,
                data=data,
                headers={
                    "Authorization":
                    f"token {API_KEY}:{API_SECRET}"
                }
            )


        
            print(
                "FILE UPLOAD:",
                upload_response.status_code
            )
            print(
                upload_response.text
            )
            file_url = upload_response.json()[ "message"]["file_url"]
        
            requests.put(
            f"{ERP_URL}/api/resource/CKD Assessment/{assessment_name}",
            json={
                "original_report": file_url
            },
            headers={
                "Authorization":
                f"token {API_KEY}:{API_SECRET}"
            }
            )
    
        
        
    print("STATUS:", response.status_code)
    print("RESPONSE:", response.text)
    print(prediction)
    
    return response.json()