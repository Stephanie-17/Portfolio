import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
	id: number;
	projectName: string;
	projectLink: string;
	projectGithubLink: string;
	projectDescription: string;
	projectImage: string;
	projectSkills: string[];
}
const ProjectCard = ({
	id,
	projectName,
	projectLink,
	projectImage,
	projectDescription,
	projectSkills,
	projectGithubLink,
}: ProjectCardProps) => {
	return (
		<div className="flex items-center flex-col max-w-140 p-2">
			<div className="w-full border-3 border-[#262626] bg-[#1a1a1a] rounded-lg">
				<header className="w-full flex gap-3 p-4 py-4">
					<h2 className="font-bold text-4xl md:text-5xl text-[#434343]">
						0{id}
					</h2>

					<div>
						<p className="font-semibold text-xl md:text-2xl text-blue-300">
							{projectName}
						</p>
						<p className="text-xs md:text-sm">{projectDescription}</p>
					</div>
					<div className="flex flex-col gap-5 md:gap-10">
						<Link href={projectLink}>
							<button className=" text-sm cursor-pointer">
								<FaArrowUpRightFromSquare />
							</button>
						</Link>
						<Link href={projectGithubLink}>
							<button className=" cursor-pointer">
								<FaGithub />
							</button>
						</Link>
					</div>
				</header>

				<section className="flex items-center justify-center">
					<Image
						className=" w-[90%]"
						src={projectImage}
						alt="A picture of my Project"
						width={300}
						height={300}
					/>
				</section>
				<section className="mt-10 mb-4  flex px-2 gap-2 flex-wrap md:self-start">
					{projectSkills.map((skill) => (
						<p
							key={skill}
							className="text-center text-xs text-black  bg-blue-300/40 border-2 border-blue-400 rounded-full p-1 px-2"
						>
							{skill}
						</p>
					))}
				</section>
			</div>
		</div>
	);
};

export default ProjectCard;
