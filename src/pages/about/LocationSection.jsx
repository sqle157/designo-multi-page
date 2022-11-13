import Button from '../../shared/button/Button';

function LocationSection({ locations }) {
	return (
		<section className='locations grid'>
			{locations.map((location, index) => (
				<div key={index} className='location flex'>
					<div className='location__img'>
						<img src={location.img} alt='Canada' />
					</div>
					<div>
						<h3>{location.country}</h3>
						<Button text='See Location' to='/location' btnType='primary' />
					</div>
				</div>
			))}
		</section>
	);
}
export default LocationSection;
