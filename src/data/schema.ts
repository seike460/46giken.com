import { externalLinks, siteIdentity } from "./identity";

export const baseJsonLd = [
	{
		"@context": "https://schema.org",
		"@type": "Person",
		name: siteIdentity.personName,
		alternateName: `Shiro Seike ${siteIdentity.handle}`,
		url: "https://46giken.com",
		jobTitle: siteIdentity.role,
		worksFor: {
			"@type": "Organization",
			name: "Fusic",
		},
		address: {
			"@type": "PostalAddress",
			addressLocality: "Fukuoka",
			addressCountry: "JP",
		},
		description: siteIdentity.summary,
		knowsAbout: siteIdentity.focusAreas,
		sameAs: siteIdentity.sameAs,
	},
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		name: siteIdentity.siteName,
		alternateName: siteIdentity.siteNameEn,
		url: "https://46giken.com",
		founder: {
			"@type": "Person",
			name: siteIdentity.personName,
		},
		sameAs: externalLinks.map((link) => link.href),
	},
	{
		"@context": "https://schema.org",
		"@type": "Service",
		provider: { "@type": "Organization", name: siteIdentity.siteName },
		name: "構成レビュー / 技術アドバイザリー",
		description:
			"AWS Serverless を前提とした構成レビューと技術相談。1回 60〜90分のオンラインセッション。",
		areaServed: { "@type": "Country", name: "JP" },
		offers: {
			"@type": "Offer",
			priceCurrency: "JPY",
			price: "30000",
			description: "1回 60〜90分のオンラインセッション（税別）",
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "Service",
		provider: { "@type": "Organization", name: siteIdentity.siteName },
		name: "登壇・研修",
		description:
			"Serverless、Observability、設計をテーマにした技術登壇・社内研修・ハンズオン。全国対応。",
		areaServed: { "@type": "Country", name: "JP" },
		offers: {
			"@type": "Offer",
			priceCurrency: "JPY",
			price: "50000",
			description: "形式・拘束時間により個別見積もり（税別・渡航費宿泊費実費）",
		},
	},
	{
		"@context": "https://schema.org",
		"@type": "Service",
		provider: { "@type": "Organization", name: siteIdentity.siteName },
		name: "技術広報支援",
		description:
			"発信テーマの棚卸し、記事・スライド・登壇企画の整理など、技術広報を継続できる形に支援する月額顧問型サービス。",
		areaServed: { "@type": "Country", name: "JP" },
		offers: {
			"@type": "Offer",
			priceCurrency: "JPY",
			price: "50000",
			description: "月額顧問型（税別）",
		},
	},
];
