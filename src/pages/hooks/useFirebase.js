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
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // google login

  const logInUsingGoogle = () => {
    setError("");
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //   github login

  const logInUsingGithub = () => {
    setError("");
    setIsLoading(true);
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
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

  const handleUserRegistration = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // handle user name
  const handleUserName = (name) => {
    updateProfile(auth.currentUser, { displayName: { name } })
      .then(() => {})
      .catch(() => {});
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
    logInUsingGoogle,
    logInUsingGithub,
    handleUserRegistration,
    handleUserLoginWithEmail,
    handleUserName,
    logOut,
  };
};
export default useFirebase;
