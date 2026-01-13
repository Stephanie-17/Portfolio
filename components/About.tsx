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
						I’m a Frontend Developer with over a year of hands-on experience
						building modern, high-quality web applications. I work mainly with
						HTML, CSS, and JavaScript, and I’m very comfortable using React and
						Next.js to create fast, scalable, and maintainable interfaces. I
						also use Git daily, collaborating through branches and pull requests
						as part of a team workflow. <br />
						<br />
						I’m big on details. I enjoy turning designs into pixel-perfect,
						accessible, and responsive interfaces that feel good to use and look
						great on every screen size. Good UX matters to me, and I like
						thinking through how users actually interact with what I’m building,
						not just how it looks. <br />
						<br />
						I love collaborating with others, sharing ideas, and bringing
						concepts to life through clean, thoughtful code. I communicate
						clearly, adapt quickly, and thrive in team environments, especially
						when there’s room to learn, experiment, and build something
						meaningful.
						<br />
						<br /> When I’m not coding, you’ll probably find me watching
						YouTube, jamming to music, crocheting, or catching up on my
						favourite sitcoms. Crocheting is basically programming with yarn,
						you follow patterns, repeat steps, fix mistakes when something goes
						wrong, and trust the process even when it doesn’t make sense at
						first. That same patience and problem-solving mindset shows up in
						how I build interfaces too.
					</p>
				</section>
			</div>
		</div>
	);
};

export default About;
