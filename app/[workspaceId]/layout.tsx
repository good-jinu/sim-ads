import { createClient } from "@/lib/supabase/server";

export default async function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  return (
    <div>
      <h1>{data.user?.id}</h1>
      <h2>{error?.message}</h2>
      <div>{children}</div>
    </div>
  );
}
