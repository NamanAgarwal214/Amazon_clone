import React, {createContext, useContext, useReducer} from "react"

//prepares the datalayer
export const StateContext = createContext();

//wrapping our app and provide data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


//pulling of information
export const useStateValue = () => useContext(StateContext);