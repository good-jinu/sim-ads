import { Database } from "@/lib/Database.types";
import { supabase } from "../supabase";

type Advertisers = {
  advertisers: Database["public"]["Tables"]["advertisers"]["Row"][];
  isError: boolean;
  totalCount: number;
};

export const getAdvertisers = async (
  page: number = 1,
  limit = 10,
): Promise<Advertisers> => {
  const offset = (page - 1) * limit; // Offset for the query

  // Fetch the total count of advertisers (without limit)
  const { count, error: countError } = await supabase
    .from("advertisers")
    .select("*", { count: "exact" });

  if (countError) {
    return { advertisers: [], isError: true, totalCount: 0 };
  }

  // Fetch the advertisers for the current page
  const { data, error } = await supabase
    .from("advertisers")
    .select("*")
    .range(offset, offset + limit - 1); // Fetch data for the specific page

  if (error) {
    return { advertisers: [], isError: true, totalCount: count ?? 0 };
  }

  return {
    advertisers: data,
    isError: false,
    totalCount: count ?? 0, // Return the total count of advertisers
  };
};
