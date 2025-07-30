"use client";
import InvoiceForm from "@/components/InvoiceForm";
import IvoicesPreview from "@/components/IvoicesPreview";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [showPreview, setShowPreview] = useState(false);

  if (showPreview) return <IvoicesPreview />;
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Genvoice</h1>
            <p className="text-gray-600">Create professional invoices</p>
          </div>
          <Button onClick={() => setShowPreview(true)}>
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
        </div>
        <InvoiceForm />
      </div>
    </div>
  );
}
