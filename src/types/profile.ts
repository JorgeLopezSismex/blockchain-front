export type ProfileData = {
    city: string | null;
    country: string | null;
    createdAt: string | null;
    createdBy: string | null;
    description: string | null;
    email: string | null;
    externalNumber: number;
    internalNumber:number;
    issuerId: number;
    issuerVerificationStatusId: number;
    issuerVerificationStatusName: number;
    lastValidationSubmit: string | null;
    legalName: string | null;
    name: string;
    phone: number;
    rfc: string | null;
    roleDescription: string | null;
    roleId: number | null;
    roleName: string | null;
    state: string | null;
    stateId: number;
    street: string | null;
    suburb: string | null;
    zipCode:number;
};

export const initialProfileData: ProfileData = {
    city: null,
    country: null,
    createdAt: null,
    createdBy: null,
    description: null,
    email: null,
    externalNumber: 0,
    internalNumber: 0,
    issuerId: 0,
    issuerVerificationStatusId: 0,
    issuerVerificationStatusName: 0,
    lastValidationSubmit: null,
    legalName: null,
    name: "",
    phone: 0,
    rfc: null,
    roleDescription: null,
    roleId: null,
    roleName: null,
    state: null,
    stateId: 0,
    street: null,
    suburb: null,
    zipCode: 0,
  };