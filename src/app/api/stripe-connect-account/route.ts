import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const account = await stripe.accounts.create({
      controller: {
        stripe_dashboard: {
          type: "none",
        },
      },
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
      country: "US",
    });

    return NextResponse.json({ account: account.id });
  } catch (error) {
    console.error(
      "An error occurred when calling the Stripe API to create an account:",
      error
    );

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
