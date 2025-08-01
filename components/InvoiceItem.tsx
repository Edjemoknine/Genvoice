import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { useInvoiceContext } from "@/context/InvoiceContext";
import { Invoice } from "@/types/invoices";

interface InvoiceItemProps {
  invoice: Invoice;
  index: number;
  canRemove: boolean;
}

const InvoiceItem = ({ invoice, index, canRemove }: InvoiceItemProps) => {
  const { removeItem } = useInvoiceContext();

  return (
    <div className="grid grid-cols-12 gap-4 p-4 rounded-lg border">
      <div className="col-span-5">
        <Label htmlFor="description">Description</Label>
        <Input
          value={invoice.description}
          id="description"
          type="text"
          placeholder="Profile description"
        />
      </div>
      <div className="col-span-2">
        <Label htmlFor="quantity">Quantity</Label>
        <Input value={invoice.quantity} id="quantity" type="number" min={1} />
      </div>
      <div className="col-span-2">
        <Label htmlFor="rate">Rate</Label>
        <Input
          value={invoice.rate}
          id="rate"
          type="number"
          min={0}
          step={0.01}
        />
      </div>
      <div className="col-span-2">
        <Label htmlFor="amount">Amount</Label>
        <div className="h-10 px-3 py-2 bg-gray-50 border rounded-md flex items-center">
          ${invoice.amount}
        </div>
      </div>
      <div className="col-span-1 flex items-end justify-center">
        <Button
          onClick={() => removeItem(index)}
          size={"sm"}
          variant={"outline"}
        >
          <Trash className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default InvoiceItem;
