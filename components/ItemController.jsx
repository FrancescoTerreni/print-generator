import React from "react";
import styles from '../styles/ItemController.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBold, faItalic, faAlignCenter, faAlignLeft, faAlignRight } from "@fortawesome/free-solid-svg-icons";

export default function ItemController() {
  return (
    <React.Fragment>
        <tr className="generator-row-desktop">
            <td>
                <input id="text-line" placeholder="Inserisci il testo" className="generator-text" type="text" name="text-line" />
            </td>
            <td className="generator-font">
                <select id="font-selector" name="font-selector">
                    <option value="Roboto">Roboto</option>
                    <option value="Open Sans">Open Sans</option>
                    <option value="Courier Prime">Courier Prime</option>
                    <option value="Oswald">Oswald</option>
                    <option value="Cabin">Cabin</option>
                </select>
            </td>
            <td className="generator-size">
                <select id="size-selector" name="size-selector">
                    <option value="7">7</option>
                    <option value="8" selected="selected">8</option>
                    <option value="9">9</option> 
                </select>
            </td>
            <td className={styles.generatorStyles}> 
                <FontAwesomeIcon icon={faBold} />
                <FontAwesomeIcon icon={faItalic} /> 
                <FontAwesomeIcon icon={faAlignLeft} />
                <FontAwesomeIcon icon={faAlignCenter} />
                <FontAwesomeIcon icon={faAlignRight} />
            </td>
        </tr>
    </React.Fragment>
  );
}
