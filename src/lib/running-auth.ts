import { cookies } from "next/headers";
import {
  getAuthSession,
  SESSION_COOKIE,
} from "@/lib/auth-session";

export async function getCurrentAthlete() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (!token) {
    return null;
  }

  const session = await getAuthSession(token);

  if (!session) {
    return null;
  }

  return session.athlete;
}