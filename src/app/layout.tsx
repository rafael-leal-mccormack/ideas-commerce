import "@/app/globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { Toaster } from "@/ui/shadcn/sonner";
import { publicUrl } from "@/env.mjs";
import { Footer } from "@/ui/footer/Footer";

export const generateMetadata = async (): Promise<Metadata> => {
	const t = await getTranslations("Global.metadata");
	return {
		title: t("title"),
		description: t("description"),
		metadataBase: new URL(publicUrl),
	};
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const locale = await getLocale();
	const messages = await getMessages();

	return (
		<html lang={locale} className="h-full antialiased">
			<body className="flex min-h-full flex-col">
				<NextIntlClientProvider messages={messages}>
					<div className="flex min-h-full flex-col bg-white" vaul-drawer-wrapper="">
						{children}
						<Footer />
					</div>
					<Toaster position="top-center" offset={10} />
				</NextIntlClientProvider>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
