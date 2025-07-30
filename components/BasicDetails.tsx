import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const BasicDetails = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoice details</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="invoiceNumber">Invoice Number</Label>
          <Input id="invoiceNumber" type="text" />
        </div>
        <div>
          <Label htmlFor="invoiceDate">Invoice Date</Label>
          <Input id="invoiceDate" type="date" />
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicDetails;
