import React, { createContext, useContext, useState } from "react";

const Context = createContext();

function DataProvider({ children }) {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  function addBase(base) {
    setPizza({ ...pizza, base });
  }

  function addTopping(topping) {
    let newToppings;

    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <Context.Provider value={{ pizza, addBase, addTopping }}>
      {children}
    </Context.Provider>
  );
}

const useContextValue = () => useContext(Context);

export { DataProvider, useContextValue };
