"use server";

import { createClient } from "~/lib/supabase/server";

export async function addToWaitlist(formData: FormData) {
  const email = formData.get("email");
  if (!email || typeof email !== "string") {
    return { error: "Invalid email address." };
  }
  const supabase = await createClient();
  const { data: existingEntry } = await supabase
    .from("waitlist")
    .select("id,email")
    .eq("email", email)
    .single();

  const { error } = await supabase
    .from("waitlist")
    .upsert({ id: existingEntry?.id, email });
  if (error) {
    return { error: "Something went wrong. Please try again later." };
  }
  return { success: true };
}
