import { marked } from "marked";
import sanitizeHtmlLibrary from "sanitize-html";
import TurndownService from "turndown";

export function sanitizeMarkdown(markdownContent) {
  const turnDownService = new TurndownService({
    headingStyle: "atx",
    hr: "---",
  });

  // 1. Convert markdown to html
  const convertedHtml = marked.parse(markdownContent);

  // 2. Sanitize html
  const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(["img"]),
  });

  // 3. Convert the sanitized html back to markdown
  const sanitizedMarkdown = turnDownService.turndown(sanitizedHtml);
  return sanitizedMarkdown;
}
