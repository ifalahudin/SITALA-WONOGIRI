"use client";

import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperCarousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const carouselItems = [
		{
			id: 1,
			nama: "Gapuro",
			deskripsi: "Gapura Selamat datang Kabupaten Wonogiri",
			src: "https://traveltomorrow.com/wp-content/uploads/2020/08/1-2048x1331.jpg",
		},
		{
			id: 2,
			nama: "Museum Karst Indonesia",
			deskripsi: "Satu-satunya museum Geopark di Indonesia",
			src: "https://www.guidetrip.info/asset/img/gallery_resort/61c58ea16152c.jpeg",
		},
		{
			id: 3,
			nama: "Pantai Klotok",
			deskripsi: "Salah satu pantai yang terdapat di Kabupaten Wonogiri",
			src: "https://3.bp.blogspot.com/-dChaNpgZaEU/V_HgjsVLdsI/AAAAAAAAAzA/U0GE6w6k8wQeX2mfhJdx16NLQUqTLi8lACLcB/s1600/pantai%2Bsembukan.jpg",
		},
		{
			id: 4,
			nama: "Gunung Kotak",
			deskripsi: "Merupakan salah satu wisata dataran tinggi di Kabupaten Wonogiri",
			src: "https://jatengprov.go.id/wp-content/uploads/2020/02/Gunung-Kotak-Wonogiri2.jpg",
		},
		{
			id: 5,
			nama: "Waduk Gajah Mungkur",
			deskripsi: "Waduk yang merupakan bangunan fasilitas yang dimiliki Kabupaten Wonogiri",
			src: "https://1.bp.blogspot.com/-TrjaXOOeqhg/YCkwptqANGI/AAAAAAAAat0/OQrQcvRHqGMVZh-J1Q05mZVBXyZEnKqhQCLcBGAsYHQ/s2048/bangunan-utama-waduk-gajah-mungkur.jpg",
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((current) => (current + 1) % carouselItems.length);
		}, 5000); // Change slide every 5000 ms

		return () => clearInterval(interval);
	}, [carouselItems.length]);

	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="swiperCarousel container shadow-xl rounded-box mx-6 lg:mx-60"
			>
				{carouselItems.map((item) => (
					<SwiperSlide
						key={item.id}
						className="text-center"
						style={{
							backgroundImage: `url(${item.src})`,
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							backgroundPosition: "center",
							height: "768px",
						}}
					>
						<div
							style={{
								height: "fit-content",
								width: "100%",
								bottom: "0",
								backgroundColor: "rgba(64,64,64,0.75)",
								position: "absolute",
							}}
							className="mb-10 text-white py-4"
						>
							<h1 className="title text-6xl font-bold">{item.nama}</h1>
							<p className="subtitle text-lg">{item.deskripsi}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
