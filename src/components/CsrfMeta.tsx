import { getOrCreateCsrfToken } from "@/lib/csrf";

export function CsrfMeta() {
  const token = getOrCreateCsrfToken();
  return <meta name="csrf-token" content={token} />;
}
