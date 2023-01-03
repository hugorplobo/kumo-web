import { useToken } from "../../hooks/useToken";
import useSWR from "swr";
import axios from "axios";
import "./style.css";
import { File } from "../File/File";

interface Props {
    url: string,
}

interface File {
    id: number,
    telegram_id: string,
    name: string,
}

export function Files({ url }: Props) {
    const { token, isTokenLoading } = useToken();

    const { data, error, isLoading } = useSWR<File[]>(isTokenLoading ? null : url, () => {
        return axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => res.data);
    });

    return (
        <div className="files">
            { isLoading ? (
                "Loading..."
            ) : error ? (
                "Something went wrong"
            ) : !data ? (
                "No files found"
            ) : (
                data!.map(file => <File name={file.name} />)
            ) }
        </div>
    )
}