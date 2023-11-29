import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware

export default authMiddleware({
  // "/" will be accessible to all users
  publicRoutes: [
    "/",
    "/contact",
    "/about",
    "/privacy",
    "/blog",
    "/blog/[slug]",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
