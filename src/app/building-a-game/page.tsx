import PromptSnippet from "@/components/PromptSnippet";
import ResourceTable, { type Resource } from "@/components/ResourceTable";
import Tabs from "@/components/Tabs";
import Link from "next/link";

const snippets = [
  {
    title: "First-Person Shooter",
    subtitle: "Doom, Quake, Halo",
    text: `Build a tiny first‑person shooter with PointerLockControls and WASD movement.
Left‑click fires a simple hitscan that damages one enemy type that chases the player.
Show health and score on screen; when health reaches 0 display Game Over and a Restart button.`,
  },
  {
    title: "Pokémon‑Style Top‑Down",
    subtitle: "Pokémon Red/Blue, Gold/Silver",
    text: `Create a top‑down overworld with tile‑like ground and obstacles using simple colored placeholders.
Arrow keys move the player; random steps can open a basic turn‑based "battle" overlay with two actions.
Block movement on trees/water, and keep UI minimal with a small text box for hints.`,
  },
  {
    title: "Endless Runner",
    subtitle: "Temple Run, Subway Surfers",
    text: `Create a game in three js that is an endless runner on a ground plane with simple obstacles, arrow keys to dodge, and a score that increases with distance.`,
  },
  {
    title: "Top‑Down Space Shooter",
    subtitle: "Galaga, 1942",
    text: `Create a game in three js that is a top‑down space shooter with WASD movement, waves of enemy ships that spawn ahead, and basic power‑ups.`,
  },
  {
    title: "Mini 3D Platformer",
    subtitle: "Super Mario 64, A Hat in Time",
    text: `Create a game in three js that is a small 3D platformer with jump and double‑jump, floating platforms, and collectibles to reach before a timer ends.`,
  },
  {
    title: "Time‑Trial Racer",
    subtitle: "Trackmania, Ridge Racer (Time Attack)",
    text: `Create a game in three js that is a simple time‑trial racer on a looped track with checkpoints, lap timer UI, and basic steering.`,
  },
  {
    title: "3D Maze Explorer",
    subtitle: "Labyrinth, Amaze 3D",
    text: `Create a game in three js that is a first‑person maze explorer with a minimap, scattered keys to collect, and a goal door to unlock.`,
  },
  {
    title: "Tower Defense",
    subtitle: "Plants vs. Zombies, Kingdom Rush",
    text: `Create a game in three js that is a path‑based tower defense where enemies follow waypoints and the player places turrets that shoot projectiles.`,
  },
  {
    title: "Marble Roll",
    subtitle: "Marble Madness, Super Monkey Ball",
    text: `Create a game in three js that is a marble‑rolling obstacle course on floating platforms with simple tilt controls and checkpoint flags.`,
  },
  {
    title: "3D Breakout",
    subtitle: "Shatter, Ricochet Xtreme",
    text: `Create a game in three js that is a 3D breakout with a paddle, a bouncing ball, and brick rows that disappear on hit.`,
  },
  // Additional 2D‑oriented game types
  {
    title: "2D Platformer",
    subtitle: "Super Mario Bros., Celeste",
    text: `Create a game in three js that is a 2D platformer using an orthographic camera, with left/right movement, jump, simple enemies, and coins to collect.`,
  },
  {
    title: "Side‑Scrolling Shooter",
    subtitle: "Contra, Metal Slug",
    text: `Create a game in three js that is a 2D side‑scrolling run‑and‑gun with platform tiles, strafing, and basic projectile enemies.`,
  },
  {
    title: "Vertical Shmup",
    subtitle: "Gradius, Ikaruga",
    text: `Create a game in three js that is a vertical shoot‑’em‑up with continuous upward scrolling, enemy waves, screen‑wrap bullets, and a score multiplier.`,
  },
  {
    title: "Asteroids‑Like",
    subtitle: "Asteroids, Geometry Wars",
    text: `Create a game in three js that is an arena shooter with a triangular ship, screen wrap, drifting physics, and breakable asteroids.`,
  },
  {
    title: "Twin‑Stick Arena",
    subtitle: "Geometry Wars, Smash TV",
    text: `Create a game in three js that is a 2D twin‑stick arena shooter with WASD to move, mouse to aim, spawning waves, and particle effects.`,
  },
  {
    title: "Flappy‑Style",
    subtitle: "Flappy Bird, Jetpack Joyride",
    text: `Create a game in three js that is a one‑button flappy‑style side scroller with pipes as obstacles, endless scrolling, and high score tracking.`,
  },
  {
    title: "Falling Blocks",
    subtitle: "Tetris, Puyo Puyo",
    text: `Create a game in three js that is a falling blocks puzzler on a grid with rotating pieces, line clears, and increasing drop speed.`,
  },
  {
    title: "Match‑3 Puzzle",
    subtitle: "Bejeweled, Candy Crush",
    text: `Create a game in three js that is a match‑3 grid with swap interactions, cascades, simple power‑ups, and move‑limited levels.`,
  },
  {
    title: "Pong / Air Hockey",
    subtitle: "Pong, Windjammers",
    text: `Create a game in three js that is a 2D paddle game with ball physics, two paddles (AI vs player), and a simple score display.`,
  },
  {
    title: "Snake",
    subtitle: "Snake, Slither.io",
    text: `Create a game in three js that is a grid‑based snake with growing tail, food spawning, and wrap or wall‑collision modes.`,
  },
];

export default function BuildingAGamePage() {
  const resources: Resource[] = [
    {
      name: "OpenMoji",
      description: "Open-source emoji set useful for quick UI icons and placeholders.",
      href: "https://openmoji.org",
    },
    {
      name: "Freesound",
      description: "Large library of free sound effects; check licenses for each file.",
      href: "https://freesound.org",
    },
  ];
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
        <div className="mb-6 sm:mb-8">
          <Link href="/" className="reveal-link link-highlight hl-blue text-base sm:text-lg">
            <span className="label-nudge">← Home</span>
          </Link>
        </div>

        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold">Building a Game</h1>
          <p className="mt-2 max-w-prose opacity-70 text-sm sm:text-base">
            Here are resources for you to make games. Please feel free to copy these prompts and paste them into the sandbox.
          </p>
        </header>

        <Tabs
          defaultId="prompts"
          tabs={[
            {
              id: "prompts",
              label: "Prompts",
              content: (
                <div className="flex flex-col gap-3 sm:gap-4">
                  {snippets.map((s, i) => (
                    <PromptSnippet
                      key={i}
                      title={s.title}
                      subtitle={s.subtitle}
                      text={s.text}
                      defaultOpen={i === 0}
                    />
                  ))}
                </div>
              ),
            },
            {
              id: "resources",
              label: "Resources",
              content: (
                <section>
                  <p className="opacity-70 text-sm sm:text-base mb-3">
                    Click a row to copy Name, Description, and Link.
                  </p>
                  <ResourceTable rows={resources} />
                </section>
              ),
            },
          ]}
        />
      </div>
    </main>
  );
}
