import { Link } from 'react-router-dom';
import rightArrow from '../../assets/shared/desktop/icon-right-arrow.svg';

function CategoriesSection() {
	return (
		<section className='secondary-container categories grid'>
			<Link to='/web-design' className='category category-web'>
				<div>
					<h2>Web Design</h2>
					<p className='flex category__link'>
						View Projects{' '}
						<i>
							<img src={rightArrow} alt='' />
						</i>
					</p>
				</div>
			</Link>
			<Link to='/app-design' className='category category-app'>
				<div>
					<h2>App Design</h2>
					<p className='flex category__link'>
						View Projects{' '}
						<i>
							<img src={rightArrow} alt='' />
						</i>
					</p>
				</div>
			</Link>
			<Link to='/graphic-design' className='category category-graphic'>
				<div>
					<h2>Graphic Design</h2>
					<p className='flex category__link'>
						View Projects{' '}
						<i>
							<img src={rightArrow} alt='' />
						</i>
					</p>
				</div>
			</Link>
		</section>
	);
}
export default CategoriesSection;
