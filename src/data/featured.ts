import type { FeaturedItem } from "./types";

export const featuredItems: FeaturedItem[] = [
	{
		kind: "Talk",
		title: "OpenTelemetryを活用したObservability入門",
		meta: "PHPerKaigi 2025 / Observability",
		summary:
			"可観測性の基本から PHP / Laravel での実践導入まで、現場に持ち帰れる粒度で整理したセッションです。",
		href: "https://fortee.jp/phperkaigi-2025/proposal/76fe34e4-76ed-49b5-94a9-52b5043805dd",
		ctaLabel: "fortee で見る",
	},
	{
		kind: "Talk",
		title: "Why Apply, Migrate and Understand Clean Architecture",
		meta: "PHPカンファレンス 2025 / Architecture",
		summary:
			"構造の美しさではなく、移行と継承まで含めて Clean Architecture をどう適用するかを扱った代表作です。",
		href: "https://speakerdeck.com/seike460/why-apply-migrate-and-understand-clean-architecture-inherit-design-beyond-structure",
		ctaLabel: "Speaker Deck で見る",
	},
	{
		kind: "Talk",
		title: "AIコーディングの本質は“コード”ではなく“構造”だった",
		meta: "AIコーディング道場勉強会 #1 / AI",
		summary:
			"AI を使った実装を『大量生成の速さ』ではなく『構造化の質』で捉え直したセッションです。",
		href: "https://speakerdeck.com/seike460/the-essence-of-ai-coding-is-not-code-but-structure",
		ctaLabel: "Speaker Deck で見る",
	},
	{
		kind: "Writing",
		title: "blog.seike460.com",
		meta: "Public archive / Technical writing",
		summary:
			"技術記事と振り返りを継続公開しているアーカイブ。設計、登壇、コミュニティ運営の背景まで辿れます。",
		href: "https://blog.seike460.com",
		ctaLabel: "Blog を開く",
	},
	{
		kind: "Archive",
		title: "slide.seike460.com",
		meta: "Public archive / Technical speaking platform",
		summary:
			"継続的な登壇活動を支える公開スライド基盤。テーマの蓄積と再利用がしやすい形で運用しています。",
		href: "https://slide.seike460.com",
		ctaLabel: "公開サイトを見る",
	},
];
