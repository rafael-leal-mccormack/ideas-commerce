import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res) {
  try {
    const accountSession = await stripe.accountSessions.create({
      account: (await req.json()).account,
      components: {
        account_onboarding: { enabled: true },
      },
    });

    return NextResponse.json({
      client_secret: accountSession.client_secret,
    });
  } catch (error) {
    console.error(
      "An error occurred when calling the Stripe API to create an account session",
      error
    );

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
