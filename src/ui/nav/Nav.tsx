import { CartSummaryNav } from "@/ui/nav/CartSummaryNav";
import { SeoH1 } from "@/ui/SeoH1";
import { SearchNav } from "@/ui/nav/SearchNav";
import { NavMenu } from "@/ui/nav/NavMenu";
import { YnsLink } from "@/ui/YnsLink";
import ProfileChip from "@/ui/nav/ProfileChip";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/ui/shadcn/button";
import Link from "next/link";

export const Categories = [
  { name: "Apparel", slug: "apparel" },
  { name: "Accessories", slug: "accessories" },
];

export const Nav = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.log(error);
  }
  const user = data.user;
  return (
    <header className="border-b py-4">
      <div className="sm:items-centerm mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 sm:flex-row sm:flex-wrap sm:items-center sm:px-6 md:flex-nowrap lg:px-8">
        <YnsLink href="/">
          <SeoH1 className="-mt-0.5 whitespace-nowrap text-xl font-bold">
            Your Next Store
          </SeoH1>
        </YnsLink>

        <div className="sm:mr-auto">
          <NavMenu />
        </div>

        <div className="flex items-center justify-start gap-x-6">
          <SearchNav />
          <CartSummaryNav />
          {user ? (
            <ProfileChip user={user}></ProfileChip>
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
