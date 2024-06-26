"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SidebarContent = React.memo(function SidebarContent() {
	const pathname = usePathname();

	const navLinks = [
		{
			id: 1,
			name: "Beranda",
			link: "/",
			className: "text-neutral text-md",
		},
		{
			id: 2,
			name: "Bidang Tanah",
			link: "/pages/bidangtanah",
			className: "text-neutral text-md",
		},
		{
			id: 3,
			name: "Tata Ruang",
			link: "",
			className: "dropdown",
			pages: [
				{
					id: 1,
					name: "Penggunaan Lahan",
					link: "/pages/tataruang/penggunaan-lahan",
				},
				{
					id: 2,
					name: "Pola Ruang",
					link: "/pages/tataruang/polaruang",
				},
			],
		},
		{
			id: 4,
			name: "Wilayah",
			link: "/pages/wilayah",
			className: "text-neutral text-md",
		},
	];

	return (
		<>
			{navLinks.map(({ id, link, name, className, pages }) => (
				<li key={id}>
					{className === "dropdown" && (
						<details className="dropdown">
							<summary className="text-neutral text-md">{name}</summary>
							<ul className="menu dropdown-content bg-base-100 rounded-box w-52 shadow z-[10000]">
								{pages?.map(({ id, name, link }) => (
									<li key={id}>
										<Link href={link}>{name}</Link>
									</li>
								))}
							</ul>
						</details>
					)}
					{name !== "Tata Ruang" && (
						<Link href={link} className={`${pathname === link ? className : ""}`}>
							{name}
						</Link>
					)}
				</li>
			))}
		</>
	);
});

export default SidebarContent;
