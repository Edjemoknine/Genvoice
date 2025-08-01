import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { it } from "node:test";
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
const IvoicesPreview = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Invoice Preview</h1>
          <div className="space-x-2">
            <Button variant="outline">Back to Edit</Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
        <Card>
          <CardContent className="p-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-3xl font-semibold mb-2">Invoice</h2>
                <p className="text-gray-600">#0239320202020202</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Date:2023-01-01</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">From:</h3>
                <p className="font-medium">John Doe</p>
                <p className="text-gray-600">john.doe@example.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">To:</h3>
                <p className="font-medium">John Doe</p>
                <p className="text-gray-600">john.doe@example.com</p>
              </div>
            </div>
            {/* invoice items */}
            <table className="w-full mb-8">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-2">Description</th>
                  <th className="py-2 text-center">Quantity</th>
                  <th className="py-2 text-left">Rate</th>
                  <th className="py-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2">{item.description}</td>
                    <td className="py-2 text-center">{item.quantity}</td>
                    <td className="py-2 text-left">
                      ${" "}
                      {typeof item.rate === "number"
                        ? item.rate.toFixed(2)
                        : "0.00"}
                    </td>
                    <td className="py-2 text-right">
                      ${" "}
                      {typeof item.amount === "number"
                        ? item.amount.toFixed(2)
                        : "0.00"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end">
              <div className="space-y-2 w-64">
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
      </div>
    </div>
  );
};

export default IvoicesPreview;
