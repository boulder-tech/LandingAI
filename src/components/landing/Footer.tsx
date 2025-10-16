export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 border-t border-foreground/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/70">
        <div className="flex items-center gap-3">
          <a href="mailto:hello@yourstartup.com" className="hover:underline">hello@yourstartup.com</a>
          <span>·</span>
          <a href="#" className="hover:underline">LinkedIn</a>
          <span>·</span>
          <a href="#" className="hover:underline">X/Twitter</a>
        </div>
        <div>© {year} Your Startup. All rights reserved.</div>
      </div>
    </footer>
  );
}


