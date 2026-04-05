import type { Credential, ExternalLink } from "./types";

export const siteIdentity = {
	siteName: "ヨンロク技研",
	siteNameEn: "YONROKU GIKEN",
	personName: "清家史郎",
	handle: "@seike460",
	role: "株式会社Fusic プリンシパルエンジニア / エバンジェリスト",
	location: "Fukuoka, Japan",
	summary: "AWS Serverless と Observability を軸に、構成レビュー、登壇、技術発信を行うエンジニア。",
	intro:
		"Everything Will Be Serverless を軸に、AWS Serverless の設計レビューと Observability 導入を支援しています。必要に応じて登壇・研修まで伴走します。",
	philosophy: "",
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
		title: "Backlog World 2024",
		detail: "実行委員長",
		period: "2024",
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
		description: "登壇スライド",
	},
	{
		label: "GitHub",
		href: "https://github.com/seike460",
		description: "公開リポジトリ",
	},
	{
		label: "Blog",
		href: "https://blog.seike460.com",
		description: "技術記事",
	},
	{
		label: "connpass",
		href: "https://connpass.com/user/shise460/",
		description: "イベント参加・運営",
	},
	{
		label: "X",
		href: "https://x.com/seike460",
		description: "@seike460",
	},
];
