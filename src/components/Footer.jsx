export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Jorge. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-gray-900 transition-colors">GitHub</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
