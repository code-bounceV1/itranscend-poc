import {
  FormControl,
  FormLabel,
  Input as FormInput,
  FormErrorMessage,
} from "@chakra-ui/react";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "disabled" | "required" | "readOnly" | "size"
  > {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
        {label ? <FormLabel>{label}</FormLabel> : null}
        <FormInput ref={ref} {...rest} />
        {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      </FormControl>
    );
  }
);

export default Input;
