import AiSummary from "./_components/AiSummary";
import ArticleDetail from "./_components/ArticleDetail";
import TableContent from "./_components/TableContent";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="font-Gotham">
      <section className="py-8 px-5 md:py-20 md:px-16 grid grid-cols-4 gap-10">
        <div className="col-span-1 hidden lg:block">
          <TableContent />
        </div>
        <div className="col-span-4 lg:col-span-3">
          <ArticleDetail />
        </div>
      </section>
    </main>
  );
}
