import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQ4kcUY_tkwzNFHhjK6ZzL9ttqU7ftlkQ",
  authDomain: "e-commerce-614d6.firebaseapp.com",
  projectId: "e-commerce-614d6",
  storageBucket: "e-commerce-614d6.appspot.com",
  messagingSenderId: "338134758949",
  appId: "1:338134758949:web:fa3890a7dfa73bd75d71cc",
  measurementId: "G-B94TFHRZB4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

/**
 * دالة للتحقق من حالة تسجيل الدخول
 * @returns {Promise<boolean>} تعود بقيمة true إذا كان المستخدم مسجلاً للدخول، خلاف ذلك false
 */
export const isUserLoggedIn = async () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(!!user);
    }, reject);
  });
};
export { auth, db };
export default app;
