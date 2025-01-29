import {
  BasketModalStyled,
  ModalOverlay,
  ModalContent,
  ModalHeaderClose,
} from "./BasketModal.Styled";

import { BasketData } from "../../localstorage/storage";

import {
  removeByQuantityBasket,
  addByQuantityBasket,
  removeFromBasket,
} from "../../localstorage/storage";

import { useState, useEffect } from "react";

export const BasketModal = ({ isOpen, onClose }) => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    setBasket(BasketData);
  }, [isOpen]);

  const handleRemove = (item) => {
    removeByQuantityBasket(item);
    setBasket([...BasketData]);
  };

  const handleAdd = (item) => {
    addByQuantityBasket(item);
    setBasket([...BasketData]);
  };

  const fullRemove = (item) => {
    removeFromBasket(item);
    setBasket([...BasketData]);
  };

  if (!isOpen) return null;

  console.log(BasketData);

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeaderClose>
          <h2>Basket</h2>
          <button onClick={onClose}>Close</button>
        </ModalHeaderClose>
        <BasketModalStyled>
          <ul>
            {basket &&
              basket.map((item) => {
                return (
                  <li key={item.id}>
                    <p>{item.price * item.quantity},00 kr</p>
                    <p>{item.name}</p>
                    <p>{item.quantity}</p>
                    <button onClick={() => handleAdd(item)}>+</button>
                    <button onClick={() => handleRemove(item)}>-</button>
                    <button onClick={() => fullRemove(item)}>x</button>
                  </li>
                );
              })}
          </ul>
        </BasketModalStyled>
      </ModalContent>
    </ModalOverlay>
  );
};
