import React, { createContext, useReducer } from 'react';
import appReducer from './AppReducer';

const initialState = {
  plays: [],
  level: {},
};


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addPlay(play) {
    dispatch({
      type: "ADD_PLAY",
      payload: play
    });
  }

  function addLevel(level) {
    dispatch({
      type: "ADD_LEVEL",
      payload: level
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        plays:state.plays,
        level:state.level,
        addPlay,
        addLevel
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};