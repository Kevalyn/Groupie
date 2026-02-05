import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen px-5 py-8">
      <div className="mx-auto flex max-w-md flex-col gap-6">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink/60">Groupie</p>
            <h1 className="text-3xl font-semibold">Złap swoją ekipę do wspólnych zakupów.</h1>
          </div>
          <span className="rounded-full border border-ink/20 px-3 py-1 text-xs">PL / EU</span>
        </header>

        <section className="card p-5">
          <p className="text-sm text-ink/70">
            Groupie to bezpieczne miejsce do koordynacji. Nie zbieramy płatności ani danych do kont
            subskrypcji. Ustalasz wszystko prywatnie w grupie.
          </p>
          <div className="mt-4 flex gap-3">
            <Link
              className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-sand"
              href="/groups"
            >
              Przeglądaj grupy
            </Link>
            <Link
              className="rounded-full border border-ink/20 px-4 py-2 text-sm font-medium"
              href="/login"
            >
              Zaloguj się
            </Link>
          </div>
        </section>

        <section className="grid gap-3">
          {[
            {
              title: "Subskrypcje",
              desc: "Netflix, Spotify, YouTube. Ustal zasady dzielenia i terminy.",
              tag: "SLOTY"
            },
            {
              title: "Zakupy fizyczne",
              desc: "Zbiorowe zakupy i paczki. Podziel koszty i odbiór.",
              tag: "Paczki"
            },
            {
              title: "Zaufanie",
              desc: "Oceny, raporty i blokady dla spokojnych spotkań.",
              tag: "Trust"
            }
          ].map((item) => (
            <div key={item.title} className="card p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <span className="rounded-full bg-mint/30 px-3 py-1 text-xs uppercase tracking-widest">
                  {item.tag}
                </span>
              </div>
              <p className="mt-2 text-sm text-ink/70">{item.desc}</p>
            </div>
          ))}
        </section>

        <footer className="text-xs text-ink/60">
          MVP: płatności i loginy są poza aplikacją. Groupie służy tylko do koordynacji.
        </footer>
      </div>
    </main>
  );
}
