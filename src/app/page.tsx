export default function Page() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold" role="heading" aria-level={1}>
        HN Explorer
      </h1>
      <p className="opacity-70 text-sm">
        Search Hacker News stories. (Setup verification)
      </p>

      <div className="border rounded-lg p-4">
        <label htmlFor="q" className="block text-sm">
          Query
        </label>
        <input
          id="q"
          aria-label="Search"
          placeholder="Search..."
          className="border rounded px-3 py-2 w-full"
        />
      </div>
    </main>
  );
}
