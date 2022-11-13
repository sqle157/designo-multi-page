import canImg from '../../assets/shared/desktop/illustration-canada.svg';
import ausImg from '../../assets/shared/desktop/illustration-australia.svg';
import engImg from '../../assets/shared/desktop/illustration-united-kingdom.svg';
import FormContainer from './FormContainer';
import LocationSection from '../about/LocationSection';
import './Contact.css';

function Contact() {
	document.body.className = 'contact-route';

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
		<div className='primary-container'>
			<FormContainer />
			<LocationSection locations={locationList} />
		</div>
	);
}
export default Contact;
