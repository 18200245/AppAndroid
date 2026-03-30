const { URL } = require('url')


function isChapterPage(url) {
const path = new URL(url).pathname
    .split('/')
    .filter(Boolean)

  return path.length === 3
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
