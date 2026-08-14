import authBgLH from "../../assets/backgrounds/authBgLightHorizontal.svg";
import authBgDH from "../../assets/backgrounds/authBgDarkHorizontal.svg";
import authBgLV from "../../assets/backgrounds/authBgLightVertical.svg";
import authBgDV from "../../assets/backgrounds/authBgDarkVertical.svg";
import { useTheme } from "../../hooks/useTheme";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  const { effectiveTheme } = useTheme();

  const isDark = effectiveTheme === "dark";

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background */}
      <picture className="absolute inset-0">
        <source
          media="(max-width: 1279px)"
          srcSet={isDark ? authBgDV : authBgLV}
        />

        <img
          src={isDark ? authBgDH : authBgLH}
          alt=""
          className="h-full w-full object-cover"
        />
      </picture>

      {/* Form */}
      <section className="relative z-10 flex min-h-screen items-center justify-center xl:justify-end xl:pr-16">
        <Outlet />
      </section>
    </main>
  );
}
