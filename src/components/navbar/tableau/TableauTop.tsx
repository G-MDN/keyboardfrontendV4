import { Key, Plus } from "lucide-react";
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
				<button type="button"
        className="buttonTableauTop"
        >
					<Plus />
					Ajouter un nouveau trousseau
				</button>
			</div>
			<div>
				<TableauLine />
			</div>
		</div>
	);
}

export default TableauTop;
