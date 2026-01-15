import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b px-6 py-4 flex gap-6">
      <Link href="/" className="font-semibold">
        Crypto Tools Hub
      </Link>

      <Link href="/tools" className="text-blue-600">
        Tools
      </Link>

      <Link href="/compare" className="text-blue-600">
        Compare
      </Link>

      <Link href="/search" className="text-blue-600">
  Search
</Link>

    </header>
  )
}
