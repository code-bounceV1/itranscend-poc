import instance from "../axios";

export type User = {
  id: string;
  email: string;
  name: string;
  password: string;
  dob: string;
  age: number;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateUser = Pick<
  User,
  "email" | "name" | "password" | "dob" | "age"
>;

export const createUser = (data: CreateUser) =>
  new Promise((resolve, reject) => {
    instance({
      method: "post",
      url: "/users",
      data,
    })
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  });

export const getUsers = () =>
  new Promise((resolve, reject) => {
    instance
      .get("/users")
      .then((response) => resolve(response.data))
      .catch((err) => reject(err));
  });
