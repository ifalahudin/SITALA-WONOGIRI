import Image from "next/image";
import MainNavbar from "@/components/mainNav";
import Footer from "@/components/footer";
import SwiperCarousel from "@/components/swiperCarousel";
import nextLogo from "@/public/nextjs-icon-light-background.png";
import reactLeafletLogo from "@/public/logo.png";
import expressLogo from "@/public/expressjs-icon.png";
import ScrollTopBtn from "@/components/scrollTopBtn";

export default function Home() {
	return (
		<main>
			{/* Navbar */}
			<MainNavbar />

			{/* Hero */}
			<div
				className="hero"
				style={{
					backgroundImage: "url('https://www.thoughtco.com/thmb/ZpAxeQMWVlU-pwtvs6JgWm1PwK4=/2121x1415/filters:fill(auto,1)/464714165-58b9ce363df78c353c385e0c.jpg')",
					minHeight: "80dvh",
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-white">
					<div className="mix-w-sreen">
						<h1 className="text-2xl lg:text-6xl font-bold">Selamat Datang di Sistem Informasi Pertanahan dan Wilayah (SITALA) Kabupaten Wonogiri</h1>
						<p className="py-6 text-sm  lg:text-lg">
							Selamat datang di SITALA, solusi terbaik untuk mengelola informasi data tanah dan wilayah kabupaten Wonogiri dengan lebih efisien dan efektif. Dengan teknologi Geographical Information System (GIS) terkini, SITALA memberikan
							akses mudah dan cepat untuk mengelola, menganalisi dan memvisualisasikan data tanah dan wilayah secara komprehensif bagi para stakeholder.
						</p>
						{/* <button className="btn btn-primary">Get Started</button> */}
					</div>
				</div>
			</div>

			{/* seputar wonogiri */}
			<div className="min-w-4xl max-h-6xl pt-10 lg:py-40">
				<h1 className="text-center text-4xl lg:text-6xl mb-20 font-bold">SEPUTAR WONOGIRI</h1>
				{/* swiper carousel */}
				<SwiperCarousel />
			</div>

			{/* kenapa sitala */}
			<div className="flex flex-wrap justify-center py-40">
				<div className="text-center justify-items-center font-bold lg:me-40 lg:pt-60" id="why">
					<h1 className="text-4xl lg:text-5xl">Kenapa memilih</h1>
					<h1 className="text-5xl lg:text-8xl">SITALA?</h1>
				</div>
				<div className="card bg-base-100 shadow-xl" style={{ maxWidth: "720px" }}>
					<div className="card-body">
						<ul className="timeline timeline-vertical">
							<li>
								<div className="timeline-middle">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
										<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
									</svg>
								</div>
								<div className="timeline-end timeline-box">
									1. <b>Kemudahan Akses</b>: Akses data tanah dan lahan dimana saja dan kapan saja dengan koneksi internet.
								</div>
								<hr className="bg-primary" />
							</li>
							<li>
								<hr className="bg-primary" />
								<div className="timeline-middle">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
										<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
									</svg>
								</div>
								<div className="timeline-start timeline-box">
									2. <b>Visualisasi yang Jelas</b>: Memvisualisasikan data tanah dan wilayah dalam peta interaktif yang mudah dipahami.
								</div>
								<hr className="bg-primary" />
							</li>
							<li>
								<hr className="bg-primary" />
								<div className="timeline-middle">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
										<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
									</svg>
								</div>
								<div className="timeline-end timeline-box">
									3. <b>Analisis Mendalam</b>: Analisis yang mendalam dan akurat untuk mendukung pengambilan keputusan yang lebih baik.
								</div>
								<hr className="bg-primary" />
							</li>
							<li>
								<hr className="bg-primary" />
								<div className="timeline-middle">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
										<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
									</svg>
								</div>
								<div className="timeline-start timeline-box">
									4. <b>Keamanan Data</b>: Data aman dan terlindungi dengan teknologi keamanan terkini.
								</div>
								<hr className="bg-primary" />
							</li>
							<li>
								<hr className="bg-primary" />
								<div className="timeline-middle">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
										<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
									</svg>
								</div>
								<div className="timeline-end timeline-box">
									5. <b>Skalabilitas</b>: Didesain untuk memenuhi kebutuhan saat ini dan dapat ditingkatkan sesuai dengan pertumbuhan teknologi.
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* fitur sitala */}
			<div className="py-20">
				<div
					className="hero"
					style={{
						backgroundImage: "url('https://wallpapercave.com/wp/wp2008713.jpg')",
						minHeight: "80dvh",
					}}
				>
					<div className="hero-overlay bg-opacity-60"></div>
					<div className="hero-content">
						<div className="mix-w-sreen sm:py-10">
							<h1 className="text-center text-5xl lg:text-6xl font-bold mb-20 text-white">Fitur Utama SITALA</h1>
							<div className="flex flex-wrap justify-center">
								{/* card 1 */}
								<div className="card w-60 lg:w-96 bg-base-100 shadow-xl mb-10  md:me-10 lg:me-20">
									<figure>
										<img
											src="https://static.vecteezy.com/system/resources/previews/001/977/224/original/gps-map-with-pin-illustration-free-vector.jpg"
											alt="https://static.vecteezy.com/system/resources/previews/001/977/224/original/gps-map-with-pin-illustration-free-vector.jpg"
										/>
									</figure>
									<div className="card-body">
										<h2 className="card-title">Pencarian Lokasi</h2>
										<p>Temukan informasi tentang tanah dan lahan di lokasi yang Anda inginkan dengan cepat.</p>
									</div>
								</div>

								{/* card 2 */}
								<div className="card w-60 lg:w-96 bg-base-100 shadow-xl mb-10">
									<figure>
										<img src="https://datascience.aero/wp-content/uploads/2022/03/geospatial-geojson-176.jpg" alt="Shoes" />
									</figure>
									<div className="card-body">
										<h2 className="card-title">Visualisasi Poligon Area</h2>
										<p>Memperlihatkan poligon area dengan jelas untuk area tanah dan lahan yang ditampilkan.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* builder app */}
			<div className="py-40 text-center">
				<h1 className="text-5xl lg:text-6xl font-bold">Dibangun menggunakan</h1>
				<h1 className="text-5xl lg:text-6xl font-reguler mb-20">teknologi terbaru</h1>
				<div className="flex justify-center">
					<div className=" w-50 h-50 sm:w-fit rounded-lg shadow-xl p-10">
						<figure className="align-center my-auto">
							<Image src={nextLogo} alt="image" width={80} height={80}></Image>
						</figure>
						{/* <h2 className="text-md font-medium mt-2">NEXT.JS</h2> */}
					</div>
					<div className=" w-50 h-50 sm:w-fit rounded-lg shadow-xl p-10 lg:mx-10">
						<figure className="align-center my-auto">
							<Image src={reactLeafletLogo} alt="image" width={100} height={100}></Image>
						</figure>
						{/* <h2 className="text-md font-medium mt-2">React Leaflet</h2> */}
					</div>
					<div className=" w-50 h-50 sm:w-fit rounded-lg shadow-xl p-10">
						<figure className="align-center my-auto mx">
							<Image src={expressLogo} alt="image" width={80} height={80}></Image>
						</figure>
					</div>
				</div>
			</div>

			{/* gabung sitala */}
			{/* <div className="py-40 mx-20">
				<div className="bg-gradient-to-r from-cyan-500 to-blue-500 hero rounded-lg" style={{ minHeight: "50dvh" }}>
					<div className="hero-content text-center text-white">
						<div className="max-w-2xl">
							<h1 className="mb-5 text-6xl font-bold">Siap untuk Begabung?</h1>
							<p className="mb-5">Mari bergabung dengan SITALA sekarang juga dan mulai mengelola informasi tanah dan wilayah dengan lebih efisien.</p>
							<button className="btn btn-primary">Get Started</button>
						</div>
					</div>
				</div>
			</div> */}

			<ScrollTopBtn />
			<div className="divider"></div>
			{/* footer */}
			<Footer />
		</main>
	);
}
