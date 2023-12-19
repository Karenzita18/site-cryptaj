import { formatDistance, subDays } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';
import React from 'react';
import {
	FaFacebook,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaRegEnvelope,
	FaWhatsapp,
} from 'react-icons/fa';
import PostType from '../../interfaces/post';

interface Props {
	data: PostType[];
}

const SideBar: React.FC<Props> = ({ data }) => {
	return (
		<div className="flex flex-col gap-5 md:gap-10 h-fit">
			<div className="bg-white">
				<h2 className="text-xl font-bold px-5 py-3 bg-brand-200 text-white">
					Últimas postagens
				</h2>
				<div className="flex flex-col gap-3 text-zinc-500 px-5 divide-y pb-5">
					{data?.map(
						(post, i) =>
							i < 3 && (
								<article key={i} className="py-3">
									<span className="text-sm">
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
									<h1 className=" font-semibold">
										<Link href={`/blog/${post.slug}`}>{post.title}</Link>
									</h1>
								</article>
							)
					)}
				</div>
			</div>
			<div className="bg-white">
				<h2 className="text-xl font-bold px-5 py-3 bg-brand-200 text-white">
					Redes Socias
				</h2>
				<div className="flex gap-3 text-zinc-500 px-5 divide-y py-5">
					<a
						href="/"
						className="bg-brand-100 h-8 w-8 flex items-center justify-center text-white rounded-full"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="sr-only">Nosso Facebook</span>
						<FaFacebookF></FaFacebookF>
					</a>
					<a
						href="/"
						className="bg-brand-100 h-8 w-8 flex items-center justify-center text-white rounded-full"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="sr-only">Nosso WhatsApp</span>
						<FaWhatsapp></FaWhatsapp>
					</a>
					<a
						href="/"
						className="bg-brand-100 h-8 w-8 flex items-center justify-center text-white rounded-full"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="sr-only">Nosso Instagram</span>
						<FaInstagram></FaInstagram>
					</a>
				</div>
			</div>
			{/*<div className="bg-white">
				<h2 className="text-xl font-bold px-5 py-3 bg-zinc-200">Pesquisar</h2>
				<div className="text-zinc-500 px-5 divide-y py-5">
					<input
						type="text"
						className="py-2 px-5 shadow outline-none bg-zinc-100"
					/>
				</div>
			</div>*/}
		</div>
	);
};

export default SideBar;
