import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experienceData } from "@/app/data/experience";

const Experience = () => {
	return (
		<div
			id="experience"
			className="flex flex-col justify-center items-center mt-40 "
		>
			<div className="bg-blue-300/30 w-40 rounded-4xl p-2 border-2 border-blue-500 mb-7">
				<p className="text-center text-xs">Who I&apos;ve worked with👥</p>
			</div>
			<header>
				<h2 className="font-semibold text-4xl md:text-5xl text-center mb-10">
					My Job Experience
				</h2>
			</header>

			<section className="grid grid-cols-1 lg:grid-cols-2  gap-10 justify-center items-stretch auto-rows-fr mt-10 p-3">
				{experienceData.map((exp) => (
					<ExperienceCard
						key={exp.id}
						role={exp.role}
						company={exp.company}
						timeline={exp.timeline}
						whatIDid={exp.whatIDid}
						techStack={exp.techStack}
					/>
				))}
			</section>
		</div>
	);
};

export default Experience;
