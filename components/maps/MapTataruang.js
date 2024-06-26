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

const MapTataruang = (props, items) => {
	const { selectPosition } = props;
	const locationSelection = [selectPosition?.lat, selectPosition?.lon];

	const [geoJsonData, setGeoJsonData] = useState(null);

	const url = "http://103.181.183.137:9000/api/locations/data_tata_ruang/all/datas";

	const fetchGeoJSONData = async () => {
		try {
			setTimeout(async () => {
				const response = await fetch(url);
				const { datas } = await response.json();
				setGeoJsonData(datas);
				// console.log(datas);
			}, 3000);
		} catch (error) {
			console.error("Error fetching GeoJSON data:", error);
		}
	};

	useEffect(() => {
		fetchGeoJSONData();
	}, []);

	const center = [-8.046229306245607, 110.81319196357789];

	// filtering data Penggunaan lahan
	let GosongTelagaEmbung = null;
	let HutanRimba = null;
	let PadangRumput = null;
	let PematangSawah = null;
	let PerkebunanKebun = null;
	let Permukiman2 = null;
	let Permukiman = null;
	let Sawah = null;
	let SemakBelukar = null;
	let Sungai = null;
	let TegalanLadang = null;
	let TelagaEmbung = null;

	if (geoJsonData) {
		GosongTelagaEmbung = geoJsonData.filter((list) => list.properties.TUTUPLAHAN === "Gosong Telaga/Embung");
		// console.log(GosongTelagaEmbung);
	}

	if (geoJsonData) {
		HutanRimba = geoJsonData.filter((list) => list.properties.TUTUPLAHAN === "Hutan Rimba");
		// console.log(HutanRimba);
	}

	if (geoJsonData) {
		PadangRumput = geoJsonData.filter((list) => list.properties.TUTUPLAHAN === "Padang Rumput");
		// console.log(PadangRumput);
	}

	if (geoJsonData) {
		PematangSawah = geoJsonData.filter((list) => list.properties.TUTUPLAHAN === "Pematang Sawah");
		// console.log(PematangSawah);
	}

	if (geoJsonData) {
		PerkebunanKebun = geoJsonData.filter((list) => list.properties.TUTUPLAHAN === "Perkebunan/Kebun");
		// console.log(PerkebunanKebun);
	}

	if (geoJsonData) {
		Permukiman2 = geoJsonData.filter((list) => list.properties.TUTUPLAHAN === "Permukiman dan Tempat Kegiatan Lainnya");
		// console.log(Permukiman2);
	}

	if (geoJsonData) {
		Permukiman = geoJsonData.filter((list) => list.properties.TUTUPLAHAN === "Permukiman");
		// console.log(Permukiman);
	}
	if (geoJsonData) {
		Sawah = geoJsonData.filter((list) => list.properties.TUTUPLAHAN === "Sawah");
		// console.log(Sawah);
	}
	if (geoJsonData) {
		SemakBelukar = geoJsonData.filter((list) => list.properties.TUTUPLAHAN === "Semak Belukar / Alang-Alang");
		// console.log(SemakBelukar);
	}
	if (geoJsonData) {
		Sungai = geoJsonData.filter((list) => list.properties.TUTUPLAHAN === "Sungai");
		// console.log(Sungai);
	}
	if (geoJsonData) {
		TegalanLadang = geoJsonData.filter((list) => list.properties.TUTUPLAHAN === "Tegalan/Ladang");
		// console.log(TegalanLadang);
	}
	if (geoJsonData) {
		TelagaEmbung = geoJsonData.filter((list) => list.properties.TUTUPLAHAN === "Telaga Embung");
		// console.log(TelagaEmbung);
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
					{/* PENGGUNAAN LAHAN */}
					<LayersControl.Overlay name="PENGGUNAAN LAHAN">
						<LayerGroup></LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[PENGGUNAAN LAHAN]_Gosong_Telaga_Embung">
						{GosongTelagaEmbung && <GeoJSON data={GosongTelagaEmbung} style={{ weight: 2, color: "#cb72a1" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[PENGGUNAAN LAHAN]_Hutan_Rimba">
						{HutanRimba && <GeoJSON data={HutanRimba} style={{ weight: 2, color: "#008418" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[PENGGUNAAN LAHAN]_Padang_Rumput">
						{PadangRumput && <GeoJSON data={PadangRumput} style={{ weight: 2, color: "#28d150" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[PENGGUNAAN LAHAN]_Pematang_Sawah">
						{PematangSawah && <GeoJSON data={PematangSawah} style={{ weight: 2, color: "#87ff63" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[PENGGUNAAN LAHAN]_Perkebunan_Kebun">
						{PerkebunanKebun && <GeoJSON data={PerkebunanKebun} style={{ weight: 2, color: "#1fe0a6" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[PENGGUNAAN LAHAN]_Permukiman">
						{Permukiman && <GeoJSON data={Permukiman} style={{ weight: 2, color: "#ffc455" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[PENGGUNAAN LAHAN]_Permukiman_dan_Tempat_Kegiatan_Lainnya">
						{Permukiman2 && <GeoJSON data={Permukiman2} style={{ weight: 2, color: "#ff5a01" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[PENGGUNAAN LAHAN]_Sawah">
						{Sawah && <GeoJSON data={Sawah} style={{ weight: 2, color: "#cde64e" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[PENGGUNAAN LAHAN]_Semak_Belukar_Alang-Alang">
						{SemakBelukar && <GeoJSON data={SemakBelukar} style={{ weight: 2, color: "#008a57" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[PENGGUNAAN LAHAN]_Sungai">
						{Sungai && <GeoJSON data={Sungai} style={{ weight: 2, color: "#18e9e2" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[PENGGUNAAN LAHAN]_Tegalan_Ladang">
						{TegalanLadang && <GeoJSON data={TegalanLadang} style={{ weight: 2, color: "#fffb01" }} />}
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="[PENGGUNAAN LAHAN]_Telaga_Embung">
						{TelagaEmbung && <GeoJSON data={TelagaEmbung} style={{ weight: 2, color: "#000dfe" }} />}
					</LayersControl.Overlay>
					{/* PENGGUNAAN LAHAN */}
					{/* Pola Tanah */}
				</LayersControl>
				{/* {geoJsonData && geoJsonLayerRef.current && <SearchControl geoJsonLayer={geoJsonLayerRef.current} className="input input-bordered" />} */}

				{selectPosition && (
					<Marker
						position={locationSelection}
						icon={L.divIcon({
							iconSize: [38, 38],
							className: "pi pi-map-marker text-4xl text-red-600",
						})}
					>
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

export default MapTataruang;
