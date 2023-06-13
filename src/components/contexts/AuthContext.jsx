import { useContext, useState, createContext, useEffect } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = function () {
  return useContext(AuthContext);
};

export const AuthProvider = function ({ children }) {
  const [loading, setLoading] = useState(true);
  const [currUser, setCurrUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrUser(user);
      setLoading(!loading);
    });

    return unsubscribe;
  }, []);
  // sign up authentication
  const signup = async function ({ email, password, username }) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    // update profile
    await updateProfile(auth.currentUser, { displayName: username });

    // update state
    const user = auth.currentUser;
    setCurrUser({ ...user });
  };

  const login = function (email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = function (email, password) {
    const auth = getAuth();
    return signOut(auth, email, password);
  };

  const value = {
    currUser,
    signup,
    login,
    logout,
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
