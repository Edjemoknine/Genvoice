export type Invoice = {
  id: string;
  description: string;
  quantity: number | string;
  rate: number | string;
  amount: number;
};

export type InvoiceData = {
  id: string;
  invoiceNumber: string;
  date: string;
  fromName: string;
  fromEmail: string;

  fromPhone: string;
  toName: string;
  toEmail: string;

  items: Invoice[];
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  total: number;
};
