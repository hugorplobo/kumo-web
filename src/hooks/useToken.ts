import axios from "axios";
import useSWR from "swr";
import { useTelegram } from "./useTelegram";

export function useToken() {
    const initData = useTelegram().initData;

    const { data, error, isLoading } = useSWR("token", async () => {
        return axios.get(`https://kumo-api.fly.dev/validate?${initData}`)
            .then(res => res.data);
    });

    return {
        token: data,
        hasError: error,
        isTokenLoading: isLoading
    };
}