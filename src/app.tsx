import { Header } from "./components/Header/Header";
import { useEffect, useState } from "preact/hooks";
import { useUser } from "./hooks/useUser";
import { Files } from "./components/Files/Files";
import "./app.css";

export function App() {
    const user = useUser();
    const [search, setSearch] = useState("");
    const [url, setUrl] = useState(`https://kumo-api.fly.dev/search?user_id=${user.id}&search=`);

    useEffect(() => {
        const debounce = setTimeout(() => {
            setUrl(`https://kumo-api.fly.dev/search?user_id=${user.id}&search=${search}`);
        }, 500);

        return () => clearTimeout(debounce);
    }, [search]);

    return (
        <div className="app">
            <Header searchValue={search} setSearchValue={setSearch} />
            <Files url={url} />
        </div>
    );
}
