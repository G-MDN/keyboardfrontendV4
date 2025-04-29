import { createPortal } from "react-dom";
import ModalNewKey from "./ModalNewKey";
import { useState } from "react";
import { Plus } from "lucide-react"

import "./ModalButton.css"

function ModalButton() {
	const [showModal, setShowModal] = useState(false);

	return (
		<div>
			<button type="button" onClick={() => setShowModal(true)} className="buttonNewKey">
				<Plus />
        Ajouter un trousseau
			</button>
			{showModal &&
				createPortal(
					<ModalNewKey closeModal={() => setShowModal(false)} />,
					document.body,
				)}
		</div>
	);
}

export default ModalButton;
