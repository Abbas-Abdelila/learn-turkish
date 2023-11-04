import Header from "@/components/Header";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const Navbar = async () => {
    const session = await getServerSession(authOptions);

  return (
    <nav>
      <Header session={session}/>
    </nav>
  );
};

export default Navbar;
