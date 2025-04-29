import axios from "axios";
import { useState } from "react";
import "./ModalNewKey.css";

function ModalNewKey({ closeModal }) {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [number, setNumber] = useState("");
	const [address, setAddress] = useState("");
	const [status, setStatus] = useState("");
	const [lastname, setLastname] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

	// 	try {
	// 		const newKey = {
	// 			number,
	// 			address,
	// 			status,
	// 			lastname,
	// 			photo: "default.jpg", // temporairement un faux champ pour correspondre à ce que ton back attend (vu qu'on oublie l'image pour l'instant)
	// 		};

	// 		const response = await axios.post(
	// 			"http://localhost:4242/api/newKey/",
	// 			newKey,
	// 		);

	// 		console.log(response.data);
	// 		alert("Clé ajoutée avec succès !");

	// 		// Optionnel : reset du formulaire
	// 		setNumber("");
	// 		setAddress("");
	// 		setStatus("");
	// 		setLastname("");
	// 	} catch (error) {
	// 		console.error("Erreur lors de l'ajout de la clé", error.response || error.message);
	// 		alert("Erreur lors de l'ajout de la clé");
	// 	}
	// };

  try {
    const response = await axios.post("http://localhost:4242/api/newKey/", {
      number: number,
      lastname: lastname,
      address: address,
      status: "Available",
    });

    console.log("Réponse API après ajout :", response.data);

    if (response.status === 201) {
      const newKey: EtiquetteProps = {
        id: response.data.keyId,
        number: number,
        lastname: lastname,
        address: address,
        status: "Available", // status par défaut
      };

      addNewEtiquette(newKey);
      setLastname("");
      setAddress("");
      setNumber("");
      closeModalKey();
    }
  } catch (error) {
    alert("Votre trousseau a bien été ajouté");
  }
};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setSelectedImage(URL.createObjectURL(file));
		}
	};

	return (
		<>
			<div onClick={closeModal} className="overlayModal">
				{" "}
			</div>

			<div className="modalNewKey">
				<h2>Ajout du nouveau trousseau</h2>
				<form onSubmit={handleSubmit} className="formModalNewKey">
					<input
						type="number"
						placeholder="Selectionner un emplacement"
						value={number}
						onChange={(e) => setNumber(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Nom propriétaire"
						value={lastname}
						onChange={(e) => setLastname(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Adresse logement"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
					<div className="containerNewKey">
						<label htmlFor="file-upload" className="custom-file-upload">
							{!selectedImage && "+"}
						</label>
						<input
							type="file"
							id="file-upload"
							accept="image/*"
							onChange={handleImageChange}
							style={{ display: "none" }}
						/>
						{selectedImage && (
							<img
								src={selectedImage}
								alt="Upload Preview"
								className="photoNewKey"
							/>
						)}
					</div>
					<button type="submit" className="validateButton">
						Ajouter
					</button>
				</form>
			</div>
		</>
	);
}

export default ModalNewKey;
