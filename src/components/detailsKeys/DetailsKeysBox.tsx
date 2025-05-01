import PhotoKeys from "./PhotoKeys"

import "./DetailsKeysBox.css"
import KeyInformations from "./KeyInformations"
import Historique from "./Historique"

function DetailsKeysBox() {
  return (
    <div className="containerDetailsKeysBox">
      <div className="topDetailsKeysBox">
      <PhotoKeys />
      <KeyInformations />
      </div>
      <div className="historiqueDetailsKeysBox">
        <Historique />
      </div>
    </div>
  )
}

export default DetailsKeysBox
