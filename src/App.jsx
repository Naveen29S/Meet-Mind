import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";

function AppLayout() {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 flex flex-col relative overflow-hidden font-sans">
      {/* Mesh Gradient Background — only on landing */}
      {!isDashboard && (
        <div className="mesh-bg pointer-events-none">
          <div className="mesh-blob-1"></div>
          <div className="mesh-blob-2"></div>
          <div className="mesh-blob-3"></div>
        </div>
      )}

      <Navbar />
      <main className={`flex-grow z-10 w-full ${isDashboard ? "pt-16" : "pt-28"}`}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="meetmind-theme">
      <Router>
        <AppLayout />
      </Router>
    </ThemeProvider>
  );
}

export default App;