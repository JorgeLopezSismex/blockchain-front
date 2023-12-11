import { apiFetch } from "@/helpers/api-fetch";

export const getInvitationStatusOptionList = async () => {
  try {
    const res = await apiFetch("invitations/status");

    if (res.data) {
      const data = res.data;

      const options = data.map((item: any) => ({
        value: item.invitationStatusId,
        label: item.name,
      }));

      return options;
    }

    return [];
  } catch (error) {
    return [];
  }
};
