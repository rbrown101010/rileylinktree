import PromptSnippet from "@/components/PromptSnippet";
import ResourceTable, { type Resource } from "@/components/ResourceTable";
import Tabs from "@/components/Tabs";
import Link from "next/link";

// App idea prompts (single‑player)
const prompts = [
  {
    title: "AI Chat App (ChatGPT)",
    subtitle: "Calm, conversational, focused",
    text: `A calm, friendly companion that feels immediate and conversational. The interface is minimal and thoughtful, encouraging focused dialogue without distractions. Messages appear smoothly, the rhythm feels human, and small touches—like gentle feedback and tidy spacing—make long conversations comfortable.

Features:
- Clean thread with clear user/assistant bubbles and timestamps.
- Gentle typing indicator, optional subtle sound or haptic on reply.
- Quick‑start prompt chips (brainstorm, explain, summarize) to spark ideas.
- New chat, rename, delete, and pin important conversations.
- Message actions: copy, edit‑and‑resend, and bookmark favorite answers.
- Theme toggle and comfortable reading widths on mobile and desktop.
- Clear “Reset conversation” control for a fresh start.`,
  },
  {
    title: "Food Analyzer with AI",
    subtitle: "Supportive, informative, non‑judgmental",
    text: `A helpful kitchen sidekick that turns ingredient lists and recipes into a clear, compassionate health snapshot. It should feel like chatting with a knowledgeable friend—curious, encouraging, and never preachy—highlighting what matters and offering gentle, practical suggestions.

Features:
- Paste ingredients or a short recipe; optional photo import for context.
- Nutrition snapshot with estimated calories, macros, and key micronutrients.
- Possible allergens and dietary flags (vegan, gluten‑free, low‑sodium).
- Healthier swaps and portion ideas presented without judgment.
- Auto‑built shopping list for suggested items and simple tweaks.
- Save favorite analyses and compare versions of a recipe.
- Clear “informational only, not medical advice” disclaimer.`,
  },
  {
    title: "Personal Journal + AI Summaries",
    subtitle: "Quiet, reflective, private",
    text: `A quiet, private space that invites reflection and gently surfaces themes you might have missed. Writing feels distraction‑free; reviewing feels insightful and kind. Summaries read like a helpful friend recapping your day and nudging you toward what matters.

Features:
- Compose entries with simple formatting, a mood picker, and tags.
- Powerful search to rediscover moments and patterns.
- Daily summary that recaps highlights, themes, and gentle next steps.
- Streaks and a monthly calendar heatmap to visualize consistency.
- Optional focus timer and a clean, full‑screen writing mode.
- Export selected entries and tidy printable summaries.
- Privacy lock with a friendly passcode screen.`,
  },
  {
    title: "Task Manager + AI Planner",
    subtitle: "Clear, motivating, frictionless",
    text: `A focused, low‑friction task list that turns big goals into small, doable steps. It should feel like forward motion: quick to capture, satisfying to organize, and encouraging when plans shift.

Features:
- Fast add with natural phrasing (e.g., “Tue 5pm”) and priority markers.
- Clean list view and a simple board for grouped work.
- Plan breakdown that expands a task into sequenced subtasks with rough durations.
- Today, This Week, and Overdue filters that feel one‑tap simple.
- Drag to reorder and mark complete with satisfying feedback.
- Progress ring and lightweight stats to keep momentum visible.
- Gentle reminders and a weekly review nudge.`,
  },
  {
    title: "Flashcards Generator + Study Mode",
    subtitle: "Brisk, focused, flowy",
    text: `A brisk study companion that keeps you in flow and celebrates progress. Creating cards feels instant; studying feels like a smooth rhythm of reveal, recall, and reinforce.

Features:
- Turn a topic or pasted notes into crisp Q/A cards at adjustable difficulty.
- Study modes: learn, review, and challenge.
- Card actions: flip, mark easy/hard, and shuffle.
- Keyboard‑friendly controls (Space to flip, J/K to navigate).
- Deck management with folders and simple sharing.
- Session stats with accuracy, streaks, and time‑on‑task.
- Export/import via CSV or plain text.`,
  },
  {
    title: "Habit Tracker + AI Suggestions",
    subtitle: "Encouraging, consistent, celebratory",
    text: `A warm accountability buddy that encourages routines and celebrates small wins. Checking in should take a second; reflecting on progress should feel rewarding and kind.

Features:
- Create habits with frequency, time windows, and gentle reminders.
- Calendar and grid views with streaks and trend lines.
- Add context notes on each check‑in to spot patterns.
- Coach suggestions tailored to recent activity and goals.
- Routine templates for mornings, evenings, and deep‑work blocks.
- Milestone celebrations and badges you can customize.
- One‑tap data reset and clear privacy messaging.`,
  },
];

