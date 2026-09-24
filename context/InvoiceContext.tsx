"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { InvoiceData } from "../types/invoices";
import { mockInvoices } from "@/lib/mockData";

interface InvoiceContextType {
  invoice: InvoiceData;
  updateInvoice: (updates: Partial<InvoiceData>) => void;
  addItem: () => void;
  removeItem: (index: number) => void;
  updateItem: (index: number, key: string, value: string | number) => void;
}

const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined);

export function InvoiceProvider({ children }: { children: ReactNode }) {
  const [invoice, setInvoices] = useState<InvoiceData>(mockInvoices);

  const updateInvoice = (updates: Partial<InvoiceData>) => {
    setInvoices({ ...invoice, ...updates });
  };

  const addItem = () => {
    const newItem = {
      id: Date.now().toString(),
      description: "",
      amount: 0,
      quantity: 1,
      rate: 0,
    };
    updateInvoice({ items: [...invoice.items, newItem] });
  };
  const removeItem = (index: number) => {
    if (invoice.items.length > 1) {
      const newItems = invoice.items.filter((_, i) => i != index);
      updateInvoice({ items: newItems });
    }
  };
  const updateItem = (index: number, key: string, value: string | number) => {
    const newItems = [...invoice.items];
    newItems[index] = { ...newItems[index], [key]: value };
    // update the item amount
    if (key === "quantity" || key === "rate") {
      let quantity = newItems[index].quantity;
      let rate = newItems[index].rate;

      if (typeof quantity === "string") {
        quantity = Number.parseInt(quantity);
      }
      if (typeof rate === "string") {
        rate = Number.parseInt(rate);
      }
      const amount = quantity * rate;
      newItems[index].amount = amount;
    }

    updateInvoice({ items: newItems });
  };
  return (
    <InvoiceContext.Provider
      value={{
        invoice,
        updateInvoice,
        addItem,
        removeItem,
        updateItem,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}

export function useInvoiceContext() {
  const context = useContext(InvoiceContext);
  if (context === undefined) {
    throw new Error("useInvoiceContext must be used within an InvoiceProvider");
  }
  return context;
}
