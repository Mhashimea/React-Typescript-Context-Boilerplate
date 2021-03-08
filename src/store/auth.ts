import * as React from "react";
import Store from "./index";
import { useHistory } from "react-router-dom";

export const initailState = {
  // Set the initial status of the application
  authenticated: localStorage.getItem("authenticated"),
  authToken: localStorage.getItem("authToken"),
  currentUser: {},
};

// Function - To return the store Data
export function useAppState() {
  const [{ auth }, SetStore] = Store.useStore();
  return auth;
}

// Auth - login
export function useAuthenticate() {
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [, setStore] = Store.useStore();
  const login = (payload: Object) => {
    setLoading(true);
    // You can write API calls here and store response in the store as you want

    // Set the current username and password to the store called currentUser
    setStore((state: any) => {
      state.auth.currentUser = payload;
    });
    history.push("/home");
    setLoading(false);
  };
  return {
    login,
    loading,
  };
}
