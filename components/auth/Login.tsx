"use client";

import { login } from "@/app/auth/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { z } from "zod";
import { Alert } from "../ui/alert";
import { FormField } from "../ui/form";
import { Label } from "../ui/label";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

const initialState = {
  message: "",
  email: "",
  password: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending} className="w-full">
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {pending ? "Signing in..." : "Sign in"}
    </Button>
  );
}

function Login() {
  const [state, formAction] = useActionState(login, initialState);
  return (
    <Card className="min-w-96 animate-fade">
      <CardHeader>
        <h3>Sign into your account</h3>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="flex flex-col gap-6">
          {state?.message && (
            <Alert role="status" variant="destructive">
              {state?.message}
            </Alert>
          )}
          <FormField>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              required
            />
          </FormField>
          <FormField>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              required
            />
          </FormField>

          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}

export default Login;
