import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/"],
  protectedRoutes:["/dashboard","/boards"],
  afterAuth(auth, req, evt) {
    if (!auth.userId && !auth.isPublicRoute) {
      // redirect landing page
      const landingPage = new URL("/", req.url);
      return NextResponse.redirect(landingPage);
    }
    return NextResponse.next();
  },
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/(api|trpc)(.*)"
  ]
};
