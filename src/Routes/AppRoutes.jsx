import { Routes, Route } from "react-router-dom";

import { HomePage } from "../Pages/HomePage/HomePage";
import { PlakaterPage } from "../Pages/PlakaterPage/PlakaterPage";
import { KontaktOsPage } from "../Pages/KontaktOsPage/KontaktOsPage";
import { OmOsPage } from "../Pages/OmOsPage/OmOsPage";
import { LoginPage } from "../Pages/LoginPage/LoginPage";

import { PlakateList } from "../Components/PlakateList/PlakateList";
import { PlakateDetails } from "../Components/PlakateDetails/PlakateDetails";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="PlakaterPage" element={<PlakaterPage />}>
        <Route path=":category_id" element={<PlakateList />} />
        <Route path=":category_id/:plakate_id" element={<PlakateDetails/>}/>
      </Route>

      <Route path="KontaktOsPage" element={<KontaktOsPage />} />
      <Route path="OmOsPage" element={<OmOsPage />} />
      <Route path="LoginPage" element={<LoginPage />} />
    </Routes>
  );
};
