import { IMAGE_DEFAULT } from "../consts";

const mapUserToRow = (user: User) => ({
    country: user.country,
    username: user.username,
    name: user.name,
});

const getUserAvatar = (userId: string, images: Image[]): string => {
    const image = images.find((image: Image) => image.userID === userId);

    return image?.url ?? IMAGE_DEFAULT;
};

const getUserAccount = (userId: string, accounts: Account[]): Account | undefined => {
    return accounts.find((account: Account) => account.userID === userId);
};

const getUserPosts = (userId: string, accounts: Account[]): number => {
    const account = getUserAccount(userId, accounts);

    return account?.posts ?? 0;
};

const getLastPayment = (payments: Payment[] = []): Payment => {
    let lastPaymentIndex = 0;

    payments.forEach((payment: Payment, index: number) => {
        if (Date.parse(payments[lastPaymentIndex].date) < Date.parse(payment.date)) {
            lastPaymentIndex = index;
        }
    });

    return payments[lastPaymentIndex];
};

const getUserLastPayments = (userId: string, accounts: Account[]): number => {
    const account = getUserAccount(userId, accounts);
    const lastPayment = getLastPayment(account?.payments);

    return lastPayment?.totalSum ?? 0;
};

export const dataConverter = (users: User[], accounts: Account[], images: Image[]): Row[] => {
    return users.map((user: User) => ({
        ...mapUserToRow(user),
        avatar: getUserAvatar(user.userID, images),
        posts: getUserPosts(user.userID, accounts),
        lastPayments: getUserLastPayments(user.userID, accounts),
    }));
};
