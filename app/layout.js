import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "SITALA Wonogiri",
	description:
		"Selamat datang di SITALA, solusi terbaik untuk mengelola informasi data tanah dan wilayah kabupaten Wonogiri dengan lebih efisien dan efektif. Dengan teknologi Geographical Information System (GIS) terkini, SITALA memberikan akses mudah dan cepat untuk mengelola, menganalisi dan memvisualisasikan data tanah dan wilayah secara komprehensif bagi para stakeholder.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-theme="winter">
			<body className={open_sans.className}>{children}</body>
		</html>
	);
}
