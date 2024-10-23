import { auth } from "./app/_lib/auth";

export const middleware = auth;

export const config = {
  //! Use matcher for the pages you want to redirect to
  matcher: ["/account"],
};

//************************* */
// BEGINNER
// import { NextResponse } from "next/server";
// export function middleware(request) {
//   //! Url to redirect
//   return NextResponse.redirect(new URL("/about", request.url));
// }

// export const config = {
//   //! Use matcher for the pages you want to redirect to
//   matcher: ["/account"],
// };
