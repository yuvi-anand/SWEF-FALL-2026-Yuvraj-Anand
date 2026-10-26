import Link from "next/link";

const me = {
  name: "Yuvraj Anand",
  title: "Student at Northeastern University",
  bio: "I've been progamming since a young age, working through FRC Robotics, Computer Vision Startups, University Research Labs, and Independent App Development!",
  email: "yuv.anand.2007@gmail.com",
  email2: "anand.yu@northeastern.edu",
  phone: "+1 (858) 444-0722",
  links: [
    { label: "GitHub", href: "https://github.com/yuvi-anand/" },
    { label: "LinkedIn", href: "https://linkedin.com/in/anand-yuvraj" },
  ],
};

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center bg-white p-6 font-sans">
      <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-xl font-semibold text-gray-700">
          {me.name.charAt(0)}
        </div>

        <h1 className="text-2xl font-semibold text-gray-900">{me.name}</h1>
        <p className="mt-1 text-sm text-gray-500">{me.title}</p>

        <p className="mt-4 text-gray-700">{me.bio}</p>

        <div className="mt-6 space-y-2 text-sm">
          {[
            { href: `mailto:${me.email}`, text: me.email },
            { href: `mailto:${me.email2}`, text: me.email2 },
            { href: `tel:${me.phone.replace(/[^\d+]/g, "")}`, text: me.phone },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-gray-900 underline-offset-4 hover:underline"
            >
              {item.text}
            </a>
          ))}
        </div>

        <div className="mt-6 flex gap-4 border-t border-gray-100 pt-6">
          {me.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/interests"
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Interests
          </Link>
        </div>
      </div>
    </main>
  );
}
