"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { useState } from "react";
import { useToast } from "./ui/use-toast";

export default function EmailComponent() {
  const formSchema = z.object({
    email: z.string().email("Invalid Email") || z.string().min(3),
  });

  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { email } = values;
    setIsLoading(true);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (response.ok) {
        toast({
          description: "✨ Thanks for signing up!",
          duration: 5000,
        });
        const json = await response.json();
        console.log(json);
      } else {
        toast({
          description: "Something went wrong.",
          duration: 5000,
        });
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      form.reset();
    }
  };

  return (
    <section className="py-3 md:py-6 lg:py-8 xl:py-12 bg-zinc-100">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="bg-gradient-to-r p-3 from-gray-600 via-gray-800 to-red-500 bg-clip-text text-lg font-extrabold text-transparent sm:text-2xl md:text-3xl lg:text-4xl leading-normal">
                Discover new levels before anyone else!
              </h1>
            </div>
            <div className="w-full max-w-sm space-y-2 mx-auto">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex space-x-2"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="max-w-lg flex-1 bg-white text-black border-gray-900"
                            placeholder="Enter your email"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <Button
                    className="bg-black text-white"
                    variant="email"
                    type="submit"
                    onSubmit={form.handleSubmit(onSubmit)}
                    onClick={form.handleSubmit(onSubmit)}
                  >
                    {isLoading ? "Sending..." : "Notify Me"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
