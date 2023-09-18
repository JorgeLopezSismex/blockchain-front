export const apiFetch = async (
  url: string,
  method = "GET" as string,
  body?: object
) => {
  const base = "https://localhost:5001/api/v1/";
  const res = await fetch(base + url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await res.json();
};
