import { Button } from "@/components/ui/Button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Database } from "@/lib/Database.types";

type AdvertiserCardProps = {
  advertiser: Database["public"]["Tables"]["advertisers"]["Row"];
  memberCount: number;
  campaignCount: number;
};

const AdvertiserCard = ({
  advertiser,
  memberCount,
  campaignCount,
}: AdvertiserCardProps) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{advertiser.name}</CardTitle>
        <CardDescription>
          members: {memberCount} campaigns: {campaignCount}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Button>More info</Button>
      </CardFooter>
    </Card>
  );
};

export default AdvertiserCard;
