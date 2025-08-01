import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import InvoiceItem from "./InvoiceItem";
import { useInvoiceContext } from "@/context/InvoiceContext";

const data = [
  {
    id: 1,
    description: "Buy new game",
    quantity: 1,
    amount: 50,
    rate: 120,
  },
  {
    id: 2,
    description: "Buy new book",
    quantity: 1,
    amount: 120,
    rate: 120,
  },
];

const ItemList = () => {
  const { invoice } = useInvoiceContext();

  const addItem = () => {};
  return (
    <Card>
      <CardHeader className="flex justify-between items-center flex-row">
        <CardTitle>Invoices Items</CardTitle>
        <Button size={"sm"} onClick={addItem}>
          <Plus className="size-4 mr-2" />
          Add Item
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {invoice.items.map((item, index) => (
          <InvoiceItem
            key={invoice.id}
            invoice={item}
            canRemove={invoice.items.length > 1}
            index={index}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default ItemList;
