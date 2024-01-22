"use client";

export const apiFetch = async (
  url: string,
  method = "GET" as string,
  body?: any,
  files = false as boolean
) => {
  let formData = new FormData();
  const token = await localStorage.getItem("token");

  if (files) {
    for (const key in body) {
      formData.append(key, body[key]);
    }
  }

  formData.forEach((value, key) => {
    console.log(key, value);
  });

  const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + url, {
    method: method,
    headers: !files
      ? {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Time-Zone": Intl.DateTimeFormat().resolvedOptions().timeZone,
        }
      : {
          Authorization: `Bearer ${token}`,
          "Time-Zone": Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
    body: !files ? JSON.stringify(body) : formData,
  });

  return await res.json();

  // No autoizado
  // if (result.status == 401) {
  //   window.location.href = "/sin-permisos.html";
  // }

  // if(res.status != 200 || res.status != 201){
  // }

  // if (res.status == 200) {
  //   console.log(router);
  //   window.location.href = "../badquers";
  // }

  // console.log(result, "Este es el regusltado");

  // // Bad request
  // if (result.status == 400) {
  //   console.log("Ocurrió un error");
  //   // return router.push("../badquers");
  // }

  // return result;
};
