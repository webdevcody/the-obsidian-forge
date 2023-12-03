import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware();

export const config = {
  matcher: ["/dashboard/:path*", "/custom-order", "/submit-order"],
};
