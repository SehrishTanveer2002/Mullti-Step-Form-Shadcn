import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  name_8434018892: z.string().email("Invalid email address").min(1, "Email is required"),
  name_0630426812: z.string().min(6, "Password must be at least 6 characters"),
});

export default function ContactInfoForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onBlur", 
  });
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);

  const onSubmit = (values) => {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  };

  const handleNext = () => {
    setCurrentStep(2); 
    navigate("/step3");
  };

  const handlePrevious = () => {
    setCurrentStep(0);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="w-full max-w-3xl bg-white p-10 shadow-lg rounded-lg space-y-8">
        <h1 className="text-3xl font-bold text-black text-center">Multi-Step Registration Form</h1>

        <div className="flex items-center justify-between mb-8">
          {["Personal Info", "Contact Info", "Confirmation"].map((step, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div
                className={`w-12 h-12 rounded-full flex justify-center items-center font-bold ${
                  index < currentStep
                    ? "bg-fuchsia-900 text-white" 
                    : index === currentStep
                    ? "bg-fuchsia-700 text-white" 
                    : "bg-gray-300 text-gray-600" 
                }`}
              >
                {index + 1}
              </div>

              {index < 2 && (
                <div
                  className={`w-28 h-0.5 ${
                    index < currentStep
                      ? "bg-fuchsia-900" 
                      : "bg-gray-300" 
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name_8434018892"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input placeholder="abc123@gmail.com" type="email" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name_0630426812"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password:</FormLabel>
                  <FormControl>
                    <Input placeholder="password" type="password" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <div className="flex justify-between">
              <Button
                type="button"
                onClick={handlePrevious}
                className="bg-gray-400 hover:bg-gray-500 text-white"
              >
                Previous
              </Button>
              <Button
                type="submit"
                className="bg-fuchsia-900 hover:bg-fuchsia-800 text-white"
              >
                Next
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}




