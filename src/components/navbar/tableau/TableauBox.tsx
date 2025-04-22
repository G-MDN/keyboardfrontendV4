import KeyList from "./KeyList";
import axios from "axios";
import "./TableauBox.css";
import { useEffect, useState } from "react";
import Etiquette from "./Etiquette";
import TableauTop from "./TableauTop";

type Key = {
	address: string;
	number: number;
	lastname: string;
	adress: string;
	status: string;
}

function TableauBox() {
	const [keys, setKeys] = useState<Key[]>([]);

	useEffect(() => {
		axios
			.get("http://localhost:4242/api/key/")
			.then((res) => setKeys(res.data));
	}, []);

	return (
		<div>
		<div className="containerTableauBox">
			<TableauTop />
			<KeyList />
			{keys
			.slice()
			.sort((a, b) =>a.number - b.number)
			.map((key) => (
				<Etiquette key={key.number} number={key.number} lastname={key.lastname} address={key.address} status={key.status} />
			))}
		</div>
		</div>
	);
}

export default TableauBox;
