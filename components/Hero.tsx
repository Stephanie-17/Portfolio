import React from "react";
import Image from "next/image";
const Hero = () => {
	return (
		<main className="pt-16 lg:pt-25 flex items-center max-md:flex-col justify-between md:p-5 max-w-7xl">
			<div className="hero-text text-center md:text-left mb-4 flex max-md:items-center  flex-col ">
				<h1 className="font-bold text-blue-200 text-4xl mb-1 lg:text-6xl">
					Stephanie?
				</h1>
				<h2 className="text-3xl mb-6">
					Hi, that&apos;s <span className="font-semibold ">ME.</span>
				</h2>
				<p className="max-sm:w-75 sm:max-md:w-md md:w-100 text-lg">
					I&apos;m guessing you want to know who I am, what I do and why you
					NEED to work with me. <br /> Well, keep scrolling and you&apos;ll find
					out
				</p>
			</div>

			<div className="hero-image w-80 lg:w-100 mt-12 rounded-full bg-blue-300 p-2 flex items-center">
				<Image
					className="rounded-full  lg:w-md  "
					src={"/placeholder.jpg"}
					alt="A placeholder picture of me"
					width={300}
					height={300}
				/>
			</div>
		</main>
	);
};

export default Hero;
