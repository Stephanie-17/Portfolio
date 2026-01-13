import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Bricolage_Grotesque({
	variable: "--Bricolage",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Stephanie Emenike",
	description:
		" Stephanie Emenike's portfolio features who she is, projects she has worked on and companies she has worked in, giving you an all-round understanding of her work-ethic and why you should work with her.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} font-sans antialiased transition-all duration-500`}
			>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
