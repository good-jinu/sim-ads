export default async function Page({
  params,
}: {
  params: Promise<{ workspaceId: string }>;
}) {
  const workspaceId = (await params).workspaceId;
  return <div>My Post: {workspaceId}</div>;
}
