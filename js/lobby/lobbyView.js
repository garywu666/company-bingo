/**
 * lobbyView.js
 * =============
 * ✅ 房間列表 UI
 * ✅ 建立 / 加入 房間按鈕
 * ✅ 不碰 Firebase 細節
 */

import { listenRoomList, createRoom, joinRoom } from './lobbyLogic.js';

export function initLobby({ onEnterRoom }) {
  // 綁 UI
  document.getElementById('createRoomBtn').onclick = () => {
    createRoom().then(onEnterRoom);
  };

  document.getElementById('joinRoomBtn').onclick = () => {
    joinRoom().then(onEnterRoom);
  };

  listenRoomList();
}
