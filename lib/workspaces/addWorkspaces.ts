import { Database } from "../Database.types";
import { supabase } from "../supabase";

export async function addWorkspaces(
  request: Database["public"]["Tables"]["workspaces"]["Insert"],
) {
  const { error } = await supabase.from("workspaces").insert([request]);

  if (error) {
    throw new Error("Error inserting advertiser: " + error.message);
  }
}
