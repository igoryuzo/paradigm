import { articleContent } from "../data/article-content"

interface ArticleSectionProps {
  sectionId: number
}

export function ArticleSection({ sectionId }: ArticleSectionProps) {
  const content = articleContent[sectionId - 1] || []

  return (
    <div className="article-section space-y-6 mb-10">
      {content.map((paragraph, index) => (
        <p
          key={`section-${sectionId}-paragraph-${index}`}
          className={`leading-relaxed text-base font-['Courier_New',_monospace] ${
            paragraph.startsWith("–") ? "text-sm text-[#6b6b6b] pl-4 italic" : ""
          } ${
            paragraph.startsWith("Waking up") ||
            paragraph.startsWith("Leaving home") ||
            paragraph.startsWith("Inverting the status quo") ||
            paragraph.startsWith("Invention") ||
            paragraph.startsWith("Crypto crypto crypto") ||
            paragraph.startsWith("Writing the future")
              ? "text-xl font-bold mt-10 mb-6"
              : ""
          }`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  )
} 