export const apiFetch = async (
  url: string,
  method = "GET" as string,
  body?: object
) => {
  const res = await fetch("http://68.178.207.49:8109/api/v1/" + url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await res.json();
};

// http://68.178.207.49:8109/api/v1/
