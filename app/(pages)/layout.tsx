export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-zinc-900 text-white">{children}</body>
    </html>
  );
}
