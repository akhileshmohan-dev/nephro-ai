import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              NephroAI
            </h1>
            <p className="text-sm font-bold text-slate-600">
              CKD RISK ASSESSMENT
            </p>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-10">

            <Link
              to="/"
              className="font-medium hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              to="/upload"
              className="font-medium hover:text-blue-600 transition"
            >
              Upload
            </Link>

            <Link
              to="/results"
              className="font-medium hover:text-blue-600 transition"
            >
              Results
            </Link>

            <Link
              to="/"
              className="bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition"
            >
              Get Started
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}




































// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "20px 40px",
//         borderBottom: "1px solid #ddd",
//         backgroundColor: "white"
//       }}
//     >
//       <div>
//         <h2>NephroAI</h2>
//         <p style={{ margin: 0, fontSize: "12px" }}>
//           CKD Risk Assessment
//         </p>
//       </div>

//       <div
//         style={{
//           display: "flex",
//           gap: "25px"
//         }}
//       >
//         <Link to="/">Home</Link>
//         <Link to="/upload">Upload</Link>
//         <Link to="/results">Results</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;