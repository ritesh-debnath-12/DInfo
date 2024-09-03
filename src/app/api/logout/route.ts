// File: app/api/logout/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getIronSession, IronSession } from "iron-session";
import { sessionOptions } from "@/lib/lib";

export async function POST(req: NextRequest) {
  const session: IronSession<object> = await getIronSession(req, NextResponse.next(), sessionOptions);
  session.destroy();
  const res: NextResponse = NextResponse.redirect('/');
  console.log("Session destroyed and cookie cleared");
  return res;
}

export const config = {
  api: {
    bodyParser: false,
  },
};
