export async function encrypt(text, key) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encoded = new TextEncoder().encode(text);

  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    encoded
  );

  return {
    iv: Array.from(iv),
    data: Array.from(new Uint8Array(encrypted))
  };
}

export async function decrypt(payload, key) {
  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: new Uint8Array(payload.iv) },
    key,
    new Uint8Array(payload.data)
  );

  return new TextDecoder().decode(decrypted);
}
