import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import darkLogo from './assets/shared/desktop/logo-dark.png';
import ScrollToTop from './shared/ScrollToTop';
import Navbar from './shared/navbar/Navbar';
import Footer from './shared/footer/Footer';
import Home from './pages/home/Home';
import WebDesign from './pages/web/WebDesign';
import AppDesign from './pages/app/AppDesign';
import GraphicDesign from './pages/graphic/GraphicDesign';
import About from './pages/about/About';
import Location from './pages/location/Location';
import Contact from './pages/contact/Contact';
import Error from './pages/404/Error';

function App() {
	return (
		<>
			<Router>
				<Navbar logo={darkLogo} id='header-nav' />
				<main>
					<ScrollToTop>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/web-design' element={<WebDesign />} />
							<Route path='/app-design' element={<AppDesign />} />
							<Route path='/graphic-design' element={<GraphicDesign />} />
							<Route path='/about' element={<About />} />
							<Route path='/location' element={<Location />} />
							<Route path='/contact' element={<Contact />} />
							<Route path='/*' element={<Error />} />
						</Routes>
					</ScrollToTop>
				</main>
				<Footer />
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;
