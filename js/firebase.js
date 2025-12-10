/**
 * firebase.js
 * ===========
 * ✅ Firebase 初始化與 DB 共用方法
 * ✅ 全站只 import 這裡拿 db
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

export let db = null;

export function initFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyB4IBPbuGxztyzd8E3YTitMoTt8L19MSG0",
    authDomain: "company-bingo.firebaseapp.com",
    databaseURL: "https://company-bingo-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "company-bingo",
    storageBucket: "company-bingo.appspot.com",
    messagingSenderId: "844173689886",
    appId: "1:844173689886:web:ac2f1888f542b138861a0f"
  };

  const app = initializeApp(firebaseConfig);
  db = getDatabase(app);
}
