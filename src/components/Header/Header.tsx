import { useUser } from "../../hooks/useUser";
import "./style.css";

interface Props {
    searchValue: string,
    setSearchValue: (value: string) => void,
}

export function Header({ searchValue, setSearchValue }: Props) {
    const user = useUser();

    return (
        <div className="header">
            Hi { user.first_name } ☁️ | Your files
            <input
                className="header__input"
                type="text"
                placeholder="Search your files..."
                onChange={e => setSearchValue(e.currentTarget.value)}
                value={searchValue}
            />
        </div>
    )
}