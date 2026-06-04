from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from erpnext_client import create_ckd_assessment
from feature_engineering import engineer_features
from pipeline.predict_ckd import predict_ckd
from ai_explainer import generate_clinical_explanation

import os

from datetime import datetime



import shutil

from predict_from_report import (
    predict_from_report
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():

    return {
        "message":
        "CKD AI API Running"
    }

@app.post("/predict-manual")
def predict_manual(data: dict):
    print("\nMANUAL ENTRY DATA")
    print(data)

    for key, value in data.items():

        if key != "patient_name":

            try:
                data[key] = float(value)

            except:
                pass
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
    **data
    }
        
    patient_data = engineer_features(patient_data)

    prediction = predict_ckd(patient_data)


    
    ai_explanation = generate_clinical_explanation(
        patient_data,
        prediction
    )

    result = {
        "extracted_values": data,
        "prediction_result": prediction,
        "ai_explanation": ai_explanation
    }

    create_ckd_assessment(result, None)
    return result

    
@app.post("/predict-report")
async def predict_report(
    file: UploadFile = File(...)
):

    save_path = f"uploads/{file.filename}"

    os.makedirs("uploads",exist_ok=True)
    
    with open(save_path, "wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer
        )

    result = predict_from_report(save_path)
    create_ckd_assessment(result,save_path)


    try:
        create_ckd_assessment(result)
    except Exception as e:
        print("ERP ERROR:", e)

    return result