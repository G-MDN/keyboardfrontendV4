import { Pencil, CircleEllipsis } from "lucide-react";
import TableauLine from "./TableauLine";

import "./Etiquette.css";

interface EtiquetteProps {
	number: number;
	lastname: string;
	address: string;
	status: string;
	onClick?: () => void;
}

function Etiquette({
	number,
	lastname,
	address,
	status,
	onClick,
}: EtiquetteProps) {
	const getStatusColor = (status: string) => {
		switch (status) {
			case "Available":
				return "green";
			case "Borrowed":
				return "red";
			case "Lost":
				return "gray";
		}
	};

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div className="etiquette" onClick={onClick}>
			<div className="contenu">
				<p style={{ width: "70px" }} className="numero">
					{number}
				</p>
				<p style={{ width: "200px" }} className="nom">
					{lastname}
				</p>
				<p style={{ width: "300px" }} className="adresse">
					{address}
				</p>
				<p
					className="availability"
					style={{ backgroundColor: getStatusColor(status), width: "150px" }}
				>
					{status}
				</p>
				<p style={{ width: "150px" }} className="option">
					<Pencil />
					<CircleEllipsis />
				</p>
			</div>
			<TableauLine />
		</div>
	);
}

export default Etiquette;
