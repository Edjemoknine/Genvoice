import { InvoiceData } from "../types/invoices";

export const mockInvoices: InvoiceData = {
  id: "INV-001",
  invoiceNumber: "INV-001",
  date: "2025-07-01",
  fromName: "John Smith",
  fromEmail: "john@example.com",
  fromPhone: "+1234567890",
  toName: "ACME Corp",
  toEmail: "billing@acme.com",
  items: [
    {
      id: "item-1",
      description: "Web Development Services",
      quantity: 1,
      rate: 5000,
      amount: 5000,
    },
    {
      id: "item-2",
      description: "Design Consultation",
      quantity: 2,
      rate: 1500,
      amount: 3000,
    },
  ],
  subtotal: 8000,
  taxRate: 20,
  taxAmount: 1600,
  total: 9600,
};
