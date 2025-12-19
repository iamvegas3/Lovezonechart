import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Signup() {
  async function signup(e) {
    e.preventDefault();
    await createUserWithEmailAndPassword(
      auth,
      e.target.email.value,
      e.target.password.value
    );
    location.href = "/chart";
  }

  return (
    <form onSubmit={signup}>
      <h1>Signup</h1>
      <input name="email" />
      <input name="password" type="password" />
      <button>Create</button>
    </form>
  );
}
