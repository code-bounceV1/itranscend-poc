import {
  FormControl,
  FormLabel,
  Textarea as FormTextarea,
} from "@chakra-ui/react";
import { TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "disabled" | "required" | "readOnly" | "size"
  > {
  label?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, ...rest }, ref) => {
    return (
      <FormControl>
        {label ? <FormLabel>{label}</FormLabel> : null}
        <FormTextarea ref={ref} {...rest} />
      </FormControl>
    );
  }
);

export default Textarea;
