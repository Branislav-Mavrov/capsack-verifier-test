export default {
  fetch(request) {
    const country =
      request.headers.get('x-vercel-ip-country') || '';

    const language = country === 'US' ? 'en' : 'es';

    return new Response(
      JSON.stringify({
        country: country || null,
        language: language
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
};
