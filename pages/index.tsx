import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import FeedBlog from '../components/Feed/FeedBlog';
import Layout from '../components/Layout';
import PostType from '../interfaces/post';
import { getAllPosts } from '../lib/api';
import styles from '../styles/Home.module.css';
import HeroHome from '../components/Hero/Home';

type Props = {
	allPosts: PostType[];
};

export default function Home({ allPosts }: Props) {
	return (
		<Layout
			ogTitle="Inicio"
			ogDescription="Beleza com naturalidade e delicadeza: Biomedicina Estética."
			ogImageUrl="https://www.clinicakarencampos.com.br/webp/og_image.webp"
			ogKeywords="Centro de Estética, Avançado, Tratamentos, Clínica, Karen Campos, Americana, Consulta"
			ogOriginalUrl="https://www.clinicakarencampos.com.br/"
		>
			<HeroHome/>
			<FeedBlog data={[allPosts[0], allPosts[1], allPosts[2]]} />
		</Layout>
	);
}

export const getStaticProps = async () => {
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'author',
		'coverImage',
		'excerpt',
	]);

	return {
		props: { allPosts },
	};
};
