"use server";
import { sessionOptions, SessionData, defaultSession} from "@/lib/lib";
import { getIronSession } from "iron-session";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const HARDCODED_USERNAME = "admin";
const HARDCODED_PASSWORD = "admin";

export const getSession = async() => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);
    if(!session.isLoggedIn){
        session.isLoggedIn = defaultSession.isLoggedIn;
    }
    return session; 
};
export const login = async(previousState: {error: undefined | string}, formData: FormData) => {
    const session = await getSession();
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    //DATABASE IS NOT IMPLEMENTED YET, USING HARDCODED VALUES
    if(username !== HARDCODED_USERNAME || password !== HARDCODED_PASSWORD){
        return {error: "Invalid credentials"};
    }
    session.id = "1";
    session.username = username;
    session.isAdministrator = true;
    session.isLoggedIn = true;
    await session.save();
    redirect("/");
};

//This piece of shit dies sometimes and I can't figure out why...aaahhh
export const logout = async() => {
    const session = await getSession();
    await session.destroy();
    console.log("Session destroyed");
    console.log("Logout successful");
    redirect("/");
};