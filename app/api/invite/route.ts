import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const { email, role } = await req.json();

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // ✅ Step 1: Invite user
   const { data, error } = await supabase.auth.admin.inviteUserByEmail(email);

let user = data?.user;

if (error) {
  if (error.code === "email_exists") {
    console.log("User already exists, fetching user...");

    const { data: existingUsers } = await supabase.auth.admin.listUsers();

    const existingUser = existingUsers.users.find(
      (u) => u.email === email
    );

    if (!existingUser) {
      return new Response(
        JSON.stringify({ error: "User exists but could not be retrieved" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    user = existingUser;
  } else {
    console.error("Auth error:", error);

    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
}

// ✅ ONLY check user (not data.user)
if (!user) {
  return new Response(
    JSON.stringify({ error: "User is null after processing" }),
    { status: 400, headers: { "Content-Type": "application/json" } }
  );
}

// ✅ Upsert
const { error: insertError } = await supabase
  .from("users")
  .upsert({
    id: user.id,
    email: email,
    role: role,
  });
    
    if (insertError) {
  console.error("Insert error (full object):", insertError);
  console.error("Insert error message:", insertError.message);
      return new Response(
        JSON.stringify({ error: insertError.message }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message || "Unexpected error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
