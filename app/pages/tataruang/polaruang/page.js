"use client";
// pages/index.js
import dynamic from "next/dynamic";
import { useState } from "react";
import SearchBox from "@/components/search";
import "leaflet/dist/leaflet.css";

const MapPolaruang = dynamic(() => import("@/components/maps/MapPolaruang"), {
	ssr: false,
});

export default function Home() {
	const [selectPosition, setSelectPosition] = useState(null);

	return (
		<div className="drawer">
			<input id="my-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				{/* Page content here */}
				<MapPolaruang selectPosition={selectPosition} />
			</div>
			<div className="drawer-side z-[10000]">
				<label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
				<div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
					{/* Sidebar content here */}
					<SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
				</div>
			</div>
		</div>
	);
}
