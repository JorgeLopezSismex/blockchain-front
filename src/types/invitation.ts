export type InvitationsData = {
    addressee: string,
    createdAt: string,
    deletedAt: string,
    deletedBy: number,
    description: string,
    id: number,
    invitationStatusId: string,
    key: string
    lastName: string,
    name: string,
    nameUser: string,
    rejectReason: string,
    updatedAt: string,
    updatedBy: number,
    userId: number,
};

export interface RegisterInvitation {
    addressee: string;
    name: string;
    lastName: string;
    createdBy: number ;
}

export interface CancelInvitation {
    rejectReason: string;
}