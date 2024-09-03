import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { z } from "zod";

//form validation using zod
const userSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "First Name is required")
      .max(80, "First Name is too long...bruh"),
    lastName: z
      .string()
      .min(1, "Last Name is required")
      .max(80, "Last Name is too long...bruh"),
    username: z
      .string()
      .min(1, "Username is required")
      .max(80, "Username is too long...bruh"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters long")
      .max(32, "Password must be less than 32 characters long"),
    confirmPassword: z
      .string()
      .min(1, "Confirm Password is required")
      .min(8, "Confirm Password must be at least 8 characters long")
      .max(32, "Confirm Password must be less than 32 characters long"),
    email: z
      .string()
      .min(
        1,
        "Email is necessary, don't worry we won't sign you up for our newsletter without your permission!"
      )
      .email("Invalid email address"),
    phone: z
      .string()
      .min(1, "Phone number is required")
      .max(
        13,
        "Indian phone numbers are 13 digits long(including +91), please check your phone number"
      ),
    state: z.string().min(1, "State is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match :(",
  });

export async function POST(req: Request) {
  try {
    console.log("Request body:", req.body);
    const body = await req.json();
    const { firstName, lastName, username, password, email, phone, state } =
      userSchema.parse(body);

    const existingUserByEmail = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    const existingUserByUsername = await db.user.findUnique({
      where: {
        username: username,
      },
    });

    if (existingUserByEmail) {
      return NextResponse.json({
        user: null,
        message: "Email already exists",
        status: 409,
      });
    }

    if (existingUserByUsername) {
      return NextResponse.json({
        user: null,
        message: "Username already exists",
        status: 409,
      });
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: hashedPassword,
        email: email,
        phone: phone,
        state: state,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;
    return NextResponse.json(
      { user: rest, message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error occurred:", error);
    return NextResponse.json(
      {
        message: "Oops, something went wrong X_X",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
