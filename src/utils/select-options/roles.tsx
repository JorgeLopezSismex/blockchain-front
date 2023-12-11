import { apiFetch } from "@/helpers/api-fetch";

export const getRoles = async (category: string) => {
  try {
    let res = null;
    if (category != null) {
      const rolesParams = new URLSearchParams();
      rolesParams.append("category", category);
      res = await apiFetch(`roles?${rolesParams.toString()}`);
    } else {
      res = await apiFetch("roles");
    }

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
