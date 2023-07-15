import { Routes, Route } from "react-router-dom"
import Profiles from "../pages/Profiles"
import Show from "../pages/Show"
import Login from "../pages/Login"

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Profiles />} />
        <Route path="/profiles/:id" element={<Show />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  )
}

export default Main
