"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const scrollTo = (id: string) => {
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
		});
	};
	return (
		<nav
			id="home"
			className="pt-4 relative py-3 pl-2 sticky top-0 z-50 bg-[#141414]/50 backdrop-blur-md"
		>
			<div className="flex  items-center justify-between px-5 xl:mx-25">
				<h2 className="font-semibold text-2xl text-blue-200">SEA</h2>

				<div className="flex gap-7 lg:gap-15 xl:gap-20 max-md:hidden">
					<a
						onClick={() => scrollTo("about")}
						className="cursor-pointer hover:text-blue-300 transition-all duration-500"
					>
						About
					</a>
					<a
						onClick={() => scrollTo("projects")}
						className="cursor-pointer hover:text-blue-300 transition-all duration-500"
					>
						Projects
					</a>
					<a
						onClick={() => scrollTo("experience")}
						className="cursor-pointer hover:text-blue-300 transition-all duration-500"
					>
						Experience
					</a>
					<a
						onClick={() => scrollTo("contact")}
						className="cursor-pointer hover:text-blue-300 transition-all duration-500"
					>
						Contact
					</a>
				</div>
			</div>

			{/* SIDEBAR */}
			{showMenu && (
				<div className="sidebar mt-5 py-4 flex flex-col gap-4 font-semibold md:hidden px-5 ">
					<a
						className="cursor-pointer hover:text-blue-300 transition-all duration-500"
						href="#about"
					>
						About
					</a>
					<a
						className="cursor-pointer hover:text-blue-300 transition-all duration-500"
						href="#projects"
					>
						Projects
					</a>
					<a
						className="cursor-pointer hover:text-blue-300 transition-all duration-500"
						href="#experience"
					>
						Experience
					</a>
					<a
						className="cursor-pointer hover:text-blue-300 transition-all duration-500"
						href="#contact"
					>
						Contact
					</a>
				</div>
			)}

			{/* Menu buttons */}
			<div className="absolute top-3 right-3 cursor-pointer">
				{showMenu ? (
					<FaTimes className="text-3xl" onClick={() => setShowMenu(false)} />
				) : (
					<FaBars
						className="text-3xl md:hidden"
						onClick={() => setShowMenu(true)}
					/>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
