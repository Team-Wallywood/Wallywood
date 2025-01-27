import { Title } from "../../Components/Title/Title";
import { Outlet } from "react-router-dom";
import { CategoryNav } from "../../Components/CategoryNav/CategoryNav";
import { Favorites } from "../../Components/Favorites/Favorites";

import { PlakateGrid } from "../../Components/PlakateList/PlakateList.Styled";

import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const PlakaterPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    if (location.pathname === "/PlakaterPage") {
      navigate("/plakaterPage/7");
    }
  }, [location, navigate]);

  return (
    <section>
      <div>
        <Title>Plakater</Title>
      </div>
      <PlakateGrid>
        <div>
          <CategoryNav />
          <Favorites />
        </div>
        <div>
          <Outlet />
        </div>
      </PlakateGrid>
    </section>
  );
};
