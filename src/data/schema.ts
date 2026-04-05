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
];
