import { template } from "solid-js/web";

import profileImage from "./assets/avatar.webp";
import solidLogo from "./assets/solid.svg";
import rustIcon from "./assets/rust-icon.svg";
import tsIcon from "./assets/ts-icon.svg";
import cIcon from "./assets/c-icon.svg";
import githubSvg from "./assets/github.svg?raw";
import mastodonSvg from "./assets/mastodon-icon.svg?raw";

function App() {
  const githubIcon = template(githubSvg);
  const mastodonIcon = template(mastodonSvg);

  function getDaysSinceRustStart(): number {
    const rustStart = new Date("2025-05-10");
    const today = new Date();
    const msInADay = 1000 * 60 * 60 * 24;
    return Math.floor((today.getTime() - rustStart.getTime()) / msInADay);
  }

  const skills = [
    {
      name: "Rust",
      icon: rustIcon,
      description: `It has been ${getDaysSinceRustStart()} days since I started learning Rust.`,
    },
    {
      name: "TypeScript/JavaScript",
      icon: tsIcon,
      description: "The must-learn language.",
    },
    {
      name: "C",
      icon: cIcon,
      description: "C was the first language I learned.",
    },
  ];

  const socialLinks = [
    {
      href: "https://github.com/yukariha",
      iconTemplate: githubIcon,
      label: "GitHub",
    },
    {
      href: "https://mastodon.social/@shirakawa",
      iconTemplate: mastodonIcon,
      label: "Mastodon",
    },
  ];

  return (
    <div class="min-h-screen bg-neutral-900 px-6 py-10 pt-16 md:px-10">
      {/* introduction section */}
      <section class="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-10">
        <div class="w-20 h-20 shrink-0">
          <img
            src={profileImage}
            alt="Profile picture"
            class="w-full h-full rounded-full object-cover"
          />
        </div>

        <div class="text-center md:text-left">
          <h1 class="text-3xl font-semibold text-neutral-200 mb-2">
            hello there, i'm{" "}
            <span class="bg-gradient-to-r from-pink-300 to-pink-400 bg-clip-text text-transparent">
              apothecary
            </span>
            !
          </h1>
          <h2 class="text-xl font-medium text-neutral-500 mb-4">
            i'm a self-taught software developer.
          </h2>

          <div class="flex justify-center md:justify-start gap-4">
            {socialLinks.map(({ href, iconTemplate, label }) => (
              <a
                href={href}
                class="text-neutral-200 hover:text-neutral-400 transition-colors duration-200 ease-in-out block"
                aria-label={label}
              >
                <span
                  class="fill-current inline-block w-6 h-6"
                  ref={(el) => el.appendChild(iconTemplate())}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <hr class="border-t-2 border-neutral-800 mb-8" />

      {/* languages section */}
      <section class="mb-10">
        <h2 class="text-sm font-medium text-neutral-500 uppercase mb-6">
          languages & skills
        </h2>

        <div class="space-y-6">
          {skills.map((tech) => (
            <div class="flex flex-col gap-1">
              <div class="flex gap-3 items-center">
                <img
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  class="w-6 h-6"
                />
                <h3 class="text-lg font-semibold text-neutral-300">
                  {tech.name}
                </h3>
              </div>
              <p class="text-neutral-500 font-medium ml-9">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      <hr class="border-t-2 border-neutral-800 mb-8" />

      {/* footer */}
      <footer class="text-center md:text-left">
        <p class="text-neutral-400">&copy; 2025, apothecary</p>
        <p class="text-neutral-400 flex justify-center md:justify-start items-center gap-1">
          Made using{" "}
          <img
            src={solidLogo}
            width="20"
            height="20"
            alt="SolidJS logo"
            class="inline"
          />
          <a
            href="https://www.solidjs.com/"
            class="text-sky-200 hover:text-slate-400 hover:underline transition-colors duration-200 ease-in-out block"
          >
            SolidJS
          </a>
        </p>
        <a
          href="https://github.com/yukariha/apothecary"
          class="text-sky-200 hover:text-slate-400 hover:underline transition-colors duration-200 ease-in-out block"
        >
          Source Code
        </a>
      </footer>
    </div>
  );
}

export default App;
