import authBgLH from "../../assets/backgrounds/authBgLightHorizontal.svg";
import authBgDH from "../../assets/backgrounds/authBgDarkHorizontal.svg";
import authBgLV from "../../assets/backgrounds/authBgLightVertical.svg";
import authBgDV from "../../assets/backgrounds/authBgDarkVertical.svg";
import Logo from "../../assets/Logos/nexaLogo.svg";
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

      <div
        className="
    absolute left-4 top-4
    flex items-center gap-2

    landscape:max-md:left-6
    landscape:max-md:top-4

    md:left-8
    md:top-8
    md:gap-3

    lg:left-10
    lg:top-10
    lg:gap-4

    xl:left-12
    xl:top-12
    xl:gap-0
  "
      >
        <img
          src={Logo}
          alt="Nexa"
          className="
      w-12

      landscape:max-md:w-14

      md:w-24
      lg:w-32
      xl:w-2/3
    "
        />

        <h2
          className="
      font-nexa text-3xl text-primary

      landscape:max-md:text-4xl

      md:text-6xl
      lg:text-8xl
      xl:text-1/3
    "
        >
          NEXA
        </h2>
      </div>

      {/* Form */}
      <section className="relative z-10 flex min-h-screen items-center justify-center xl:justify-end xl:pr-16">
        <Outlet />
      </section>
    </main>
  );
}
