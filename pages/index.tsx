import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import FeedBlog from '../components/Feed/FeedBlog';
import Layout from '../components/Layout';
import PostType from '../interfaces/post';
import { getAllPosts } from '../lib/api';
import styles from '../styles/Home.module.css';
import HeroHome from '../components/Hero/Home';
import FeedHistoria from '../components/Feed/FeedHistoria';
import FeedBanner from '../components/Feed/FeedBanner';

type Props = {
	allPosts: PostType[];
};

export default function Home({ allPosts }: Props) {
	return (
		<Layout
			ogTitle="Inicio"
			ogDescription="Lorem"
			ogImageUrl="/"
			ogKeywords="/"
			ogOriginalUrl="/"
		>
			<HeroHome/>
			<FeedHistoria/>
			<FeedBanner/>
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
