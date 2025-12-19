export async function getChatKey(chatId) {
  const saved = localStorage.getItem("chat-key-" + chatId);

  if (saved) {
    return crypto.subtle.importKey(
      "jwk",
      JSON.parse(saved),
      { name: "AES-GCM" },
      true,
      ["encrypt", "decrypt"]
    );
  }

  const key = await crypto.subtle.generateKey(
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"]
  );

  const exported = await crypto.subtle.exportKey("jwk", key);
  localStorage.setItem("chat-key-" + chatId, JSON.stringify(exported));

  return key;
}
