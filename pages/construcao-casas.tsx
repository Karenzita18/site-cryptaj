
import HeroPage from '../components/Hero/HeroPage';
import Layout from '../components/Layout';
import FeedBeneficios from '../components/casas/FeedBeneficios';
import FeedHistoria from '../components/casas/FeedHistoria';
import FeedOferecem from '../components/casas/FeedOferecem';


export default function ConstrucaoCasas() {
	return (
		<Layout
			ogTitle="Construção Casas"
			ogDescription="Lorem"
			ogImageUrl="/"
			ogKeywords="/"
			ogOriginalUrl="/"
		>
		<HeroPage
			title="Construção Casas"
			subtitle="Lorem"
			imgSrc="https://via.placeholder.com/1920x490"
      	/>
		<FeedHistoria/>
		<FeedOferecem/>
		<FeedBeneficios/>
		</Layout>
	);
}

