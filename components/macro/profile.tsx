import { User } from "@supabase/supabase-js"; // eslint-disable-line

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import { TbLogout } from "react-icons/tb";
import { signOut } from "@/lib/function/auth";

const Profile = ({ user }: { user: User }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage
            src={
              user.user_metadata.avatar_url || "https://github.com/msafdev.png"
            }
            alt={`${user.user_metadata.name}'s avatar` || "User's avatar"}
          />
          <AvatarFallback>
            {user.user_metadata.name[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="mt-2 w-fit rounded-lg bg-popover p-1.5">
        <form action={signOut}>
          <Button
            type="submit"
            variant="secondary"
            className="h-fit w-full gap-x-3 rounded-sm border px-4 py-1.5"
          >
            <TbLogout className="dark:text-supabase" />
            <span>Logout</span>
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};
export default Profile;
