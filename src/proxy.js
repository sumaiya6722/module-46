import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { auth } from './lib/auth'

// This function can be marked `async` if using `await` inside
export async function proxy(request) {

  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (session) {
    return NextResponse.next()          //if we don't want to block the path   
  } else {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/career','/news/:path*'],   //we want to private this path
}