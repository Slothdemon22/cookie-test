import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const cookieValue = req.cookies.get('Token');
    console.log(cookieValue);
    if (!cookieValue) {
        
        return NextResponse.json({status:404,msg:"cookies not found" ,token: cookieValue });
    }

  return NextResponse.json({msg:"cookies found" ,token: cookieValue });
}
