import bannerPattern from '../../assets/app-design/desktop/bg-pattern-intro-app.svg';
import webDesign from '../../assets/home/desktop/image-web-design-small.jpg';
import graphicDesign from '../../assets/home/desktop/image-graphic-design.jpg';
import airFilterImg from '../../assets/app-design/desktop/image-airfilter.jpg';
import eyeCamImg from '../../assets/app-design/desktop/image-eyecam.jpg';
import faceItImg from '../../assets/app-design/desktop/image-faceit.jpg';
import toDoImg from '../../assets/app-design/desktop/image-todo.jpg';
import loopStudiosImg from '../../assets/app-design/desktop/image-loopstudios.jpg';
import Banner from '../../shared/banner/Banner';
import ProjectsGrid from '../../shared/projectsGrid/ProjectsGrid';
import OtherCategories from '../../shared/categories/OtherCategories';

function AppDesign() {
	document.body.className = 'design-route';

	// List of all projects of the current category
	const projectList = [
		{
			name: 'Airfilter',
			img: airFilterImg,
			description: 'Solving the problem of poor indoor air quality by filtering the air',
		},
		{
			name: 'Eyecam',
			img: eyeCamImg,
			description: 'Product that lets you edit your favorite photos and videos at any time',
		},
		{
			name: 'Faceit',
			img: faceItImg,
			description: 'Get to meet your favorite internet superstar with the faceit app',
		},
		{
			name: 'Todo',
			img: toDoImg,
			description: 'A todo app that features cloud sync with light and dark mode',
		},
		{
			name: 'LOOPSTUDIOS',
			img: loopStudiosImg,
			description: 'A VR experience app made for Loopstudios',
		},
	];

	// List of other categories
	const otherCategories = [
		{
			name: 'Web Design',
			img: webDesign,
			to: '/web-design',
			type: 'web',
		},
		{
			name: 'Graphic Design',
			img: graphicDesign,
			to: '/graphic-design',
			type: 'graphic',
		},
	];

	return (
		<>
			<Banner
				categoryName='App Design'
				categoryDescription='Our mobile designs bring intuitive digital solutions
 to your customers right at their fingertips.'
				bannerPattern={bannerPattern}
				position='left'
			/>

			<ProjectsGrid projects={projectList} />
			<OtherCategories categories={otherCategories} />
		</>
	);
}
export default AppDesign;
