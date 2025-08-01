import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const TaxAndTotals = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tax and Totals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="tax">Tax Rate (%)</Label>
            <Input id="tax" type="number" min={0} step={0.01} />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>$0.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Tax (10%)</span>
              <span>$0.00</span>
            </div>
            <div className="flex items-center justify-between font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span>$0.00</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaxAndTotals;
