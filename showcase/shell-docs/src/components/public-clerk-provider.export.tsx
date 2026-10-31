"use client";

// Static-export stub for PublicClerkProvider.
//
// @clerk/nextjs ships Server Actions (app-router/server-actions.js), which
// `output: "export"` hard-rejects at build time even though this app only
// ever renders the provider's no-key passthrough (publishableKey is empty in
// a mirror deployment). next.config.ts aliases this module over the real one
// in export mode; the passthrough branch below mirrors it exactly, so the
// usePublicClerkAvailable()/usePublicOpsUrl() consumers see identical
// context values.
import type { ReactNode } from "react";
import { createContext, useContext } from "react";

const PublicClerkAvailableContext = createContext(true);
const PublicOpsUrlContext = createContext(
  "https://dashboard.operations.copilotkit.ai",
);

export function usePublicClerkAvailable(): boolean {
  return useContext(PublicClerkAvailableContext);
}

export function usePublicOpsUrl(): string {
  return useContext(PublicOpsUrlContext);
}

export function PublicClerkProvider({
  children,
  opsPublicUrl,
}: {
  children: ReactNode;
  opsPublicUrl: string;
  publishableKey?: string;
}) {
  return (
    <PublicOpsUrlContext.Provider value={opsPublicUrl}>
      <PublicClerkAvailableContext.Provider value={false}>
        {children}
      </PublicClerkAvailableContext.Provider>
    </PublicOpsUrlContext.Provider>
  );
}
