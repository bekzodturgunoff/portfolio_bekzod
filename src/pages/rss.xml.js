export const prerender = true;
export const GET = async () => {
  return new Response('<rss version="2.0"></rss>', {
    headers: { 'Content-Type': 'application/xml' }
  });
};
