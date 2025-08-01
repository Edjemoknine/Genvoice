import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useInvoiceContext } from "@/context/InvoiceContext";
const ContactDetails = () => {
  const { invoice, updateInvoice } = useInvoiceContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle>From & To</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <h3 className="font-medium">From (Your Details)</h3>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={invoice.fromName}
              onChange={(e) => updateInvoice({ fromName: e.target.value })}
              type="text"
              placeholder="Your name or company"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={invoice.fromEmail}
              onChange={(e) => updateInvoice({ fromEmail: e.target.value })}
              type="email"
              placeholder="Your email or company"
            />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">To (Client Details)</h3>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={invoice.toName}
              onChange={(e) => updateInvoice({ toName: e.target.value })}
              type="text"
              placeholder="Client name"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={invoice.toEmail}
              onChange={(e) => updateInvoice({ toEmail: e.target.value })}
              type="email"
              placeholder="Client email"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactDetails;
