"use client";

import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap, LayersControl, LayerGroup, ZoomControl, Marker, Popup, FeatureGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-search/dist/leaflet-search.src.css";
import "leaflet-search/dist/leaflet-search.src";
import "@/components/maps/MapBidangtanah.css";

// import images
import placeHolder from "@/public/placeholder.png";

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

const MapWilayah = (props) => {
	const center = [-8.046229306245607, 110.81319196357789];

	const { selectPosition } = props;
	const locationSelection = [selectPosition?.lat, selectPosition?.lon];

	const [geoJsonData, setGeoJsonData] = useState(null);

	// const url = "http://localhost:3001/api/locations/wilayah/all/datas";
	const url = "http://103.181.183.137:9000/api/locations/wilayah/all/datas";

	const fetchGeoJSONData = async () => {
		try {
			const response = await fetch(url);
			const { datas } = await response.json();
			setGeoJsonData(datas);
			// console.log(datas);
		} catch (error) {
			console.error("Error fetching GeoJSON data:", error);
		}
	};

	useEffect(() => {
		fetchGeoJSONData();
	}, []);

	let WilayahAdministrasi = null;
	let KawasanKarst = null;
	let GeoQB = null;
	let GeoTms = null;
	let GeoTmwl = null;
	let DataranAluvial = null;
	let LembahKarst = null;
	let LembahSungai = null;
	let PegununganKarst = null;
	let PerbukitanKarst = null;
	let Logva = null;
	let BadanTubuhAir = null;
	let GleisolDistrik = null;
	let GleisolKalkarik = null;
	let KambisolEutrik = null;
	let KambisolKromik = null;
	let MeditereanVertik = null;
	let MediteranLitosol = null;
	let AirTanah = null;
	let DaerahAliranSungai = null;
	let HutanLindung = null;
	let HutanProduksiTerbatas = null;

	if (geoJsonData) {
		WilayahAdministrasi = geoJsonData.features.filter((list) => list.properties.KECAMATAN === "Pracimantoro");
		// console.log(WilayahAdministrasi);
	}
	if (geoJsonData) {
		KawasanKarst = geoJsonData.features.filter((list) => list.properties.JENIS === "Kawasan Bentang Alam Karst (KBAK)");
		// console.log(KawasanKarst);
	}
	if (geoJsonData) {
		GeoQB = geoJsonData.features.filter((list) => list.properties.SIMBOL === "Qb");
		// console.log(GeoQB);
	}
	if (geoJsonData) {
		GeoTms = geoJsonData.features.filter((list) => list.properties.SIMBOL === "Tms");
		// console.log(GeoTms);
	}
	if (geoJsonData) {
		GeoTmwl = geoJsonData.features.filter((list) => list.properties.SIMBOL === "Tmwl");
		// console.log(GeoTmwl);
	}
	if (geoJsonData) {
		DataranAluvial = geoJsonData.features.filter((list) => list.properties.MORFOLOGI === "Dataran Aluvial");
		// console.log(DataranAluvial);
	}
	if (geoJsonData) {
		LembahKarst = geoJsonData.features.filter((list) => list.properties.MORFOLOGI === "Lembah Perbukitan Solusional Karst");
		// console.log(LembahKarst);
	}
	if (geoJsonData) {
		LembahSungai = geoJsonData.features.filter((list) => list.properties.MORFOLOGI === "Lembah Sungai");
		// console.log(LembahSungai);
	}
	if (geoJsonData) {
		PegununganKarst = geoJsonData.features.filter((list) => list.properties.MORFOLOGI === "Pegunungan Solusional Karst");
		// console.log(PegununganKarst);
	}
	if (geoJsonData) {
		PerbukitanKarst = geoJsonData.features.filter((list) => list.properties.MORFOLOGI === "Perbukitan Solusional Karst");
		// console.log(PerbukitanKarst);
	}
	if (geoJsonData) {
		Logva = geoJsonData.features.filter((list) => list.properties.MORFOLOGI === "Telaga Karst (Logva)");
		// console.log(Logva);
	}
	if (geoJsonData) {
		BadanTubuhAir = geoJsonData.features.filter((list) => list.properties.SOILTAX === "Badan Air / Tubuh Air");
		// console.log(BadanTubuhAir);
	}
	if (geoJsonData) {
		GleisolDistrik = geoJsonData.features.filter((list) => list.properties.SOILTAX === "Epiaquepts, Eutrudepts");
		// console.log(GleisolDistrik);
	}
	if (geoJsonData) {
		GleisolKalkarik = geoJsonData.features.filter((list) => list.properties.SOILTAX === "Epiaquepts, Dystrudepts");
		// console.log(GleisolKalkarik);
	}
	if (geoJsonData) {
		KambisolEutrik = geoJsonData.features.filter((list) => list.properties.SOILTAX === "Eutrudepts, Hapludalfs");
		// console.log(KambisolEutrik);
	}
	if (geoJsonData) {
		KambisolKromik = geoJsonData.features.filter((list) => list.properties.SOILTAX === "Dystrudepts, Epiaquepts");
		// console.log(KambisolKromik);
	}
	if (geoJsonData) {
		MeditereanVertik = geoJsonData.features.filter((list) => list.properties.SOILTAX === "Hapludalfs, Eutrodepts, Epiaquepts");
		// console.log(MeditereanVertik);
	}
	if (geoJsonData) {
		MediteranLitosol = geoJsonData.features.filter((list) => list.properties.SOILTAX === "Hapludalfs, Eutrudepts, Udorthents");
		// console.log(MediteranLitosol);
	}
	if (geoJsonData) {
		AirTanah = geoJsonData.features.filter((list) => list.properties.JENIS === "Cekungan Air Tanah");
		// console.log(AirTanah);
	}
	if (geoJsonData) {
		DaerahAliranSungai = geoJsonData.features.filter((list) => list.properties.JENIS === "Daerah Aliran Sungai");
		// console.log(DaerahAliranSungai);
	}
	if (geoJsonData) {
		HutanLindung = geoJsonData.features.filter((list) => list.properties.FUNGSI_KAW === "Hutan Lindung");
		// console.log(HutanLindung);
	}
	if (geoJsonData) {
		HutanProduksiTerbatas = geoJsonData.features.filter((list) => list.properties.FUNGSI_KAW === "Hutan Produksi Terbatas");
		// console.log(HutanProduksiTerbatas);
	}

	return (
		<>
			{/* Page content here */}
			<MapContainer center={center} zoom={13} style={{ height: "93.2dvh", width: "100%" }} zoomControl={false}>
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
					<LayersControl.Overlay checked name="01_Wilayah_Administrasi">
						<LayerGroup>{WilayahAdministrasi && <GeoJSON data={WilayahAdministrasi} style={{ weight: 2, color: "#ffefb7" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="02_Kawasan Bentang Alam Karst">
						<LayerGroup>{KawasanKarst && <GeoJSON data={KawasanKarst} style={{ weight: 2, color: "#ff6201" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay name="03_Geologi">
						<LayerGroup></LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Qb">
						<LayerGroup>{GeoQB && <GeoJSON data={GeoQB} style={{ weight: 2, color: "#21a7d4" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Tms">
						<LayerGroup>{GeoTms && <GeoJSON data={GeoTms} style={{ weight: 2, color: "#b410eb" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Tmwl">
						<LayerGroup>{GeoTmwl && <GeoJSON data={GeoTmwl} style={{ weight: 2, color: "#67e43d" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay name="04_Geomorfologi">
						<LayerGroup></LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Dataran Aluvial">
						<LayerGroup>{DataranAluvial && <GeoJSON data={DataranAluvial} style={{ weight: 2, color: "#fe9702" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Lembah Perbukitan Solusional Karst">
						<LayerGroup>{LembahKarst && <GeoJSON data={LembahKarst} style={{ weight: 2, color: "#02ff10" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Lembah Sungai">
						<LayerGroup>{LembahSungai && <GeoJSON data={LembahSungai} style={{ weight: 2, color: "#4ca5ff" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Pegunungan Solusional Karst">
						<LayerGroup>{PegununganKarst && <GeoJSON data={PegununganKarst} style={{ weight: 2, color: "#0b7023" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Perbukitan Solusional Karst">
						<LayerGroup>{PerbukitanKarst && <GeoJSON data={PerbukitanKarst} style={{ weight: 2, color: "#fd3236" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Telaga Karst (Logva)">
						<LayerGroup>{Logva && <GeoJSON data={Logva} style={{ weight: 2, color: "#0000c4" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay name="05_Jenis Tanah">
						<LayerGroup></LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Badan Air / Tubuh Air">
						<LayerGroup>{BadanTubuhAir && <GeoJSON data={BadanTubuhAir} style={{ weight: 2, color: "#1ffff8" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Campuran Gleisol Distrik dan Kambisol Eutrik">
						<LayerGroup>{GleisolDistrik && <GeoJSON data={GleisolDistrik} style={{ weight: 2, color: "#f1fe00" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Campuran Gleisol Kalkarik dan Kambisol Kromik">
						<LayerGroup>{GleisolKalkarik && <GeoJSON data={GleisolKalkarik} style={{ weight: 2, color: "#ff9101" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Campuran Kambisol Eutrik dan Mediteran Vertik">
						<LayerGroup>{KambisolEutrik && <GeoJSON data={KambisolEutrik} style={{ weight: 2, color: "#e385f0" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Campuran Kambisol Kromik dan Gleisol Kalkarik">
						<LayerGroup>{KambisolKromik && <GeoJSON data={KambisolKromik} style={{ weight: 2, color: "#bed037" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Campuran Mediteran Vertik, Kambisol Eutrik dan Gleisol Kalkarik">
						<LayerGroup>{MeditereanVertik && <GeoJSON data={MeditereanVertik} style={{ weight: 2, color: "#ce5911" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Campuran Mediteran Vertik, Kambisol Eutrik dan Litosol">
						<LayerGroup>{MediteranLitosol && <GeoJSON data={MediteranLitosol} style={{ weight: 2, color: "#5cdd48" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="06_Air Tanah">
						<LayerGroup>{AirTanah && <GeoJSON data={AirTanah} style={{ weight: 2, color: "#17b2ff" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="07_Daerah Aliran Sungai">
						<LayerGroup>{DaerahAliranSungai && <GeoJSON data={DaerahAliranSungai} style={{ weight: 2, color: "#01ccff" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay name="08_Kawasan Hutan">
						<LayerGroup></LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Hutan Lindung">
						<LayerGroup>{HutanLindung && <GeoJSON data={HutanLindung} style={{ weight: 2, color: "#008c09" }} />}</LayerGroup>
					</LayersControl.Overlay>
					<LayersControl.Overlay checked name="Hutan Produksi Terbatas">
						<LayerGroup>{HutanProduksiTerbatas && <GeoJSON data={HutanProduksiTerbatas} style={{ weight: 2, color: "#9aff8b" }} />}</LayerGroup>
					</LayersControl.Overlay>
				</LayersControl>

				<div className="absolute top-20 right-0 w-full z-[10000] p-3">{/* <div className="flex">{geoJsonData && geoJsonLayerRef.current && <SearchControl geoJsonLayer={geoJsonLayerRef.current} />}</div> */}</div>

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
		</>
	);
};

export default MapWilayah;
