"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Group = {
  id: string;
  title: string;
  description: string;
  category: "SUBSCRIPTION" | "PHYSICAL_GOODS";
  city: string;
  area?: string | null;
  deadlineAt: string;
  status: "OPEN" | "FULL" | "COMPLETED";
  memberCount: number;
  maxMembers: number;
};

export default function GroupsPage() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "SUBSCRIPTION",
    city: "",
    area: "",
    deadlineAt: "",
    maxMembers: 5
  });
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/groups")
      .then((res) => res.json())
      .then((data) => setGroups(data.groups ?? []));
  }, []);

  async function createGroup() {
    setMessage(null);
    const res = await fetch("/api/groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-csrf-token": getCsrfToken()
      },
      body: JSON.stringify({
        ...form,
        area: form.area || undefined,
        deadlineAt: new Date(form.deadlineAt).toISOString(),
        maxMembers: Number(form.maxMembers)
      })
    });

    const data = await res.json();
    if (!res.ok) {
      setMessage(data.error ?? "Nie udało się utworzyć grupy.");
      return;
    }

    setGroups((prev) => [data.group, ...prev]);
    setForm({
      title: "",
      description: "",
      category: "SUBSCRIPTION",
      city: "",
      area: "",
      deadlineAt: "",
      maxMembers: 5
    });
  }

  return (
    <main className="min-h-screen px-5 py-8">
      <div className="mx-auto flex max-w-md flex-col gap-6">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink/60">Groupie</p>
            <h1 className="text-2xl font-semibold">Grupy dołączyć dziś</h1>
          </div>
          <Link className="text-sm text-ink/70" href="/">
            Home
          </Link>
        </header>

        <section className="card p-4">
          <p className="text-sm text-ink/70">
            Skupiamy się na koordynacji. Wymiana pieniędzy i dostępów do kont odbywa się poza
            aplikacją.
          </p>
        </section>

        <section className="card p-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em]">Nowa grupa</h2>
          <div className="mt-3 grid gap-2 text-sm">
            <input
              className="rounded-xl2 border border-ink/10 bg-white px-3 py-2"
              placeholder="Tytuł"
              value={form.title}
              onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
            />
            <textarea
              className="rounded-xl2 border border-ink/10 bg-white px-3 py-2"
              placeholder="Opis"
              rows={3}
              value={form.description}
              onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
            />
            <div className="flex gap-2">
              <select
                className="flex-1 rounded-xl2 border border-ink/10 bg-white px-3 py-2"
                value={form.category}
                onChange={(event) => setForm((prev) => ({ ...prev, category: event.target.value }))}
              >
                <option value="SUBSCRIPTION">Subskrypcja</option>
                <option value="PHYSICAL_GOODS">Zakup fizyczny</option>
              </select>
              <input
                className="w-24 rounded-xl2 border border-ink/10 bg-white px-3 py-2"
                type="number"
                min={2}
                max={20}
                value={form.maxMembers}
                onChange={(event) => setForm((prev) => ({ ...prev, maxMembers: Number(event.target.value) }))}
              />
            </div>
            <input
              className="rounded-xl2 border border-ink/10 bg-white px-3 py-2"
              placeholder="Miasto"
              value={form.city}
              onChange={(event) => setForm((prev) => ({ ...prev, city: event.target.value }))}
            />
            <input
              className="rounded-xl2 border border-ink/10 bg-white px-3 py-2"
              placeholder="Dzielnica (opcjonalnie)"
              value={form.area}
              onChange={(event) => setForm((prev) => ({ ...prev, area: event.target.value }))}
            />
            <input
              className="rounded-xl2 border border-ink/10 bg-white px-3 py-2"
              type="datetime-local"
              value={form.deadlineAt}
              onChange={(event) => setForm((prev) => ({ ...prev, deadlineAt: event.target.value }))}
            />
            <button
              className="rounded-full bg-ink px-4 py-2 text-xs font-medium text-sand"
              onClick={createGroup}
            >
              Utwórz grupę
            </button>
            {message ? <p className="text-xs text-coral">{message}</p> : null}
          </div>
        </section>

        <section className="grid gap-3">
          {groups.length === 0 ? (
            <div className="card p-4 text-sm text-ink/70">Brak grup. Utwórz pierwszą!</div>
          ) : (
            groups.map((group) => (
              <Link key={group.id} href={`/groups/${group.id}`} className="card p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">{group.title}</h2>
                  <span className="rounded-full bg-mint/30 px-3 py-1 text-xs uppercase">
                    {group.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink/70">{group.description}</p>
                <div className="mt-3 flex items-center justify-between text-xs text-ink/60">
                  <span>
                    {group.city}
                    {group.area ? ` · ${group.area}` : ""}
                  </span>
                  <span>
                    {group.memberCount}/{group.maxMembers} osób
                  </span>
                </div>
              </Link>
            ))
          )}
        </section>
      </div>
    </main>
  );
}

function getCsrfToken() {
  if (typeof document === "undefined") return "";
  const meta = document.querySelector("meta[name='csrf-token']") as HTMLMetaElement | null;
  return meta?.content ?? "";
}
