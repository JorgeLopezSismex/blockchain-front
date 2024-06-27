"use server";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
	const url = request.nextUrl.clone();
	const publicPaths: Array<string> = ["/"];

	const isPublicPath = publicPaths.some(path =>
		request.nextUrl.pathname.startsWith(path)
	);

	if (isPublicPath) {
		return NextResponse.next();
	}

	const cookieStore = request.cookies;
	const isLoggedIn = cookieStore.has("_session");

	const requiresAuthPaths = !request.nextUrl.pathname.includes("/auth/");

	if (!requiresAuthPaths && isLoggedIn) {
		url.pathname = "/admin";
		return NextResponse.redirect(url);
	}

	if (requiresAuthPaths && !isLoggedIn) {
		url.pathname = "/auth/sign-in";
		return NextResponse.redirect(url);
	}

	return NextResponse.next();
}

// Configurar las rutas a las que se aplicará el middleware
export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
