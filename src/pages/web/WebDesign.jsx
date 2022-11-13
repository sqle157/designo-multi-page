import expressImg from '../../assets/web-design/desktop/image-express.jpg';
import trasnferImg from '../../assets/web-design/desktop/image-transfer.jpg';
import photonImg from '../../assets/web-design/desktop/image-photon.jpg';
import builderImg from '../../assets/web-design/desktop/image-builder.jpg';
import blogrImg from '../../assets/web-design/desktop/image-blogr.jpg';
import campImg from '../../assets/web-design/desktop/image-camp.jpg';
import Banner from '../../shared/banner/Banner';
import bannerPattern from '../../assets/web-design/desktop/bg-pattern-intro-web.svg';
import ProjectsGrid from '../../shared/projectsGrid/ProjectsGrid';
import OtherCategories from '../../shared/categories/OtherCategories';
import appDesign from '../../assets/home/desktop/image-app-design.jpg';
import graphicDesign from '../../assets/home/desktop/image-graphic-design.jpg';

function WebDesign() {
	document.body.className = 'design-route';

	// List of all projects of the current category
	const projectList = [
		{
			name: 'Express',
			img: expressImg,
			description: 'A multi-carrier shipping website for ecommerce businesses',
		},
		{
			name: 'Transfer',
			img: trasnferImg,
			description: 'Site for low-cost money transfers and sending money within seconds',
		},
		{
			name: 'Photon',
			img: photonImg,
			description:
				'A state-of-the-art music player with high-resolution audio and DSP effects',
		},
		{
			name: 'Builder',
			img: builderImg,
			description: 'Connects users with local contractors based on their location',
		},
		{
			name: 'Blogr',
			img: blogrImg,
			description: 'Blogr is a platform for creating an online blog or publication',
		},
		{
			name: 'Camp',
			img: campImg,
			description: 'Get expert training in coding, data, design, and digital marketing',
		},
	];

	// List of other categories
	const otherCategories = [
		{
			name: 'App Design',
			img: appDesign,
			to: '/app-design',
			type: 'app',
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
				categoryName='Web Desgin'
				categoryDescription='We build websites that serve as powerful marketing tools 
and bring memorable brand experiences.'
				bannerPattern={bannerPattern}
				position='right'
			/>

			<ProjectsGrid projects={projectList} />
			<OtherCategories categories={otherCategories} />
		</>
	);
}
export default WebDesign;