// Integrations table (similar style to Building a Game → Resources)
const integrationResources: Resource[] = [
  {
    name: "OpenAI",
    description: "GPT‑4o, Assistants, Chat Completions, Realtime; text, vision, TTS.",
    href: "https://platform.openai.com/",
  },
  {
    name: "Anthropic",
    description: "Claude models and Messages API with tool use and JSON output.",
    href: "https://docs.anthropic.com/",
  },
  {
    name: "Groq",
    description: "Ultra‑low‑latency Llama/Mixtral inference; OpenAI‑style endpoints.",
    href: "https://console.groq.com/docs",
  },
  {
    name: "FAL (fal.ai)",
    description: "Serverless inference for image/video/audio pipelines at scale.",
    href: "https://fal.ai/",
  },
  {
    name: "xAI Grok",
    description: "Grok models via xAI API with web‑scale knowledge and search.",
    href: "https://docs.x.ai/",
  },
  {
    name: "Google Gemini",
    description: "Gemini multimodal APIs for text, chat, vision, and function calling.",
    href: "https://ai.google.dev/",
  },
  {
    name: "Cohere",
    description: "Command/Embed models, RAG tooling, and safety classifiers.",
    href: "https://docs.cohere.com/",
  },
  {
    name: "Replicate",
    description: "Run and deploy open‑source models behind a simple HTTP API.",
    href: "https://replicate.com/",
  },
];

// Top mobile UI components (table; links intentionally blank)
const componentsResources: Resource[] = [
  { name: "Bottom Sheet", description: "Contextual drawer that slides up for details and actions.", href: "" },
  { name: "Modal / Dialog", description: "Focused overlay for confirmations and short flows.", href: "" },
  { name: "Bottom Navigation", description: "Primary destinations with 3–5 tabs and labels.", href: "" },
  { name: "Top App Bar", description: "Title, back, and quick actions; scrolls with content.", href: "" },
  { name: "Drawer / Side Menu", description: "Secondary navigation and account or settings access.", href: "" },
  { name: "List & Swipe Actions", description: "Scrollable items with reveal‑on‑swipe actions.", href: "" },
  { name: "Cards", description: "Content grouping with image, title, metadata, and actions.", href: "" },
  { name: "FAB (Floating Action Button)", description: "High‑priority create action that stays visible.", href: "" },
  { name: "Toast / Snackbar", description: "Transient confirmations and undo affordances.", href: "" },
  { name: "Pull‑to‑Refresh", description: "Natural list refresh gesture with progress affordance.", href: "" },
  { name: "Search Bar", description: "Inline search with suggestions and recent queries.", href: "" },
  { name: "Date / Time Picker", description: "Compact pickers with calendar and clock modes.", href: "" },
  { name: "Stepper / Progress", description: "Multi‑step flows with clear progress and back.", href: "" },
  { name: "Carousel", description: "Swipeable media or featured content reels.", href: "" },
  { name: "Map View", description: "Pins, clustering, and location actions.", href: "" },
  { name: "Image Picker / Cropper", description: "Choose, preview, and trim images before upload.", href: "" },
];

// Assets — two tables: Generate Assets and Asset Library
const assetsGenerateResources: Resource[] = [
  { name: "Images", description: "Generate marketing images, UI art, or concept art (OpenAI).", href: "https://platform.openai.com/" },
  { name: "Image Editing", description: "Edit/transform images (Gemini Nano, Banana).", href: "https://ai.google.dev/" },
  { name: "Icon Generation", description: "Create app icons and symbol sets (Midjourney).", href: "https://www.midjourney.com/" },
  { name: "Video Generation", description: "Short clips and promos (Veo 3).", href: "https://ai.google.dev/" },
  { name: "Music Generation", description: "Background tracks and loops (ElevenLabs).", href: "https://elevenlabs.io/" },
  { name: "Voice Generation", description: "Character voices and narration (ElevenLabs).", href: "https://elevenlabs.io/" },
  { name: "Sound Effects", description: "UI clicks, swooshes, ambience (ElevenLabs).", href: "https://elevenlabs.io/" },
];

const assetsLibraryResources: Resource[] = [
  { name: "OpenMoji", description: "Open‑source emoji set for icons and placeholders.", href: "https://openmoji.org" },
];

const templates = [
  {
    title: "App Template (Placeholder)",
    subtitle: "Tabs + Stack Nav",
    text: `Create a mobile app template with a bottom tab bar and stack navigation, including Home, Search, and Settings screens.`,
  },
];

const haptics = [
  {
    title: "Haptics (Placeholder)",
    subtitle: "Tap, Success, Error",
    text: `Create a mobile app that triggers light haptics on taps and distinct success/error feedback on actions, with a settings toggle.`,
  },
];

