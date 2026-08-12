/* eslint-disable react/no-unknown-property */
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";


function Home() {

    const navigate = useNavigate();
  return (
    <>
  <Navbar />
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 min-h-[calc(100vh-80px)] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <span className="inline-flex items-center bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium shadow-sm">
  🩺 AI-Powered Healthcare
</span>

        <h1 className="text-4xl md:text-5xl lg:text-5xl font-sans font-extrabold tracking-tight leading-[1.15] mt-6 text-transparent bg-clip-text bg-gradient-to-r from-slate-950 via-slate-900 to-blue-600 bg-[length:200%_100%] animate-gradient-shift">
            AI-Powered Chronic Kidney Disease Detection
        </h1>

        <div className="mt-8 text-lg text-slate-700 font-semibold leading-relaxed max-w-xl min-h-[80px]">
  <TypeAnimation
    sequence={[
      "AI-powered lab report analysis.",
      1500,
      "Track critical kidney biomarkers with clinical-grade precision.",
      2000,
      "Receive explainable CKD risk predictions in seconds.",
      2000,
      "Transform medical reports into actionable health insights.",
      2000,
    ]}
    speed={60}
    repeat={Infinity}
  />
</div>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button
            onClick={() => navigate("/upload")}
            className="bg-blue-600 font-bold text-white px-8 py-4 rounded-2xl shadow-lg hover:bg-blue-700 transition"
          >
            📤 Upload Medical Report
          </button>

          <button
          onClick={() => navigate("/manual-entry")}
className="border-2 border-slate-900 font-bold text-slate-900 px-8 py-4 rounded-2xl bg-transparent hover:bg-slate-100 hover:text-slate-950 transition-colors duration-200 ease-in-out"          >
          ⌨ Enter Lab Values Manually
          </button>
          
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative">
          
            <div className="h-[500px] w-[500px]">
              <model-viewer
              src="/models/kidney.glb"              
              auto-rotate
              camera-controls
              alt="Astronaut" 
              reveal="auto"
              exposure="1"
              loading="eager"
              style={{
                width: "500px",
                height: "500px",
                backgroundColor: "#ffffff"
              }}
            >

            </model-viewer>
            </div>
        </div>
      </div>
      {/* <div className="flex justify-center">

  <div className="relative">
    <div className="h-[500px] w-[500px]">
  <model-viewer
    // src="/models/kidney.glb"   
      src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"

    auto-rotate
    camera-controls
    style={{ width: "100%", height: "100%" }}
  />
</div>
</div>
</div> */}
   
    {/* <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
    <img
      src="/kidneys.png"
      alt="AI Kidney Health Analysis"
      className="
        relative
        w-full
        max-w-lg
        rounded-3xl
        shadow-2xl
        hover:scale-105
        transition
        duration-500
      "
    />

  </div> */}



      {/* <div className="max-w-lg mx-auto">
<div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-6 shadow-2xl hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition duration-500">
  <div className="bg-white rounded-2xl p-5">

    <div className="flex justify-center">
    <img
      src="/kidney-icon.png"
      alt="Kidney Health"
      className="h-16"
    />
  </div>

    <h2 className="text-2xl font-bold text-center mt-4 text-slate-900">
        Kidney Health Assessment Platform    </h2>

    <div className="mt-8 space-y-4">

      <div className="bg-slate-50 p-4 rounded-xl">
      <div className="bg-white rounded-2xl p-5 shadow-md text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      📄 PDF Report Analysis
      </div>

<div className="bg-white rounded-3xl p-8 shadow-lg text-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl">🤖 AI Clinical Explanation
      </div>

<div className="bg-white rounded-3xl p-8 shadow-lg text-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl">🧠 Machine Learning Assessment

      </div>

<div className="bg-white rounded-3xl p-8 shadow-lg text-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl">        🏥 ERPNext Integration
      </div>

    </div>

  </div>
  </div> */}

    </div>
  </div>
  </div>





  <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

  <div className="text-center mb-16">

    <h2 className="text-4xl font-bold text-slate-900">
      Why NephroAI?
    </h2>

    <p className="mt-4 text-slate-600 text-lg">
      A complete AI-powered kidney health assessment platform.
    </p>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Card 1 */}

    <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">

      <div className="text-4xl mb-4">📄</div>

      <h3 className="text-xl font-bold mb-3">
        Automated Report Analysis      
        </h3>

      <p className="text-slate-600">
Upload laboratory reports and automatically extract kidney health biomarkers without manual data entry.      </p>

    </div>

    {/* Card 2 */}

    <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">

      <div className="text-4xl mb-4">🤖</div>

      <h3 className="text-xl font-bold mb-3">
        Explainable AI Assessment
      </h3>

      <p className="text-slate-600">
Receive CKD risk predictions along with clear AI-generated explanations of important findings      </p>

    </div>

    {/* Card 3 */}

    <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">

      <div className="text-4xl mb-4">📊</div>

      <h3 className="text-xl font-bold mb-3">
Faster Health Insights      </h3>

      <p className="text-slate-600">
Transform complex laboratory values into understandable kidney health assessments within seconds.      </p>

    </div>

  </div>

</section>
  {/* <section className="mt-32"> */}
  <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

  <h2 className="text-4xl font-bold text-center text-slate-900">
    How It Works
  </h2>

  <p className="text-center text-slate-600 mt-4">
    From laboratory report to CKD risk assessment in four steps.
  </p>

  <div className="grid grid-cols-4 gap-8 mt-16">

    <div className="bg-white rounded-2xl p-5 shadow-md text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="text-5xl">📄</div>

      <h3 className="text-xl font-semibold mt-4">
        Upload Report
      </h3>

      <p className="mt-3 text-slate-600">
        Upload laboratory reports in PDF format.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-5 shadow-md text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="text-5xl">🔍</div>

      <h3 className="text-xl font-semibold mt-4">
        Extract Biomarkers
      </h3>

      <p className="mt-3 text-slate-600">
        Important kidney biomarkers are identified automatically.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-5 shadow-md text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl text-center">
      <div className="text-5xl">🧠</div>

      <h3 className="text-xl font-semibold mt-4">
        ML Analysis
      </h3>

      <p className="mt-3 text-slate-600">
        A Random Forest model evaluates risk patterns.
      </p>
    </div>

    <div className="bg-white rounded-2xl p-5 shadow-md text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl text-center">
      <div className="text-5xl">📊</div>

      <h3 className="text-xl font-semibold mt-4">
        Risk Assessment
      </h3>

      <p className="mt-3 text-slate-600">
        Receive CKD risk level and confidence score.
      </p>
    </div>

  </div>

</section>
<footer className="bg-slate-900 text-white mt-30">

  <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

    <div className="grid md:grid-cols-3 gap-12">

      {/* Brand */}

      <div>
        <h2 className="text-3xl font-bold">
          NephroAI
        </h2>

        <p className="mt-4 text-slate-400 leading-relaxed">
          AI-powered chronic kidney disease assessment platform
          designed to transform medical reports into actionable
          clinical insights.
        </p>
      </div>

      {/* Features */}

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Features
        </h3>

        <ul className="space-y-3 text-slate-400">
          <li>PDF Report Analysis</li>
          <li>CKD Risk Prediction</li>
          <li>AI Clinical Explanations</li>
          <li>Manual Biomarker Assessment</li>
        </ul>
      </div>

      {/* Technology */}

      <div>
        <h3 className="text-lg font-semibold mb-4">
        Technology Stack
            </h3>

        <div className="flex flex-wrap gap-3">

          <span className="bg-slate-800 px-3 py-1 rounded-full text-sm shadow-md text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            React
          </span>
          <span className="bg-slate-800 px-3 py-1 rounded-full text-sm shadow-md text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            Python
          </span>

          <span className="bg-slate-800 px-3 py-1 rounded-full text-sm shadow-md text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            FastAPI
          </span>

          <span className="bg-slate-800 px-3 py-1 rounded-full text-sm shadow-md text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            Random Forest
          </span>

          <span className="bg-slate-800 px-3 py-1 rounded-full text-sm shadow-md text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            Gemini AI
          </span>

          <span className="bg-slate-800 px-3 py-1 rounded-full text-sm shadow-md text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            ERPNext
          </span>

          <span className="bg-slate-800 px-3 py-1 rounded-full text-sm shadow-md text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl ">
            Power BI
          </span>

        </div>
      </div>

    </div>

    <div className="border-t border-slate-800 mt-3 pt-8 flex flex-col md:flex-row justify-between items-center">

      <p className="text-slate-500 text-sm">
        © 2026 NephroAI. All rights reserved.
      </p>

      <p className="text-slate-500 text-sm mt-4 md:mt-0">
        AI-Powered Kidney Health Intelligence
      </p>

    </div>

  </div>

</footer>
</>
  );
}

export default Home;