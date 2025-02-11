import Navigator from "./components/Navigator";
import Footer from "./components/Footer";
import About from "./components/About";
import Banner from "./components/Banner";
import Council from "./components/Council";
import PastEvent from "./components/PastEvent";
import Workshop from "./components/Workshop";

export default function Home() {
	return (
		<>
			<Navigator>
				<main>
					<Banner />
					<About />
					<Workshop />
					<PastEvent />
					<Council />
				</main>
			</Navigator>
			<Footer />
		</>
	);
}
