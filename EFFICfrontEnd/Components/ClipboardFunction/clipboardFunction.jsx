export async function copyToClipboard(data) {
    try {
        const formattedText = JSON.stringify(data, null, 4);
        await navigator.clipboard.writeText(formattedText);
        console.log("Copied:", formattedText);
    } catch (err) {
        console.error("Copy failed:", err);
    }
}