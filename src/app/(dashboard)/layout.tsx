import Header from "./_components/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen relative bg-gray-100">
      <Header />
      { children }
    </div>
  );
}
