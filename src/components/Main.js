import { Routes, Route } from "react-router-dom"
import Users from "../pages/Users"
import Show from "../pages/Show"
import Signin from "../pages/Signin"

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users/:id" element={<Show />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </main>
  )
}

export default Main
