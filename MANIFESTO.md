# SlopMuter Manifesto

## The Problem

The internet has a slop problem.

Low-effort, AI-generated posts — commonly referred to as **"slop"** — are flooding social media. Engagement-farming bots, AI-generated image accounts, ragebait operators, and content mills have turned X (formerly Twitter) into a firehose of garbage. Your feed is no longer yours. It belongs to algorithms optimized for engagement and accounts designed to exploit them.

Every scroll is a gamble. Between the people you actually follow, there are AI-generated "inspirational" images, recycled threads repackaged by bots, crypto spam dressed up as insight, and rage-inducing posts engineered to make you stop and react. The signal-to-noise ratio is collapsing.

Platforms won't fix this. The slop drives engagement metrics. The bots drive ad impressions. There is no incentive to clean it up.

So we built something that does.

## What SlopMuter Is

**SlopMuter is a browser extension that automatically hides posts from known slop accounts on X/Twitter.**

It's a content filter for your feed. Install it, pick your blocklists, and scroll in peace. SlopMuter runs silently in the background — scanning every tweet as it appears and removing the ones posted by accounts on your enabled blocklists.

No accounts are "blocked" on X itself. No interactions are made on your behalf. SlopMuter simply removes slop from your view, as if it was never there.

## How It Works

1. **Community-Curated Blocklists** — SlopMuter maintains a collection of public blocklists, each targeting a specific category of slop. These lists are community-maintained, open-source, and updated regularly.

2. **You Choose What Gets Filtered** — From the extension popup, you enable or disable blocklists. You decide what counts as slop for you. Some people want to filter AI-generated content. Others want to remove engagement farmers. Some want both. It's your call.

3. **Real-Time Feed Filtering** — As you browse X/Twitter, SlopMuter scans each tweet that appears on your screen. It reads the publicly visible username of each post's author and checks it against your enabled blocklists. If the author is on a list, the post disappears.

4. **Instant Updates** — Change your blocklist preferences and the effect is immediate. No page reload. No delay. Toggle a blocklist off, and those posts come back. Toggle it on, and they're gone.

## The Blocklists

SlopMuter ships with several default blocklists enabled out of the box:

- **AI Maximalism** — Accounts that relentlessly promote AI without substance, flooding feeds with hype and generated content.
- **AI Slop** — Accounts posting AI-generated images, text, and media designed to farm engagement.
- **Engagement Farming** — Accounts that exist solely to generate engagement through ragebait, stolen content, and manufactured controversy.
- **Low Effort** — Accounts posting recycled, low-value content — repackaged threads, generic advice, and content-mill output.

More blocklists can be added over time. The system is designed to grow with the community.

## What SlopMuter Is Not

- **Not a reporting tool.** SlopMuter doesn't report, block, or interact with any account on X. It only hides posts locally in your browser.
- **Not a data harvester.** All preferences and cached data are stored locally on your device. Nothing is transmitted to external servers. No analytics. No tracking.
- **Not an opinion enforcer.** SlopMuter filters based on curated lists of known slop accounts, not based on keywords, topics, or political positions. You choose which lists to enable.
- **Not a replacement for X's built-in mute/block.** SlopMuter operates independently and doesn't modify your X account settings in any way.

## Design Principles

### Privacy First
SlopMuter stores everything locally. Your blocklist preferences, cached blocklist data, scan statistics — all of it lives in your browser's local storage and never leaves your device. The only network requests the extension makes are to fetch publicly available blocklist files from GitHub.

### Transparency
SlopMuter is open source. The extension code, the blocklists, and the blocklist criteria are all publicly available. Anyone can audit what the extension does, how it works, and who is on the lists.

### Minimal Footprint
SlopMuter only runs on X/Twitter pages. It requests only the permissions it needs (`storage` for preferences, `activeTab` for communicating with the current tab). It doesn't inject code into other websites, doesn't run in the background on unrelated pages, and doesn't slow down your browser.

### User Control
You are always in control. Enable or disable any blocklist at any time. The extension popup shows you exactly which lists are active, how many tweets have been scanned, and how many have been removed. If you're on a blocklist yourself, the extension will tell you — and yes, there's an appeal button.

## The Popup

The SlopMuter popup is designed to look and feel like an X/Twitter profile. It shows:

- **Scanned count** — How many tweets SlopMuter has scanned since installation.
- **Removed count** — How many tweets SlopMuter has hidden from your feed.
- **Your status** — A green or red indicator showing whether your own account appears on any active blocklist.
- **Active blocklists** — Badges for each currently enabled blocklist, removable with a click.
- **Blocklist selector** — A searchable dropdown to browse and toggle all available blocklists.

## The Tech

- Built with [WXT](https://wxt.dev) (Web Extension Tooling) for cross-browser compatibility.
- React 19 for the popup UI.
- Tailwind CSS v4 for styling.
- Manifest V3 compliant for Chrome Web Store publication.
- Blocklists hosted as plain text files on GitHub for full transparency and easy contribution.
- SHA-256 hashing for efficient blocklist version checking — the extension only re-downloads a blocklist when its content has changed.

## Who Is This For

- Anyone tired of scrolling through AI-generated slop on X/Twitter.
- Anyone who wants a cleaner, more human feed.
- Anyone who believes their attention is worth protecting.

## Take Back Your Feed

The internet doesn't have to be like this. Your feed doesn't have to be a landfill. SlopMuter won't fix the platform — but it will fix what you see on it.

Install it. Pick your blocklists. Scroll in peace.

---

**SlopMuter** — Mute the slop. Keep the signal.

Website: [slopmuter.diragb.dev](https://slopmuter.diragb.dev)
X/Twitter: [@slopmuter](https://x.com/slopmuter)
GitHub: [github.com/diragb/slop-muter-extension](https://github.com/diragb/slop-muter-extension)
Author: [Dirag Biswas](https://github.com/diragb)
License: MIT
