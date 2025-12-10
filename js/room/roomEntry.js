/**
 * roomEntry.js
 * =============
 * ✅ enterRoom / leaveRoom
 * ✅ 綁 listener / 解 listener
 */

import { initPlayerPanel } from './playerPanel.js';
import { initBoardPanel } from './boardPanel.js';
import { initLogPanel } from './logPanel.js';

export function enterRoom(roomId) {
  initPlayerPanel(roomId);
  initBoardPanel(roomId);
  initLogPanel(roomId);
}

export function leaveRoom() {
  // 本地狀態清理
}
