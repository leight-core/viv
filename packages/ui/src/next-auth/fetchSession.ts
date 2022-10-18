export async function fetchSession() {
    const res     = await fetch("/api/auth/session");
    const session = await res.json();
    if (Object.keys(session).length) {
        return session;
    }
    return null;
}
