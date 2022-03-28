import React, { useState } from 'react';

// Components & Friends.
import PrintForm from './PrintForm';
import ItemsController from "./ItemsController";

export default function PrintContainer() {
  const [ lineItems, setLineItems ] = useState([{ textLine: 'Inserisci il testo', fontFamily: 'Roboto', fontSize: '9', isBold: false, isItalic: false, textAlign: 'center' }]);

  return (
    <React.Fragment>
      <PrintForm />
      <ItemsController lineItems={lineItems} />
    </React.Fragment>
  );
}
