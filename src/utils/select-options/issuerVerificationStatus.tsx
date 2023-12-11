import { apiFetch } from "@/helpers/api-fetch";

export const getIssuerVerificationStatus = async () => {
  try {
    const res = await apiFetch("issuers/verification-status");

    if (res.data) {
      const data = res.data;

      const options = data.map((item: any) => ({
        value: item.issuerVerificationStatusId,
        label: item.issuerVerificationStatusName,
      }));

      return options;
    }

    return [];
  } catch (error) {
    return [];
  }
};
