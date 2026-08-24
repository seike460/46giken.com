export interface ProofMetric {
	value: string;
	label: string;
	note: string;
	sourceUrl: string;
	verifiedAt: string;
}

export interface Credential {
	title: string;
	detail: string;
	period?: string;
	sourceUrl?: string;
	/** バッジ表示用の短縮文言。未指定なら title を使う */
	badge?: string;
	/** バッジ表示用の inline SVG */
	icon?: string;
}

export interface Offer {
	title: string;
	summary: string;
	bullets: string[];
}

export interface FeaturedItem {
	kind: "Talk" | "Archive" | "Writing";
	title: string;
	meta: string;
	summary: string;
	href: string;
	ctaLabel: string;
}

export interface Talk {
	title: string;
	event: string;
	date: string;
	theme: "Serverless" | "Observability" | "Architecture" | "AI / API" | "PHP / Web" | "Community";
	summary: string;
	href: string;
	proofUrl?: string;
	featured?: boolean;
}

export interface Project {
	name: string;
	oneLiner: string;
	role: string;
	stack: string[];
	href: string;
	proofType: string;
	featured?: boolean;
}

export interface TimelineEntry {
	year: string;
	title: string;
	body: string;
	showOnTop?: boolean;
}

export interface ExternalLink {
	label: string;
	href: string;
	description: string;
}
