import { useEffect } from "react";

const brandReplacements: Array<[RegExp, string]> = [
  [/Đức Hạnh Clocks/g, "Đồng hồ Kana"],
  [/Đức Hạnh Đồng hồ/g, "Đồng hồ Kana"],
  [/Duc Hanh Clocks/g, "Đồng hồ Kana"],
  [/Duc Hanh/g, "Kana"],
  [/Đức Hạnh/g, "Kana"],
];

function replaceBrandText(text: string) {
  return brandReplacements.reduce(
    (updatedText, [pattern, replacement]) => updatedText.replace(pattern, replacement),
    text,
  );
}

function rewriteTextNode(node: Node) {
  const originalText = node.nodeValue;
  if (!originalText) return;

  const updatedText = replaceBrandText(originalText);
  if (updatedText !== originalText) {
    node.nodeValue = updatedText;
  }
}

function rewriteTextNodes(root: Node) {
  if (root.nodeType === Node.TEXT_NODE) {
    rewriteTextNode(root);
    return;
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();

  while (node) {
    rewriteTextNode(node);
    node = walker.nextNode();
  }
}

function normalizeBrandLogoText() {
  document.querySelectorAll("span.font-serif").forEach((element) => {
    const text = element.textContent?.replace(/\s+/g, " ").trim();

    if (
      text === "Đức Hạnh Clocks" ||
      text === "Đức Hạnh Đồng hồ" ||
      text === "Kana Clocks" ||
      text === "Kana Đồng hồ"
    ) {
      element.textContent = "Đồng hồ Kana";
    }
  });
}

function rewriteBrandEverywhere() {
  rewriteTextNodes(document.body);
  normalizeBrandLogoText();
  document.title = replaceBrandText(document.title);
}

export function BrandTextRewriter() {
  useEffect(() => {
    rewriteBrandEverywhere();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          rewriteTextNodes(node);
        });
      });

      normalizeBrandLogoText();
      document.title = replaceBrandText(document.title);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
