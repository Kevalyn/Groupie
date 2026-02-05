"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { io, Socket } from "socket.io-client";

type Group = {
  id: string;
  title: string;
  description: string;
  category: "SUBSCRIPTION" | "PHYSICAL_GOODS";
  city: string;
  area?: string | null;
  deadlineAt: string;
  status: "OPEN" | "FULL" | "COMPLETED";
  maxMembers: number;
  memberCount: number;
  meetup?: {
    time: string;
    place: string;
    notes?: string | null;
  } | null;
};

type ChatMessage = {
  id: string;
  body: string;
  createdAt: string;
  user: {
    id: string;
    displayName: string;
    avatarUrl?: string | null;
  };
};

export default function GroupDetailPage({ params }: { params: { id: string } }) {
  const [group, setGroup] = useState<Group | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [body, setBody] = useState("");
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [isMember, setIsMember] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const socket: Socket | null = useMemo(() => {
    if (typeof window === "undefined") return null;
    return io({ path: "/socket.io" });
  }, []);

  useEffect(() => {
    fetch(`/api/groups/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setGroup(data.group ?? null);
        setMessages(data.messages ?? []);
        setCurrentUserId(data.currentUserId ?? null);
        setIsMember(Boolean(data.isMember));
      });
  }, [params.id]);

  useEffect(() => {
    if (!socket) return;
    socket.emit("join-group", params.id);
    socket.on("chat-message", (message: ChatMessage) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket, params.id]);

  async function sendMessage() {
    if (!group) return;
    if (!body.trim()) return;
    const payload = { groupId: group.id, userId: currentUserId, body };

    if (socket && currentUserId) {
      socket.emit("chat-message", payload);
      setBody("");
      return;
    }

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-csrf-token": getCsrfToken()
      },
      body: JSON.stringify({ groupId: group.id, body })
    });

    if (res.ok) {
      const data = await res.json();
      if (data.message) {
        setMessages((prev) => [...prev, data.message]);
      }
      setBody("");
    }
  }

  async function joinGroup() {
    setStatusMessage(null);
    const res = await fetch(`/api/groups/${params.id}/join`, {
      method: "POST",
      headers: {
        "x-csrf-token": getCsrfToken()
      }
    });

    const data = await res.json();
    if (!res.ok) {
      setStatusMessage(data.error ?? "Nie udało się dołączyć.");
      return;
    }

    setIsMember(true);
  }

  async function leaveGroup() {
    setStatusMessage(null);
    const res = await fetch(`/api/groups/${params.id}/leave`, {
      method: "POST",
      headers: {
        "x-csrf-token": getCsrfToken()
      }
    });

    const data = await res.json();
    if (!res.ok) {
      setStatusMessage(data.error ?? "Nie udało się opuścić.");
      return;
    }

    setIsMember(false);
  }

  async function boostGroup() {
    setStatusMessage(null);
    const res = await fetch(`/api/groups/${params.id}/boost`, {
      method: "POST",
      headers: {
        "x-csrf-token": getCsrfToken()
      }
    });

    const data = await res.json();
    if (!res.ok) {
      setStatusMessage(data.error ?? "Nie udało się włączyć boostu.");
      return;
    }

    setStatusMessage(\"Boost aktywny: 1 PLN (placeholder)\");
  }

  return (
    <main className="min-h-screen px-5 py-8">
      <div className="mx-auto flex max-w-md flex-col gap-6">
        <header className="flex items-center justify-between">
          <Link className="text-sm text-ink/70" href="/groups">
            ← Grupy
          </Link>
          <span className="rounded-full bg-mint/30 px-3 py-1 text-xs uppercase">
            {group?.status ?? "..."}
          </span>
        </header>

        {group ? (
          <>
            <section className="card p-5">
              <h1 className="text-2xl font-semibold">{group.title}</h1>
              <p className="mt-2 text-sm text-ink/70">{group.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {isMember ? (
                  <button
                    className="rounded-full border border-ink/20 px-4 py-2 text-xs font-medium"
                    onClick={leaveGroup}
                  >
                    Opuść grupę
                  </button>
                ) : (
                  <button
                    className="rounded-full bg-ink px-4 py-2 text-xs font-medium text-sand"
                    onClick={joinGroup}
                  >
                    Dołącz
                  </button>
                )}
                <button
                  className="rounded-full border border-ink/20 px-4 py-2 text-xs font-medium"
                  onClick={boostGroup}
                >
                  Boost 1 PLN
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-ink/60">
                <span>
                  {group.city}
                  {group.area ? ` · ${group.area}` : ""}
                </span>
                <span>
                  {group.memberCount}/{group.maxMembers} osób
                </span>
              </div>
            </section>

            <section className="card p-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em]">Meetup</h2>
              {group.meetup ? (
                <div className="mt-3 text-sm text-ink/70">
                  <p>{new Date(group.meetup.time).toLocaleString("pl-PL")}</p>
                  <p>{group.meetup.place}</p>
                  {group.meetup.notes ? <p>{group.meetup.notes}</p> : null}
                </div>
              ) : (
                <p className="mt-2 text-sm text-ink/60">Brak ustalonego spotkania.</p>
              )}
            </section>

            <section className="card p-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em]">Safety tips</h2>
              <ul className="mt-2 text-sm text-ink/70">
                <li>Spotykaj się w miejscach publicznych.</li>
                <li>Ustal jasne zasady dotyczące kosztów poza aplikacją.</li>
                <li>Zgłaszaj podejrzane zachowania w aplikacji.</li>
              </ul>
            </section>

            <section className="card p-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em]">Czat</h2>
              <div className="mt-3 max-h-64 space-y-2 overflow-y-auto">
                {messages.map((msg) => (
                  <div key={msg.id} className="rounded-xl2 bg-white/80 px-3 py-2 text-sm">
                    <p className="text-xs text-ink/50">{msg.user.displayName}</p>
                    <p>{msg.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <input
                  className="flex-1 rounded-xl2 border border-ink/10 bg-white px-3 py-2 text-sm"
                  placeholder="Napisz wiadomość"
                  value={body}
                  onChange={(event) => setBody(event.target.value)}
                />
                <button
                  className="rounded-full bg-ink px-4 py-2 text-xs font-medium text-sand"
                  onClick={sendMessage}
                >
                  Wyślij
                </button>
              </div>
              {statusMessage ? <p className="mt-2 text-xs text-coral">{statusMessage}</p> : null}
            </section>
          </>
        ) : (
          <div className="card p-4 text-sm text-ink/60">Ładowanie...</div>
        )}
      </div>
    </main>
  );
}

function getCsrfToken() {
  if (typeof document === "undefined") return "";
  const meta = document.querySelector("meta[name='csrf-token']") as HTMLMetaElement | null;
  return meta?.content ?? "";
}
