import type { FormEvent } from "react";
import { Link } from "react-router-dom";

export default function SignUpForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-2/3 max-w-md space-y-6 rounded-2xl border border-border bg-surface p-8 shadow-lg flex flex-col justify-between"
    >
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-text-primary">
          Welcome to{" "}
          <span className="text-4xl text-primary font-mono">NEXA</span>
        </h1>

        <p className="text-m text-text-secondary italic">
          Begin your evolution with Nexa by signing up below.
        </p>
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-text-primary"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-lg border border-border bg-surface-muted px-3 py-2.5 text-text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="username"
            className="text-sm font-medium text-text-primary"
          >
            Username
          </label>

          <input
            id="username"
            name="username"
            type="text"
            className="w-full rounded-lg border border-border bg-surface-muted px-3 py-2.5 text-text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-text-primary"
          >
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            className="w-full rounded-lg border border-border bg-surface-muted px-3 py-2.5 text-text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-4 py-2.5 font-medium text-white transition hover:bg-primary-hover focus:outline-none cursor-pointer"
      >
        Sign Up
      </button>

      <p className="text-center text-sm text-text-secondary">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-primary hover:text-primary-hover"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
}
