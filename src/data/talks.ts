import type { Talk } from "./types";

export const talks: Talk[] = [
	{
		title: "OpenTelemetryを活用したObservability入門",
		event: "PHPerKaigi 2025",
		date: "2025-03-23",
		theme: "Observability",
		summary:
			"Observability の基本と OpenTelemetry の構成、さらに PHP / Laravel での導入実践までを一気通貫で扱ったセッション。",
		href: "https://speakerdeck.com/seike460/introduction-to-observability-with-opentelemetry",
		proofUrl: "https://fortee.jp/phperkaigi-2025/proposal/76fe34e4-76ed-49b5-94a9-52b5043805dd",
		featured: true,
	},
	{
		title: "OpenTelemetryで始めるベンダーフリーな observability",
		event: "Road to SRE NEXT @会津若松 2025",
		date: "2025-07-12",
		theme: "Observability",
		summary:
			"ベンダーロックインを避けながら、観測可能性を設計に組み込むための考え方を整理した LT。",
		href: "https://speakerdeck.com/seike460",
	},
	{
		title: "Why Apply, Migrate and Understand Clean Architecture",
		event: "PHPカンファレンス 2025",
		date: "2025-06-28",
		theme: "Architecture",
		summary:
			"構造そのものではなく、既存資産をどう継承しながら移行するかという現実面から Clean Architecture を捉えた代表セッション。",
		href: "https://speakerdeck.com/seike460/why-apply-migrate-and-understand-clean-architecture-inherit-design-beyond-structure",
		featured: true,
	},
	{
		title: "CDKで実現するClean Architecture",
		event: "JAWS-UG CDK Conference Japan 2025",
		date: "2025-07-12",
		theme: "Architecture",
		summary:
			"CDK プロジェクトの成長で起こる密結合を、責務分離と依存性の整理でどう解くかを実践寄りに解説。",
		href: "https://slide.seike460.com/slides/jawsug-cdk-conference-2025-fusic",
	},
	{
		title: "地方のPHPerもクラウドを使う理由",
		event: "PHPカンファレンス新潟 2025",
		date: "2025-05-31",
		theme: "Serverless",
		summary:
			"地方チームにおけるクラウド活用を、コスト最適化とチームの現実に引きつけて語ったセッション。",
		href: "https://speakerdeck.com/seike460/why-even-local-phpers-use-the-cloud-optimize-costs-and-face-the-team",
		featured: true,
	},
	{
		title: "PHPで作るWebSocketサーバー",
		event: "PHP Conference Japan 2024",
		date: "2024-12-22",
		theme: "Serverless",
		summary: "PHP でリアクティブな通信を扱うために、プロトコル理解から実装まで踏み込んだ技術解説。",
		href: "https://speakerdeck.com/seike460/websocket-server-in-php-to-know-reactive-applications",
	},
	{
		title: "AIコーディングの本質は“コード”ではなく“構造”だった",
		event: "AIコーディング道場勉強会 #1",
		date: "2025-05-14",
		theme: "AI / API",
		summary:
			"LLM 活用で品質差を生むのはコード生成量ではなく、要件、設計、作業フローの構造化だと整理したセッション。",
		href: "https://speakerdeck.com/seike460/the-essence-of-ai-coding-is-not-code-but-structure",
		featured: true,
	},
	{
		title: "OpenAPIを中心に考えるAPI開発入門",
		event: "Postman API Night Fukuoka 2024 Spring",
		date: "2024-04-16",
		theme: "AI / API",
		summary: "OpenAPI を起点に、仕様、モック、生成コードの流れを整理した API 設計入門。",
		href: "https://speakerdeck.com/seike460/introduction-to-api-development-with-a-focus-on-openapi",
	},
];

export const talkThemes = ["Serverless", "Observability", "Architecture", "AI / API"] as const;
