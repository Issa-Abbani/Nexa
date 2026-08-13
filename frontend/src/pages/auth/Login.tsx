import LoginForm from "../../components/auth/LoginForm";
import authBgLH from "../../assets/backgrounds/authBgLightHorizontal.svg";
import authBgDH from "../../assets/backgrounds/authBgDarkHorizontal.svg";
// import authBgLV from "../../assets/backgrounds/authBgLightVertical.svg";
// import authBgDV from "../../assets/backgrounds/authBgDarkVertical.svg";
import { useTheme } from "../../hooks/useTheme";

export function Login() {
  const { effectiveTheme } = useTheme();

  const horizontalBackground = effectiveTheme === "dark" ? authBgDH : authBgLH;

  // const verticalBackground = effectiveTheme === "dark" ? authBgDV : authBgLV;
  //To be discussed later when implementing mobile UI

  return (
    <main className="flex min-h-screen bg-background">
      {/* Left visual */}
      <section className="w-2/3 relative overflow-hidden">
        <img src={horizontalBackground} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-y-0 right-0 w-1/4 bg-linear-to-r from-transparent to-auth-background" />
      </section>

      {/* Right form */}
      <section className="flex w-1/3 items-center justify-center bg-auth-background">
        <LoginForm />
      </section>
    </main>
  );
}

export default Login;
