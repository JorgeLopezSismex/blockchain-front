import { apiFetch } from "@/helpers/api-fetch";

export const getMembersOptionList = async () => {
  try {
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("type", "options");
    const res = await apiFetch(`members?${permissiosnParams.toString()}`);

    if (res.data) {
      const data = res.data;

      const options = data.map((item: any) => ({
        value: item.memberId,
        label: item.email,
      }));

      return options;
    }

    return [];
  } catch (error) {
    return [];
  }
};
