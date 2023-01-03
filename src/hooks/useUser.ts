import { useTelegram } from "./useTelegram";

export interface User {
    id: number,
    is_bot: boolean,
    first_name: string,
    last_name: string,
    username: string,
}

export function useUser() {
    const initData = new URLSearchParams(useTelegram().initData);
    const user: User = JSON.parse(initData.get("user") || "");

    return user;
}