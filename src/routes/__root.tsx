import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { PawPrint, Heart, Menu, X } from "lucide-react";
import { useState } from "react";

export const Route = createRootRoute({
  component: Root,
});

const NAV_LINKS = [
  { to: "/", label: "Início" },
  { to: "/gallery", label: "Galeria" },
  { to: "/contact", label: "Contato" },
];

const DONATION_URL = import.meta.env.VITE_DONATION_URL ?? "#";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        <Link
          to="/"
          className="flex items-center gap-2 text-stone-900 transition-opacity hover:opacity-75"
        >
          <PawPrint className="h-6 w-6 text-green-700" />
          <span className="text-lg font-semibold tracking-tight">SJPA</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-sm text-stone-500 transition-colors hover:text-stone-900"
              activeProps={{ className: "text-sm font-medium text-stone-900" }}
              activeOptions={{ exact: to === "/" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-700 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-green-800 active:scale-95"
          >
            Doe agora
          </a>

          <button
            className="flex items-center md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen
              ? <X className="h-5 w-5 text-stone-700" />
              : <Menu className="h-5 w-5 text-stone-700" />
            }
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-stone-100 bg-white px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-stone-600 hover:text-stone-900"
                  activeProps={{ className: "text-sm font-medium text-stone-900" }}
                  activeOptions={{ exact: to === "/" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-12">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          <div>
            <div className="mb-3 flex items-center gap-2">
              <PawPrint className="h-5 w-5 text-green-700" />
              <span className="font-semibold text-stone-900">SJPA</span>
            </div>
            <p className="text-sm leading-relaxed text-stone-500">
              Há mais de 36 anos cuidando de animais em situação de abandono
              em Juiz de Fora – MG.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-stone-900">Navegação</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-stone-500 transition-colors hover:text-stone-900"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-stone-900">Ajude a SJPA</h3>
            <p className="mb-4 text-sm leading-relaxed text-stone-500">
              Sua doação garante alimentação, abrigo e cuidados para nossos animais.
            </p>
            <a
              href={DONATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-700 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-green-800"
            >
              <Heart className="h-4 w-4" />
              Fazer uma doação
            </a>
          </div>

        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-stone-200 pt-6 text-xs text-stone-400 md:flex-row">
          <span>© {new Date().getFullYear()} SJPA — Todos os direitos reservados</span>
          <a
            href="https://voluntarios.com.br/entidade/9878"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-stone-600"
          >
            voluntarios.com.br/entidade/9878
          </a>
        </div>

      </div>
    </footer>
  );
}

function Root() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-stone-900">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}