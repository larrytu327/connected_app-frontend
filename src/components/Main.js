import { Routes, Route } from "react-router-dom"
import Profiles from "../pages/Profiles"
import Show from "../pages/Show"
import Signin from "../pages/Signin"

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Profiles />} />
        <Route path="/profiles/:id" element={<Show />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </main>
  )
}

export default Main
