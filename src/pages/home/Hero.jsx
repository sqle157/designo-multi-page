import Button from '../../shared/button/Button';
import heroImage from '../../assets/home/desktop/image-hero-phone.png';

function Hero() {
	return (
		<section className='primary-container hero grid'>
			<div className='hero__intro flex'>
				<h1 className='hero__heading'>
					Award-winning custom designs and digital branding solutions
				</h1>
				<p className='hero__paragraph'>
					With over 10 years in the industry, we are experienced in creating fully responsive
					websites, app design, and engaging brand experiences. Find out more about our
					services.
				</p>
				<Button text='Learn More' to='/about' btnType='white' />
			</div>
			<div className='hero__img'>
				<img src={heroImage} alt='hero img' />
			</div>
		</section>
	);
}
export default Hero;
