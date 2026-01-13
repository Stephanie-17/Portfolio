interface Projects {
	id: number;
	projectName: string;
	projectLiveLink: string;
	projectGithubLink: string;
	projectImageUrl: string;
	projectDescription: string
	projectSkills: string[];
}

export const projectData: Projects[] = [
	{
		id: 0o1,
		projectName: "AudioPhile",
		projectLiveLink: "https://audiophile-e-commerce-lovat.vercel.app/",
		projectGithubLink: "",
		projectImageUrl: "/audiophile.png",
		projectDescription: "A Next.js e-commerce platform with dynamic product pages, cart management, checkout flow, and responsive, accessible UI.",
		projectSkills: [
			"NextJs",
			"TypeScript",
			"Convex",
			"TailwindCss",
			"Context API",
			"Resend",
		],
	},

  {
		id: 0o2,
		projectName: "FlowDesk",
		projectLiveLink: "https://ticket-management-system-react.vercel.app/",
		projectGithubLink: "",
		projectDescription: "A ticket management system with authentication, CRUD functionality, state management, and responsive UI built with modern frontend frameworks.",
		projectImageUrl: "/flowdesk.png",
		projectSkills: [
			"ReactJs",
			"Vue",
			"Twig",
			"TailwindCss",
			"Context API",
		],
	},
  {
		id: 0o3,
		projectName: "Movie-App",
		projectLiveLink: "https://ticket-management-system-react.vercel.app/",
		projectGithubLink: "",
		projectDescription: "A React-based movie discovery app integrating the TMDB API for searching, browsing, and viewing detailed movie information.",
		projectImageUrl: "/movie-app.png",
		projectSkills: [
			"ReactJs",
			"TypeScript",
			"TailwindCss",
			"TMDB API",
		],
	},
];
