"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { AdminUserAttributes } from "@supabase/supabase-js";
import { createAdminClient } from "@/utils/supabase/admin-helper";

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = createAdminClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data: AdminUserAttributes = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    email_confirm: true,
    user_metadata: {
      fullname: formData.get("name") as string,
    },
  };

  console.log(data);
  const { error } = await supabase.auth.admin.createUser(data);

  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/login");
}
