"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
  name_7308064619: z
    .string()
    .min(10, "Address must be at least 10 characters")
    .max(100, "Address must be less than 100 characters"),
  name_4336621278: z
    .string()
    .min(3, "City must be at least 3 characters")
    .max(50, "City must be less than 50 characters"),
  name_5106237536: z
    .string()
    .min(5, "ZipCode must be at least 5 characters")
    .max(10, "ZipCode must be less than 10 characters"),
});

export default function AddressInfoForm() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(2);

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values) => {
    try {
      console.log(values);
      setIsSubmitted(true);
      toast.success("Registration Successful...");
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  };

  const handlePrevious = () => {
    navigate("/step2");
    setCurrentStep(1);
  };

  const handleNext = () => {
    navigate("/step3");
    setCurrentStep(3);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="w-full max-w-3xl bg-white p-10 shadow-lg rounded-lg space-y-8">
        {isSubmitted ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-green-500">Success!</h1>
            <p className="text-lg text-gray-700 mt-4">
              Your registration has been successfully completed.
            </p>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-black text-center">
              Multi-Step Registration Form
            </h1>

            <div className="flex items-center justify-between mb-8">
          {["Personal Info", "Contact Info", "Address Info"].map((step, index) => (
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
                  name="name_7308064619"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address:</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your address"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="name_4336621278"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City:</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your city"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="name_5106237536"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ZipCode:</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter ZipCode"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
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
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </>
        )}
      </div>
    </div>
  );
}





