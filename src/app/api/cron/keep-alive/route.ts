import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { error: "Missing environment variables" },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Simple query to wake up the database
    // We fetch 1 row from 'leads', selecting only the 'id' to result in minimal data transfer
    const { error } = await supabase
      .from("leads")
      .select("id")
      .limit(1);

    if (error) {
      console.error("Supabase keep-alive error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Keep alive ping successful" });
  } catch (error) {
    console.error("Unexpected error in keep-alive:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
