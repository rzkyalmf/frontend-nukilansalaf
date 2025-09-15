import { Clock, Eye } from "lucide-react";
import Link from "next/link";

import { formatDate } from "@/lib/dates-format";

import { getArticles } from "../(actions)/get-all-article";

export default async function Page() {
  const articles = await getArticles();

  const sortedArticles = articles
    ? [...articles].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    : [];

  return (
    <main className="container mx-auto space-y-8 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-14">
      <div className="space-y-10 rounded-lg border p-10">
        <div className="flex w-1/6 items-center justify-between rounded-lg border-b-2 bg-white p-4">
          <h2 className="gradient-ns font-philosopher text-5xl font-bold tracking-normal">Artikel</h2>
        </div>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:gap-10 lg:grid-cols-3 xl:grid-cols-4">
          {sortedArticles.map((article) => (
            <Link href={`/article/${article.slug}`} key={article.id}>
              <div className="flex flex-col overflow-hidden bg-white">
                {/* Image */}
                <div className="hover:opacity-85">
                  <div className="mx-auto flex min-h-[180px] w-full flex-col items-center justify-center rounded-xl bg-[#262626] px-10 py-6 text-center shadow-[#C2B59B] transition duration-500 hover:shadow-lg">
                    <h1 className="gradient-ns font-philosopher text-2xl leading-none">{article.title}</h1>
                  </div>
                </div>

                {/* Date and stats */}
                <div className="flex items-center justify-between px-1 pt-3 text-sm">
                  <div className="flex items-center gap-1 font-normal text-[#746C5B]">
                    <Clock size={12} />
                    <span>{formatDate(article.createdAt)}</span>
                  </div>

                  <div className="flex items-center">
                    <div className="flex items-center gap-1 font-normal text-[#746C5B]">
                      <Eye size={12} />
                      <span>0</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="flex flex-grow flex-col gap-2 p-1 pt-4">
                  <div className="flex items-center justify-start gap-2">
                    <h4 className="leading-snug hover:text-[#746C5B]">{article.title}</h4>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
