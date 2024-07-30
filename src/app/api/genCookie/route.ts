import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
//   const cookieValue = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

//   const cookieStore = cookies();
//   cookieStore.set('token', cookieValue, { path: '/', httpOnly: true, secure: true, sameSite: 'strict' });

//   return new Response(JSON.stringify({ message: 'Cookie has been set' }), {
//     status: 200,
//     headers: { 'Content-Type': 'application/json' },
    //   });
    

    const reqBody=await req.json();
    console.log(reqBody);
    console.log(reqBody.name);
    const cookieStore = cookies();
    cookieStore.set("Token", reqBody.name, { path: "/", httpOnly: true, secure: true, sameSite: "strict" });
    return NextResponse.json({ Msg: "cookie created Successfully" });


}
