import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      <Header />
      <div className="main-content pt-24 md:pt-28 lg:pt-32 xl:pt-40">
        {props.children}
      </div>
      <Footer />
    </>
  );
}
