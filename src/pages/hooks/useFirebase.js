import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // google login

  const logInUsingGoogle = () => {
    setError("");

    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   github login

  const logInUsingGithub = () => {
    setError("");
    setIsLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // Observe User State

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  // Create New User

  console.log(userName);
  const handleUserRegistration = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: userName,
        });
        setUser({ ...result.user, displayName: userName });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //  login with email password
  const handleUserLoginWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  //   Logout

  const logOut = () => {
    signOut(auth)
      .then((result) => {
        setUser({});
      })
      .catch((error) => {});
  };

  return {
    user,
    error,
    isLoading,
    setUser,
    setError,
    setIsLoading,
    setUserName,
    logInUsingGoogle,
    logInUsingGithub,
    handleUserRegistration,
    handleUserLoginWithEmail,
    logOut,
  };
};
export default useFirebase;