const database = [
  {
    title: "Local Database (Placeholder)",
    subtitle: "SQLite/Storage",
    text: `Create a mobile app that saves notes to a local database with create, edit, and delete, and persists data across restarts.`,
  },
];

const auth = [
  {
    title: "Auth (Placeholder)",
    subtitle: "Email + Magic Link",
    text: `Create a mobile app with a placeholder auth flow using email input and magic link simulation, plus a protected profile screen.`,
  },
];

const payments = [
  {
    title: "Payments (Placeholder)",
    subtitle: "Checkout",
    text: `Create a mobile app with a fake checkout screen, cart summary, and a success screen that simulates a payment confirmation.`,
  },
];

const sharing = [
  {
    title: "Sharing (Placeholder)",
    subtitle: "System Share Sheet",
    text: `Create a mobile app that shares text and an image via the system share sheet and confirms completion with a toast.`,
  },
];

export default function BuildingAnAppPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
        <div className="mb-6 sm:mb-8">
          <Link href="/" className="reveal-link link-highlight hl-blue text-base sm:text-lg">
            <span className="label-nudge">← Home</span>
          </Link>
        </div>

        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold">Building an App</h1>
          <p className="mt-2 max-w-prose opacity-70 text-sm sm:text-base">
            Here are resources for you to make apps. Please feel free to copy these prompts and paste them into the sandbox.
          </p>
        </header>

        <Tabs
          defaultId="prompts"
          scrollable
          tabs={[
            { id: "prompts", label: "Prompts", content: (
              <div className="flex flex-col gap-3 sm:gap-4">
                {prompts.map((s, i) => (
                  <PromptSnippet key={i} title={s.title} subtitle={s.subtitle} text={s.text} defaultOpen={i===0} />
                ))}
              </div>
            )},
            { id: "integrations", label: "Integrations", content: (
              <section>
                <p className="opacity-70 text-sm sm:text-base mb-3">Click a row to copy Name, Description, and Link.</p>
                <ResourceTable rows={integrationResources} />
              </section>
            )},
            { id: "components", label: "Components", content: (
              <section>
                <p className="opacity-70 text-sm sm:text-base mb-3">Top mobile UI components. Links intentionally left blank.</p>
                <ResourceTable rows={componentsResources} />
              </section>
            )},
            { id: "assets", label: "Assets", content: (
              <section className="flex flex-col gap-6">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-2">Generate Assets</h2>
                  <p className="opacity-70 text-sm sm:text-base mb-3">Click a row to copy Name, Description, and Link.</p>
                  <ResourceTable rows={assetsGenerateResources} />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-2">Asset Library</h2>
                  <p className="opacity-70 text-sm sm:text-base mb-3">Curated libraries you can pull from.</p>
                  <ResourceTable rows={assetsLibraryResources} />
                </div>
              </section>
            )},
            { id: "templates", label: "Templates", content: (
              <div className="flex flex-col gap-3 sm:gap-4">
                {templates.map((s, i) => (
                  <PromptSnippet key={i} title={s.title} subtitle={s.subtitle} text={s.text} defaultOpen={i===0} />
                ))}
              </div>
            )},
            { id: "haptics", label: "Haptics", content: (
              <div className="flex flex-col gap-3 sm:gap-4">
                {haptics.map((s, i) => (
                  <PromptSnippet key={i} title={s.title} subtitle={s.subtitle} text={s.text} defaultOpen={i===0} />
                ))}
              </div>
            )},
            { id: "database", label: "Database", content: (
              <div className="flex flex-col gap-3 sm:gap-4">
                {database.map((s, i) => (
                  <PromptSnippet key={i} title={s.title} subtitle={s.subtitle} text={s.text} defaultOpen={i===0} />
                ))}
              </div>
            )},
            { id: "auth", label: "Auth", content: (
              <div className="flex flex-col gap-3 sm:gap-4">
                {auth.map((s, i) => (
                  <PromptSnippet key={i} title={s.title} subtitle={s.subtitle} text={s.text} defaultOpen={i===0} />
                ))}
              </div>
            )},
            { id: "payments", label: "Payments", content: (
              <div className="flex flex-col gap-3 sm:gap-4">
                {payments.map((s, i) => (
                  <PromptSnippet key={i} title={s.title} subtitle={s.subtitle} text={s.text} defaultOpen={i===0} />
                ))}
              </div>
            )},
            { id: "sharing", label: "Sharing", content: (
              <div className="flex flex-col gap-3 sm:gap-4">
                {sharing.map((s, i) => (
                  <PromptSnippet key={i} title={s.title} subtitle={s.subtitle} text={s.text} defaultOpen={i===0} />
                ))}
              </div>
            )},
          ]}
        />
      </div>
    </main>
  );
}
