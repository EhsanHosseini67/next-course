import Link from "next/link";
import UserTable from "./UserTable";
import { Suspense } from "react";

interface Props {
  searchParams: {sortOrder: string};
}


const UsersPage = async ({searchParams: {sortOrder}}: Props) => {
  
  return (
    <div>
      <h1>Users</h1>
      <Link href='users/new' className="btn">New User</Link>
      <Suspense fallback={<p>Loading...</p>}>
      <UserTable sortOrder={sortOrder}/>
      </Suspense>
    </div>
  );
};

export default UsersPage;
