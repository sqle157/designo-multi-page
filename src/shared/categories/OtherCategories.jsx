import { Link } from 'react-router-dom';
import rightArrow from '../../assets/shared/desktop/icon-right-arrow.svg';
import './OtherCategories.css';

function OtherCategories({ categories }) {
	return (
		<section className='secondary-container grid other-categories'>
			{categories.map((category, index) => (
				<Link key={index} to={category.to} className={`category category-${category.type}`}>
					<div>
						<h2>{category.name}</h2>
						<p className='flex category__link'>
							View Projects{' '}
							<i>
								<img src={rightArrow} alt='' />
							</i>
						</p>
					</div>
				</Link>
			))}
		</section>
	);
}
export default OtherCategories;
