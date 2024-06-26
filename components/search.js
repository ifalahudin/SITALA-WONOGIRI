import React, { useState } from "react";
import Image from "next/image";
import placeHolder from "@/public/placeholder.png";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
	q: "",
	format: "json",
	addressdetails: "addressdetails",
};

export default function SearchBox(props) {
	const { selectPosition, setSelectPosition } = props;
	const [searchText, setSearchText] = useState("");
	const [listPlace, setListPlace] = useState([]);

	return (
		<div className="flex flex-col p-4">
			<div className="label">
				<span className="label-text">Pencarian Lokasi</span>
			</div>
			<div className="flex mb-4">
				<input
					type="text"
					placeholder="Cari Lokasi"
					className=" w-full max-w-xs input input-bordered"
					value={searchText}
					onChange={(event) => {
						setSearchText(event.target.value);
					}}
				/>
				<button
					className="btn btn-ghost"
					onClick={() => {
						// Search
						const params = {
							q: searchText,
							format: "json",
							addressdetails: 1,
							polygon_geojson: 0,
						};
						const queryString = new URLSearchParams(params).toString();
						const requestOptions = {
							method: "GET",
							redirect: "follow",
						};
						fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
							.then((response) => response.text())
							.then((result) => {
								console.log(JSON.parse(result));
								setListPlace(JSON.parse(result));
							})
							.catch((err) => console.log("err: ", err));
					}}
				>
					<i className="pi pi-search text-lg"></i>
				</button>
			</div>
			<div>
				<ul className="menu bg-base-200" aria-label="main mailbox folders">
					{listPlace.map((item) => {
						return (
							<li key={item?.place_id} className="max-h-40">
								<button
									className="btn btn-ghost text-left flex"
									onClick={() => {
										setSelectPosition(item);
									}}
								>
									{item?.display_name}
								</button>
								<div className="divider"></div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
