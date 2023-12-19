import type Author from './author';

type PostType = {
	slug: string;
	title: string;
	id: number;
	date: string;
	coverImage: string;
	author: Author;
	keywords: string;
	excerpt: string;
	ogImage: {
		url: string;
	};
	content: string;
	iframe?: { iframe: string; beforeIframe: string; afterIframe: string };
};

export default PostType;
