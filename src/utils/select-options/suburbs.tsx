import { apiFetch } from "@/helpers/api-fetch";
import { number } from "yup";

export const getSuburbsOptionList = async (
  zipCode: string,
  suburbs: any[],
  setSuburbs: any,
  setLoadingSuburbs: any
) => {
  try {
    setLoadingSuburbs(true);
    if (zipCode == "" || zipCode == null || zipCode == undefined) {
      console.log("Aqui si llega");
      return [];
    }

    let res = null;
    const zipCodeParams = new URLSearchParams();
    zipCodeParams.append("zipCode", zipCode);

    res = await apiFetch(`zip-code?${zipCodeParams.toString()}`);

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

    setSuburbs(options);
    setLoadingSuburbs(false);

    // console.log("Este es el refrhes", refresh);
    // if (options.length > 0) {
    //   setDisableSuburbs(false);
    // }

    // if (refresh) {
    //   setSuburbsKey(suburbsKey + 1);
    // } else {
    // }

    return options;
  } catch (error) {
    return [];
  }
};
