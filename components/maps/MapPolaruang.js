"use client";

import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap, LayersControl, LayerGroup, ZoomControl, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-search/dist/leaflet-search.src.css";
import "leaflet-search/dist/leaflet-search.src";
import "@/components/maps/MapBidangtanah.css";

// import components

// Ensure leaflet-search is properly imported
import L from "leaflet";

function ResetCenterView(props) {
	const { selectPosition } = props;
	const map = useMap();

	useEffect(() => {
		if (selectPosition) {
			map.setView(L.latLng(selectPosition?.lat, selectPosition?.lon), map.getZoom(), {
				animate: true,
			});
		}
	}, [selectPosition]);

	return null;
}

const MapPolaruang = (props) => {
	const { selectPosition } = props;
	const locationSelection = [selectPosition?.lat, selectPosition?.lon];

	const [geoJsonData, setGeoJsonData] = useState(null);

	const url = "https://sitala-api.jurnalpendidikan.online:9000/api/locations/pola_ruang/all/datas";
	// const url = "http://localhost:3001/api/locations/pola_ruang/all/datas";

	const fetchGeoJSONData = async () => {
		try {
			// setTimeout(async () => {
			const response = await fetch(url);
			const { datas } = await response.json();
			setGeoJsonData(datas);
			console.log(datas);
			// }, 3000);
		} catch (error) {
			console.error("Error fetching GeoJSON data:", error);
		}
	};

	useEffect(() => {
		fetchGeoJSONData();
	}, []);

	const center = [-8.046229306245607, 110.81319196357789];

	// filtering Pola ruang
	let HutanLindung = null;
	let HutanProduksiTerbatas = null;
	let KeunikanBentangAlam = null;
	let PerikananBudidaya = null;
	let PerikananTangkap = null;
	let Perkebunan = null;
	let PermukimanPerdesaan = null;
	let PermukimanPerkotaan = null;
	let PeruntukanIndustri = null;
	let SekitarDanauWaduk = null;
	let TanamanPangan = null;
	let SempadanSungai = null;

	if (geoJsonData) {
		HutanLindung = geoJsonData.features.filter((list) => list.properties.NAMOBJ === "Kawasan Hutan Lindung");
		console.log(HutanLindung);
	}

	if (geoJsonData) {
		HutanProduksiTerbatas = geoJsonData.features.filter((list) => list.properties.NAMOBJ === "Kawasan Hutan Produksi Terbatas");
		// console.log(HutanProduksiTerbatas);
	}
	if (geoJsonData) {
		KeunikanBentangAlam = geoJsonData.features.filter((list) => list.properties.NAMOBJ === "Kawasan Keunikan Bentang Alam");
		// console.log(KeunikanBentangAlam);
	}
	if (geoJsonData) {
		PerikananBudidaya = geoJsonData.features.filter((list) => list.properties.NAMOBJ === "Kawasan Perikanan Budidaya");
		// console.log(PerikananBudidaya);
	}
	if (geoJsonData) {
		PerikananTangkap = geoJsonData.features.filter((list) => list.properties.NAMOBJ === "Kawasan Perikanan Tangkap");
		// console.log(PerikananTangkap);
	}
	if (geoJsonData) {
		Perkebunan = geoJsonData.features.filter((list) => list.properties.NAMOBJ === "Kawasan Perkebunan");
		// console.log(Perkebunan);
	}
	if (geoJsonData) {
		PermukimanPerdesaan = geoJsonData.features.filter((list) => list.properties.NAMOBJ === "Kawasan Permukiman Perdesaan");
		// console.log(PermukimanPerdesaan);
	}
	if (geoJsonData) {
		PermukimanPerkotaan = geoJsonData.features.filter((list) => list.properties.NAMOBJ === "Kawasan Permukiman Perkotaan");
		// console.log(PermukimanPerkotaan);
	}
	if (geoJsonData) {
		PeruntukanIndustri = geoJsonData.features.filter((list) => list.properties.NAMOBJ === "Kawasan Peruntukan Industri");
		// console.log(PeruntukanIndustri);
	}
	if (geoJsonData) {
		SekitarDanauWaduk = geoJsonData.features.filter((list) => list.properties.NAMOBJ === "Kawasan Sekitar Danau Atau Waduk");
		// console.log(SekitarDanauWaduk);
	}
	if (geoJsonData) {
		TanamanPangan = geoJsonData.features.filter((list) => list.properties.NAMOBJ === "Kawasan Tanaman Pangan");
		// console.log(TanamanPangan);
	}
	if (geoJsonData) {
		SempadanSungai = geoJsonData.features.filter((list) => list.properties.NAMOBJ === "Kawasan Sempadan Sungai");
		// console.log(SempadanSungai);
	}

	return (
		<>
			<MapContainer center={center} zoom={13} style={{ height: "93.2dvh", width: "100%" }} zoomControl={false}>
				{/* own component */}
				{/* <div className="absolute top-4 left-0 w-full z-[999] p-3">
					<div className="flex">
						<SearchLoc />
					</div>
				</div> */}

				<ZoomControl position="bottomright" />

				<LayersControl position="bottomleft" collapsed={false}>
					<LayersControl.BaseLayer name="Base" checked={true}>
						<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
					</LayersControl.BaseLayer>
					<LayersControl.BaseLayer name="Dark">
						<TileLayer
							url="http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						/>
					</LayersControl.BaseLayer>
					{/* Pola Ruang */}
					<LayersControl.Overlay name="POLA RUANG"></LayersControl.Overlay>
					<LayersControl.Overlay checked name="[POLA RUANG]_Kawasan Hutan Lindung">
						{HutanLindung && <GeoJSON data={HutanLindung} style={{ weight: 2, color: "#cb72a1" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[POLA RUANG]_Kawasan Hutan Produksi Terbatas">
						{HutanProduksiTerbatas && <GeoJSON data={HutanProduksiTerbatas} style={{ weight: 2, color: "#008418" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[POLA RUANG]_Kawasan Padang Rumput">
						{KeunikanBentangAlam && <GeoJSON data={KeunikanBentangAlam} style={{ weight: 2, color: "#28d150" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[POLA RUANG]_Kawasan Perikanan Budidaya">
						{PerikananBudidaya && <GeoJSON data={PerikananBudidaya} style={{ weight: 2, color: "#87ff63" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[POLA RUANG]_Kawasan Perikanan Tangkap">
						{PerikananTangkap && <GeoJSON data={PerikananTangkap} style={{ weight: 2, color: "#1fe0a6" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[POLA RUANG]_Kawasan Perkebunan">
						{Perkebunan && <GeoJSON data={Perkebunan} style={{ weight: 2, color: "#ffc455" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[POLA RUANG]_Kawasan Permukiman Perdesaan">
						{PermukimanPerdesaan && <GeoJSON data={PermukimanPerdesaan} style={{ weight: 2, color: "#ff5a01" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[POLA RUANG]_Kawasan Permukiman Perkotaan">
						{PermukimanPerkotaan && <GeoJSON data={PermukimanPerkotaan} style={{ weight: 2, color: "#cde64e" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[POLA RUANG]_Kawasan Peruntukan Industri">
						{PeruntukanIndustri && <GeoJSON data={PeruntukanIndustri} style={{ weight: 2, color: "#008a57" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[POLA RUANG]_Kawasan Sekitar Waduk atau Sungai">
						{SekitarDanauWaduk && <GeoJSON data={SekitarDanauWaduk} style={{ weight: 2, color: "#18e9e2" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[POLA RUANG]_Kawsan Tanaman Pangan">
						{TanamanPangan && <GeoJSON data={TanamanPangan} style={{ weight: 2, color: "#fffb01" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[POLA RUANG]_Sempadan Sungai">
						{SempadanSungai && <GeoJSON data={SempadanSungai} style={{ weight: 2, color: "#000dfe" }} />}
					</LayersControl.Overlay>
				</LayersControl>
				{/* {geoJsonData && geoJsonLayerRef.current && <SearchControl geoJsonLayer={geoJsonLayerRef.current} className="input input-bordered" />} */}

				{selectPosition && (
					<Marker position={locationSelection}>
						<Popup>Anda disini.</Popup>
					</Marker>
				)}
				<ResetCenterView selectPosition={selectPosition} />
			</MapContainer>

			{/* ---------- example --------- */}
			{/* <div className="absolute bottom-5 left-0 w-full z-[10000] p-3">
				<div className="flex">
					<h1 className="z-[100000] btn btn-primary bottom-0 left-0">TEST</h1>
					<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
				</div>
			</div> */}
		</>
	);
};

export default MapPolaruang;
