import './Location.css';

function Location() {
	document.body.className = 'location-route';

	return (
		<section className='locations-grid grid primary-container'>
			<div className='location-info can-info'>
				<h2 className='text-primary-peach'>Canada</h2>
				<div className='grid'>
					<div>
						<p>
							<span>Designo Central Office</span>
						</p>
						<p>3886 Wellington Street </p>
						<p>Toronto, Ontario M9C 3J5</p>
					</div>
					<div>
						<p>
							<span>Contact</span>
						</p>
						<p>P : +1 253-863-8967</p>
						<p>M : contact@designo.co</p>
					</div>
				</div>
			</div>
			<div className='location-map can-map'></div>
			<div className='location-info aus-info'>
				<h2 className='text-primary-peach'>Australia</h2>
				<div className='grid'>
					<div>
						<p>
							<span>Designo AU Office</span>
						</p>
						<p>19 Balonne Street</p>
						<p>New South Wales 2443</p>
					</div>
					<div>
						<p>
							<span>Contact</span>
						</p>
						<p>P : (02) 6720 9092</p>
						<p>M : contact@designo.au</p>
					</div>
				</div>
			</div>
			<div className='location-map aus-map'></div>
			<div className='location-info eng-info'>
				<h2 className='text-primary-peach'>United Kingdom</h2>
				<div className='grid'>
					<div>
						<p>
							<span>Designo UK Office</span>
						</p>
						<p>13 Colorado Way</p>
						<p>Rhyd-y-fro SA8 9GA</p>
					</div>
					<div>
						<p>
							<span>Contact</span>
						</p>
						<p>P : 078 3115 1400</p>
						<p>M : contact@designo.uk</p>
					</div>
				</div>
			</div>
			<div className='location-map eng-map'></div>
		</section>
	);
}
export default Location;
