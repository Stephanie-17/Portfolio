import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
	return (
		<div
			id="contact"
			className="flex flex-col justify-center items-center mt-20 mb-10"
		>
			<aside className="sm:w-lg w-90 rounded-lg p-4 bg-blue-300 text-black flex flex-col justify-center">
				<h3 className="font-bold text-2xl text-center  mb-2">
					Let&apos;s Work Together
				</h3>
				<p className="mb-6 text-center text-gray-600">
					If you&apos;d like a developer who&apos;s devoted and hardworking,
					Let&apos;s talk.
				</p>

				<div className="flex flex-col items-center justify-center">
					<ul className="flex flex-col items-center justify-center mb-5">
						<Link href={"https://github.com/Stephanie-17"}>
							<li className="flex gap-4 items-center font-semibold text-lg">
								<FaGithub /> Github
							</li>
						</Link>
						<Link
							href={"https://www.linkedin.com/in/stephanie-emenike-262355330/"}
						>
							<li className="flex gap-4 items-center font-semibold text-lg">
								<FaLinkedin /> LinkedIn
							</li>
						</Link>
					</ul>
					<Link
						className=" "
						href="mailto:emenikesteph@gmail.com?subject=Hello&body=I%20would%20like%20to%20work%20with%20you"
					>
						<button className="text-blue-300  bg-black p-2 rounded-lg">
							Send Me an Email
						</button>
					</Link>
				</div>
			</aside>
		</div>
	);
};

export default Contact;
