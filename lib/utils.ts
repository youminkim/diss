import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getEmbed(url: string, type: "youtube" | "tiktok") {
    let regex: RegExp;
    switch (type) {
        case "youtube":
            regex =
                /(?:https?:)?(?:\/\/)?(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gm;
            break;
        case "tiktok":
            regex =
                /(?:http|https)*?:\/\/(?:www\.|)(?:tiktok\.com|m\.tiktok\.com).*(?:h5\/|v\/|\/embed\/|share\/user\/|trending\?shareId=|[@A-Za-z0-9_]\/video\/)([^&?%#/\n]*)/gm;
            break;
    }
    let match;
    while ((match = regex.exec(url)) !== null) {
        if (match.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        return match[1];
    }
}
