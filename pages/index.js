import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Login() {
  async function login(e) {
    e.preventDefault();
    await signInWithEmailAndPassword(
      auth,
      e.target.email.value,
      e.target.password.value
    );
    location.href = "/chart";
  }

  return (
    <form onSubmit={login}>
      <h1>Login</h1>
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button>Login</button>
    </form>
  );
}
