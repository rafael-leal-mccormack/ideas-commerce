"use client";

import { useState } from "react";
import { Slider } from "@ui/shadcn/slider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ui/shadcn/card";

export default function Component() {
  const [saleAmount, setSaleAmount] = useState(100);
  const feePercentage = 5;
  const feeAmount = (saleAmount * feePercentage) / 100;
  const sellerReceives = saleAmount - feeAmount;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Seller Fee Structure
      </h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>How Our Fees Work</CardTitle>
          <CardDescription>
            We take a small percentage fee from each sale to cover our
            operational costs and continue improving the platform for all users.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Our fee structure is simple: we take a{" "}
            <strong>{feePercentage}%</strong> fee on each sale. This means that
            for every item you sell, you&apos;ll receive{" "}
            <strong>{100 - feePercentage}%</strong> of the sale price.
          </p>
          <div className="bg-muted p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-2">Example:</h3>
            <p>
              If you sell an item for ${saleAmount.toFixed(2)}, our fee would be
              ${feeAmount.toFixed(2)}, and you would receive $
              {sellerReceives.toFixed(2)}.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Try it out:</h3>
            <p>
              Move the slider to see how fees change based on the sale amount.
            </p>
            <Slider
              min={1}
              max={1000}
              step={1}
              value={[saleAmount]}
              onValueChange={(value) => setSaleAmount(value[0])}
              className="mb-4"
            />
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">
                  Sale Amount
                </p>
                <p className="text-2xl font-bold">${saleAmount.toFixed(2)}</p>
              </div>
              <div className="bg-blue-400/10 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">
                  Our Fee ({feePercentage}%)
                </p>
                <p className="text-2xl font-bold">${feeAmount.toFixed(2)}</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">
                  You Receive
                </p>
                <p className="text-2xl font-bold">
                  ${sellerReceives.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Why We Charge Fees</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Maintain and improve the marketplace platform</li>
            <li>Provide customer support for buyers and sellers</li>
            <li>Process secure payments and handle financial transactions</li>
            <li>
              Market the platform to attract more buyers for your products
            </li>
            <li>Develop new features to help you sell more effectively</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
