export type InvitationsPermissionsData = {
  LIST_INVITATION: boolean;
  CREATE_INVITATION: boolean;
  READ_INVITATION: boolean;
  RESEND_INVITATION: boolean;
  CANCEL_INVITATION: boolean;
};

export type InvitationsData = {
  cancelReason: string | null;
  canceledAt: string | null;
  canceledBy: number | null;
  createdAt: string;
  createdBy: number;
  email: string;
  invitationId: number;
  invitationStatusId: number;
  invitationStatusName: string;
  issuerEmail: string;
  issuerId: number;
  issuerName: string;
  lastName: string;
  name: string;
};

export type InvitationsBatchResultData = {
  name: string;
  lastName: string;
  email: string;
  result: string;
};

export interface RegisterInvitation {
  addressee: string;
  name: string;
  lastName: string;
  createdBy: number;
}

export interface CancelInvitation {
  rejectReason: string;
}
