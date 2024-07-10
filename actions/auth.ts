"use server";

import { signIn, signOut } from "@/auth";
import { LoginSchema, SignupSchema } from "@/schemas";
import { z } from "zod";
import create_user from "@/queries/users"
import dbConnect from "@/lib/mongo";

const bcrypt = require("bcrypt");

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);
    console.log(values);

    if (!validatedFields.success) {
        return {error: "Invalid fields!"};
    }

    try {
        return await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        });
    } catch (error) {
        console.error(error);
    }
    return {success: "Valid credentials"};
};

export const signup = async (values: z.infer<typeof SignupSchema>) => {
    console.log(values);
    const validatedFields = LoginSchema.safeParse(values);

    await dbConnect();

    const hashedPassword = await bcrypt.hash(values.password, 6);
    const newUser = {
        fname: values.firstname,
        lname: values.lastname,
        email: values.email,
        password: hashedPassword,
        jobtitle: values.job_title,
        skills: values.skills,
    }


    if (!validatedFields.success) {
        return {error: "Invalid fields!"};
    }

    try {
        await create_user(newUser);
    } catch (err: any) {
        throw new Error(err);
    }

    return {success: "Email sent!"};
};

export const logout = async () => {
    await signOut({redirectTo: "/login"})
}