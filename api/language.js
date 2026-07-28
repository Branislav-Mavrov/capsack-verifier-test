import { geolocation } from '@vercel/functions';

export default function handler(request) {
  const { country } = geolocation(request);

  return new Response(
    JSON.stringify({
      country: country || null,
      language: country === 'US' ? 'en' : 'es'
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'private, no-store, max-age=0'
      }
    }
  );
}
