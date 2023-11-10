export type IssuerData = {
  issuerId: number;
  name: string | null;
  email: string;
  phone: string | null;
  roleId: number;
  roleKey: string;
  roleName: string;
  roleDescription: string;
  issuerVerificationStatusId: number;
  issuerVerificationStatusKey: string;
  issuerVerificationStatusName: string;
  legalName: string | null;
  zipCode: string | null;
  country: string | null;
  state: string | null;
  city: string | null;
  suburb: string | null;
  externalNumber: string | null;
  internalNumber: string | null;
  description: string | null;
  rfc: string | null;
  street: string | null;
  createdAt: string;
  createdBy: number;
  validatedAt: string | null;
  lastValidationSubmit: string | null;
  rejectReason: string | null;
  rejectedAt: string | null;
};
