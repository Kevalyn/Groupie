"use client";

import { useEffect, useState } from "react";

export default function CsrfMeta() {
  const [token, setToken] = useState("");

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/csrf", { cache: "no-store" });
      const data = await res.json();
      setToken(data?.token ?? "");
    })();
  }, []);

  if (!token) return null;
  return <meta name="csrf-token" content={token} />;
}
