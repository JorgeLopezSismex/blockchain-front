export type TestimonialsData = {
    id: number;
    name: string;
    description: string;
    photo: string;
    date: string;
    address: string;
    user: string;
};

export interface AddTestimonial {
    name: string;
    description: string;
    //photo: string;
    photo: null;
    date: string;
    address: string;
    user: string;
}