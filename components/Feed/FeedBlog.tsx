import { formatDistance, subDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';
import React from 'react';
import PostType from '../../interfaces/post';

interface Props {
	data: PostType[];
}

const FeedBlog: React.FC<Props> = ({ data }) => {
	return (
		<section className="bg-zinc-100">
			<div className="row">
				<div className="container">
					<h1 className="text-4xl text-brand-400 font-semibold text-center text-brand-100">
						Últimas Postagens
					</h1>
					<p className="text-center mt-2 mb-4 text-brand-200">
						Fique por dentro das últimas notícias
					</p>
					<div className="grid md:grid-cols-3 gap-10 mt-10">
						{data.map((post, index) => (
							<article key={index} className="group">
								<figure className="overflow-hidden">
									<img
										className="rounded group-hover:scale-105 duration-500"
										src={post.coverImage}
										alt=""
									/>
									<figcaption hidden>{post.title}</figcaption>
								</figure>
								<span className="text-sm text-black mt-3 block">
									{formatDistance(
										subDays(
											//data do post
											new Date(post.date),
											//data minima, caso seja inferior a um dia ele vai colocar o valor abaixo
											0
										),
										new Date(),
										{ addSuffix: true, locale: ptBR }
									)}{' '}
									| CrypTaj
								</span>
								<h1 className="text-brand-200 font-semibold text-lg my-3">
									{post.title}
								</h1>
								<p className="text-zinc-600 leading-relaxed">
									{post.excerpt}[...]
								</p>
								<Link
									href={`/blog/${post.slug}`}
									className="bg-brand-200 text-white tracking-wide font-medium hover:scale-105 duration-300 py-1 px-14 w-fit block mt-4 rounded-2xl"
								>
									Ler mais
								</Link>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeedBlog;
