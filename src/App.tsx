import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/login-page";
import Navbar from "./components/navbar";
import RegistrationPage from "./components/registration-page";
 
function App() {
  return (
            <BrowserRouter>
            <div className="App">
              <Navbar />
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signin" element={<LoginPage />} />
                <Route path="/signup" element={<RegistrationPage />} />
                <Route path='*' element={<h1>404 Not Found</h1>} />
              </Routes>
            </div>
          </BrowserRouter>
      
  )
}
 
export default App
