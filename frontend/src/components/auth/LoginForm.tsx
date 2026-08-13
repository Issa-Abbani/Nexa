export default function LoginForm() {
  return (
    <form className="w-full h-2/3 max-w-md space-y-6 rounded-2xl border border-border bg-surface p-8 shadow-lg flex flex-col justify-between">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight text-text-primary">
          Welcome back
        </h1>

        <p className="text-sm text-text-secondary">
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
            autoComplete="current-password"
            className="w-full rounded-lg border border-border bg-surface-muted px-3 py-2.5 text-text-primary outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-4 py-2.5 font-medium text-white transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Sign in
      </button>

      <p className="text-center text-sm text-text-secondary">
        Don't have an account?{" "}
        <a
          href="/register"
          className="font-medium text-primary hover:text-primary-hover"
        >
          Create one
        </a>
      </p>
    </form>
  );
}