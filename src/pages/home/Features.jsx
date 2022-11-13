import passionImg from '../../assets/home/desktop/illustration-passionate.svg';
import resourceImg from '../../assets/home/desktop/illustration-resourceful.svg';
import friendlyImg from '../../assets/home/desktop/illustration-friendly.svg';

function Features() {
	return (
		<section className='features secondary-container grid'>
			<div className='feature flex'>
				<div className='feature__illu'>
					<img src={passionImg} alt='passion illustration' />
				</div>
				<div>
					<h3>Passionate</h3>
					<p>
						Each project starts with an in-depth brand research to ensure we only create
						products that serve a purpose. We merge art, design, and technology into exciting
						new solutions.
					</p>
				</div>
			</div>
			<div className='feature flex'>
				<div className='feature__illu'>
					{' '}
					<img src={resourceImg} alt='passion illustration' />
				</div>

				<div>
					<h3>Resourceful</h3>
					<p>
						Everything that we do has a strategic purpose. We use an agile approach in all of
						our projects and value customer collaboration. It guarantees superior results that
						fulfill our clients’ needs.
					</p>
				</div>
			</div>
			<div className='feature flex'>
				<div className='feature__illu'>
					<img src={friendlyImg} alt='passion illustration' />
				</div>

				<div>
					<h3>Friendly</h3>
					<p>
						We are a group of enthusiastic folks who know how to put people first. Our success
						depends on our customers, and we strive to give them the best experience a company
						can provide.
					</p>
				</div>
			</div>
		</section>
	);
}
export default Features;
