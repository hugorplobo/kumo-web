import { useFileIcon } from "../../hooks/useFileIcon";
import "./style.css";

interface Props {
    name: string
}

export function File({ name }: Props) {
    const Icon = useFileIcon(name);

    return (
        <div className="file">
            <Icon size="50px" />
            <div className="file__name">{ name }</div>
        </div>
    );
}