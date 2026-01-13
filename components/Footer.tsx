"use client";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
const Footer = () => {
	const scrollTo = (id: string) => {
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
		});
	};
	const date = new Date();
	const currentYear = date.getFullYear();
	return (
		<footer className="mb-4">
			<p className="text-center mx-auto max-sm:w-xs">
				&copy; {currentYear}. All rights reserved. Made with 🩵 by SEA
			</p>
			<button className="p-2 bg-white flex items-center fixed bottom-7 right-5 ">
				<FaArrowUp
					className="text-black  text-2xl"
					onClick={() => scrollTo("home")}
				/>
			</button>
		</footer>
	);
};

export default Footer;
