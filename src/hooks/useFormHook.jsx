import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useFormHook = (schema) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: zodResolver(schema)});

    return { register, handleSubmit, reset, errors };
}