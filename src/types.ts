interface Image {
    userID: string;
    url: string;
}

interface User {
    userID: string;
    username: string;
    country: string;
    name: string;
}

interface Payment {
    totalSum: number;
    date: string;
}
  
interface Account {
    userID: string;
    posts: number;
    payments: Payment[];
}

interface Row {
    avatar: string;
    username: string;
    country: string;
    name: string;
    lastPayments: number;
    posts: number;
}

type Search = string | undefined;
type Sort = 'asc' | 'desc' | null;

interface Filter {
    noPosts: boolean;
    more100Posts: boolean;
}
