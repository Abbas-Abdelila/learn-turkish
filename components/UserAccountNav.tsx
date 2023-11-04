import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const UserAccountNav = () => {
  return (
    <Button
      variant="destructive"
      onClick={() => {
        signOut();
      }}
    >
      Sign Out
    </Button>
  );
};

export default UserAccountNav;
