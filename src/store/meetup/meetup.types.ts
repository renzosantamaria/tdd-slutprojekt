
export interface IMeetup {
    id: number;
    title: string;
    startDate: Date;
    endDate: Date;
    hostName: string;
    description: string;
    price?: number;
    location: string;
    attendees: string[];
    attendeeLimit?: number;
    comments: IComment[];
    rating: number[];
}

export interface IComment {
    name: string;
    date: Date;
    content: string;
}