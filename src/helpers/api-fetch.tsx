export const apiFetch = async (
  url: string,
  method = "GET" as string,
  body?: object
) => {
  const base = "http://localhost/reserva-tu-lugar/api/";
  const res = await fetch(base + url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  console.log(await res.json());
  return await res.json();
};
