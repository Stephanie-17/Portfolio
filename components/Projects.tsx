import React from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "@/app/data/projects";
const Projects = () => {
	return (
		<div
			id="projects"
			className="flex flex-col justify-center items-center mt-40 "
		>
			<div className="bg-blue-300/30 w-50 rounded-4xl p-2 border-2 border-blue-500 mb-7">
				<p className="text-center text-xs">Check out my projects🌸⚙️</p>
			</div>
			<header>
				<h2 className="font-semibold text-4xl md:text-5xl text-center mb-10">
					What have I been working on?
				</h2>
			</header>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center justify-center mt-12">
				{projectData.map((project) => (
					<ProjectCard
						key={project.id}
						id={project.id}
						projectName={project.projectName}
						projectLink={project.projectLiveLink}
						projectImage={project.projectImageUrl}
						projectDescription={project.projectDescription}
						projectSkills={project.projectSkills}
						projectGithubLink={project.projectGithubLink}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
