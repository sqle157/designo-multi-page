import Hero from './Hero';
import CategoriesSection from './CategoriesSection';
import Features from './Features';
import './Home.css';

function Home() {
	document.body.className = '';

	return (
		<>
			<Hero />
			<CategoriesSection />
			<Features />
		</>
	);
}
export default Home;
