import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

type IAboutProps = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata(props: IAboutProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Projects',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Projects(props: IAboutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'Projects',
  // });

  return (
    <>
      <div className="container">
        <div className="projects-wrapper grid sm:grid-cols-2 lg:grid-cols-3 gap-6 *:rounded-2xl *:p-2 *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack *:border *:border-flasWhite dark:*:border-flasBlack aos-init aos-animate" data-aos="fade-up">
          <div className="project-item group sm:col-span-2">
            <div className="thumbnail rounded-lg overflow-hidden">
              <Link href="/projects/1">
                <img src="/assets/images/img1.png" alt="Brand Identity Design" className="h-56 sm:h-64 lg:h-72 xl:h-96 w-full object-cover object-center transition-all duration-300 group-hover:scale-110" />
              </Link>
            </div>
            <div className="description px-4 py-6 pb-4 space-y-2">
              <h6 className="text-sm text-nobelGray dark:text-slateGray font-medium">
                BRAND IDENTITY DESIGN
              </h6>
              <h4 className="text-lg xl:text-xl 2xl:text-2xl font-semibold text-darkGray dark:text-pastelGrey">
                <Link href="/projects/1" className="flex items-start gap-4 justify-between">
                  The easiest way to build marketplaces
                  <span className="ml-auto max-md:hidden group-hover:text-darkGray dark:group-hover:text-pastelGrey">
                    <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </Link>
              </h4>
            </div>
          </div>
          <div className="project-item group">
            <div className="thumbnail rounded-lg overflow-hidden">
              <Link href="/projects/1">
                <img src="/assets/images/img2.png" className="h-56 sm:h-64 lg:h-72 xl:h-96 w-full object-cover object-center transition-all duration-300 group-hover:scale-110" alt="Cloths for real life" />
              </Link>
            </div>
            <div className="description px-4 py-6 pb-4 space-y-2">
              <h6 className="text-sm text-nobelGray dark:text-slateGray font-medium">
                DESIGN SYSTEM
              </h6>
              <h4 className="text-lg xl:text-xl 2xl:text-2xl font-semibold text-darkGray dark:text-pastelGrey">
                <Link href="/projects/1" className="flex items-start gap-4 justify-between">
                  Standard Design System
                  <span className="ml-auto max-md:hidden group-hover:text-darkGray dark:group-hover:text-pastelGrey">
                    <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </Link>
              </h4>
            </div>
          </div>
          <div className="project-item group">
            <div className="thumbnail rounded-lg overflow-hidden">
              <Link href="/projects/1">
                <img src="/assets/images/img3.png" className="h-56 sm:h-64 lg:h-72 xl:h-96 w-full object-cover object-center transition-all duration-300 group-hover:scale-110" alt="Cloths for real life" />
              </Link>
            </div>
            <div className="description px-4 py-6 pb-4 space-y-2">
              <h6 className="text-sm text-nobelGray dark:text-slateGray font-medium">
                PRODUCT BRANDING
              </h6>
              <h4 className="text-lg xl:text-xl 2xl:text-2xl font-semibold text-darkGray dark:text-pastelGrey">
                <Link href="/projects/1" className="flex items-start gap-4 justify-between">
                  Natural Perfume
                  <span className="ml-auto max-md:hidden group-hover:text-darkGray dark:group-hover:text-pastelGrey">
                    <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </Link>
              </h4>
            </div>
          </div>
          <div className="project-item group sm:col-span-2">
            <div className="thumbnail rounded-lg overflow-hidden">
              <Link href="/projects/1">
                <img src="/assets/images/img4.png" className="h-56 sm:h-64 lg:h-72 xl:h-96 w-full object-cover object-center transition-all duration-300 group-hover:scale-110" alt="Cloths for real life" />
              </Link>
            </div>
            <div className="description px-4 py-6 pb-4 space-y-2">
              <h6 className="text-sm text-nobelGray dark:text-slateGray font-medium">
                BRAND DESIGN
              </h6>
              <h4 className="text-lg xl:text-xl 2xl:text-2xl font-semibold text-darkGray dark:text-pastelGrey">
                <Link href="/projects/1" className="flex items-start gap-4 justify-between">
                  SaaS Design for Unleash
                  <span className="ml-auto max-md:hidden group-hover:text-darkGray dark:group-hover:text-pastelGrey">
                    <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </Link>
              </h4>
            </div>
          </div>
          <div className="project-item group">
            <div className="thumbnail rounded-lg overflow-hidden">
              <Link href="/projects/1">
                <img src="/assets/images/img5.png" className="h-56 sm:h-64 lg:h-72 xl:h-96 w-full object-cover object-center transition-all duration-300 group-hover:scale-110" alt="Cloths for real life" />
              </Link>
            </div>
            <div className="description px-4 py-6 pb-4 space-y-2">
              <h6 className="text-sm text-nobelGray dark:text-slateGray font-medium">
                WEB DESIGN
              </h6>
              <h4 className="text-lg xl:text-xl 2xl:text-2xl font-semibold text-darkGray dark:text-pastelGrey">
                <Link href="/projects/1" className="flex items-start gap-4 justify-between">
                  Web Development
                  <span className="ml-auto max-md:hidden group-hover:text-darkGray dark:group-hover:text-pastelGrey">
                    <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </Link>
              </h4>
            </div>
          </div>
          <div className="project-item group">
            <div className="thumbnail rounded-lg overflow-hidden">
              <Link href="/projects/1">
                <img src="/assets/images/img6.png" className="h-56 sm:h-64 lg:h-72 xl:h-96 w-full object-cover object-center transition-all duration-300 group-hover:scale-110" alt="Cloths for real life" />
              </Link>
            </div>
            <div className="description px-4 py-6 pb-4 space-y-2">
              <h6 className="text-sm text-nobelGray dark:text-slateGray font-medium">
                PRODUCT MARKETING
              </h6>
              <h4 className="text-lg xl:text-xl 2xl:text-2xl font-semibold text-darkGray dark:text-pastelGrey">
                <Link href="/projects/1" className="flex items-start gap-4 justify-between">
                  Marketing of Colonia
                  <span className="ml-auto max-md:hidden group-hover:text-darkGray dark:group-hover:text-pastelGrey">
                    <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </Link>
              </h4>
            </div>
          </div>
          <div className="project-item group">
            <div className="thumbnail rounded-lg overflow-hidden">
              <Link href="/projects/1">
                <img src="/assets/images/img7.png" className="h-56 sm:h-64 lg:h-72 xl:h-96 w-full object-cover object-center transition-all duration-300 group-hover:scale-110" alt="Cloths for real life" />
              </Link>
            </div>
            <div className="description px-4 py-6 pb-4 space-y-2">
              <h6 className="text-sm text-nobelGray dark:text-slateGray font-medium">
                AI DEVELOPMENT
              </h6>
              <h4 className="text-lg xl:text-xl 2xl:text-2xl font-semibold text-darkGray dark:text-pastelGrey">
                <Link href="/projects/1" className="flex items-start gap-4 justify-between">
                  AI in Robots Design
                  <span className="ml-auto max-md:hidden group-hover:text-darkGray dark:group-hover:text-pastelGrey">
                    <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </Link>
              </h4>
            </div>
          </div>
        </div>

        <div className="text-center pt-16 space-x-2 lg:space-x-4 *:transition-all *:duration-200 *:border *:border-flasWhite *:dark:border-flasBlack *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack">
          <button className="text-regular text-darkGray font-semibold py-2 lg:py-3 px-7 lg:px-10 inline-flex transition-all duration-200 rounded-full dark:text-pastelGrey hover:bg-none hover:bg-darkGray hover:text-white">
            Load More Projects
          </button>
        </div>

      </div>
    </>
  );
};
