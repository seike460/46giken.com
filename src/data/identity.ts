import type { Credential, ExternalLink } from "./types";

export const siteIdentity = {
	siteName: "ヨンロク技研",
	siteNameEn: "YONROKU GIKEN",
	personName: "清家史郎",
	handle: "@seike460",
	role: "株式会社Fusic 技術コミュニティ統括室長 / シニアエバンジェリスト / プリンシパルエンジニア",
	location: "Fukuoka, Japan",
	summary: "AWS Serverless と Observability を軸に、構成レビュー、登壇、技術発信を行うエンジニア。",
	intro:
		"Everything Will Be Serverless を軸に、AWS Serverless の構成レビューと Observability の導入を支援しています。必要に応じて登壇・研修まで対応します。",
	philosophy: "やらない理由はいらない、やれる方法を考える",
	contactUrl: "/#contact",
	sameAs: [
		"https://github.com/seike460",
		"https://speakerdeck.com/seike460",
		"https://blog.seike460.com",
		"https://x.com/seike460",
		"https://connpass.com/user/shise460/",
		"https://dev.to/seike460",
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
		title: "Japan AWS Top Engineers",
		detail: "Services category / 2025・2026 と2年連続で選出",
		period: "2025-2026",
		badge: "2026 Japan AWS Top Engineers",
		sourceUrl: "https://aws.amazon.com/jp/blogs/psa/2026-japan-aws-top-engineers/",
		icon: `<svg class="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>`,
	},
	{
		title: "AWS Ambassador",
		detail: "株式会社Fusic",
		period: "2026",
		badge: "AWS Ambassador",
		sourceUrl: "https://aws.amazon.com/jp/blogs/psa/2026-japan-aws-ambassadors/",
		icon: `<svg class="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
	},
	{
		title: "AWS Community Builder",
		detail: "Serverless",
		badge: "AWS Community Builder",
		sourceUrl: "https://builder.aws.com/community/@seike460",
		icon: `<svg class="w-3.5 h-3.5 text-trust-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
	},
	{
		title: "JAWS DAYS 2026",
		detail: "実行委員長",
		period: "2026",
		badge: "JAWS DAYS 2026 実行委員長",
		sourceUrl: "https://jawsdays2026.jaws-ug.jp/about/",
		icon: `<svg class="w-3.5 h-3.5 text-warm-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>`,
	},
	{
		title: "JAWS-UG 福岡",
		detail: "Co-Organizer",
		badge: "JAWS-UG 福岡 Co-Organizer",
		sourceUrl: "https://jawsug-fukuoka.connpass.com/",
		icon: `<svg class="w-3.5 h-3.5 text-trust-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
	},
	{
		title: "Backlog World 2024",
		detail: "実行委員長",
		period: "2024",
		badge: "Backlog World 2024 実行委員長",
		icon: `<svg class="w-3.5 h-3.5 text-warm-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>`,
	},
	{
		title: "PHPカンファレンス福岡 2023",
		detail: "実行委員長",
		period: "2023",
		badge: "PHPカンファレンス福岡 2023 実行委員長",
		icon: `<svg class="w-3.5 h-3.5 text-warm-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>`,
	},
];

export const profileCredentials: Credential[] = [
	{
		title: "株式会社Fusic",
		detail: "技術コミュニティ統括室長 / シニアエバンジェリスト / プリンシパルエンジニア",
	},
	{
		title: "AWS Ambassador",
		detail: "2026 Japan AWS Ambassadors に Technical Leader として選出",
		period: "2026",
		sourceUrl: "https://aws.amazon.com/jp/blogs/psa/2026-japan-aws-ambassadors/",
	},
	{
		title: "Japan AWS Top Engineers",
		detail: "Services カテゴリで 2025・2026 と2年連続で選出",
		period: "2025-2026",
		sourceUrl: "https://aws.amazon.com/jp/blogs/psa/2026-japan-aws-top-engineers/",
	},
	{
		title: "JAWS DAYS 2026",
		detail: "実行委員長",
		period: "2026",
		sourceUrl: "https://jawsdays2026.jaws-ug.jp/about/",
	},
	{
		title: "AWS Community Builder",
		detail: "Serverless カテゴリで 2023 年から継続",
		sourceUrl: "https://builder.aws.com/community/@seike460",
	},
	{
		title: "JAWS-UG 福岡",
		detail: "Co-Organizer として定例勉強会や地域イベントを運営",
		sourceUrl: "https://jawsug-fukuoka.connpass.com/",
	},
	{
		title: "コミュニティ運営",
		detail:
			"JAWS-UG 福岡・Serverless Community(JP)・JBUG 福岡・Cloudflare Workers Tech・Grafana Meetup Japan Fukuoka など複数のコミュニティでイベントを主催・運営",
		sourceUrl: "https://connpass.com/user/shise460/open/",
	},
	{
		title: "AWS 認定資格",
		detail:
			"Solutions Architect – Professional、DevOps Engineer – Professional、SysOps Administrator – Associate、Cloud Practitioner を保有。2016 年に Solutions Architect – Associate を取得して以降、継続して更新・取得",
		period: "2016-",
		sourceUrl: "https://www.credly.com/users/seike460/badges",
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
	{
		label: "dev.to",
		href: "https://dev.to/seike460",
		description: "英語での技術発信",
	},
];
