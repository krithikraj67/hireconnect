import * as z from "zod";

export const LoginSchema = z.object ({
    email: z.string().email(),
    password: z.string()
});

const OptionSchema = z.object({
    value: z.string(),
    label: z.string(),
    disable: z.boolean().optional(),
    fixed: z.boolean().optional(),
  });

const OptionsArraySchema = z.array(OptionSchema);

export const SignupSchema = z.object ({
    firstname: z.string().min(1, {
        message: "First Name is required",
    }),
    lastname: z.string().min(1, {
        message: "Last Name is required",
    }),
    job_title: z.string().min(1, {
        message: "Job title is required",
    }),
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(6, {
        message: "Minimum 6 characters required"
    }),
    skills: OptionsArraySchema,
});
