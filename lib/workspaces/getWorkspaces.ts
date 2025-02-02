import { Database } from "@/lib/Database.types";
import { supabase } from "../supabase";

type Workspaces = {
  workspaces: Database["public"]["Tables"]["workspaces"]["Row"][];
  isError: boolean;
  totalCount: number;
};

export const getWorkspaces = async (
  page: number = 1,
  limit = 10,
): Promise<Workspaces> => {
  const offset = (page - 1) * limit; // Offset for the query

  // Fetch the total count of workspaces (without limit)
  const { count, error: countError } = await supabase
    .from("workspaces")
    .select("*", { count: "exact" });

  if (countError) {
    return { workspaces: [], isError: true, totalCount: 0 };
  }

  // Fetch the workspaces for the current page
  const { data, error } = await supabase
    .from("workspaces")
    .select("*")
    .range(offset, offset + limit - 1); // Fetch data for the specific page

  if (error) {
    return { workspaces: [], isError: true, totalCount: count ?? 0 };
  }

  return {
    workspaces: data,
    isError: false,
    totalCount: count ?? 0, // Return the total count of workspaces
  };
};
