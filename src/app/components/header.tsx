import PrimaryButton from "./button";

export var playstore = "https://play.google.com/store/apps?hl=fr";

export default function Header() {
  return (
    <header className="fixed z-50 flex min-w-full items-center justify-between bg-white p-5 shadow-lg dark:bg-[#9A9A9A]">
      <div className="flex">
        <a href="/" className="content-center">
          <h2 className="protest-strike text-2xl">Today's Mission</h2>
        </a>
      </div>

      {/* Desktop Navigation */}
        <a
          href="/"
          className="transition-colors hover:text-blue-600"
        >
          Home
        </a>
        <a
          href="/pricing"
          className="transition-colors hover:text-blue-600"
        >
          Pricing
        </a>
        <a
          href="/contact"
          className="transition-colors hover:text-blue-600"
        >
          Contact
        </a>

      {/* Desktop CTA */}
      <div className="hidden md:block">
        <PrimaryButton text="Télécharger" />
      </div>

      {/* Mobile Burger */}
      <button
        className="text-3xl md:hidden"
        aria-label="Menu"
      >
        ☰
      </button>
    </header>
  );
}