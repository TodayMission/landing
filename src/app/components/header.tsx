"use client";

import { useState } from "react";
import PrimaryButton from "./button";

export const playstore = "https://play.google.com/store/apps?hl=fr";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full bg-white shadow-lg dark:bg-[#9A9A9A]">
      <div className="flex items-center justify-between p-5">
        <a href="/">
          <h2 className="protest-strike text-2xl">Today's Mission</h2>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="/" className="transition-colors hover:text-blue-600">
            Accueil
          </a>

          <a
            href="/pricing"
            className="transition-colors hover:text-blue-600"
          >
            Tarification
          </a>

          <a
            href="/contact"
            className="transition-colors hover:text-blue-600"
          >
            Contact
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <PrimaryButton text="Télécharger" />
        </div>

        {/* Mobile Burger */}
        <button
          className="text-3xl md:hidden"
          aria-label="Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <nav className="flex text-center flex-col bg-white px-5 py-4 dark:bg-[#9A9A9A]">
          <a
            href="/"
            className="py-3 transition-colors hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </a>

          <a
            href="/pricing"
            className="py-3 transition-colors hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Tarification
          </a>

          <a
            href="/contact"
            className="py-3 transition-colors hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          <div className="mt-4">
            <PrimaryButton text="Télécharger" />
          </div>
        </nav>
      </div>
    </header>
  );
}
