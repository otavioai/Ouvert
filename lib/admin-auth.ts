import adminConfig from "@/content/admin.json";

const SESSION_KEY = "ouvert-admin-session";
const TOKEN_KEY = "ouvert-admin-gh-token";

export async function hashPassword(password: string) {
  const data = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function verifyAdminPassword(password: string) {
  const hash = await hashPassword(password);
  return hash === adminConfig.passwordHash;
}

export function setAdminSession(token?: string) {
  sessionStorage.setItem(SESSION_KEY, "1");
  if (token) sessionStorage.setItem(TOKEN_KEY, token);
}

export function clearAdminSession() {
  sessionStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
}

export function isAdminLoggedIn() {
  return sessionStorage.getItem(SESSION_KEY) === "1";
}

export function getGithubToken() {
  return sessionStorage.getItem(TOKEN_KEY) || "";
}

export function setGithubToken(token: string) {
  if (token) sessionStorage.setItem(TOKEN_KEY, token);
  else sessionStorage.removeItem(TOKEN_KEY);
}

export { adminConfig };
