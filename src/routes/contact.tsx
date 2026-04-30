import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const DONATION_URL = import.meta.env.VITE_DONATION_URL ?? "#";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.123!2d-43.3503!3d-21.7631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ1JzQ3LjIiUyA0M8KwMjEnMDEuMSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890";

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Juiz de Fora – MG",
    href: undefined,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@sjpa.org.br",
    href: "mailto:contato@sjpa.org.br",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(32) 0000-0000",
    href: "tel:+553200000000",
  },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // Usa mailto como fallback simples — sem back-end necessário.
  // Troque por EmailJS ou Formspree se quiser envio real via formulário.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato via site — ${form.name}`);
    const body = encodeURIComponent(
      `Nome: ${form.name}\nE-mail: ${form.email}\n\n${form.message}`
    );
    window.open(`mailto:contato@sjpa.org.br?subject=${subject}&body=${body}`);
    setSubmitted(true);
  }

  return (
    <>
      <section className="border-b border-stone-100 px-6 py-14 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-green-700">
          Contato
        </p>
        <h1 className="mb-3 text-3xl font-semibold text-stone-900 md:text-4xl">
          Fale com a SJPA
        </h1>
        <p className="mx-auto max-w-xl text-stone-500">
          Tem dúvidas sobre adoção, voluntariado ou doações? Entre em contato —
          nossa equipe de voluntários responde assim que possível.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

          <div>
            <h2 className="mb-6 text-xl font-medium text-stone-900">
              Envie uma mensagem
            </h2>

            {submitted ? (
              <div className="rounded-2xl border border-green-200 bg-green-50 px-6 py-10 text-center">
                <div className="mx-auto mb-3 inline-flex rounded-full bg-green-100 p-3">
                  <Heart className="h-5 w-5 text-green-700" />
                </div>
                <h3 className="mb-2 font-medium text-stone-900">
                  Mensagem enviada!
                </h3>
                <p className="text-sm text-stone-500">
                  Obrigado pelo contato. Responderemos em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-stone-700"
                  >
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition-colors focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-stone-700"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition-colors focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-stone-700"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Como podemos ajudar?"
                    className="w-full resize-none rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition-colors focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-green-700 py-3 text-sm font-medium text-white transition-all hover:bg-green-800 active:scale-95"
                >
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-xl font-medium text-stone-900">
                Informações
              </h2>
              <ul className="space-y-4">
                {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0 rounded-lg bg-green-50 p-2">
                      <Icon className="h-4 w-4 text-green-700" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-400">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm text-stone-700 transition-colors hover:text-green-700"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-stone-700">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-stone-200">
              <iframe
                src={MAP_EMBED}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da SJPA em Juiz de Fora"
              />
            </div>
          </div>

        </div>
      </section>

      <section className="border-t border-stone-100 bg-stone-50 px-6 py-16 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-green-700">
          Faça a diferença
        </p>
        <h2 className="mb-3 text-2xl font-semibold text-stone-900">
          Além do contato, você pode ajudar
        </h2>
        <p className="mx-auto mb-8 max-w-md text-stone-500">
          Uma doação, por menor que seja, garante alimentação e cuidados para
          os nossos animais todos os dias.
        </p>
        <a
          href={DONATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-green-700 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-green-800 active:scale-95"
        >
          <Heart className="h-4 w-4" />
          Quero fazer uma doação
        </a>
      </section>
    </>
  );
}