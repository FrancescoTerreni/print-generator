import React from "react";
import ItemController from "./ItemController";

export default function ItemsController() {
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr className="generator-row-desktop">
            <th>Testo:</th>
            <th className="generator-font">Font:</th>
            <th className="generator-size">Dimensione:</th>
            <th className="generator-styles">Stile:</th>
          </tr>
        </thead>
        <tbody>
          <ItemController />
        </tbody>
      </table>
    </React.Fragment>
  );
}
