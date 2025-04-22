import "./KeyList.css"
import TableauLine from "./TableauLine"

function KeyList() {
  return(
    <div>
      <div className="tableHeader">
        <h4 style={{ width: "70px" }}>N°</h4>
        <h4 style={{ width: "200px" }}>Nom</h4>
        <h4 style={{ width: "300px" }}>Adresse</h4>
        <h4 style={{ width: "150px" }}>Statut</h4>
        <h4 style={{ width: "150px" }}>Actions</h4>
      </div>
      <div>
      <TableauLine />
      </div>
    </div>
  )
}

export default KeyList
