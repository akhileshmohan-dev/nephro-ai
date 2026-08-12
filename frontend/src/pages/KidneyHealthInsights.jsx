// function KidneyHealthInsights() {
//   return (
//     <div style={{ padding: "40px" }}>
//       <h1>Kidney Health Insights</h1>

//       <p>
//         Learn how kidney biomarkers work, what they mean,
//         and how our AI system analyzes them to assess CKD risk.
//       </p>
//     </div>
//   );
// }

// export default KidneyHealthInsights;
import "./KidneyHealthInsights.css";


function KidneyHealthInsights() {
  return (
    <div className="insights-page">

      <section className="hero">

        <h1>Kidney Health Insights</h1>

        <p>
          Understand your laboratory report,
          learn about kidney biomarkers,
          and discover how AI helps identify
          chronic kidney disease risk.
        </p>

      </section>

      <section className="biomarkers">

  <h2>Meet the Biomarkers</h2>

  <div className="card-grid">

    <div className="card">
      <h3>🧪 Creatinine</h3>

      <p>
        A waste product filtered by healthy kidneys.
        Elevated values may indicate reduced kidney function.
      </p>

      <p>
        <strong>Normal:</strong> Less than 1.2 mg/dL
      </p>
    </div>

    <div className="card">
      <h3>🧪 Blood Urea</h3>

      <p>
        Reflects how effectively kidneys remove waste products.
      </p>

      <p>
        <strong>Normal:</strong> Less than 40 mg/dL
      </p>
    </div>

    <div className="card">
      <h3>🧪 Hemoglobin</h3>

      <p>
        Low values may occur in advanced kidney disease.
      </p>

      <p>
        <strong>Normal:</strong> Above 12 g/dL
      </p>
    </div>

    <div className="card">
      <h3>🧪 Blood Pressure</h3>

      <p>
        Long-term hypertension can damage kidney blood vessels.
      </p>

      <p>
        <strong>Target:</strong> Below 130 mmHg
      </p>
    </div>

  </div>

</section>

<section className="workflow-section">

  <h2>How Our Prediction Engine Works</h2>

  <p>
    Our system does not rely on a single laboratory value.
    Instead, it analyzes multiple biomarkers together to
    identify patterns associated with Chronic Kidney Disease.
  </p>

  <div className="flow-container">

    <div className="flow-box">📄 Upload Report</div>

    <div className="arrow">↓</div>

    <div className="flow-box">🔍 Extract Biomarkers</div>

    <div className="arrow">↓</div>

    <div className="flow-box">⚙️ Feature Engineering</div>

    <div className="arrow">↓</div>

    <div className="flow-box">🧠 Random Forest Model</div>

    <div className="arrow">↓</div>

    <div className="flow-box">📊 CKD Risk Assessment</div>

  </div>

</section>
<section className="risk-factors-section">

  <h2>Factors Commonly Associated with CKD</h2>

  <p>
    Chronic Kidney Disease is influenced by multiple
    clinical and lifestyle factors. Our prediction model
    evaluates several of these indicators when assessing risk.
  </p>

  <div className="card-grid">

    <div className="card">
      <h3>🩺 Hypertension</h3>

      <p>
        Persistent high blood pressure can damage the
        small blood vessels responsible for kidney filtration.
      </p>
    </div>

    <div className="card">
      <h3>🍬 Diabetes</h3>

      <p>
        Elevated blood glucose levels may gradually
        impair the kidney's filtering units.
      </p>
    </div>

    <div className="card">
      <h3>👤 Age</h3>

      <p>
        Kidney function naturally changes with age,
        making routine monitoring increasingly important.
      </p>
    </div>

    <div className="card">
      <h3>🩸 Anemia</h3>

      <p>
        Reduced hemoglobin levels are frequently
        observed in advanced stages of kidney disease.
      </p>
    </div>

  </div>

</section>
<section className="screening-section">

  <h2>When Should You Consider Kidney Screening?</h2>

  <div className="card">

    <ul>
        <li>✓ You have diabetes.</li>
        <li>✓ You have high blood pressure.</li>
        <li>✓ You have a family history of kidney disease.</li>
        <li>✓ You experience persistent swelling.</li>
        <li>✓ You have abnormal kidney function tests.</li>
        <li>✓ You are over 60 years of age.</li>
    </ul>

  </div>

</section>
<section className="protection-section">

  <h2>Protecting Your Kidney Health</h2>

  <div className="card">

    <ul>
      <li>✓ Monitor blood pressure regularly</li>
      <li>✓ Maintain healthy blood sugar levels</li>
      <li>✓ Stay physically active</li>
      <li>✓ Stay adequately hydrated</li>
      <li>✓ Avoid unnecessary painkiller use</li>
      <li>✓ Schedule periodic kidney function tests</li>
    </ul>

  </div>

</section>
    </div>
  );
}




export default KidneyHealthInsights;