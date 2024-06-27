"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import wonogiriLogo from "@/public/wonogiri1.png";

export default function MainNavbar() {
	const pathname = usePathname();

	const navLinks = [
		{
			id: 1,
			name: "Beranda",
			link: "/",
		},
		{
			id: 2,
			name: "Bidang Tanah",
			link: "/pages/bidangtanah",
		},
		{
			id: 3,
			name: "Tata Ruang",
			link: "/pages/tataruang",
		},
		{
			id: 4,
			name: "Wilayah",
			link: "/pages/wilayah",
		},

		// template
		// {
		// 	name: "",
		// 	link: "",
		// },
	];

	return (
		<div className="navbar bg-base-100 rounded-b-lg">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
						</svg>
					</div>
					<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						{navLinks.map(({ id, link, name }) => (
							<li key={id}>
								<Link href={link} className={`${pathname === link ? "text-neutral text-lg" : ""}`}>
									{name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<Link className="btn btn-ghost" href={"/"}>
					<Image src={wonogiriLogo} alt="wonogori-logo" width={25} />
					{/* <img src="https://2.bp.blogspot.com/-HfHNQRNch90/WgU6sSOmmPI/AAAAAAAAEuE/bM4oCSMMEHAIX9mMuI27sBVL4RYqayFDwCLcBGAs/s1600/wonogiri.png" alt="logo" style={{ maxHeight: "60px", maxWidth: "60px" }} /> */}
					<p className=" text-2xl font-bold">SITALA</p>
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex lg:px-">
				<ul className="menu menu-horizontal px-1 text-lg font-medium">
					{navLinks.map(({ id, link, name }) => (
						<li key={id}>
							<Link href={link} className={`${pathname === link ? "text-neutral text-lg" : ""}`}>
								{name}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="navbar-end">
				<label className="cursor-pointer grid place-items-center me-4">
					<input type="checkbox" value="forest" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
					<svg
						className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<circle cx="12" cy="12" r="5" />
						<path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
					</svg>
					<svg
						className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
					</svg>
				</label>
				<button className="btn btn-ghost" disabled>
					Sign In
				</button>
			</div>
		</div>
	);
}
