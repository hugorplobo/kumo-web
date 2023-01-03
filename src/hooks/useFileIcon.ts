import {
    VscFile,
    VscFileBinary,
    VscFileCode,
    VscFilePdf,
    VscFileMedia,
    VscFileZip,
} from "react-icons/vsc";

const zipRegex = /(iso|br|bz2|tar|gz|tgz|tbz2|tlz|lz|lz4|lzma|lzo|txz|xz|z|7z|s7z|apk|dmg|jar|war|rar|zst|zip|zipx|deb|pkg|rpm|msi)/;
const videoRegex = /(webm|webp|mkv|flv|vob|gif|avi|wmv|mp4|m4v|mpeg|mpg)/;
const audioRegex = /(3gp|m4a|m4p|mp3|ogg|opus|wav)/;
const imageRegex = /(jpg|jpeg|png|webp|svg)/;

export function useFileIcon(name: string) {
    const splitted = name.split(".");
    const extension = splitted[splitted.length - 1].toLowerCase();

    if (extension === "pdf") {
        return VscFilePdf;
    } else if (zipRegex.test(extension)) {
        return VscFileZip;
    } else if (videoRegex.test(extension) || audioRegex.test(extension) || imageRegex.test(extension)) {
        return VscFileMedia;
    } else {
        return VscFile;
    }
}
