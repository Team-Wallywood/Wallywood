import { NavbarStyled } from "./Navbar.Styled";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";

import { BasketModal } from "../BasketModal/BasketModal";

import { useState } from "react";

import basketSvg from "../../Assets/Basket/basket-shopping-solid.svg";

Modal.setAppElement("#root");

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <NavbarStyled>
        <ul>
          <li>
            <NavLink to={"/"}>Forside</NavLink>
          </li>
          <li>
            <NavLink to={"/PlakaterPage"}>Plakater</NavLink>
          </li>
          <li>
            <NavLink to={"/OmOsPage"}>Om os</NavLink>
          </li>
          <li>
            <NavLink to={"/KontaktOsPage"}>Kontakt os</NavLink>
          </li>
          <li>
            <NavLink to={"/LoginPage"}>Login</NavLink>
          </li>
          <li>
            <img src={basketSvg} alt="basketSvg" onClick={openModal} />
          </li>
        </ul>
      </NavbarStyled>
      <BasketModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
