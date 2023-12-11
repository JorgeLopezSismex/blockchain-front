export type MembersPermissionsData = {
  LIST_MEMBER: boolean;
  CREATE_MEMBER: boolean;
  READ_MEMBER: boolean;
  UPDATE_MEMBER: boolean;
  DELETE_MEMBER: boolean;
};

export type MemberData = {
  memberId: number;
  name: string | null;
  lastName: string | null;
  email: string;
  roleId: number;
  roleName: string;
  issuerId: number;
  issuerName: string;
};
