import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Database } from "@/lib/Database.types";
import Link from "next/link";

type WorkspaceCardProps = {
  workspace: Database["public"]["Tables"]["workspaces"]["Row"];
  memberCount: number;
  campaignCount: number;
  convertToPathname: (id: string) => string;
};

const WorkspaceCard = ({
  workspace,
  memberCount,
  campaignCount,
  convertToPathname,
}: WorkspaceCardProps) => {
  return (
    <Link href={convertToPathname(workspace.id)}>
      <Card>
        <CardHeader>
          <CardTitle>{workspace.name}</CardTitle>
          <CardDescription>
            members: {memberCount} campaigns: {campaignCount}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <div className="p-2">Click to move</div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default WorkspaceCard;
