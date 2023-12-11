import { apiFetch } from "@/helpers/api-fetch";

export const getEventLogTypesOptionList = async () => {
  try {
    const res = await apiFetch("event-log/types");

    if (res.data) {
      const data = res.data;

      const options = data.map((item: any) => ({
        value: item.eventLogTypeId,
        label: item.name,
      }));

      return options;
    }

    return [];
  } catch (error) {
    return [];
  }
};