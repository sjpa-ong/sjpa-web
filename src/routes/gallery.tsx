import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

import cat1 from "../assets/pets/cats/cat1.svg";
import cat2 from "../assets/pets/cats/cat2.svg";
import cat3 from "../assets/pets/cats/cat3.svg";
import cat4 from "../assets/pets/cats/cat4.svg";
import cat5 from "../assets/pets/cats/cat5.svg";
import cat6 from "../assets/pets/cats/cat6.svg";
import cat7 from "../assets/pets/cats/cat7.svg";
import cat8 from "../assets/pets/cats/cat8.svg";
import dog1 from "../assets/pets/dogs/dog1.svg";
import dog2 from "../assets/pets/dogs/dog2.svg";
import dog3 from "../assets/pets/dogs/dog3.svg";
import dog4 from "../assets/pets/dogs/dog4.svg";
import dog5 from "../assets/pets/dogs/dog5.svg";
import dog6 from "../assets/pets/dogs/dog6.svg";
import dog7 from "../assets/pets/dogs/dog7.svg";
import dog8 from "../assets/pets/dogs/dog8.svg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

interface Photo {
  src: string;
  alt: string;
}

// Fotos dos animais acolhidos pela SJPA — intercaladas entre gatos e cães
const ALL_PHOTOS: Photo[] = [
  { src: cat1, alt: "Gatinha acolhida pela SJPA" },
  { src: dog1, alt: "Cachorrinho acolhido pela SJPA" },
  { src: cat2, alt: "Gatinho acolhido pela SJPA" },
  { src: dog2, alt: "Cãozinho acolhido pela SJPA" },
  { src: cat3, alt: "Gatinha acolhida pela SJPA" },
  { src: dog3, alt: "Cachorrinha acolhida pela SJPA" },
  { src: cat4, alt: "Gatinho acolhido pela SJPA" },
  { src: dog4, alt: "Cãozinho acolhido pela SJPA" },
  { src: cat5, alt: "Gatinha acolhida pela SJPA" },
  { src: dog5, alt: "Cachorrinho acolhido pela SJPA" },
  { src: cat6, alt: "Gatinho acolhido pela SJPA" },
  { src: dog6, alt: "Cãozinho acolhido pela SJPA" },
  { src: cat7, alt: "Gatinha acolhida pela SJPA" },
  { src: dog7, alt: "Cachorrinha acolhida pela SJPA" },
  { src: cat8, alt: "Gatinho acolhido pela SJPA" },
  { src: dog8, alt: "Cãozinho acolhido pela SJPA" },
];

const PAGE_SIZE = 24;
const DONATION_URL = import.meta.env.VITE_DONATION_URL ?? "#";

function GalleryPage() {
  const [page, setPage] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const visiblePhotos = useMemo(
    () => ALL_PHOTOS.slice(0, page * PAGE_SIZE),
    [page]
  );

  const hasMore = visiblePhotos.length < ALL_PHOTOS.length;

  const slides = useMemo(
    () =>
      ALL_PHOTOS.map((photo) => ({
        src: photo.src,
        alt: photo.alt,
      })),
    []
  );

  return (
    <>
      <section className="border-b border-stone-100 px-6 py-14 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-green-700">
          Galeria
        </p>
        <h1 className="mb-3 text-3xl font-semibold text-stone-900 md:text-4xl">
          Conheça nossos animais
        </h1>
        <p className="mx-auto max-w-xl text-stone-500">
          Cada foto é uma história de resgate e esperança. São mais de 450
          animais esperando por um lar cheio de amor.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {visiblePhotos.map((photo, index) => (
            <button
              key={photo.src}
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-square overflow-hidden rounded-xl bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700"
              aria-label={`Abrir foto ${index + 1} — ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </button>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="rounded-full border border-stone-300 px-8 py-3 text-sm font-medium text-stone-700 transition-all hover:border-stone-400 hover:bg-stone-50 active:scale-95"
            >
              Ver mais fotos
            </button>
          </div>
        )}

        <p className="mt-6 text-center text-xs text-stone-400">
          Exibindo {visiblePhotos.length} de {ALL_PHOTOS.length} fotos
        </p>
      </section>

      <section className="border-t border-stone-100 bg-stone-50 px-6 py-16 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-green-700">
          Faça a diferença
        </p>
        <h2 className="mb-3 text-2xl font-semibold text-stone-900">
          Esses animais precisam de você
        </h2>
        <p className="mx-auto mb-8 max-w-md text-stone-500">
          Sua doação mantém a SJPA funcionando e garante que cada um deles
          tenha comida, abrigo e cuidado todos os dias.
        </p>
        <a
          href={DONATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-green-700 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-green-800 active:scale-95"
        >
          Quero fazer uma doação
        </a>
      </section>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        plugins={[Counter]}
        counter={{ container: { style: { top: 0, bottom: "unset" } } }}
        on={{
          view: ({ index }) => setLightboxIndex(index),
        }}
      />
    </>
  );
}