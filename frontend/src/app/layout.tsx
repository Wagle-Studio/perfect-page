import { SessionProvider } from "@/libs/NextAuth/SessionProvider";

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
