import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap, LayersControl, LayerGroup, ZoomControl, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-search/dist/leaflet-search.src.css";
import "leaflet-search/dist/leaflet-search.src";
import "@/components/maps/MapBidangtanah.css";

// import images
import placeHolder from "@/public/placeholder.png";

// import Data
import Tubokarto from "@/app/data/tubokarto.json";
import AsetPemerintah from "@/app/data/Bidang/Aset Pemerintah.json";
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

const SearchControl = ({ geoJsonLayer }) => {
	const map = useMap();
	const searchControlRef = useRef(null);

	useEffect(() => {
		if (map && geoJsonLayer && !searchControlRef.current) {
			searchControlRef.current = new L.Control.Search({
				layer: geoJsonLayer,
				propertyName: "PEMILIK",
				zoom: 18,
				collapsed: false,
				textPlaceholder: "Cari Nama..",
				position: "topright",
				textErr: "Pemilik tidak sesuai.",
			});
			map.addControl(searchControlRef.current);
		}
	}, [map, geoJsonLayer]);

	return null;
};

const MapBidangtanah = (props) => {
	const center = [-8.046229306245607, 110.81319196357789];

	const { selectPosition } = props;
	const locationSelection = [selectPosition?.lat, selectPosition?.lon];

	const [geoJsonData, setGeoJsonData] = useState(null);
	const geoJsonLayerRef = useRef(null);

	const url = "https://sitala-api.jurnalpendidikan.online:9000/api/locations/bidang_tanah/all/datas/";
	// const url = "http://localhost:3001/api/locations/bidang_tanah/all/datas/";
	// const url = "http://localhost:3003/features";

	const fetchGeoJSONData = async () => {
		try {
			// setTimeout(async () => {
			const response = await fetch(url);
			const { datas } = await response.json();
			setGeoJsonData(datas);
			console.log(datas);
			// }, 1000);
		} catch (error) {
			console.error("Error fetching GeoJSON data:", error);
		}
	};

	useEffect(() => {
		fetchGeoJSONData();
	}, []);

	const onEachData = (feature, layer) => {
		const objectId = feature.properties.OBJECTID;
		const pemilik = feature.properties.PEMILIK;

		if (objectId) {
			layer.bindPopup(`ID: ${objectId} <br/> PEMILIK: ${pemilik}`);
		} else {
			layer.bindPopup("PEMILIK: tidak ditemukan");
		}
	};

	let BelumSertifikat = null;
	let BidangBersertifikat = null;
	let Pemerintah = null;
	let TanpaNama = null;

	if (geoJsonData) {
		BelumSertifikat = geoJsonData.filter((list) => list.properties.NOMOR_HAK == null);
		// console.log(BelumSertifikat);
	}
	if (geoJsonData) {
		BidangBersertifikat = geoJsonData.filter((list) => list.properties.NOMOR_HAK !== null);
		// console.log(BidangBersertifikat);
	}
	if (geoJsonData) {
		Pemerintah = geoJsonData.filter(
			(list) =>
				list.properties.PEMILIK === "PEMERINTAH KABUPATEN WONOGIRI BERKEDUDUKAN DI WONOGIRI" ||
				list.properties.PEMILIK === "PEMERINTAH DESA PRACIMANTORO,KEC.PRACIMANTORO" ||
				list.properties.PEMILIK === "PEMERINTAH DESA TUBOKARTO,KEC PRACIMANTORO" ||
				list.properties.PEMILIK === "PEMERINTAH KABUPATEN WONOGIRI"
		);
		// console.log(Pemerintah);
	}
	if (geoJsonData) {
		TanpaNama = geoJsonData.filter((list) => list.properties.PEMILIK == null);
		// console.log(TanpaNama);
	}

	return (
		<>
			{/* Page content here */}
			<MapContainer center={center} zoom={14} style={{ height: "93.2dvh", width: "100%" }} zoomControl={false}>
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
					<LayersControl.Overlay checked name="Tubokarto Belum Bersertifikat">
						<LayerGroup>{BelumSertifikat && <GeoJSON data={BelumSertifikat} style={{ weight: 2, color: "#ff4d4d" }} ref={geoJsonLayerRef} onEachFeature={onEachData} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Tubokarto Bidang Bersertifikat">
						<LayerGroup>{BidangBersertifikat && <GeoJSON data={BidangBersertifikat} style={{ weight: 2, color: "#fbed74" }} ref={geoJsonLayerRef} onEachFeature={onEachData} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Tubokarto Pemerintah Wonogiri">
						<LayerGroup>{Pemerintah && <GeoJSON data={Pemerintah} style={{ weight: 2, color: "#53fb56" }} ref={geoJsonLayerRef} onEachFeature={onEachData} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Tubokarto Tanpa Nama">
						<LayerGroup>{TanpaNama && <GeoJSON data={TanpaNama} style={{ weight: 2, color: "#5c5cff" }} ref={geoJsonLayerRef} onEachFeature={onEachData} />}</LayerGroup>
					</LayersControl.Overlay>
				</LayersControl>
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
				<div className="flex">{geoJsonData && geoJsonLayerRef.current && <SearchControl geoJsonLayer={geoJsonLayerRef.current} />}</div>
			</MapContainer>
		</>
	);
};

export default MapBidangtanah;
