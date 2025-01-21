import { Routes, Route} from "react-router-dom";

import { HomePage } from "../Pages/HomePage/HomePage";
import { PlakaterPage } from "../Pages/PlakaterPage/PlakaterPage";
import { KontaktOsPage } from "../Pages/KontaktOsPage/KontaktOsPage";
import { OmOsPage } from "../Pages/OmOsPage/OmOsPage";
import { LoginPage } from "../Pages/LoginPage/LoginPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="PlakaterPage" element={ <PlakaterPage />} />
      <Route path="KontaktOsPage" element={ <KontaktOsPage />} />
      <Route path="OmOsPage" element={ <OmOsPage />} />
      <Route path="LoginPage" element={ <LoginPage />} />
    </Routes>
  );
}