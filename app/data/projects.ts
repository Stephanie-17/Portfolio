interface Projects {
	id: number;
	projectName: string;
	projectLiveLink: string;
	projectGithubLink: string;
	projectImageUrl: string;
	projectDescription: string;
	projectSkills: string[];
}

export const projectData: Projects[] = [
	{
		id: 0o1,
		projectName: "AudioPhile",
		projectLiveLink: "https://audiophile-e-commerce-lovat.vercel.app/",
		projectGithubLink: "https://github.com/Stephanie-17/audiophile-e-commerce",
		projectImageUrl: "/audiophile.png",
		projectDescription:
			"A Next.js e-commerce platform with dynamic product pages, cart management, checkout flow, and responsive, accessible UI.",
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
		projectGithubLink:
			"https://github.com/Stephanie-17/Ticket-Management-System-React",
		projectDescription:
			"A ticket management system with authentication, CRUD functionality, state management, and responsive UI built with modern frontend frameworks.",
		projectImageUrl: "/flowdesk.png",
		projectSkills: ["ReactJs", "Vue", "Twig", "TailwindCss", "Context API"],
	},
	{
		id: 0o3,
		projectName: "Movie-App",
		projectLiveLink: "https://react-movie-app-sage-phi.vercel.app/",
		projectGithubLink: "",
		projectDescription:
			"A React-based movie discovery app integrating the TMDB API for searching, browsing, and viewing detailed movie information.",
		projectImageUrl: "/movie-app.png",
		projectSkills: ["ReactJs", "TypeScript", "TailwindCss", "TMDB API"],
	},

	{
		id: 0o4,
		projectName: "Task Manager",
		projectLiveLink: "task-manager-eta-fawn.vercel.app",
		projectGithubLink: "https://github.com/Stephanie-17/Task-Manager",
		projectDescription:
			"Full CRUD task manager with responsive UI, filtering, persistent state storage, and clean UX.",
		projectImageUrl: "/task-manager.png",
		projectSkills: ["ReactJs", "JavaScript", "TailwindCss", "LocalStorage"],
	},

	{
		id: 0o5,
		projectName: "Tic-Tac-Toe",
		projectLiveLink: "tic-tac-toe-gamma-jade-95.vercel.app",
		projectGithubLink: "https://github.com/Stephanie-17/Tic-tac-toe",
		projectDescription:
			"An Ongoing NextJs Tic-Tac-Toe game, with dynamic gameplay and multiplayer features, will feature real-time enhancement in gameplay using Supabase",
		projectImageUrl: "/tic-tac-toe.png",
		projectSkills: ["NextJs", "TypeScript", "TailwindCss", "Supabase"],
	},
];
