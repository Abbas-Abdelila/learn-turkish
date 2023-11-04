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
import Link from "next/link";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Invalid Email") || z.string().min(3),

  password: z.string().max(100),
});
const LogIn = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit =  async (values: z.infer<typeof formSchema>) => {
    const { email, password } = values;
    const signInData = await signIn( 'credentials', {
      email,
      password,
      redirect: false,
    })

    if(signInData?.error) {
      console.log(signInData.error)
    }
    else {
      router.refresh();
      router.push("/feed");
    }

  };

  return (
    <div className="flex h-screen justify-center items-center mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-[75%] md:w-[30%] border p-12 rounded-md"
        >
          <h1 className="text-center text-2xl font-semibold border-b border-red-200 p-1 ">
            Login to your account
          </h1>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your email" {...field} />
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
                  <Input placeholder="your password" type="password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="flex justify-center items-center mx-auto !mt-4 text-[16px] "
          >
            Login
          </Button>
          <p className="text-center text-md">
            Don't have an account?{" "}
            <Link href="/signup">
              {" "}
              <span className="text-red-500 cursor-pointer font-medium">
                Sign up
              </span>
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default LogIn;
