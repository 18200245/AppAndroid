function isChapterPage(url) {
    try {
        var path = url.replace(/^https?:\/\/[^\/]+/, '');
        var segments = path.split('/').filter(function(s){ return s.length > 0 });

        return segments.length === 3;
    } catch(e) {
        return false;
    }
}


function parseContent(html) {
    html = html
        .replace(/<script.*?>.*?<\/script>/gis, "")
        .replace(/<style.*?>.*?<\/style>/gis, "")
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<\/?div[^>]*>/gi, "")
        .replace(/<[^>]+>/g, "");

    const paragraphs = html
        .split(/\n+/)
        .map(t => t.trim())
        .filter(Boolean);

    return paragraphs.join("\n\n");
}
