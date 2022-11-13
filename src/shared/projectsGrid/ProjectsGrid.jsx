import './ProjectsGrid.css';

function ProjectsGrid({ projects }) {
	return (
		<section className='web-projects grid secondary-container'>
			{projects.map((project, index) => (
				<article key={index} className='project-card grid'>
					<img src={project.img} alt='express project' />
					<div className='project__intro flex'>
						<h3 className='text-primary-peach'>{project.name}</h3>
						<p>{project.description}</p>
					</div>
				</article>
			))}
		</section>
	);
}
export default ProjectsGrid;
