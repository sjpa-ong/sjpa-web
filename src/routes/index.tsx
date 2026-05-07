import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, PawPrint, Home, Stethoscope, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import heroImg from "../assets/pets/dogs/dog1.svg";
import aboutImg from "../assets/pets/cats/cat1.svg";
import previewCat2 from "../assets/pets/cats/cat2.svg";
import previewDog3 from "../assets/pets/dogs/dog3.svg";
import previewCat4 from "../assets/pets/cats/cat4.svg";
import previewDog5 from "../assets/pets/dogs/dog5.svg";
import previewCat6 from "../assets/pets/cats/cat6.svg";
import previewDog7 from "../assets/pets/dogs/dog7.svg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const DONATION_URL = import.meta.env.VITE_DONATION_URL ?? "#";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

const STATS = [
  { value: 450, suffix: "+", label: "Animais acolhidos" },
  { value: 36, suffix: "+ anos", label: "de história" },
  { value: 100, suffix: "%", label: "Voluntários" },
];

const HOW_IT_WORKS = [
  {
    icon: PawPrint,
    title: "Resgate",
    description:
      "Animais em situação de abandono ou maus-tratos são resgatados pela equipe de voluntários.",
  },
  {
    icon: Stethoscope,
    title: "Triagem",
    description:
      "Cada animal passa por avaliação veterinária, recebe vacinas e tratamento necessário.",
  },
  {
    icon: Home,
    title: "Abrigo",
    description:
      "Os animais vivem no abrigo com alimentação, espaço seguro e muito carinho enquanto aguardam adoção.",
  },
  {
    icon: Heart,
    title: "Adoção",
    description:
      "Após avaliação, os animais são encaminhados a famílias responsáveis que oferecem um lar definitivo.",
  },
];

const PREVIEW_PHOTOS = [
  { src: previewCat2, alt: "Gatinha acolhida pela SJPA" },
  { src: previewDog3, alt: "Cachorrinho acolhido pela SJPA" },
  { src: previewCat4, alt: "Gatinho acolhido pela SJPA" },
  { src: previewDog5, alt: "Cãozinho acolhido pela SJPA" },
  { src: previewCat6, alt: "Gatinha acolhida pela SJPA" },
  { src: previewDog7, alt: "Cachorrinha acolhida pela SJPA" },
];

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-stone-50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-green-700">
                ONG SJPA — Juiz de Fora, MG
              </p>
              <h1 className="mb-5 text-4xl font-semibold leading-tight text-stone-900 md:text-5xl">
                Todo animal merece um lar com amor
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-stone-500">
                Há mais de 36 anos acolhemos cães e gatos em situação de
                abandono. Hoje são mais de 450 animais sob nossos cuidados,
                mantidos apenas com a generosidade de pessoas como você.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={DONATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-700 px-7 py-3 text-sm font-medium text-white transition-all hover:bg-green-800 active:scale-95"
                >
                  <Heart className="h-4 w-4" />
                  Fazer uma doação
                </a>
                <Link
                  to="/gallery"
                  className="inline-block rounded-full border border-stone-300 px-7 py-3 text-sm font-medium text-stone-700 transition-all hover:border-stone-400 hover:bg-white active:scale-95"
                >
                  Ver os animais
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-4/3 overflow-hidden rounded-2xl bg-stone-200">
                <img
                  src={heroImg}
                  alt="Animais acolhidos pela SJPA"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-sm">
                <PawPrint className="h-5 w-5 text-green-700" />
                <div>
                  <p className="text-xs text-stone-500">Animais acolhidos</p>
                  <p className="text-sm font-semibold text-stone-900">450+</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="border-y border-stone-100 px-6 py-12">
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-6 text-center">
          {STATS.map(({ value, suffix, label }) => (
            <div key={label}>
              <p className="text-3xl font-semibold text-green-700 md:text-4xl">
                <AnimatedCounter target={value} suffix={suffix} />
              </p>
              <p className="mt-1 text-sm text-stone-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

            <div className="aspect-square overflow-hidden rounded-2xl bg-stone-100">
              <img
                src={aboutImg}
                alt="Voluntários cuidando dos animais na SJPA"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-green-700">
                Sobre a ONG
              </p>
              <h2 className="mb-5 text-3xl font-semibold text-stone-900">
                Um refúgio nascido da compaixão
              </h2>
              <div className="space-y-4 text-stone-500 leading-relaxed">
                <p>
                  Em 1988, um grupo de voluntários se reuniu com um sonho:
                  criar um lugar seguro e humanizado para animais em situação de
                  abandono. Assim nasceu a SJPA — Sociedade Juizforense de
                  Proteção aos Animais e ao Meio Ambiente.
                </p>
                <p>
                  Hoje, com cerca de 450 animais sob nossos cuidados,
                  enfrentamos o desafio diário de continuar nossa missão com
                  recursos limitados. Nosso trabalho depende exclusivamente da
                  generosidade da comunidade.
                </p>
                <p>
                  Não recebemos apoio governamental ou de grandes patrocinadores.
                  Cada doação, por menor que seja, é essencial para garantir que
                  esses animais tenham o que comer, um local seguro e o carinho
                  que merecem.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-stone-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-green-700">
              Como funciona
            </p>
            <h2 className="text-3xl font-semibold text-stone-900">
              Do resgate ao lar
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="relative rounded-2xl border border-stone-200 bg-white p-6"
              >
                <span className="absolute right-4 top-4 text-xs font-medium text-stone-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="mb-4 inline-flex rounded-xl bg-green-50 p-3">
                  <Icon className="h-5 w-5 text-green-700" />
                </div>
                <h3 className="mb-2 font-medium text-stone-900">{title}</h3>
                <p className="text-sm leading-relaxed text-stone-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-green-700">
                Galeria
              </p>
              <h2 className="text-3xl font-semibold text-stone-900">
                Conheça nossos animais
              </h2>
            </div>
            <Link
              to="/gallery"
              className="hidden text-sm font-medium text-green-700 underline-offset-4 hover:underline md:block"
            >
              Ver todas as fotos →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {PREVIEW_PHOTOS.map((photo, i) => (
              <Link
                key={photo.src}
                to="/gallery"
                className={`group relative overflow-hidden rounded-xl bg-stone-100 ${
                  i === 0 ? "col-span-2 row-span-2 sm:col-span-1 sm:row-span-1" : ""
                }`}
              >
                <div className="aspect-square">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/gallery"
              className="text-sm font-medium text-green-700 underline-offset-4 hover:underline"
            >
              Ver todas as fotos →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA doação ───────────────────────────────────────────── */}
      <section className="bg-green-700 px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <Star className="mx-auto mb-4 h-8 w-8 text-green-300" />
          <h2 className="mb-4 text-3xl font-semibold text-white">
            Sua doação transforma vidas
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-green-100">
            Ajudar a SJPA é mais do que oferecer apoio financeiro — é investir
            em um futuro onde todos os animais tenham a chance de viver com
            dignidade e amor.
          </p>
          <a
            href={DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-medium text-green-800 transition-all hover:bg-green-50 active:scale-95"
          >
            <Heart className="h-4 w-4" />
            Quero fazer uma doação
          </a>
        </div>
      </section>
    </>
  );
}