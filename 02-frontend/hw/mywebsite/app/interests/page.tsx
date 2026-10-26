import Link from "next/link";

const interests = [
  { emoji: "🎾", label: "Tennis" },
  { emoji: "🏈", label: "Football" },
  { emoji: "🎤", label: "Debate" },
  { emoji: "🏀", label: "Basketball" },
  { emoji: "⚾", label: "Baseball" },
  { emoji: "🎵", label: "Music (all genres)" },
  { emoji: "🥾", label: "Hiking" },
  { emoji: "✈️", label: "Traveling" },
  { emoji: "☕", label: "Exploring coffee shops" },
  { emoji: "🍔", label: "Eating" },
  { emoji: "😴", label: "Sleeping" },
  { emoji: "🥁", label: "Playing drums" },
  { emoji: "🎸", label: "Going to concerts" },
  { emoji: "✨", label: "And so much more!" },
];

export default function Interests() {
  return (
    <main className="flex-1 bg-white p-6 font-sans">
      <div className="mx-auto max-w-3xl py-12">
        <Link href="/" className="text-sm text-gray-500 hover:text-gray-900">
          ← Back
        </Link>

        <h1 className="mt-6 text-2xl font-semibold text-gray-900">
          My Interests
        </h1>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {interests.map((interest) => (
            <div
              key={interest.label}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="text-3xl">{interest.emoji}</div>
              <p className="mt-3 text-sm font-medium text-gray-900">
                {interest.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
