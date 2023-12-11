import { apiFetch } from "@/helpers/api-fetch";

export const getModulesOptionList = async () => {
  try {
    const res = await apiFetch("modules");

    if (res.data) {
      const data = res.data;

      const options = data.map((item: any) => ({
        value: item.moduleId,
        label: item.name,
      }));

      return options;
    }

    return [];
  } catch (error) {
    return [];
  }
};