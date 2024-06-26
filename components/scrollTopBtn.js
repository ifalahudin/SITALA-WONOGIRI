"use client";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<div className="fixed bottom-12 right-12 z-[1000]">
			{isVisible && (
				<button onClick={scrollToTop} className="btn btn-primary btn-circle">
					{/* <i className="pi pi-search text-sm"></i> */}↑
				</button>
			)}
		</div>
	);
};

export default ScrollToTop;
