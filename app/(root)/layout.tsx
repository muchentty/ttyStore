


import Heard from "../../components/share/heard";
import Footer from "../../components/share/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
        <Heard />
        <main className="flex-1 wrapper">{children}</main>
        <Footer/>
    </div>
  );
}
