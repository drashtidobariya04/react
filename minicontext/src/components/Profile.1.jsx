import React from "react";
import UserContext from "../context/UserContext";

export function Profile() {
  const { User } = UserContext(UserContext);
  if (!User) return <div>please login</div>;

  return <div>welcoome{User.username}</div>;
}
