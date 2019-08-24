import React, { createContext, useContext, useReducer, } from 'react';

export const StateContext = createContext();

const initialState = {
  opacity: false,
  showResponsiveMenu: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'showResponsiveMenu':
      return {
        ...state,
        opacity: !state.opacity,
        showResponsiveMenu: !state.showResponsiveMenu,
      };

    default:
      return state;
  }
};

export const StateProvider = ({ children, }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
