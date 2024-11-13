"use client";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-col md:flex-row items-center gap-4 z-10"
    >
      <Image src="/logo.png" height="80" width="80" alt="The Wild Oasis Logo" />

      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
