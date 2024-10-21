//!**********************NEXT.JS te CONTEXT.API*********************
"use client";

import { createContext, useContext, useState } from "react";

//! Create context
const ReservationContext = createContext();
const initialState = { from: undefined, to: undefined };

//! Create provider
function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

//! Create use context
function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}
export { ReservationProvider, useReservation };
