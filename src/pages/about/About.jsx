import canImg from '../../assets/shared/desktop/illustration-canada.svg';
import ausImg from '../../assets/shared/desktop/illustration-australia.svg';
import engImg from '../../assets/shared/desktop/illustration-united-kingdom.svg';
import PrimaryBanner from './PrimaryBanner';
import SecondaryBanner from './SecondaryBanner';
import LocationSection from './LocationSection';
import AccentBanner from './AccentBanner';
import './About.css';

function About() {
	document.body.className = 'about-route';

	const locationList = [
		{
			country: 'Canada',
			img: canImg,
		},
		{
			country: 'Australia',
			img: ausImg,
		},
		{
			country: 'United Kingdom',
			img: engImg,
		},
	];

	return (
		<section id='about' className='primary-container'>
			<PrimaryBanner />
			<SecondaryBanner />
			<LocationSection locations={locationList} />
			<AccentBanner />
		</section>
	);
}
export default About;
