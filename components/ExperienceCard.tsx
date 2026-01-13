import React from "react";

interface ExperienceCardProps {
	role: string;
	company: string;
	timeline: string;
	whatIDid: string[];
	techStack: string[];
}
const ExperienceCard = ({
	role,
	company,
	timeline,
	whatIDid,
	techStack,
}: ExperienceCardProps) => {
	return (
		<section className="p-3 bg-[#1a1a1a] border-[#262626] max-w-xl border-2 pb-8 rounded-lg ">
			<header>
				<div className="flex items-center justify-between mt-4">
					<div>
						<h2 className="text-blue-300 text-2xl sm:text-3xl md:text-4xl font-bold">
							{role}
						</h2>
						<p>{company}</p>
					</div>
					<p className="text-sm text-[#8f8f8f] ">{timeline}</p>
				</div>
			</header>

			<ul className="list-disc mt-6 pl-5 marker:text-blue-300  flex flex-col gap-4 max-w-150">
				{whatIDid.map((desc) => (
					<li className="text-[#b3b3b3]" key={desc}>
						{desc}
					</li>
				))}
			</ul>

			<section className="mt-6">
				<h3 className="font-semibold text-lg mb-3">Tech Stack</h3>
				<div className="flex gap-3 flex-wrap ml-3 max-w-[80%]">
					{techStack.map((stack) => (
						<p
							key={stack}
							className="text-center text-xs text-black  bg-blue-300/40 border-2 border-blue-400 rounded-full p-1 px-2"
						>
							{stack}
						</p>
					))}
				</div>
			</section>
		</section>
	);
};

export default ExperienceCard;
