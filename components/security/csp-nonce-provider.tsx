"use client";

import { createContext, useContext } from "react";

const CspNonceContext = createContext("");

export function CspNonceProvider({
  children,
  nonce,
}: {
  children: React.ReactNode;
  nonce: string;
}) {
  return <CspNonceContext.Provider value={nonce}>{children}</CspNonceContext.Provider>;
}

export function useCspNonce() {
  return useContext(CspNonceContext);
}
