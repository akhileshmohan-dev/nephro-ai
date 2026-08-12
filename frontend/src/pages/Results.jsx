import Navbar from "../components/Navbar";
import ReactMarkdown from "react-markdown";

function Results() {

  const result = JSON.parse(
    localStorage.getItem("prediction")
  );


  const explanation =
  result.prediction_result.risk_level === "Critical"
    ? "Severely elevated renal biomarkers indicate significant kidney dysfunction."
    : "No major CKD indicators detected.";

   

  if (!result) {
    return (
      <>
        <Navbar />
        <h1>No Prediction Found</h1>
      </>
    );
  }



  const riskLevel =
    result.prediction_result.risk_level;

  const riskStyles = {
    Critical:
      "bg-red-50 border-l-8 border-red-600",

    High:
      "bg-orange-50 border-l-8 border-orange-500",

    Moderate:
      "bg-yellow-50 border-l-8 border-yellow-500",

    Low:
      "bg-green-50 border-l-8 border-green-500"
  };

  const biomarkerLabels = {
  patient_name: "Patient Name",
  age_yrs: "Age",
  blood_pressure_mm_hg: "Blood Pressure",
  specific_gravity: "Specific Gravity",
  albumin: "Albumin",
  sugar: "Sugar",

  blood_glucose_random_mgs_dl: "Random Blood Glucose",
  blood_urea_mgs_dl: "Blood Urea",
  serum_creatinine_mgs_dl: "Serum Creatinine",

  sodium_meq_l: "Sodium",
  potassium_meq_l: "Potassium",

  hemoglobin_gms: "Hemoglobin",

  packed_cell_volume: "Packed Cell Volume",

  white_blood_cells_cells_cmm: "White Blood Cells",

  red_blood_cells_millions_cmm: "Red Blood Cells",

  hypertension_yes: "Hypertension",

  diabetes_mellitus_yes: "Diabetes",

  coronary_artery_disease_yes: "Coronary Artery Disease",

  pus_cell_clumps_present: "Pus Cell Clumps",

  bacteria_present: "Bacteria Present"
  };
  const binaryFields = [
          "hypertension_yes",
          "diabetes_mellitus_yes",
          "coronary_artery_disease_yes",
          "pus_cell_clumps_present",
          "bacteria_present"
        ];
  const hiddenFields = [
  "hypertension"
  ];
  const biomarkerUnits = {
          blood_pressure_mm_hg: "mmHg",
          blood_glucose_random_mgs_dl: "mg/dL",
          blood_urea_mgs_dl: "mg/dL",
          serum_creatinine_mgs_dl: "mg/dL",
          sodium_meq_l: "mEq/L",
          potassium_meq_l: "mEq/L",
          hemoglobin_gms: "g/dL",
          white_blood_cells_cells_cmm: "cells/cmm",
          red_blood_cells_millions_cmm: "million/cmm"
        };


  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto py-16">

        <h1 className="text-5xl font-bold mb-10 text-center">
          CKD Assessment Result
        </h1>

        <div
          className={`
            ${riskStyles[riskLevel]}
            shadow-lg
            rounded-4xl
            p-8
          `}
        >


          <h2 className="text-3xl font-bold flex items-center gap-3">

            {riskLevel === "Critical" && "🚨"}
            {riskLevel === "High" && "⚠️"}
            {riskLevel === "Moderate" && "🟡"}
            {riskLevel === "Low" && "✅"}

            {result.prediction_result.diagnosis}

          </h2>

          <p className="mt-4 text-lg font-semibold">

            Risk Level:
            <span className="ml-2">

              {result.prediction_result.risk_level}

            </span>

          </p>

          <p>
            Confidence:
            {" "}
            {result.prediction_result.confidence}%
          </p>
          {/* <p>
            CKD Probability:
            {" "}
            {result.prediction_result.probabilities?.CKD}%
          </p> */}
          
          <p>
            Override Reason:
            {" "}
            {result.prediction_result.override_reason || "None"}
          </p>

        </div>
        
        <h2 className="text-2xl font-bold mt-10 mb-4">
          Extracted Biomarkers
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {Object.entries(result.extracted_values).filter(([key]) => !hiddenFields.includes(key)).map(([key, value]) => (
            <div
              key={key}
              className="bg-white shadow rounded-xl p-4"
            >
              <p className="font-semibold text-gray-600">
                {biomarkerLabels[key] || key}
              </p>

              <p className="text-xl font-bold text-slate-900">
                {binaryFields.includes(key)
                  ? Number(value) === 1
                    ? "Present"
                    : "Absent"
                  : value}

                {!binaryFields.includes(key) && biomarkerUnits[key] && (
                  <span className="text-sm text-gray-500 ml-1">
                    {biomarkerUnits[key]}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-3xl shadow-sm p-12 border-l-4 px-4 py-8 border-blue-500">
            <div className="ai-explanation-card">
            {/* <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              🤖 AI Generated Clinical Insight
            </div> */}
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                AI Clinical Explanation
            </h2>
            <div className="prose prose-slate max-w-none">
            <ReactMarkdown
                    components={{
                      h2: ({ children }) => (
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 border-b border-slate-200 pb-2">
                          {children}
                        </h2>
                      ),

                      ul: ({ children }) => (
                        <ul className="list-disc ml-6 space-y-2 text-slate-700">
                          {children}
                        </ul>
                      ),

                      p: ({ children }) => (
                        <p className="text-slate-700 leading-relaxed mb-4">
                          {children}
                        </p>
                      )
                    }}
                  >
              {result.ai_explanation}
          </ReactMarkdown>
          </div>
          </div>
          </div>
        {/* <div className="bg-blue-50 p-6 rounded-2xl mt-8">
            <h2 className="font-bold text-xl">
                AI Clinical Explanation
            </h2>

        <p className="mt-2">
                {explanation}
        </p>
        </div> */}

      </div>
    </>
  );
}

export default Results;