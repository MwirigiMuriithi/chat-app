'use client'

import { signOut } from "next-auth/react";
import EmptyState from "../components/EmptyState";

const Users = () => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
        <EmptyState/>
    </div>
    //<button onClick={() =>signOut() }>
      //  Log out
    //</button>
  )
}

export default Users;