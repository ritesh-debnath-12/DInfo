import { SessionOptions } from "iron-session";

export interface SessionData{
    id?:string;
    username?:string;
    email?:string;
    isAdministrator?:boolean;
    isLoggedIn:boolean;
}

export const defaultSession: SessionData = {
    isLoggedIn: false,
}

export const sessionOptions: SessionOptions = {
    password: process.env.SESSION_PASSWORD!,
    cookieName: "DInfo-Session",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
    },
}