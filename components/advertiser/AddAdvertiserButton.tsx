"use client";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import { addAdvertiser } from "@/lib/advertiser/addAdvertiser";
import UserContext from "@/lib/UserContext";
import { FormEvent, useContext, useState } from "react";

const AddAdvertiserButton = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { user } = useContext(UserContext);

  const handleAddAdvertiser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.name && user) {
      const data = {
        name: formData.name,
        description: formData.description,
        created_by: user.id,
      };
      console.log(data);

      try {
        await addAdvertiser(data);
      } catch (error) {
        setErrorMessage((error as Error).message);
      }
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Add Advertiser</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Advertiser</h4>
            <p className="text-sm text-muted-foreground">Add new advertiser.</p>
          </div>
          <form className="grid gap-2" onSubmit={handleAddAdvertiser}>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Name</Label>
              <Input
                id="name"
                placeholder="new advertiser"
                className="col-span-2 h-8"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Description</Label>
              <Input
                id="description"
                placeholder="describe ..."
                className="col-span-2 h-8"
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              />
            </div>
            <Button type="submit" variant="outline">
              Add
            </Button>
            <div className="text-sm text-red-600 dark:text-red-600">
              {errorMessage}
            </div>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AddAdvertiserButton;
