"use client";

import React, { useState } from "react";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
	q: "",
	format: "json",
	addressdetails: "addressdetails",
};

export default function SearchLoc(props) {
	const { selectPosition, setSelectPosition } = props;
	const [searchText, setSearchText] = useState("");
	const [listPlace, setListPlace] = useState([]);

	return (
		<div className="flex flex-col ">
			<div className="flex">
				<input
					type="text"
					className="input input-bordered w-full"
					style={{ width: "100%" }}
					value={searchText}
					placeholder="Cari Lokasi.."
					onChange={(event) => {
						setSearchText(event.target.value);
					}}
				/>
				<button
					className="btn btn-square bg-neutral text-neutral-content"
					type="submit"
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
				<ul className="menu bg-base-200 w-full rounded-box" aria-label="main mailbox folders">
					{listPlace.map((item) => {
						return (
							<li
								key={item.place_id}
								onClick={() => {
									setSelectPosition(item);
								}}
							>
								<div className="flex">
									<img src="./placeholder.png" alt="Placeholder" style={{ width: 38, height: 38 }} />
									<p>{item?.display_name}</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
