import { cookies } from 'next/headers';

export async function GET() {
  const cookieValue = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  const cookieStore = cookies();
  cookieStore.set('token', cookieValue, { path: '/', httpOnly: true, secure: true, sameSite: 'strict' });

  return new Response(JSON.stringify({ message: 'Cookie has been set' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
