"use server";

import { createAdminClient } from "@/lib/supabase/admin";

interface CaptureLeadResult {
  success: boolean;
  error?: string;
}

export async function captureLeadAction(
  email: string
): Promise<CaptureLeadResult> {
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address" };
  }

  try {
    const supabase = createAdminClient();

    const { error } = await supabase.from("leads").upsert(
      {
        email: email.toLowerCase().trim(),
        provider: "pricing_capture",
      },
      {
        onConflict: "email",
      }
    );

    if (error) {
      console.error("Failed to store lead:", JSON.stringify(error, null, 2));
      // Still return success - don't block user from seeing pricing
      return { success: true };
    }

    console.log("Lead captured successfully:", email);

    return { success: true };
  } catch (err) {
    console.error("Lead capture error:", err);
    // Still return success - don't block user from seeing pricing
    return { success: true };
  }
}
