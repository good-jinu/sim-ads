import { supabase } from "../supabase";

export const authEmailPW = async (
  type: "LOGIN" | "SIGNUP",
  email: string,
  password: string,
) => {
  try {
    const {
      error,
      data: { user },
    } =
      type === "LOGIN"
        ? await supabase.auth.signInWithPassword({
            email: email,
            password,
          })
        : await supabase.auth.signUp({ email: email, password });

    if (error) {
      throw new Error("Error with auth: " + error.message);
    }

    return user;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error("Error logging out:" + error.message);
  } else {
    console.log("User logged out successfully");
  }
};
