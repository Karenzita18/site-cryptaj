
import HeroPage from '../components/Hero/HeroPage';
import Layout from '../components/Layout';
import FeedDiferencial from '../components/quem/FeedDiferencial';
import FeedHistoria from '../components/quem/FeedHistoria';
import FeedMotivacoes from '../components/quem/FeedMotivacoes';


export default function QuemSomos() {
	return (
		<Layout
			ogTitle="Quem Somos"
			ogDescription="Lorem"
			ogImageUrl="/"
			ogKeywords="/"
			ogOriginalUrl="/"
		>
		<HeroPage
			title="Quem Somos"
			subtitle="Lorem"
			imgSrc="https://via.placeholder.com/1920x490"
      	/>
		<FeedHistoria/>
		<FeedMotivacoes/>
		<FeedDiferencial/>
		</Layout>
	);
}

