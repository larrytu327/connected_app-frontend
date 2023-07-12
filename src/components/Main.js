import { Routes, Route } from "react-router-dom"
import Users from "../pages/Users"
import Show from "../pages/Show"
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users/:id" element={<Show />} />
      </Routes>
    </main>
  )
}

export default Main
