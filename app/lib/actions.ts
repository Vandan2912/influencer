"use server";

import { cookies } from "next/headers";

export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    cookies().set("session", "dcsdcsdcsdc", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // One week
      path: "/",
    });
    // await signIn('credentials', formData)
  } catch (error:any) {
    if (error) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
