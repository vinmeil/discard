import { Display } from "./_components/hero/Display";
import { Footer } from "./_components/hero/Footer";

export default function Page() {
  return (
    <main>
      <div className="px-0 md:px-8 py-4">
        <Display />
      </div>
      <Footer />
    </main>
  );
}
