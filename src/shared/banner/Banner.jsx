import './Banner.css';

function Banner({ categoryName, categoryDescription, bannerPattern, position }) {
	return (
		<section
			className='primary-container banner'
			style={{
				background: `url(${bannerPattern}) no-repeat ${position}/auto, hsl(var(--clr-primary-peach))`,
			}}>
			<h1>{categoryName}</h1>
			<p className='text-white'>{categoryDescription}</p>
		</section>
	);
}
export default Banner;
