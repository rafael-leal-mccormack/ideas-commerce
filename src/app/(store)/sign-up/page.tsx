"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ui/shadcn/card";
import { Input } from "@ui/shadcn/input";
import { Button } from "@ui/shadcn/button";
import { Label } from "@ui/shadcn/label";
import { LockIcon, MailIcon } from "lucide-react";
import { signup } from "@/app/(store)/login/actions";

export default function Component() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Sign up
          </CardTitle>
          <CardDescription className="text-center">
            Enter your information to create account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={signup}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Name</Label>
                <div className="relative">
                  <Input
                    id="name"
                    type="name"
                    name="name"
                    className="pl-10"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <MailIcon
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="m@example.com"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <LockIcon
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    size={20}
                  />
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <Button type="submit" className="w-full mt-6">
              Sign up
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
