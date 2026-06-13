export const ChatLabel = {
  personal: "Личный чат",
  group: "Группа",
  channel: "Канал",
};

const host = typeof window !== "undefined" ? window.location.hostname : "localhost";

export const serverHost = `http://${host}:8080/api`;
export const websocketHost = `ws://${host}:8083/api`;
