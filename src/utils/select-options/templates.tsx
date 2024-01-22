import { apiFetch } from "@/helpers/api-fetch";

export const getTemplatesOptionList = async () => {
  try {
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("type", "options");
    const res = await apiFetch(`templates?${permissiosnParams.toString()}`);

    if (res.data) {
      const data = res.data;

      const options = data.map((item: any) => ({
        value: item.templateId,
        label: item.name,
      }));

      return options;
    }

    return [];
  } catch (error) {
    return [];
  }
};
