import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth/Auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/clerk-react";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <Link to="/"> Dashboard</Link>

          {/* Display the UserButton only when signed in */}
          <SignedIn>
            <UserButton />
          </SignedIn>

        </div>

        <Routes>
          <Route
            path="/"
            element={
              <FinancialRecordsProvider>
                <SignedIn>
                  <Dashboard />
                </SignedIn>
                <SignedOut>
                  <Auth/>
                </SignedOut>               
              </FinancialRecordsProvider>
            }
          />
          <Route 
            path="/auth" 
            element={<Auth />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
