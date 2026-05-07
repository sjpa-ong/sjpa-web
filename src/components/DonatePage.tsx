import { Link } from "@tanstack/react-router";
import { Heart, PawPrint, CreditCard, Landmark, QrCode, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const AMOUNTS = [10, 25, 50, 100];

const METHODS = [
  { id: "pix", label: "PIX", icon: QrCode },
  { id: "card", label: "Cartão de crédito", icon: CreditCard },
  { id: "boleto", label: "Boleto", icon: Landmark },
];

export function DonatePage() {
  const [amount, setAmount] = useState<number | null>(25);
  const [custom, setCustom] = useState("");
  const [method, setMethod] = useState("pix");
  const [submitted, setSubmitted] = useState(false);

  const finalAmount = custom !== "" ? Number(custom) : amount;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center px-6 py-20">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-8 w-8 text-green-700" />
          </div>
          <h1 className="mb-3 text-2xl font-semibold text-stone-900">
            Obrigada pela sua doação!
          </h1>
          <p className="mb-2 text-stone-500">
            Sua contribuição de{" "}
            <span className="font-semibold text-green-700">
              R$ {finalAmount},00
            </span>{" "}
            vai ajudar os animais da SJPA a terem um futuro melhor.
          </p>
          <p className="mb-8 text-sm text-stone-400">
            ⚠️ Esta é uma página demonstrativa. Nenhuma cobrança foi realizada.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() => { setSubmitted(false); setCustom(""); setAmount(25); }}
              className="rounded-full border border-stone-300 px-6 py-2.5 text-sm font-medium text-stone-700 transition-all hover:bg-stone-50"
            >
              Fazer outra doação
            </button>
            <Link
              to="/"
              className="rounded-full bg-green-700 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-green-800"
            >
              Voltar ao início
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="border-b border-stone-100 px-6 py-14 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-green-700">
          Doe agora
        </p>
        <h1 className="mb-3 text-3xl font-semibold text-stone-900 md:text-4xl">
          Cada doação salva uma vida
        </h1>
        <p className="mx-auto max-w-xl text-stone-500">
          A SJPA é mantida 100% por doações. Seu apoio garante alimentação,
          cuidados veterinários e amor para mais de 450 animais.
        </p>
        <p className="mt-3 text-xs font-medium text-amber-600">
          ⚠️ Página demonstrativa — nenhuma cobrança será realizada
        </p>
      </section>

      <section className="mx-auto max-w-xl px-6 py-14">
        <form onSubmit={handleSubmit} className="space-y-8">

          <div>
            <p className="mb-4 text-sm font-medium text-stone-700">
              Escolha um valor (R$)
            </p>
            <div className="grid grid-cols-4 gap-3">
              {AMOUNTS.map((v) => (
                <button
                  type="button"
                  key={v}
                  onClick={() => { setAmount(v); setCustom(""); }}
                  className={`rounded-xl border py-3 text-sm font-medium transition-all ${
                    amount === v && custom === ""
                      ? "border-green-700 bg-green-50 text-green-800"
                      : "border-stone-200 text-stone-600 hover:border-stone-400"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
            <input
              type="number"
              min={1}
              placeholder="Outro valor"
              value={custom}
              onChange={(e) => { setCustom(e.target.value); setAmount(null); }}
              className="mt-3 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700"
            />
          </div>

          <div>
            <p className="mb-4 text-sm font-medium text-stone-700">Frequência</p>
            <div className="grid grid-cols-2 gap-3">
              {["Única", "Mensal"].map((f) => (
                <button
                  type="button"
                  key={f}
                  className="rounded-xl border border-stone-200 py-3 text-sm text-stone-600 hover:border-stone-400"
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-medium text-stone-700">
              Forma de pagamento
            </p>
            <div className="grid grid-cols-3 gap-3">
              {METHODS.map(({ id, label, icon: Icon }) => (
                <button
                  type="button"
                  key={id}
                  onClick={() => setMethod(id)}
                  className={`flex flex-col items-center gap-2 rounded-xl border py-4 text-xs font-medium transition-all ${
                    method === id
                      ? "border-green-700 bg-green-50 text-green-800"
                      : "border-stone-200 text-stone-500 hover:border-stone-400"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-stone-100 bg-stone-50 p-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-stone-500">Valor da doação</span>
              <span className="font-semibold text-stone-900">
                R$ {finalAmount || "—"},00
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-stone-500">Forma de pagamento</span>
              <span className="font-medium text-stone-700 capitalize">
                {method === "pix" ? "PIX" : method === "card" ? "Cartão" : "Boleto"}
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={!finalAmount || finalAmount <= 0}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-700 py-3.5 text-sm font-medium text-white transition-all hover:bg-green-800 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Heart className="h-4 w-4" />
            Confirmar doação de R$ {finalAmount || "—"},00
          </button>

          <p className="text-center text-xs text-stone-400">
            <PawPrint className="mr-1 inline h-3 w-3" />
            100% dos recursos vão diretamente para os animais
          </p>
        </form>
      </section>
    </>
  );
}
