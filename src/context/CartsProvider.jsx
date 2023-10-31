import React, { createContext } from "react";
import { useCarts } from "../hooks/useCarts";

export const CartsContext = createContext({ children });

export function CartsProvider() {

  return <CartsContext.Provider value={0}>{children}</CartsContext.Provider>;
}
