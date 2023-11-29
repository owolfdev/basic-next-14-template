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

const aboutContent =
  "This project is a modern web application built using Next.js 14, showcasing the some of the latest features and attempting to adhere to the best practices in web development. It leverages TypeScript for type safety, Tailwind CSS for styling, Clerk for authentication, and `shadcn/ui` components for UI elements. The application is designed to provide a robust foundation for building a variety of web applications. REPO: [https://github.com/owolfdev/basic-next-14-template](https://github.com/owolfdev/basic-next-14-template)";
