export const metadata = {
  title: "Page Perfect Preview",
  description: "Page Perfect Preview",
};

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <body>{children}</body>;
}
