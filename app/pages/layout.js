import SidebarContent from "@/components/sidebarContent";
import "primeicons/primeicons.css";
import Link from "next/link";
export default function MapsLayout({
	children, // will be a page or nested layout
}) {
	return (
		<section>
			{/* Include shared UI here e.g. a header or sidebar */}
			<div className="w-full navbar bg-base-300">
				<div className="flex-1 ms-2">
					<label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
						<i className="pi pi-bars"></i>
					</label>
					<div className="flex-1 px-2 mx-2">
						<Link className="btn btn-ghost" href={"/"}>
							<img src="https://2.bp.blogspot.com/-HfHNQRNch90/WgU6sSOmmPI/AAAAAAAAEuE/bM4oCSMMEHAIX9mMuI27sBVL4RYqayFDwCLcBGAs/s1600/wonogiri.png" alt="logo" style={{ maxHeight: "60px", maxWidth: "60px" }} />
							<p className=" text-2xl font-bold">SITALA</p>
						</Link>
					</div>
				</div>
				<div className="flex-none hidden lg:block">
					<ul className="menu menu-horizontal">
						{/* Navbar menu content here */}
						<SidebarContent />
					</ul>
				</div>
			</div>
			{children}
		</section>
	);
}
