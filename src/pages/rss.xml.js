export const get = async () => {
  return new Response('<rss version="2.0"></rss>', {
    headers: { 'Content-Type': 'application/xml' }
  });
};
