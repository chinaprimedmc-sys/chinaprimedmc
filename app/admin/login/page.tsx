"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/admin/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: form.get("username"), password: form.get("password") }),
    });
    const result = (await response.json()) as { error?: string };
    if (!response.ok) {
      setError(result.error ?? "登录失败，请重试。");
      setLoading(false);
      return;
    }
    const requestedPath = new URLSearchParams(window.location.search).get("next");
    const nextPath =
      requestedPath?.startsWith("/studio") || requestedPath?.startsWith("/admin")
        ? requestedPath
        : "/admin";
    router.replace(nextPath);
    router.refresh();
  }

  return (
    <main className="bg-background grid min-h-svh place-items-center px-5 py-12">
      <form
        onSubmit={submit}
        className="border-border w-full max-w-md rounded-[2rem] border bg-white p-8 shadow-[0_24px_80px_rgba(22,21,18,0.12)]"
      >
        <p className="text-muted text-xs font-semibold tracking-[0.16em] uppercase">AVIORA</p>
        <h1 className="text-foreground mt-3 font-serif text-4xl">内容与询盘后台</h1>
        <p className="text-muted mt-3 text-sm leading-6">
          一次登录即可管理网站内容、图片和客户询盘。
        </p>
        <div className="mt-7 grid gap-4">
          <label className="grid gap-2 text-sm font-medium">
            账号
            <Input name="username" autoComplete="username" required />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            密码
            <Input name="password" type="password" autoComplete="current-password" required />
          </label>
        </div>
        {error ? <p className="text-brand-red mt-4 text-sm">{error}</p> : null}
        <Button type="submit" className="mt-6 w-full" disabled={loading}>
          {loading ? "登录中" : "登录后台"}
        </Button>
      </form>
    </main>
  );
}
