import Hero from "@/lib/features/home/hero";
import SkillsSection from "@/lib/features/home/skills";
import Head from "next/head";

const Home = () => {
	return (
		<>
			<Head>
				<title>Aryan Shandilya</title>
				<meta name="title" content="Aryan Shandilya" />
			</Head>

			<Hero />
			<SkillsSection />
		</>
	);
};

export default Home;
