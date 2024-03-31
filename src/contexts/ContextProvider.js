'use client'
import React, { useContext, createContext, useState } from "react";

const StateContext = createContext();



export const ContextProvider = ({ children }) => {
    const [activeMenu, setactiveMenu] = useState(true);
    const [screenSize, setscreenSize] = useState(undefined);

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setactiveMenu,
                screenSize,
                setscreenSize,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
