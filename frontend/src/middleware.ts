// Default Next Auth auth check up middleware.
export { default } from "next-auth/middleware";

// Pages where middleware applies.
export const config = { matcher: ["/dashboard"] };