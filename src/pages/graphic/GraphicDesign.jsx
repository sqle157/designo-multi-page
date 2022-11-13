import bannerPattern from '../../assets/graphic-design/desktop/bg-pattern-intro-graphic.svg';
import changeImg from '../../assets/graphic-design/desktop/image-change.jpg';
import boxWaterImg from '../../assets/graphic-design/desktop/image-boxed-water.jpg';
import scienceImg from '../../assets/graphic-design/desktop/image-science.jpg';
import webDesign from '../../assets/home/desktop/image-web-design-small.jpg';
import appDesign from '../../assets/home/desktop/image-app-design.jpg';
import Banner from '../../shared/banner/Banner';
import ProjectsGrid from '../../shared/projectsGrid/ProjectsGrid';
import OtherCategories from '../../shared/categories/OtherCategories';

function GraphicDesign() {
	document.body.className = 'design-route';

	// List of all projects of the current category
	const projectList = [
		{
			name: 'Tim Brown',
			img: changeImg,
			description: 'A book cover designed for Tim Brown’s new release, ‘Change’',
		},
		{
			name: 'Boxed Water',
			img: boxWaterImg,
			description: 'A simple packaging concept made for Boxed Water',
		},
		{
			name: 'Science',
			img: scienceImg,
			description: 'A poster made in collaboration with the Federal Art Project',
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
			name: 'App Design',
			img: appDesign,
			to: '/app-design',
			type: 'app',
		},
	];

	return (
		<>
			<Banner
				categoryName='Graphic Design'
				categoryDescription='We deliver eye-catching branding materials that are 
tailored to meet your business objectives.'
				bannerPattern={bannerPattern}
				position='left'
			/>

			<ProjectsGrid projects={projectList} />

			<OtherCategories categories={otherCategories} />
		</>
	);
}
export default GraphicDesign;
