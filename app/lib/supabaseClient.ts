import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oovlmneposgwdygkpcvj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vdmxtbmVwb3Nnd2R5Z2twY3ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5NDg3MTEsImV4cCI6MjA5NTUyNDcxMX0.icplrh9gk4-GS9XotRX9yCwv9DsCJp5u3cENKQFH7Sg";

export const supabase = createClient(supabaseUrl, supabaseKey);