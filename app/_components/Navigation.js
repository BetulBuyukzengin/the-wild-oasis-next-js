import Link from "next/link";
import { auth } from "../_lib/auth";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-4 w-4 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-4 w-4 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-4 w-4 text-primary-600" />,
  },
];

export default async function Navigation({ toggleDrawer }) {
  const session = await auth(); // Kullanıcı oturumunu alıyoruz

  return (
    <nav className="z-10 text-base md:text-xl w-full md:w-auto">
      <ul className="flex flex-col md:flex-row gap-2 md:gap-16 items-center">
        <li>
          <Link
            onClick={toggleDrawer}
            href="/cabins"
            className="hover:text-accent-400 transition-colors text-lg md:text-xl"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors text-lg md:text-xl"
          >
            About
          </Link>
        </li>
        <li className="relative group">
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-1 md:gap-4 text-lg md:text-xl"
            >
              <img
                className="h-6 md:h-8 w-6 md:w-8 rounded-full"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors text-lg md:text-xl"
            >
              Guest area
            </Link>
          )}
          {session && (
            <ul className="block md:hidden absolute -top-9  left-full bg-[#212B33] w-44 p-2 rounded shadow-lg  opacity-0 group-hover:opacity-100 transition-opacity">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`p-1 rounded
                      hover:text-accent-400 transition-colors
                       flex items-center gap-1 text-lg
                        `}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              <li className="">
                <SignOutButton />
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
