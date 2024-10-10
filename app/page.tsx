import { BookOpen } from "lucide-react";
import { DarkModeToggle } from "./og/components/DarkModeToggle";
import { TemplatePreview } from "./og/components/TemplatePreview";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 pad">
      <div className="w-full flex-col sm:flex-row gap-4 flex items-center justify-between">
        <a
          href="https://blogkit.org"
          target="_blank"
          className="inline-flex items-center gap-2 font-black"
        >
          <BookOpen
            size={14}
            className="mr-1 text-purple-500 dark:text-purple-400"
          />
          BlogKit
        </a>
        <a
          href="https://ogimage.org"
          target="_blank"
          className="inline-flex items-center gap-2 font-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            className="text-primary"
            width={24}
            height={24}
          >
            <path
              d="M128,64.2c0,33-25.8,60.9-58.4,63.7C31,131.6-2.8,98.4.2,59.7,1.6,36.1,17.1,14.5,38.8,5.3c41.6-18.2,89.4,13,89.3,58.7v.2Z"
              fill="currentColor"
              strokeWidth="0"
            />
            <path
              d="M63.9,45.2c-1-.1-1.7-1.3-2.5-2.1-1.3-1.4-3-2.5-4.8-3.3-11-4.8-22.9,2.9-23.3,15.6-1.4,16.2,16.1,31,25.5,36.3,1.9,1.2,4.3,2.2,6.7,1.6,13-4.8,37.6-27.4,26.2-47.1-3.5-5.7-10.1-8.6-16.6-7.4-4,.6-7.1,2.7-9.2,5.1-.6.6-1.2,1.4-2,1.5h0Z"
              fill="#fff"
              strokeWidth="0"
            />
          </svg>
          ogimage.org
        </a>
        <DarkModeToggle />
      </div>
      <TemplatePreview />
    </main>
  );
}
