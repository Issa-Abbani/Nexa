import type { FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string>("");
  //To be used later when hanlding errors after coding the backend

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);

    //validation + fetching + response (Error handling later, that's why error state variable is commented out)

    //To simulate api fetching until I code the backendd
    setTimeout(() => {
      setIsLoading(false);
      resetFormUI();
    }, 2000);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const resetFormUI = (): void => {
    setEmail("");
    setPassword("");
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:w-full w-3/4 h-2/3 max-w-md space-y-6 rounded-2xl border border-border bg-surface p-8 shadow-lg flex flex-col justify-between"
    >
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-text-primary">
          Welcome back to{" "}
          <span className="text-4xl text-primary font-mono">NEXA</span>
        </h1>

        <p className="text-m text-text-secondary italic">
          Sign in to continue to Nexa.
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
            value={email}
            onChange={handleEmailChange}
            autoComplete="email"
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
            value={password}
            onChange={handlePasswordChange}
            autoComplete="current-password"
            className="w-full rounded-lg border border-border bg-surface-muted px-3 py-2.5 text-text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-lg bg-primary px-4 py-2.5 font-medium text-white flex justify-center transition hover:bg-primary-hover focus:outline-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 disabled:bg-text-muted"
      >
        {isLoading ? (
          <LoaderCircle className="size-5 animate-spin text-primary" />
        ) : (
          "Log In"
        )}
      </button>

      <div className="flex flex-col gap-2">
        <p className="text-center text-sm text-text-secondary">
          Forgot your password?{" "}
          <Link
            to="/reset-password"
            className="font-medium text-primary hover:text-primary-hover"
          >
            Reset it here!
          </Link>
        </p>

        <p className="text-center text-sm text-text-secondary">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-primary hover:text-primary-hover"
          >
            Create one
          </Link>
        </p>
      </div>
    </form>
  );
}
