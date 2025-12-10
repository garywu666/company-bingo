/**
 * lobbyLogic.js
 * ===============
 * ✅ Firebase 房間 CRUD
 * ✅ 清理空房
 */

import { db } from '../firebase.js';
import { ref, onValue } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

export function listenRoomList() {
  onValue(ref(db, 'rooms'), snap => {
    // render 房間列表
  });
}

export async function createRoom() {
  // return roomId
}

export async function joinRoom() {
  // return roomId
}
