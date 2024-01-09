
import HeroPage from '../components/Hero/HeroPage';
import Layout from '../components/Layout';
import FeedBeneficios from '../components/casas/FeedBeneficios';
import FeedHistoria from '../components/criptas/FeedHistoria';
import FeedOferecem from '../components/criptas/FeedOferecem';


export default function CriptasFunerarias() {
	return (
		<Layout
			ogTitle="Criptas Funerárias"
			ogDescription="Lorem"
			ogImageUrl="/"
			ogKeywords="/"
			ogOriginalUrl="/"
		>
		<HeroPage
			title="Criptas Funerárias"
			subtitle="Lorem"
			imgSrc="https://via.placeholder.com/1920x490"
      	/>
		<FeedHistoria/>
		<FeedOferecem/>
		<FeedBeneficios/>
		</Layout>
	);
}

