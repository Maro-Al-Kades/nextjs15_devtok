import { UserButton } from "@clerk/nextjs";

const HomeRoute = () => {
  return (
    <div>
      <h1 className="h1-bold">Next.js 15 we are coming</h1>
      <h1 className="h2-bold">Next.js 15 we are coming</h1>
      <h1 className="h3-bold">Next.js 15 we are coming</h1>

      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default HomeRoute;
