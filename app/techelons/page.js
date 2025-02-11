import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
export default function Home() {
	return (
		<>
			<Navigator>
				<div className="container">
					<div className="text-center py-18">
						<h1 className="text-9xl font-bold">Techelons</h1>
					</div>
				</div>
			</Navigator>
			<Footer />
		</>
	);
}
