"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const formSchema = z
  .object({
    email: z.string().email("Invalid Email"),
    username: z
      .string()
      .min(3, "Username has to be atleast 3 characters")
      .max(50, "Username can't be longer than 50 characters"),
    password: z
      .string()
      .min(8, "Password has to be minimum 8 characters")
      .max(100),
    passwordConfirm: z.string().min(8).max(100),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });

const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    const response = await fetch("/api/auth/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      }),
    });

    if (response.ok) {
      setLoading(false);
      router.push("/signin");
    } else {
      console.error("Registration not successful");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-[75%] md:w-[30%] border p-12 rounded-md"
        >
          <h1 className="text-center text-2xl font-semibold border-b border-red-200 p-1 ">
            Create account
          </h1>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="username"
                    className="dark:bg-[#262626] dark:text-white focus:!ring-1"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="email"
                    className="dark:bg-[#262626] dark:text-white focus:!ring-1"
                    {...field}
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
                    placeholder="password"
                    type="password"
                    className="dark:bg-[#262626] dark:text-white focus:!ring-1"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Repeat password"
                    type="password"
                    className="dark:bg-[#262626] dark:text-white focus:!ring-1"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="flex justify-center items-center mx-auto !mt-4 text-[16px]"
          >
            {loading ? "loading..." : "Sign Up"}
          </Button>
          <p className="text-center text-md">
            Already have an account?{" "}
            <Link href="/signin">
              {" "}
              <span className="text-red-500 cursor-pointer font-medium">
                Sign in
              </span>
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default SignUp;