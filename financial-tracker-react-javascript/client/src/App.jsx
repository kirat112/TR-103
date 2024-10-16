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

          {/* Show a login button when not signed in */}
          <SignedOut>
            <SignInButton mode="modal">
              <button>Sign In</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button>Sign Up</button>
            </SignUpButton>
          </SignedOut>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <FinancialRecordsProvider>
                <Dashboard />
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
