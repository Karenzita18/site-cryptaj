export type PropsLayout = {
	ogTitle: string;
	ogDescription: string;
	ogImageUrl?: string;
	ogOriginalUrl?: string;
	ogKeywords?: string;
	children?: JSX.Element | JSX.Element[];
};

export type PropsCardService = {
	title: string;
	description: string;
	categoria?: 'Tratamentos Corporais' | 'Tratamentos Faciais';
	funcao: string[];
	href: string;
	style?: '50' | '100' | '200' | '300' | '400';
	icon: JSX.Element;
};
