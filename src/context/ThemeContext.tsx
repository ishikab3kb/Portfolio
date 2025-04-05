"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";

// Define the theme state type
type ThemeState = {
  isDark: boolean;
};

// Define the possible action types
type ThemeAction =
  | { type: "TOGGLE_THEME" }
  | { type: "SET_DARK" }
  | { type: "SET_LIGHT" };

// Initial state
const initialThemeState: ThemeState = {
  isDark: true,
};

// Create the reducer function
const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        isDark: !state.isDark,
      };
    case "SET_DARK":
      return {
        ...state,
        isDark: true,
      };
    case "SET_LIGHT":
      return {
        ...state,
        isDark: false,
      };
    default:
      return state;
  }
};

// Create the context
const ThemeContext = createContext<{
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
}>({
  state: initialThemeState,
  dispatch: () => null,
});

// Create a provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, initialThemeState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook for using the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
