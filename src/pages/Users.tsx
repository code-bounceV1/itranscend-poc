import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUsers } from "../utils/api/user.api";

const Users = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) return <div>Loading....</div>;

  return <div>{JSON.stringify(data)}</div>;
};

export default Users;
