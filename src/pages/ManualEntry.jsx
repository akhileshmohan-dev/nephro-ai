import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ManualEntry() {

  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
  patient_name: "",

  age_yrs: "",
  blood_pressure_mm_hg: "",

  serum_creatinine_mgs_dl: "",
  blood_urea_mgs_dl: "",
  hemoglobin_gms: "",
  blood_glucose_random_mgs_dl: "",

  sodium_meq_l: "",
  potassium_meq_l: "",

  specific_gravity: "",
  albumin: "",
  sugar: "",

  packed_cell_volume: "",
  white_blood_cells_cells_cmm: "",
  red_blood_cells_millions_cmm: "",

  hypertension_yes: 0,
  hypertension: 0,
  diabetes_mellitus_yes: 0,
  coronary_artery_disease_yes: 0,
  pus_cell_clumps_present: 0,
  bacteria_present: 0
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const submitForm = async () => {
  console.log("FORM DATA:", formData);

  const cleanedData = {};

  Object.entries(formData).forEach(([key, value]) => {
    if (value !== "") {
      cleanedData[key] = value;
    }
  });

  console.log("CLEANED DATA:", cleanedData);

  try {

    const response = await axios.post(
      `${API_URL}/endpoint`,
      cleanedData
    );

    localStorage.setItem(
      "prediction",
      JSON.stringify(response.data)
    );

    navigate("/results");

  } catch (error) {
    console.error(error);
  }
};
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto py-12 px-6">

        <h1 className="text-4xl font-bold text-center">
          Manual CKD Assessment
        </h1>

        <div className="grid grid-cols-2 gap-6 mt-10">

          <input
            name="patient_name"
            placeholder="Patient Name"
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />

          <input
            name="age_yrs"
            placeholder="Age"
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />

          <input
            name="blood_pressure_mm_hg"
            placeholder="Blood Pressure"
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />

          <input
            name="serum_creatinine_mgs_dl"
            placeholder="Creatinine"
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />

          <input
            name="blood_urea_mgs_dl"
            placeholder="Blood Urea"
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />

          <input
            name="hemoglobin_gms"
            placeholder="Hemoglobin"
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />

          <input
            name="blood_glucose_random_mgs_dl"
            placeholder="Blood Glucose"
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />

          <input
            name="sodium_meq_l"
            placeholder="Sodium"
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />

          <input
            name="potassium_meq_l"
            placeholder="Potassium"
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />


            <input
            name="specific_gravity"
            placeholder="Specific Gravity"
            onChange={handleChange}
            className="border p-3 rounded-xl"
            />

            <input
            name="albumin"
            placeholder="Albumin"
            onChange={handleChange}
            className="border p-3 rounded-xl"
            />

            <input
            name="sugar"
            placeholder="Sugar"
            onChange={handleChange}
            className="border p-3 rounded-xl"
            />

            <input
            name="packed_cell_volume"
            placeholder="Packed Cell Volume"
            onChange={handleChange}
            className="border p-3 rounded-xl"
            />

            <input
            name="white_blood_cells_cells_cmm"
            placeholder="White Blood Cells"
            onChange={handleChange}
            className="border p-3 rounded-xl"
            />

            <input
            name="red_blood_cells_millions_cmm"
            placeholder="Red Blood Cells"
            onChange={handleChange}
            className="border p-3 rounded-xl"
            />






        </div>


        <div className="mt-6">
  <h3 className="font-semibold mb-4">
    Clinical Conditions
  </h3>

  <div className="flex flex-col gap-3">

    <label>
      <input
        type="checkbox"
        onChange={(e) =>
          setFormData({
            ...formData,
            hypertension_yes: e.target.checked ? 1 : 0,
            hypertension: e.target.checked ? 1 : 0
          })
        }
      />
      {" "}Hypertension
    </label>

    <label>
      <input
        type="checkbox"
        onChange={(e) =>
          setFormData({
            ...formData,
            diabetes_mellitus_yes:
              e.target.checked ? 1 : 0
          })
        }
      />
      {" "}Diabetes Mellitus
    </label>

    <label>
      <input
        type="checkbox"
        onChange={(e) =>
          setFormData({
            ...formData,
            coronary_artery_disease_yes:
              e.target.checked ? 1 : 0
          })
        }
      />
      {" "}Coronary Artery Disease
    </label>

    <label>
      <input
        type="checkbox"
        onChange={(e) =>
          setFormData({
            ...formData,
            pus_cell_clumps_present:
              e.target.checked ? 1 : 0
          })
        }
      />
      {" "}Pus Cell Clumps Present
    </label>

    <label>
      <input
        type="checkbox"
        onChange={(e) =>
          setFormData({
            ...formData,
            bacteria_present:
              e.target.checked ? 1 : 0
          })
        }
      />
      {" "}Bacteria Present
    </label>

  </div>
</div>




        <button
        onClick={submitForm}
        className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl"
        >
        Predict CKD Risk
        </button>

      </div>
    </>
  );
}

export default ManualEntry;