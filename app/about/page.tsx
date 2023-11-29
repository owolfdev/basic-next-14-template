import ReactMarkdown from "react-markdown";

export default function Privacy() {
  return (
    <div className="items-center justify-between text-sm flex flex-col gap-8 max-w-xl">
      <h1 className="text-3xl sm:text-5xl font-bold text-center">
        About Basic Next.js 14
      </h1>
      <ReactMarkdown className="text-base flex flex-col gap-6">
        {aboutContent}
      </ReactMarkdown>
    </div>
  );
}

const aboutContent = `

**Site:** [mdxblog.io](https://mdxblog.io)

**Focus:** Basic Next.js 14 aspires to provide the best resources for creating static blogs utilizing MDX (Markdown for the component era). The site serves as a hub for various MDX-related content and tools.

**Contents:**

**Templates:** MDX templates suitable for static blog creation. Templates are designed for compatibility and ease of use.

**Tutorials:** Guides on how to use MDX for blog development, covering various aspects of MDX implementation.

**Articles:** Technical articles focused on MDX usage, best practices, and development tips.

Basic Next.js 14 is a resource-oriented platform aiming to provide practical and technical information for static blog development using MDX.
`;
