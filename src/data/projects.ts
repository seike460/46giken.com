import type { Project } from "./types";

export const projects: Project[] = [
	{
		name: "Speaker Deck",
		oneLiner: "登壇資料の主アーカイブ。テーマの広がりと継続発信の量を最短で確認できます。",
		role: "登壇資料の継続公開と再編集",
		stack: ["Talk Archive", "Serverless", "Observability"],
		href: "https://speakerdeck.com/seike460",
		proofType: "Public archive",
		featured: true,
	},
	{
		name: "blog.seike460.com",
		oneLiner:
			"技術記事と振り返りの公開アーカイブ。実務とコミュニティの文脈を記事として残しています。",
		role: "記事執筆と発信運用",
		stack: ["Technical Writing", "Architecture", "Community"],
		href: "https://blog.seike460.com",
		proofType: "Public archive",
		featured: true,
	},
	{
		name: "slide.seike460.com",
		oneLiner: "継続的な登壇活動を支える公開スライド基盤。",
		role: "発信基盤の設計と運用",
		stack: ["Slides", "Archive", "Talks"],
		href: "https://slide.seike460.com",
		proofType: "Public archive",
		featured: true,
	},
	{
		name: "GitHub Public Profile",
		oneLiner:
			"公開しているリポジトリと OSS の入口。個別リポジトリではなく公開プロフィールのみを掲載します。",
		role: "公開OSSとサンプルの集約導線",
		stack: ["GitHub", "OSS", "Public Repositories"],
		href: "https://github.com/seike460",
		proofType: "Public profile",
		featured: true,
	},
];
