import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useInvoiceContext } from "@/context/InvoiceContext";

const TaxAndTotals = () => {
  const { invoice, updateInvoice } = useInvoiceContext();
  const handleOnBlur = () => {
    if (invoice.taxRate === "" || isNaN(Number(invoice.taxRate))) {
      updateInvoice({ taxRate: 0 });
    }
  };

  const handleTaxRate = (value: string) => {
    if (value === "") {
      updateInvoice({ taxRate: 0 });
    } else {
      const numValue = Number.parseInt(value);
      updateInvoice({ taxRate: numValue });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tax and Totals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="tax">Tax Rate (%)</Label>
            <Input
              value={invoice.taxRate}
              onChange={(e) => handleTaxRate(e.target.value)}
              onBlur={handleOnBlur}
              id="tax"
              type="number"
              min={0}
              step={0.01}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>${invoice.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Tax (10%)</span>
              <span>${invoice.taxAmount.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span>${invoice.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaxAndTotals;
