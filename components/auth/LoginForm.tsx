"use client";

import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { login } from "@/actions/auth";
import { CardWrapper } from "./CardWrapper";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const route = useRouter();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  var [passState, setPassState] = useState<boolean>(false);
  var [passwordState, setPasswordState] = useState<string>("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPasswordState(value);
    setPassState(value.length > 0);
  };

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(values).then((response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          route.push("/freelancers");
        }
      });
    });
  };

  return (
    <CardWrapper headerLabel="Welcome Back">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="barney.stinson@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      value={passwordState}
                      onChangeCapture={handleOnChange}
                      placeholder="********"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex">
            <Button
              className="flex-1 m-2 bg-shade2 hover:bg-shade1"
              disabled={isPending}
              type="button"
            >
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Button
              className="flex-1 m-2 bg-shade2 hover:bg-shade1"
              disabled={isPending}
              type="submit"
            >
              {passState ? "Login" : "Forgot Password"}
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
