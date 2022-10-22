import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBK_gi-N-X0zcs67RoLep-4kN1wTvCTNI8",
  authDomain: "foodcourtapp-2c1bb.firebaseapp.com",
  databaseURL: "https://foodcourtapp-2c1bb-default-rtdb.firebaseio.com",
  projectId: "foodcourtapp-2c1bb",
  storageBucket: "foodcourtapp-2c1bb.appspot.com",
  messagingSenderId: "60338078264",
  appId: "1:60338078264:web:849b6e35af0207d5d01ccd",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firebase = getFirestore(app);
const storage = getStorage(app);

export { app, firebase, storage };