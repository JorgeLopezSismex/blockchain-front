export type ContactsPermissionsData = {
  LIST_CONTACTS: boolean;
  CREATE_CONTACT: boolean;
  READ_CONTACT: boolean;
  UPDATE_CONTACT: boolean;
  DELETE_CONTACT: boolean;
};

export type ContactsData = {
  contactId: number;
  email: string;
  issuerId: number;
  issuerName: number;
  lastName: string;
  name: string;
  position: string;
};
