// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { createContext, useContext, useEffect, useState } from "react";
// import auth from "../Firebase";

// const AuthContext = createContext();

// export default function AuthProvider({ children }) {
//   const [CurrentUser, SetCurrentUser] = useState();
//   const [loading, Setloading] = useState(true);

//   const signup = (Email, Password) => {
//     return createUserWithEmailAndPassword(auth, Email, Password);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       SetCurrentUser(user);
//       Setloading(false);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <AuthContext.Provider value={{ CurrentUser, signup }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
