import { Routes, Route} from "react-router-dom";

import { HomePage } from "../Pages/HomePage/HomePage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}