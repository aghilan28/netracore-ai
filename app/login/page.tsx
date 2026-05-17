"use client";

import Link from "next/link";
import { Code2, Mail, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center px-5">
      <Card className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-400 text-slate-950">
            <Shield />
          </div>
          <h1 className="text-2xl font-bold">Welcome to NetraCore AI</h1>
          <p className="mt-2 text-sm text-slate-400">Use the demo credentials to enter the command center.</p>
        </div>
        <div className="space-y-4">
          <Input defaultValue="admin@netracore.ai" type="email" aria-label="Email" />
          <Input defaultValue="password123" type="password" aria-label="Password" />
          <div className="flex items-center justify-between text-sm text-slate-400">
            <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Remember me</label>
            <a href="#">Forgot password?</a>
          </div>
          <Link href="/dashboard" className="block"><Button className="w-full">Login to dashboard</Button></Link>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="secondary"><Code2 size={18} /> GitHub</Button>
            <Button variant="secondary"><Mail size={18} /> Google</Button>
          </div>
        </div>
      </Card>
    </main>
  );
}
