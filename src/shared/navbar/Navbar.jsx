import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ logo, id }) {
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		document.body.style.overflowY = openMenu ? 'hidden' : 'auto';
	}, [openMenu]);

	return (
		<header id={id} className='secondary-container flex primary-header'>
			<Link to='/'>
				<img src={logo} alt='logo' className='logo' />
			</Link>
			<nav className={`${openMenu ? 'overlay' : ''}`}>
				<ul
					className={`flex navbar ${
						openMenu ? 'mobile-open' : 'mobile-close'
					}`}>
					<li>
						<Link
							to='/about'
							className='navbar__link'
							onClick={() => setOpenMenu(false)}>
							Our Company
						</Link>
					</li>
					<li>
						<Link
							to='/location'
							className='navbar__link'
							onClick={() => setOpenMenu(false)}>
							Locations
						</Link>
					</li>
					<li>
						<Link
							to='/contact'
							className='navbar__link'
							onClick={() => setOpenMenu(false)}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
			<div
				className={`menu menu-${openMenu ? 'close' : 'open'}`}
				onClick={() => setOpenMenu((prevState) => !prevState)}></div>
		</header>
	);
}
export default Navbar;
