import { useRouter } from "next/router";
import { useState } from "react";
import { getChatKey } from "../../lib/chatKey";
import { encrypt } from "../../lib/crypto";

export default function Chat() {
  const { id } = useRouter().query;
  const [msg, setMsg] = useState("");

  async function send() {
    const key = await getChatKey(id);
    const encrypted = await encrypt(msg, key);
    console.log("STORE THIS IN DB:", encrypted);
    alert("Encrypted & sent");
    setMsg("");
  }

  return (
    <div>
      <h2>🔒 Private Chat</h2>
      <input value={msg} onChange={e => setMsg(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}
