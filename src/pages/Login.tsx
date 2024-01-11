import { Button, Flex, Grid } from "@chakra-ui/react";
import { FC, useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../components/lib/Input";

type LoginForm = {
  email: string;
  password: string;
};

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Grid h="100vh" w="100vw" placeItems="center">
      <Flex maxW="md" w="100%">
        <Flex
          as="form"
          w="100%"
          onSubmit={handleSubmit(onSubmit)}
          flexDirection="column"
          gap={2}
        >
          <Input
            label="Email address"
            {...register("email", {
              required: {
                value: true,
                message: "Email address is required",
              },
            })}
            error={errors.email?.message}
          />
          <Input
            label="Password"
            type="password"
            {...register("password", {
              required: true,
            })}
            error={errors.password?.message}
          />
          <Button type="submit">Sign in</Button>
        </Flex>
      </Flex>
    </Grid>
  );
};

export default Login;
