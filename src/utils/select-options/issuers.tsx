import { apiFetch } from "@/helpers/api-fetch";

export const getIssuerOptionList = async () => {
  try {
    const permissiosnParams = new URLSearchParams();
    permissiosnParams.append("type", "options");
    const res = await apiFetch(`issuers?${permissiosnParams.toString()}`);

    if (res.data) {
      const data = res.data;

      const options = data.map((item: any) => ({
        value: item.issuerId,
        label: item.issuerName,
      }));

      return options;
    }

    return [];
  } catch (error) {
    return [];
  }
};
