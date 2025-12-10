/**
 * app.js
 * =========
 * ✅ App 進入點
 * - 初始化 firebase
 * - 初始化狀態
 * - 掛載大廳
 * - 控制「目前在哪一頁」（大廳 / 房間）
 */

import { initFirebase } from './firebase.js';
import { state } from './state.js';

import { initLobby } from './lobby/lobbyView.js';
import { enterRoom, leaveRoom } from './room/roomEntry.js';

initFirebase();

// 啟動大廳
initLobby({
  onEnterRoom: enterRoom,
});

// 沒有自動 leaveRoom（你之前特別要求）
