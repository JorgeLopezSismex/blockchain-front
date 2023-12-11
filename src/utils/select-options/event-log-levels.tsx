import { apiFetch } from "@/helpers/api-fetch";

export const getEventLogLevelsOptionList = async () => {
  try {
    const res = await apiFetch("event-log/levels");

    if (res.data) {
      const data = res.data;

      const options = data.map((item: any) => ({
        value: item.eventLogLevelId,
        label: item.name,
      }));

      return options;
    }

    return [];
  } catch (error) {
    return [];
  }
};