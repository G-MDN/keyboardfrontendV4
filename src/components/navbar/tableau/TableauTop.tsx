import { Key } from "lucide-react";
import ModalButton from "./ModalButton";
import TableauLine from "./TableauLine";

import "./TableauTop.css";

function TableauTop() {
	return (
		<div>
			<div className="tableauTop">
				<Key className="keyTableauTop"/>
				<h1>Tableau TRANSACTION</h1>
				<input
					type="text"
					id="filtre"
					placeholder="Tapez votre recherche"
					className="filterZone"
				/>
				<ModalButton />
			</div>
			<div>
				<TableauLine />
			</div>
		</div>
	);
}

export default TableauTop;
