"use server";

import { createClient } from "~/lib/supabase/server";

export async function addToWaitlist(formData: FormData) {
  const email = formData.get("email");
  if (!email || typeof email !== "string") {
    return { error: "Invalid email address." };
  }
  const supabase = await createClient();
  const { error } = await supabase.from("waitlist").upsert({ email });
  if (error) {
    return { error: error.message };
  }
  return { success: true };
}
