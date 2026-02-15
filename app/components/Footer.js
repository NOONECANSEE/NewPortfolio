export default function Footer() {
  return (
    <footer className="py-12 text-center border-t border-white/10">
      <h3 className="font-semibold mb-4">Anshu Singla</h3>

      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} • Built with Next.js
      </p>
    </footer>
  );
}
