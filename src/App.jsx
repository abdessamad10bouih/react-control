import { BrowserRouter, Route, Routes } from "react-router-dom"
import ListLivres from "./components/ListLivres"
import LivresEmprunter from "./components/LivresEmprunter"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListLivres />} />
          <Route path="/livres" element={<LivresEmprunter />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App
