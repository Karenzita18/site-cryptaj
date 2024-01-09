
import HeroPage from '../components/Hero/HeroPage';
import Layout from '../components/Layout';
import FeedForm from '../components/contato/FeedForm';


export default function Contato() {
	return (
		<Layout
			ogTitle="Contato"
			ogDescription="Lorem"
			ogImageUrl="/"
			ogKeywords="/"
			ogOriginalUrl="/"
		>
		<HeroPage
			title="Contato"
			subtitle="Lorem"
			imgSrc="https://via.placeholder.com/1920x490"
      	/>
		<FeedForm/>
		</Layout>
	);
}

