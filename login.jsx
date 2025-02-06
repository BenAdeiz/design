import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LayoutDashboard, LogIn, ChevronDown } from "lucide-react";
import './login.css';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [clerkingFor, setClerkingFor] = useState("");
  const [clinicalLocation, setClinicalLocation] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const handleLogin = () => {
    if (username !== "admin" || password !== "password123") {
      setShowReset(true);
    } else {
      setLoggedIn(true);
    }
  };

  return (
    <div className="login-container">
      {!loggedIn ? (
        <Card className="login-card">
          <h2 className="login-header">
            <LogIn className="mr-2" /> SwiftPractice EMR - Login Page
          </h2>
          <Input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <Button
            variant="outline"
            className="login-button"
            onClick={() => setShowOptions(!showOptions)}
          >
            Additional Options <ChevronDown />
          </Button>
          {showOptions && (
            <div className="mb-4">
              <select
                className="w-full p-2 border rounded-lg mb-2"
                value={clerkingFor}
                onChange={(e) => setClerkingFor(e.target.value)}
              >
                <option value="">Clerking for (Optional)</option>
                <option value="Dr. Smith">Dr. Smith</option>
                <option value="Dr. Johnson">Dr. Johnson</option>
                <option value="Dr. Brown">Dr. Brown</option>
              </select>
              <select
                className="w-full p-2 border rounded-lg"
                value={clinicalLocation}
                onChange={(e) => setClinicalLocation(e.target.value)}
              >
                <option value="">Clinical Location (Required if Activated)</option>
                <option value="Ward A">Ward A</option>
                <option value="Ward B">Ward B</option>
                <option value="ICU">ICU</option>
              </select>
            </div>
          )}
          <Button className="login-button" onClick={handleLogin}>
            Login
          </Button>
          {showReset && (
            <div className="mt-4 text-center">
              <Button variant="link" className="text-blue-500" onClick={() => alert('Forgotten Username/Password Clicked')}>
                Forgotten Username/Password?
              </Button>
              <Button className="w-full mt-2" onClick={() => alert('Reset Password Clicked')}>
                Reset Password
              </Button>
            </div>
          )}
        </Card>
      ) : (
        <Card className="w-full max-w-4xl p-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 flex items-center">
            <LayoutDashboard className="mr-2" /> Dashboard
          </h2>
          <p className="text-gray-600">Welcome, {username}!</p>
        </Card>
      )}
    </div>
  );
}
