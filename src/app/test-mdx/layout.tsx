export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="lg:prose-xl prose p-8 lg:gap-8">{children}</section>
  );
}
