export const apiFetch = async (
  url: string,
  method = "GET" as string,
  body?: object
) => {
  const token = await localStorage.getItem("token");
  const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + url, {
    method: method,
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      "Time-Zone": Intl.DateTimeFormat().resolvedOptions().timeZone
    },
    body: JSON.stringify(body),
  });

  return await res.json();
};
