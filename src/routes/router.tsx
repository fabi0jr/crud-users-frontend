// filepath: src/routes/router.tsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Users from "../pages/Users";
import CreateUser from "../pages/CreateUser";
import EditUser from "../pages/EditUser";

const Router = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="usuarios" element={<Users />} />
      <Route path="usuarios/cadastro" element={<CreateUser />} />
      <Route path="usuarios/edit/:id" element={<EditUser />} />
    </Route>
  </Routes>
);

export default Router;