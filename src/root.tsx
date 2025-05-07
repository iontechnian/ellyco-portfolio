import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { ThemeProvider } from "./ThemeContext";
import { useTheme } from "./themeUtils";
import "./theme.css";
import "./index.css";

import IconNighlight from "~icons/material-symbols/nightlight";
import IconSunny from "~icons/material-symbols/sunny";

function Logo() {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-[84px] h-[84px]">
      <p className="text-[58px] font-bold text-center cursor-default select-none">
        <span style={{ color: "var(--blue-color)" }}>\</span>
        <span style={{ color: "var(--pink-color)" }}>\</span>
      </p>
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "fixed",
        bottom: "0.5rem",
        left: "0.5rem",
        padding: "0.5rem",
        border: "none",
        borderRadius: "0.25rem",
        color: "var(--text-color)",
        cursor: "pointer",
      }}
    >
      {theme === "dark" ? (
        <IconNighlight style={{ fontSize: 32 }} />
      ) : (
        <IconSunny style={{ fontSize: 32 }} />
      )}
    </button>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Elly Co</title>
          <Meta />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <Links />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <Logo />
          <ThemeToggle />
          <div
            className="mx-auto"
            style={{
              maxWidth: "min(1440px, calc(100vw - 168px))",
              width: "100%",
            }}
          >
            {children}
          </div>
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </ThemeProvider>
  );
}

export default function Root() {
  return <Outlet />;
}
