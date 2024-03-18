import { apiFetch } from "@/helpers/api-fetch";
import { number } from "yup";

export const getSuburbsOptionList = async (
  zipCode: string,
  suburbs: any[],
  setSuburbs: any,
  setLoadingSuburbs: any
) => {
  console.log("hola");
  try {
    // setLoadingSuburbs(true);

    console.log("Esto si");
    if (zipCode == "" || zipCode == null || zipCode == undefined) {
      console.log("Aqui si llega");
      return [];
    }

    console.log("Esto no");
    let res = null;
    const zipCodeParams = new URLSearchParams();
    zipCodeParams.append("zipCode", zipCode);

    res = await apiFetch(`zip-code?${zipCodeParams.toString()}`);
    console.log(res);

    if (!res.success) {
      return [];
    }

    if (res.data.length <= 0) {
      setLoadingSuburbs(false);
      return [];
    }

    const data = res.data;
    const options = data.map((item: any) => ({
      value: item.d_asenta,
      label: item.d_asenta,
    }));

    console.log(options, "Estos oson los optiosn desade la funcion");
    return {
      country: "México",
      state: data[0].d_estado,
      city: data[0].d_mnpio,
      suburbs: options,
    };

    setSuburbs(options);
    setLoadingSuburbs(false);
  } catch (error) {
    return [];
  }
};
