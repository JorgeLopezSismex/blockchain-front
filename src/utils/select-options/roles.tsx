import { apiFetch } from "@/helpers/api-fetch";

export const getRoles = async () => {
  try {
    const res = await apiFetch("roles");

    if (res.data) {
      const data = res.data;

      const options = data.map((item: any) => ({
        value: item.roleId,
        label: item.name,
      }));

      return options;
    }

    return [];
  } catch (error) {
    return [];
  }
};
