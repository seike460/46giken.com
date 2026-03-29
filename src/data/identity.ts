import type { Credential, ExternalLink } from "./types";

export const siteIdentity = {
	siteName: "ヨンロク技研",
	personName: "清家史郎",
	handle: "@seike460",
	role: "株式会社Fusic プリンシパルエンジニア / エバンジェリスト",
	location: "Fukuoka, Japan",
	summary:
		"サーバーレス、可観測性、アーキテクチャ設計を、実務とコミュニティの両輪で前に進める技術者。",
	intro:
		"福岡を拠点に、AWS Serverless を中心とした設計・実装、OpenTelemetry を軸にした Observability、そして継続的な技術発信とコミュニティ運営を行っています。依頼の入口はシンプルにしつつ、背景にある実績は公開情報で辿れる形で整理しています。",
	philosophy:
		"Everything Will Be Serverless はスローガンではなく、変化に強い設計と運用まで含めた現実解を磨き続けるためのスタンスです。",
	contactUrl: "https://forms.gle/eH22tCcq6K8RYPBUA",
	sameAs: [
		"https://github.com/seike460",
		"https://speakerdeck.com/seike460",
		"https://blog.seike460.com",
		"https://x.com/seike460",
		"https://connpass.com/user/shise460/",
	],
	focusAreas: [
		"Serverless / Cloud Architecture",
		"Observability / OpenTelemetry",
		"Clean Architecture / Event-Driven Design",
		"Technical Speaking / Community Leadership",
	],
};

export const heroCredentials: Credential[] = [
	{
		title: "2025 Japan AWS Top Engineers",
		detail: "Services category",
	},
	{
		title: "AWS Community Builder",
		detail: "Serverless",
		period: "2023-2025",
	},
	{
		title: "JAWS DAYS 2026",
		detail: "実行委員長",
		period: "2026",
	},
	{
		title: "PHPカンファレンス福岡 2023",
		detail: "実行委員長",
		period: "2023",
	},
];

export const profileCredentials: Credential[] = [
	{
		title: "株式会社Fusic",
		detail: "プリンシパルエンジニア / エバンジェリスト",
	},
	{
		title: "2025 Japan AWS Top Engineers",
		detail: "AWS 技術力と発信活動の評価として選出",
		period: "2025",
		sourceUrl:
			"https://speakerdeck.com/seike460/why-apply-migrate-and-understand-clean-architecture-inherit-design-beyond-structure",
	},
	{
		title: "AWS Community Builder",
		detail: "Serverless 分野で継続参加",
		period: "2023-2025",
		sourceUrl:
			"https://speakerdeck.com/seike460/introduction-to-api-development-with-a-focus-on-openapi",
	},
	{
		title: "JAWS DAYS 2026",
		detail: "実行委員長",
		period: "2026",
	},
	{
		title: "PHPカンファレンス福岡 2023",
		detail: "実行委員長",
		period: "2023",
	},
	{
		title: "Backlog World 2024",
		detail: "実行委員長",
		period: "2024",
	},
];

export const externalLinks: ExternalLink[] = [
	{
		label: "Speaker Deck",
		href: "https://speakerdeck.com/seike460",
		description: "公開スライドの主アーカイブ。88 decks を確認済み。",
	},
	{
		label: "GitHub",
		href: "https://github.com/seike460",
		description: "公開リポジトリと OSS の導線。53 public repositories を確認済み。",
	},
	{
		label: "Blog",
		href: "https://blog.seike460.com",
		description: "技術記事と振り返りの公開アーカイブ。ローカル集計で 135 記事。",
	},
	{
		label: "connpass",
		href: "https://connpass.com/user/shise460/",
		description: "イベント参加・運営・発表の外部アーカイブ。",
	},
	{
		label: "X",
		href: "https://x.com/seike460",
		description: "直近の登壇やコミュニティ活動の速報。",
	},
];
