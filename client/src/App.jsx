import { BrowserRouter, Routes , Route }  from "react-router-dom"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/dashBoard" element={<Dashboard />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}