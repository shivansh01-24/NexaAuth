"use client";

import { useState } from "react";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <main>
      <h1>Login</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          setError("");

          const result = loginSchema.safeParse({
            email,
            password,
          });

          if (!result.success) {
            setError(result.error.issues[0].message);
            return;
          }

          console.log("Submitted data:", result.data);
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      {error && <p>{error}</p>}

      <p>Current email: {email}</p>
    </main>
  );
}