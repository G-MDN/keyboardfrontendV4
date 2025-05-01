import { useState } from "react";
import "./PhotoKeys.css";

function PhotoKeys() {
	const [image, setImage] = useState<string | null>(null);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setImage(URL.createObjectURL(file));
		}
	};

	return (
		<div className="photo-keys-container">
			<input
				id="file-upload"
				type="file"
				accept="image/*"
				onChange={handleImageChange}
				className="hidden-input"
			/>
			{image && <img src={image} alt="preview" className="photoKeys" />}
			<label htmlFor="file-upload" className="custom-file-label">
				Choisir une image
			</label>
		</div>
	);
}

export default PhotoKeys;
