import { Database } from "../Database.types";
import { supabase } from "../supabase";

export async function addAdvertiser(
  request: Database["public"]["Tables"]["advertisers"]["Insert"],
) {
  const { error } = await supabase.from("advertisers").insert([request]);

  if (error) {
    throw new Error("Error inserting advertiser: " + error.message);
  }
}
