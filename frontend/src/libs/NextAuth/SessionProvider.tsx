"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

function SessionProviderComponent({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export { SessionProviderComponent as SessionProvider };
