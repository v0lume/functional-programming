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