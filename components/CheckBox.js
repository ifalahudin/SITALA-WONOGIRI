"use client";

import { useState } from "react";

const InputCheckbox = ({ onCheckboxChange, propertyName }) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = () => {
		setIsChecked(!isChecked);
		onCheckboxChange(!isChecked, propertyName);
	};

	return (
		<div className="form-control">
			<label className="label cursor-pointer">
				<span className="label-text">Pemilik</span>
				<input type="checkbox" defaultChecked className="checkbox mx-2" name="property" checked={propertyName === "PEMILIK"} onChange={handleChange} />
				<span className="label-text">Hak Milik</span>
				<input type="checkbox" className="checkbox mx-2" checked={propertyName === "HAK_MILIK"} onChange={handleChange} />
			</label>
		</div>
	);
};

export default InputCheckbox;
