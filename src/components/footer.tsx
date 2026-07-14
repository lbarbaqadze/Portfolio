export function Footer() {
  return (
    <footer className="relative z-10 border-t border-neutral-800/60 px-5 py-4 sm:px-8 lg:px-12 xl:px-16">
      <p className="text-center text-xs text-neutral-500 sm:text-sm">
        © {new Date().getFullYear()} Lasha Barbakadze · Front End Developer
      </p>
    </footer>
  );
}
