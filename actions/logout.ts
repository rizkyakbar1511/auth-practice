"use server";

import { signOut } from "@/auth";

//use this if you want to do some server side logic
export const logout = async () => {
  //some server side logic before logout

  await signOut();
};
