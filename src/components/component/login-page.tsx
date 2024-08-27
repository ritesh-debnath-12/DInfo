/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/qZgRxkU8oie
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import { login } from "@/actions";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useFormState } from "react-dom";

export function LoginPage() {
  const [state, formAction] = useFormState<any, FormData>(login, undefined);
  return (
    <form action={formAction}>
      <div className="flex items-center justify-center h-screen bg-background">
        <Card className="w-full max-w-md p-10">
          <CardHeader>
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            <CardDescription>
              Enter your credentials to access your account.
            </CardDescription>
            {state?.error && <p className="text-center text-sm text-muted-foreground" style={{color: "red"}}>Invalid Login Details detected...</p>}
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <TooltipContent className="w-full max-w-[90vw] md:max-w-[600px]">
                      <p className="text-sm text-muted-foreground">
                        Your username is the unique identifier for your account.
                      </p>
                      <p className="text-sm text-alert">
                        This field is required.
                      </p>
                    </TooltipContent>
                    <span className="text-sm text-muted-foreground">?</span>
                  </TooltipTrigger>
                </Tooltip>
              </TooltipProvider>
              <Input id="username" name="username" placeholder="Enter your username" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <TooltipContent className="w-full max-w-[90vw] md:max-w-[600px]">
                      <p className="text-sm text-muted-foreground">
                        Your password is the secret key to your account.
                      </p>
                      <p className="text-sm text-alert">
                        This field is required.
                      </p>
                    </TooltipContent>
                    <span className="text-sm text-muted-foreground">?</span>
                  </TooltipTrigger>
                </Tooltip>
              </TooltipProvider>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <Button className="w-full">Sign in</Button>
          </CardFooter>
          <div className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="#"
              className="font-medium underline underline-offset-4"
              prefetch={false}
            >
              Sign up
            </Link>
          </div>
          
        </Card>
      </div>
    </form>
  );
}
