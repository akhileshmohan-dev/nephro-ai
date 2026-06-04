import pdfplumber
import re


def extract_ckd_values(pdf_path):

    extracted_text = ""

    with pdfplumber.open(pdf_path) as pdf:

        for page in pdf.pages:

            text = page.extract_text()

            if text:
                extracted_text += text + "\n"
    patient_match = re.search(
        r"Patient Name\s*[:\-]?\s*(.+)",
        extracted_text,
        re.IGNORECASE
    )

    patterns = {

        # Demographics
        "age_yrs":
        r"Age\s*[:\-]?\s*(\d+)",

        # Blood Pressure
        "blood_pressure_mm_hg":
        r"(?:BP|Blood Pressure)\s*[:\-]?\s*(\d+)",

        # Core Renal Biomarkers
        "serum_creatinine_mgs_dl":
        r"(?:Serum\s*)?Creatinine\s*[:\-]?\s*(\d+\.?\d*)",

        "blood_urea_mgs_dl":
        r"(?:Blood\s*)?Urea\s*[:\-]?\s*(\d+\.?\d*)",

        "hemoglobin_gms":
        r"Hemoglobin\s*[:\-]?\s*(\d+\.?\d*)",

        "blood_glucose_random_mgs_dl":
        r"(?:Blood Glucose Random|Blood Glucose|Glucose|BGR)\s*[:\-]?\s*(\d+\.?\d*)",

        "sodium_meq_l":
        r"Sodium\s*[:\-]?\s*(\d+\.?\d*)",

        "potassium_meq_l":
        r"Potassium\s*[:\-]?\s*(\d+\.?\d*)",

        # Additional Features
        "specific_gravity":
        r"Specific Gravity\s*[:\-]?\s*(\d+\.?\d*)",

        "albumin":
        r"Albumin\s*[:\-]?\s*(\d+\.?\d*)",

        "sugar":
        r"Sugar\s*[:\-]?\s*(\d+\.?\d*)",

        "packed_cell_volume":
        r"(?:Packed Cell Volume|PCV)\s*[:\-]?\s*(\d+\.?\d*)",

        "white_blood_cells_cells_cmm":
        r"(?:White Blood Cells|WBC)\s*[:\-]?\s*(\d+\.?\d*)",

        "red_blood_cells_millions_cmm":
        r"(?:Red Blood Cells|RBC)\s*[:\-]?\s*(\d+\.?\d*)"
    }

    extracted_values = {}

    if patient_match:
        extracted_values["patient_name"] = (
            patient_match.group(1).strip()
    )
    
    for field, pattern in patterns.items():

        match = re.search(
            pattern,
            extracted_text,
            re.IGNORECASE
        )

        if match:

            value = match.group(1)

            try:
                extracted_values[field] = float(value)

            except ValueError:
                pass





        # Hypertension
    match = re.search(
        r"Hypertension\s*:\s*(YES|NO)",
        extracted_text,
        re.IGNORECASE
    )
    
    extracted_values["hypertension_yes"] = (
        1 if match and match.group(1).upper() == "YES"
        else 0
    )
    
    extracted_values["hypertension"] = (
        extracted_values["hypertension_yes"]
    )
    
    # Diabetes
    match = re.search(
        r"Diabetes Mellitus\s*:\s*(YES|NO)",
        extracted_text,
        re.IGNORECASE
    )
    
    extracted_values["diabetes_mellitus_yes"] = (
        1 if match and match.group(1).upper() == "YES"
        else 0
    )
    
    # CAD
    match = re.search(
        r"Coronary Artery Disease\s*:\s*(YES|NO)",
        extracted_text,
        re.IGNORECASE
    )
    
    extracted_values["coronary_artery_disease_yes"] = (
        1 if match and match.group(1).upper() == "YES"
        else 0
    )
    
    # Pus Cell Clumps
    match = re.search(
        r"Pus Cell Clumps\s*:\s*(YES|NO)",
        extracted_text,
        re.IGNORECASE
    )
    
    extracted_values["pus_cell_clumps_present"] = (
        1 if match and match.group(1).upper() == "YES"
        else 0
    )
    
    # Bacteria
    match = re.search(
        r"Bacteria\s*:\s*(YES|NO)",
        extracted_text,
        re.IGNORECASE
    )
    
    extracted_values["bacteria_present"] = (
        1 if match and match.group(1).upper() == "YES"
        else 0
    )
    
    

  
   
    default_values = {
    "age_yrs": 45,
    "blood_pressure_mm_hg": 120,
    "serum_creatinine_mgs_dl": 1.0,
    "blood_urea_mgs_dl": 20.0,
    "hemoglobin_gms": 14.0,
    "blood_glucose_random_mgs_dl": 100.0,
    "sodium_meq_l": 140.0,
    "potassium_meq_l": 4.5,
    "specific_gravity": 1.020,
    "albumin": 0.0,
    "sugar": 0.0,
    "packed_cell_volume": 42.0,
    "white_blood_cells_cells_cmm": 8000.0,
    "red_blood_cells_millions_cmm": 5.0
    }


    # fix for random pdf or pdf with no proper values
    extracted_count = len(extracted_values)

    if extracted_count < 3:
        raise ValueError(
            "No valid CKD biomarkers found in report"
        )

    required_fields = [
    "serum_creatinine_mgs_dl",
    "blood_urea_mgs_dl"
    ]

    missing = [ 
        field
    for field in required_fields
    if field not in extracted_values
    ]

    if missing:
        raise ValueError(
            "Required kidney biomarkers not found"
        )
    
    for field, default in default_values.items():
        if field not in extracted_values:
            extracted_values[field] = default
    print("\nEXTRACTED VALUES:\n")
    print(extracted_values)
    return extracted_values
    
            
    