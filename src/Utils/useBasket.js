import { useState, useEffect } from "react";
import { BasketData, readData, addToBasket } from "../localstorage/storage";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const updateBasket = () => {
    readData();
    console.log("BasketData after readData:", BasketData);
    setBasket([...BasketData]);
  };

  useEffect(() => {
    updateBasket();
  }, []);

  const handleBasket = (posterItem) => {
    addToBasket(posterItem);
    console.log("Toggled basket:", posterItem);
    updateBasket();
  };

  return { basket, handleBasket };
};
