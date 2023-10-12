export const getBaseUrl = () => {
    if (process.env.NEXT_PUBLIC_BASE_URL) {
        return `${process.env.NEXT_PUBLIC_MODE === "production" ? "https://" : "http://"}${process.env.NEXT_PUBLIC_BASE_URL}`;
    }
    return '';
}