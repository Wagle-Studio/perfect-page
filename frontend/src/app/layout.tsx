import { SessionProvider } from "@/cdn/authentication/SessionProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">{children}</html>
    </SessionProvider>
  );
}
