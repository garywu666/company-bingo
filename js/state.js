/**
 * state.js
 * =========
 * ✅ 全站狀態集中
 * ✅ 不再 global 滿天飛
 */

export const state = {
  myUid: localStorage.getItem('bingo_uid'),
  myNickname: localStorage.getItem('bingo_nickname'),

  currentRoomId: null,
  isHost: false,

  players: {},
  publicNumbers: {},
  myBoard: [],
  roomLocked: false,
  turnIndex: 0,
};
