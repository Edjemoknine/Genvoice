import React from "react";
import BasicDetails from "./BasicDetails";
import ContactDetails from "./ContactDetails";
import ItemList from "./ItemList";
import TaxAndTotals from "./TaxAndTotals";

const InvoiceForm = () => {
  return (
    <div className="space-y-6">
      <BasicDetails />
      <ContactDetails />
      <ItemList />
      <TaxAndTotals />
    </div>
  );
};

export default InvoiceForm;
