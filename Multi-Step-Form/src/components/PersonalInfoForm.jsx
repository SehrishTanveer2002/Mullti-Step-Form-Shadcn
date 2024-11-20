import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Calendar as CalendarIcon } from "lucide-react";

const formSchema = z.object({
  name_3206352202: z.string().min(3, "FirstName must be atleast 3 characters").max(20, "FirstName must be less than 20 characters"),
  name_4715350398: z.string().min(3, "LastName must be atleast 3 characters").max(20, "LastName must be less than 20 characters"),
  name_6205125829: z.coerce.date(),
});

function PersonalInfoForm() {
  const [currentStep, setCurrentStep] = useState(0); 
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name_6205125829: new Date(),
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Form submitted successfully!");
    setCurrentStep(1); 
    navigate("/step2");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="w-full max-w-4xl bg-white p-10 shadow-lg rounded-lg space-y-8">

        <h1 className="text-3xl font-bold text-black text-center">Multi-Step Registration Form</h1>

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
                  className={`w-32 h-0.5 ${
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
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
  control={form.control}
  name="name_3206352202"
  render={({ field }) => (
    <FormItem>
      <FormLabel>First Name:</FormLabel>
      <FormControl>
        <Input
          placeholder="First Name"
          type="text"
          {...field}
          className="w-full sm:w-[245px]" // Fixed width
        />
      </FormControl>
      <FormMessage className="min-h-[20px] break-words" />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="name_4715350398"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Last Name:</FormLabel>
      <FormControl>
        <Input
          placeholder="Last Name"
          type="text"
          {...field}
          className="w-full sm:w-[245px]"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

            </div>

            <div>
              <FormField
                control={form.control}
                name="name_6205125829"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth:</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full pl-3 text-left font-normal hover:border-gray-300 border-gray-300",
                              !field.value && "text-gray-400"
                            )}
                          >
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end">
              <Button type="submit" className="bg-fuchsia-900 hover:bg-fuchsia-800 text-white">
                Next
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default PersonalInfoForm;






