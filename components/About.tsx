import React from "react";

const About = () => {
	return (
		<div id="about" className="flex justify-center mt-40 px-5">
			<div className=" flex items-center flex-col max-w-5xl">
				<div className="bg-blue-300/30 w-40 rounded-4xl p-2 border-2 border-blue-500 mb-7">
					<p className="text-center text-xs">Learn a bit about me 💻</p>
				</div>

				<header>
					<h2 className="font-semibold text-4xl md:text-5xl">Who am I?</h2>
				</header>

				<section className="mt-12 w-full bg-blue-200 p-4 rounded-3xl text-black">
					<p className="text-center">
						I am a Frontend Developer with over a year of hands-on experience
						building modern, high-quality web interfaces. I specialize in HTML,
						CSS, and JavaScript, and I work extensively with frameworks like
						React and Next.js to build fast, scalable applications. I’m also
						very comfortable using Git for version control in team-based and
						solo projects. I have a strong eye for detail and solid experience
						creating responsive layouts that are pixel-perfect, accessible, and
						user-focused. I place a high priority on good UX and making sure
						interfaces look and perform well across all devices and screen
						sizes. I’m a strong communicator and collaborator, which allows me
						to work effectively within teams, align closely with designers and
						developers, and deliver polished, reliable frontend solutions.
					</p>
				</section>
			</div>
		</div>
	);
};

export default About;
