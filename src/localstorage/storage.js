export let FavData = [];
export let BasketData = [];

export const saveData = () => {
  let mySerializedFavData = JSON.stringify(FavData);
  localStorage.setItem("favoriteItems", mySerializedFavData);

  let mySerializedBasketData = JSON.stringify(BasketData);
  localStorage.setItem("basketItems", mySerializedBasketData);
};

export const readData = () => {
  let myFavString = localStorage.getItem("favoriteItems");
  if (myFavString) {
    FavData = JSON.parse(myFavString);
  } else {
    FavData = [];
  }

  let myBasketString = localStorage.getItem("basketItems");
  if (myBasketString) {
    BasketData = JSON.parse(myBasketString);
  } else {
    BasketData = [];
  }
};

export const toggleFavorite = (item) => {
  const index = FavData.findIndex((fav) => fav.id === item.id);
  if (index === -1) {
    FavData.push(item);
  } else {
    FavData.splice(index, 1);
  }
  saveData();
};

export const addToBasket = (item) => {
  console.log("Item received:", item);
  console.log("Item ID:", item.id);
  const index = BasketData.findIndex((basketItem) => basketItem.id === item.id);
  if (index === -1) {
    item.quantity = 1;
    BasketData.push(item);
  } else {
    BasketData[index].quantity += 1;
  }
  saveData();
};

export const removeFromBasket = (item) => {
  const index = BasketData.findIndex((basketItem) => basketItem.id === item.id);
  BasketData.splice(index, 1);
  saveData();
};

export const removeByQuantityBasket = (item) => {
  const index = BasketData.findIndex((basketItem) => basketItem.id === item.id);
  if (index !== -1) {
    if (BasketData[index].quantity > 1) {
      BasketData[index].quantity -= 1;
    } else {
      BasketData.splice(index, 1);
    }
    saveData();
  }
};

export const addByQuantityBasket = (item) => {
  const index = BasketData.findIndex((basketItem) => basketItem.id === item.id);
  BasketData[index].quantity += 1;
  saveData();
};

export const clearData = () => {
  localStorage.clear();
  FavData = [];
  BasketData = [];
};
