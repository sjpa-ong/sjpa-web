import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

interface Photo {
  src: string;
  alt: string;
}

// Cloudinary helper
// Substitua CLOUD_NAME pelo nome da conta Cloudinary da ONG.
// Cada foto é referenciada pelo seu public_id no Cloudinary.
// A transformação w_1200,f_webp,q_auto é aplicada automaticamente.

const CLOUD_NAME = "sjpa"; // <- trocar pelo nome real

function cloudinaryUrl(publicId: string, width = 1200) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_${width},f_webp,q_auto/${publicId}`;
}

// Lista de fotos — adicione os public_ids das fotos no Cloudinary.
// Exemplo: se você subiu "pets/pet-001.jpg", o public_id é "pets/pet-001"
const ALL_PHOTOS: Photo[] = [
  { src: cloudinaryUrl("pets/pet-001"), alt: "Animal acolhido pela SJPA" },
  { src: cloudinaryUrl("pets/pet-002"), alt: "Animal acolhido pela SJPA" },
  { src: cloudinaryUrl("pets/pet-003"), alt: "Animal acolhido pela SJPA" },
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
                src={cloudinaryUrl(
                  photo.src.split("/").pop()?.replace(".webp", "") ?? "",
                  400
                )}
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