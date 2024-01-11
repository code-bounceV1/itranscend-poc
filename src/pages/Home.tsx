import { Button, Flex, Grid } from "@chakra-ui/react";
import { FC, useCallback, useState } from "react";
import Input from "../components/lib/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateUser, createUser } from "../utils/api/user.api";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../main";

const Home: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateUser>();

  const createUserMutation = useMutation({
    mutationFn: (data: CreateUser) => createUser(data, "/users"),
  });

  const onSubmit: SubmitHandler<CreateUser> = useCallback((data) => {
    createUserMutation.mutate(
      {
        ...data,
        age: 24,
      },
      {
        onSuccess(data) {
          queryClient.invalidateQueries({
            queryKey: ["users"],
          });
          console.log(data);
          reset();
        },
        onError(error) {
          console.log(error);
        },
      }
    );
  }, []);

  return (
    <Grid h="100vh" w="100vw" placeItems="center">
      <Flex maxW="md" w="100%">
        <Flex
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          flexDirection="column"
          w="100%"
          gap={2}
        >
          <Input
            placeholder="Username"
            label="Username"
            {...register("name", {
              required: {
                value: true,
                message: "Username required",
              },
            })}
            error={errors.name?.message}
          />
          <Input
            type="date"
            label="Date of birth"
            {...register("dob", {
              required: true,
            })}
          />
          <Input
            label="Email address"
            {...register("email", {
              required: true,
            })}
          />

          <Input
            label="Password"
            {...register("password", {
              required: true,
            })}
            type="password"
          />

          {/* <NumberInput
            label="Age"
            {...register("age", {
              required: true,
            })}
          /> */}
          <Button type="submit" isLoading={createUserMutation.isPending}>
            Create user
          </Button>
        </Flex>
      </Flex>
    </Grid>
  );
};

export default Home;
