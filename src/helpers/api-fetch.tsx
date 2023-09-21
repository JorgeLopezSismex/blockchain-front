export const apiFetch = async (
  url: string,
  method = "GET" as string,
  body?: object
) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await res.json();
};
