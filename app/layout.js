import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";
import HamburgerDrawerCustom from "./_components/HamburgerDrawer";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },

  // for SEO
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <HamburgerDrawerCustom>
          <Logo />
          <Navigation />
        </HamburgerDrawerCustom>
        <div className="flex-1 px-4 md:px-8 py-8 md:py-12 grid">
          <main className="mx-auto max-w-7xl w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>

        <footer className="text-center pb-8">
          Copyright by The Wild Oasis
        </footer>
      </body>
    </html>
  );
}
