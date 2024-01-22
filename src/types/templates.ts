export type TemplatesPermissionsData = {
  LIST_TEMPLATE: boolean;
  CREATE_TEMPLATE: boolean;
  READ_TEMPLATE: boolean;
  UPDATE_TEMPLATE: boolean;
  DELETE_TEMPLATE: boolean;
};

export type TemplateData = {
  templateId: number;
  name: string;
  body: string;
  issuerId: number;
  issuerName: string;
  createdAt: string;
};
