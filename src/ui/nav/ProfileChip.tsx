"use client";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@ui/shadcn/avatar";
import { Button } from "@ui/shadcn/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ui/shadcn/dropdown-menu";
import { ChevronDown, User, Settings, HelpCircle, LogOut } from "lucide-react";
import { User as SupabaseUser } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function ProfileChip({ user }: { user: SupabaseUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-10 w-full justify-start px-2 sm:w-auto sm:px-4"
        >
          <Avatar className="h-6 w-6 mr-2">
            {/* <AvatarImage src={userAvatar} alt={userName} /> */}
            <AvatarFallback>{user.email.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="hidden sm:inline-block">{user.email}</span>
          <ChevronDown
            className={`ml-2 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HelpCircle className="mr-2 h-4 w-4" />
          Help
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            const supabase = createClient();

            supabase.auth.signOut().then(() => {
              router.refresh();
            });
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
