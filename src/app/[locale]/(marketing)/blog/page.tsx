import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import BlogSidebar from './blog-sidebar';

type IBlogProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IBlogProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Blog',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Blog(props: IBlogProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'Blog',
  // });

  return (
    <>
      <div className="container space-y-6">
        <div className="blog-wrapper md:flex gap-x-4 xl:gap-x-8 2xl:gap-x-12">
          <BlogSidebar params={{ locale }} />
          <div className="blog-item-wrapper md:flex-1 sticky_sidebar aos-init aos-animate" data-aos="fade-up">
            <div className="theiaStickySidebar">
              <div className="isotop-wrapper flex flex-wrap [&_.blog-item]:p-2 [&_.blog-item]:rounded-xl xl:[&_.blog-item]:rounded-2xl [&_.blog-item]:bg-gradient-to-b [&_.blog-item]:from-milkWhite [&_.blog-item]:to-seashell dark:[&_.blog-item]:from-metalBlack dark:[&_.blog-item]:to-oilBlack [&_.blog-item]:border [&_.blog-item]:border-flasWhite dark:[&_.blog-item]:border-flasBlack [&_.isotop-item]:mb-6 sm:max-md:[&_.isotop-item]:w-1/2 lg:[&_.isotop-item]:w-1/2 [.blog-wrapper.sb-hidden_&]:xl:[&_.isotop-item]:w-1/3 sm:[&_.isotop-item]:px-3 sm:-mx-3">
                <div className="isotop-item">
                  <div className="blog-item group">
                    <div className="thumbnail relative overflow-hidden rounded-xl">
                      <Link href="/blog/1">
                        <img src="/assets/blog/img1.png" alt="The spectacle before us was indeed sublime" className="w-full transition-all duration-300 group-hover:scale-110" />
                      </Link>
                      <div className="tags absolute right-4 top-4">
                        <a href="\#" className="bg-white/60 dark:bg-black/50 transition-all px-3 py-1 rounded-3xl text-darkGray dark:text-pastelGrey text-sm">
                          Design
                        </a>
                      </div>
                    </div>
                    <div className="description py-6 px-4 pb-4">
                      <h4 className="text-xl 2xl:text-2xl font-bold text-darkGray dark:text-pastelGrey mb-1">
                        <Link href="/blog/1" className="inline bg-gradient-to-r from-current from-0% to-current to-100% bg-no-repeat bg-[length:0_1px] bg-[0_95%] ease-in-out duration-200 transition-[background-size] hover:underline">
                          The spectacle before us was indeed sublime
                        </Link>
                      </h4>
                      <div className="meta my-5">
                        <a href="\#" className="text-regular">
                          <img className="w-9 h-9 inline-block rounded-full bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack border border-flasWhite dark:border-flasBlack" src="/assets/images/blog-author.png" alt="Adriana Martins" />
                          <span className="author-name inline-block">
                            <span className="ml-1 mr-2">By</span>
                            Adriana
                          </span>
                        </a>
                        <time className="text-regular" dateTime="2025-05-15">
                          <span className="mx-3 inline-block mb-1">
                            <svg width="10" height="3" className="text-darkGray dark:text-pastelGrey" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 2.8125C9.11669 2.8125 8.66862 2.47656 8.23544 2.15156C7.83156 1.84844 7.44981 1.5625 6.66669 1.5625C5.88349 1.5625 5.5018 1.84883 5.09771 2.15156C4.66454 2.47656 4.21667 2.8125 3.33317 2.8125C2.44967 2.8125 2.00196 2.47656 1.56879 2.15156C1.16487 1.84844 0.783169 1.5625 0 1.5625V0C0.883331 0 1.33121 0.335938 1.76438 0.660938C2.1683 0.964063 2.55 1.25 3.33317 1.25C4.11634 1.25 4.49804 0.963675 4.90196 0.660938C5.33529 0.335938 5.78317 0 6.66669 0C7.55019 0 7.99806 0.335938 8.43119 0.660938C8.83512 0.964063 9.21681 1.25 10.0002 1.25L10 2.8125Z" fill="currentcolor"></path>
                            </svg>
                          </span>
                          May 15, 2025
                        </time>
                      </div>
                      <p className="line-clamp-2 !leading-normal">
                        Follow a comprehensive roadmap for aspiring entrepreneurs, covering everything...
                      </p>

                      <p className="mt-4 xl:mt-8">
                        <Link href="/blog/2" className="font-semibold text-base leading-none text-darkGray dark:text-pastelGrey flex items-center justify-between" aria-label="Read More">
                          Read More
                          <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="isotop-item">
                  <div className="blog-item group">
                    <div className="thumbnail relative overflow-hidden rounded-xl">
                      <Link href="/blog/3">
                        <img src="/assets/blog/img3.png" alt="The meaning of health has evolved over time" className="w-full transition-all duration-300 group-hover:scale-110" />
                      </Link>
                      <div className="tags absolute right-4 top-4">
                        <a href="\#" className="bg-white/60 dark:bg-black/50 transition-all px-3 py-1 rounded-3xl text-darkGray dark:text-pastelGrey text-sm">
                          Design
                        </a>
                      </div>
                    </div>
                    <div className="description py-6 px-4 pb-4">
                      <h4 className="text-xl 2xl:text-2xl font-bold text-darkGray dark:text-pastelGrey mb-1">
                        <Link href="/blog/3" className="inline bg-gradient-to-r from-current from-0% to-current to-100% bg-no-repeat bg-[length:0_1px] bg-[0_95%] ease-in-out duration-200 transition-[background-size] hover:underline">
                          The meaning of health has evolved over time
                        </Link>
                      </h4>
                      <div className="meta my-5">
                        <a href="\#" className="text-regular">
                          <img className="w-9 h-9 inline-block rounded-full bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack border border-flasWhite dark:border-flasBlack" src="/assets/images/blog-author.png" alt="Adriana Martins" />
                          <span className="author-name inline-block">
                            <span className="ml-1 mr-2">By</span>
                            Adriana
                          </span>
                        </a>
                        <time className="text-regular" dateTime="2025-05-15">
                          <span className="mx-3 inline-block mb-1">
                            <svg width="10" height="3" className="text-darkGray dark:text-pastelGrey" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 2.8125C9.11669 2.8125 8.66862 2.47656 8.23544 2.15156C7.83156 1.84844 7.44981 1.5625 6.66669 1.5625C5.88349 1.5625 5.5018 1.84883 5.09771 2.15156C4.66454 2.47656 4.21667 2.8125 3.33317 2.8125C2.44967 2.8125 2.00196 2.47656 1.56879 2.15156C1.16487 1.84844 0.783169 1.5625 0 1.5625V0C0.883331 0 1.33121 0.335938 1.76438 0.660938C2.1683 0.964063 2.55 1.25 3.33317 1.25C4.11634 1.25 4.49804 0.963675 4.90196 0.660938C5.33529 0.335938 5.78317 0 6.66669 0C7.55019 0 7.99806 0.335938 8.43119 0.660938C8.83512 0.964063 9.21681 1.25 10.0002 1.25L10 2.8125Z" fill="currentcolor"></path>
                            </svg>
                          </span>
                          May 15, 2025
                        </time>
                      </div>
                      <p className="line-clamp-2 !leading-normal">
                        Follow a comprehensive roadmap for aspiring entrepreneurs, covering everything...
                      </p>

                      <p className="mt-4 xl:mt-6">
                        <Link href="/blog/3" className="font-semibold text-base leading-none text-darkGray dark:text-pastelGrey flex items-center justify-between" aria-label="Read More">
                          Read More
                          <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="isotop-item">
                  <div className="blog-item group">
                    <div className="thumbnail relative overflow-hidden rounded-xl">
                      <Link href="/blog/3">
                        <img src="/assets/blog/img4.png" alt="Musical improvisation is the spontaneous music" className="w-full transition-all duration-300 group-hover:scale-110" />
                      </Link>
                      <div className="tags absolute right-4 top-4">
                        <a href="\#" className="bg-white/60 dark:bg-black/50 transition-all px-3 py-1 rounded-3xl text-darkGray dark:text-pastelGrey text-sm">
                          Design
                        </a>
                      </div>
                    </div>
                    <div className="description py-6 px-4 pb-4">
                      <h4 className="text-xl 2xl:text-2xl font-bold text-darkGray dark:text-pastelGrey mb-1">
                        <Link href="/blog/3" className="inline bg-gradient-to-r from-current from-0% to-current to-100% bg-no-repeat bg-[length:0_1px] bg-[0_95%] ease-in-out duration-200 transition-[background-size] hover:underline">
                          Musical improvisation is the spontaneous music
                        </Link>
                      </h4>
                      <div className="meta my-5">
                        <a href="\#" className="text-regular">
                          <img className="w-9 h-9 inline-block rounded-full bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack border border-flasWhite dark:border-flasBlack" src="/assets/images/blog-author.png" alt="Adriana Martins" />
                          <span className="author-name inline-block">
                            <span className="ml-1 mr-2">By</span>
                            Adriana
                          </span>
                        </a>
                        <time className="text-regular" dateTime="2025-05-15">
                          <span className="mx-3 inline-block mb-1">
                            <svg width="10" height="3" className="text-darkGray dark:text-pastelGrey" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 2.8125C9.11669 2.8125 8.66862 2.47656 8.23544 2.15156C7.83156 1.84844 7.44981 1.5625 6.66669 1.5625C5.88349 1.5625 5.5018 1.84883 5.09771 2.15156C4.66454 2.47656 4.21667 2.8125 3.33317 2.8125C2.44967 2.8125 2.00196 2.47656 1.56879 2.15156C1.16487 1.84844 0.783169 1.5625 0 1.5625V0C0.883331 0 1.33121 0.335938 1.76438 0.660938C2.1683 0.964063 2.55 1.25 3.33317 1.25C4.11634 1.25 4.49804 0.963675 4.90196 0.660938C5.33529 0.335938 5.78317 0 6.66669 0C7.55019 0 7.99806 0.335938 8.43119 0.660938C8.83512 0.964063 9.21681 1.25 10.0002 1.25L10 2.8125Z" fill="currentcolor"></path>
                            </svg>
                          </span>
                          May 15, 2025
                        </time>
                      </div>
                      <p className="line-clamp-2 !leading-normal">
                        Follow a comprehensive roadmap for aspiring entrepreneurs, covering everything...
                      </p>

                      <p className="mt-4 xl:mt-6">
                        <Link href="/blog/3" className="font-semibold text-base leading-none text-darkGray dark:text-pastelGrey flex items-center justify-between" aria-label="Read More">
                          Read More
                          <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="isotop-item">
                  <div className="blog-item group">
                    <div className="thumbnail relative overflow-hidden rounded-xl">
                      <Link href="/blog/3">
                        <img src="/assets/blog/img5.png" alt="Customizing your brand and design settings" className="w-full transition-all duration-300 group-hover:scale-110" />
                      </Link>
                      <div className="tags absolute right-4 top-4">
                        <a href="\#" className="bg-white/60 dark:bg-black/50 transition-all px-3 py-1 rounded-3xl text-darkGray dark:text-pastelGrey text-sm">
                          Design
                        </a>
                      </div>
                    </div>
                    <div className="description py-6 px-4 pb-4">
                      <h4 className="text-xl 2xl:text-2xl font-bold text-darkGray dark:text-pastelGrey mb-1">
                        <Link href="/blog/3" className="inline bg-gradient-to-r from-current from-0% to-current to-100% bg-no-repeat bg-[length:0_1px] bg-[0_95%] ease-in-out duration-200 transition-[background-size] hover:underline">
                          Customizing your brand and design settings
                        </Link>
                      </h4>
                      <div className="meta my-5">
                        <a href="\#" className="text-regular">
                          <img className="w-9 h-9 inline-block rounded-full bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack border border-flasWhite dark:border-flasBlack" src="/assets/images/blog-author.png" alt="Adriana Martins" />
                          <span className="author-name inline-block">
                            <span className="ml-1 mr-2">By</span>
                            Adriana
                          </span>
                        </a>
                        <time className="text-regular" dateTime="2025-05-15">
                          <span className="mx-3 inline-block mb-1">
                            <svg width="10" height="3" className="text-darkGray dark:text-pastelGrey" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 2.8125C9.11669 2.8125 8.66862 2.47656 8.23544 2.15156C7.83156 1.84844 7.44981 1.5625 6.66669 1.5625C5.88349 1.5625 5.5018 1.84883 5.09771 2.15156C4.66454 2.47656 4.21667 2.8125 3.33317 2.8125C2.44967 2.8125 2.00196 2.47656 1.56879 2.15156C1.16487 1.84844 0.783169 1.5625 0 1.5625V0C0.883331 0 1.33121 0.335938 1.76438 0.660938C2.1683 0.964063 2.55 1.25 3.33317 1.25C4.11634 1.25 4.49804 0.963675 4.90196 0.660938C5.33529 0.335938 5.78317 0 6.66669 0C7.55019 0 7.99806 0.335938 8.43119 0.660938C8.83512 0.964063 9.21681 1.25 10.0002 1.25L10 2.8125Z" fill="currentcolor"></path>
                            </svg>
                          </span>
                          May 15, 2025
                        </time>
                      </div>
                      <p className="line-clamp-2 !leading-normal">
                        Follow a comprehensive roadmap for aspiring entrepreneurs, covering everything...
                      </p>

                      <p className="mt-4 xl:mt-6">
                        <Link href="/blog/3" className="font-semibold text-base leading-none text-darkGray dark:text-pastelGrey flex items-center justify-between" aria-label="Read More">
                          Read More
                          <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="isotop-item">
                  <div className="blog-item group">
                    <div className="thumbnail relative overflow-hidden rounded-xl">
                      <Link href="/blog/3">
                        <img src="/assets/blog/img6.png" alt="Customizing your brand and design settings" className="w-full transition-all duration-300 group-hover:scale-110" />
                      </Link>
                      <div className="tags absolute right-4 top-4">
                        <a href="\#" className="bg-white/60 dark:bg-black/50 transition-all px-3 py-1 rounded-3xl text-darkGray dark:text-pastelGrey text-sm">
                          Design
                        </a>
                      </div>
                    </div>
                    <div className="description py-6 px-4 pb-4">
                      <h4 className="text-xl 2xl:text-2xl font-bold text-darkGray dark:text-pastelGrey mb-1">
                        <Link href="/blog/3" className="inline bg-gradient-to-r from-current from-0% to-current to-100% bg-no-repeat bg-[length:0_1px] bg-[0_95%] ease-in-out duration-200 transition-[background-size] hover:underline">
                          Customizing your brand and design settings
                        </Link>
                      </h4>
                      <div className="meta my-5">
                        <a href="\#" className="text-regular">
                          <img className="w-9 h-9 inline-block rounded-full bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack border border-flasWhite dark:border-flasBlack" src="/assets/images/blog-author.png" alt="Adriana Martins" />
                          <span className="author-name inline-block">
                            <span className="ml-1 mr-2">By</span>
                            Adriana
                          </span>
                        </a>
                        <time className="text-regular" dateTime="2025-05-15">
                          <span className="mx-3 inline-block mb-1">
                            <svg width="10" height="3" className="text-darkGray dark:text-pastelGrey" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 2.8125C9.11669 2.8125 8.66862 2.47656 8.23544 2.15156C7.83156 1.84844 7.44981 1.5625 6.66669 1.5625C5.88349 1.5625 5.5018 1.84883 5.09771 2.15156C4.66454 2.47656 4.21667 2.8125 3.33317 2.8125C2.44967 2.8125 2.00196 2.47656 1.56879 2.15156C1.16487 1.84844 0.783169 1.5625 0 1.5625V0C0.883331 0 1.33121 0.335938 1.76438 0.660938C2.1683 0.964063 2.55 1.25 3.33317 1.25C4.11634 1.25 4.49804 0.963675 4.90196 0.660938C5.33529 0.335938 5.78317 0 6.66669 0C7.55019 0 7.99806 0.335938 8.43119 0.660938C8.83512 0.964063 9.21681 1.25 10.0002 1.25L10 2.8125Z" fill="currentcolor"></path>
                            </svg>
                          </span>
                          May 15, 2025
                        </time>
                      </div>
                      <p className="line-clamp-2 !leading-normal">
                        Follow a comprehensive roadmap for aspiring entrepreneurs, covering everything...
                      </p>

                      <p className="mt-4 xl:mt-6">
                        <Link href="/blog/3" className="font-semibold text-base leading-none text-darkGray dark:text-pastelGrey flex items-center justify-between" aria-label="Read More">
                          Read More
                          <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="isotop-item">
                  <div className="blog-item group">
                    <div className="thumbnail relative overflow-hidden rounded-xl">
                      <Link href="/blog/3">
                        <img src="/assets/blog/img7.png" alt="5 Spanish Cities that will make you fall in Love" className="w-full transition-all duration-300 group-hover:scale-110" />
                      </Link>
                      <div className="tags absolute right-4 top-4">
                        <a href="\#" className="bg-white/60 dark:bg-black/50 transition-all px-3 py-1 rounded-3xl text-darkGray dark:text-pastelGrey text-sm">
                          Design
                        </a>
                      </div>
                    </div>
                    <div className="description py-6 px-4 pb-4">
                      <h4 className="text-xl 2xl:text-2xl font-bold text-darkGray dark:text-pastelGrey mb-1">
                        <Link href="/blog/3" className="inline bg-gradient-to-r from-current from-0% to-current to-100% bg-no-repeat bg-[length:0_1px] bg-[0_95%] ease-in-out duration-200 transition-[background-size] hover:underline">
                          5 Spanish Cities that will make you fall in Love
                        </Link>
                      </h4>
                      <div className="meta my-5">
                        <a href="\#" className="text-regular">
                          <img className="w-9 h-9 inline-block rounded-full bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack border border-flasWhite dark:border-flasBlack" src="/assets/images/blog-author.png" alt="Adriana Martins" />
                          <span className="author-name inline-block">
                            <span className="ml-1 mr-2">By</span>
                            Adriana
                          </span>
                        </a>
                        <time className="text-regular" dateTime="2025-05-15">
                          <span className="mx-3 inline-block mb-1">
                            <svg width="10" height="3" className="text-darkGray dark:text-pastelGrey" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 2.8125C9.11669 2.8125 8.66862 2.47656 8.23544 2.15156C7.83156 1.84844 7.44981 1.5625 6.66669 1.5625C5.88349 1.5625 5.5018 1.84883 5.09771 2.15156C4.66454 2.47656 4.21667 2.8125 3.33317 2.8125C2.44967 2.8125 2.00196 2.47656 1.56879 2.15156C1.16487 1.84844 0.783169 1.5625 0 1.5625V0C0.883331 0 1.33121 0.335938 1.76438 0.660938C2.1683 0.964063 2.55 1.25 3.33317 1.25C4.11634 1.25 4.49804 0.963675 4.90196 0.660938C5.33529 0.335938 5.78317 0 6.66669 0C7.55019 0 7.99806 0.335938 8.43119 0.660938C8.83512 0.964063 9.21681 1.25 10.0002 1.25L10 2.8125Z" fill="currentcolor"></path>
                            </svg>
                          </span>
                          May 15, 2025
                        </time>
                      </div>
                      <p className="line-clamp-2 !leading-normal">
                        Follow a comprehensive roadmap for aspiring entrepreneurs, covering everything...
                      </p>

                      <p className="mt-4 xl:mt-6">
                        <Link href="/blog/3" className="font-semibold text-base leading-none text-darkGray dark:text-pastelGrey flex items-center justify-between" aria-label="Read More">
                          Read More
                          <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="isotop-item">
                  <div className="blog-item group">
                    <div className="thumbnail relative overflow-hidden rounded-xl">
                      <Link href="/blog/3">
                        <img src="/assets/blog/img8.png" alt="These Are The 10 Best Restaurants in The World" className="w-full transition-all duration-300 group-hover:scale-110" />
                      </Link>
                      <div className="tags absolute right-4 top-4">
                        <a href="\#" className="bg-white/60 dark:bg-black/50 transition-all px-3 py-1 rounded-3xl text-darkGray dark:text-pastelGrey text-sm">
                          Design
                        </a>
                      </div>
                    </div>
                    <div className="description py-6 px-4 pb-4">
                      <h4 className="text-xl 2xl:text-2xl font-bold text-darkGray dark:text-pastelGrey mb-1">
                        <Link href="/blog/3" className="inline bg-gradient-to-r from-current from-0% to-current to-100% bg-no-repeat bg-[length:0_1px] bg-[0_95%] ease-in-out duration-200 transition-[background-size] hover:underline">
                          These Are The 10 Best Restaurants in The World
                        </Link>
                      </h4>
                      <div className="meta my-5">
                        <a href="\#" className="text-regular">
                          <img className="w-9 h-9 inline-block rounded-full bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack border border-flasWhite dark:border-flasBlack" src="/assets/images/blog-author.png" alt="Adriana Martins" />
                          <span className="author-name inline-block">
                            <span className="ml-1 mr-2">By</span>
                            Adriana
                          </span>
                        </a>
                        <time className="text-regular" dateTime="2025-05-15">
                          <span className="mx-3 inline-block mb-1">
                            <svg width="10" height="3" className="text-darkGray dark:text-pastelGrey" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 2.8125C9.11669 2.8125 8.66862 2.47656 8.23544 2.15156C7.83156 1.84844 7.44981 1.5625 6.66669 1.5625C5.88349 1.5625 5.5018 1.84883 5.09771 2.15156C4.66454 2.47656 4.21667 2.8125 3.33317 2.8125C2.44967 2.8125 2.00196 2.47656 1.56879 2.15156C1.16487 1.84844 0.783169 1.5625 0 1.5625V0C0.883331 0 1.33121 0.335938 1.76438 0.660938C2.1683 0.964063 2.55 1.25 3.33317 1.25C4.11634 1.25 4.49804 0.963675 4.90196 0.660938C5.33529 0.335938 5.78317 0 6.66669 0C7.55019 0 7.99806 0.335938 8.43119 0.660938C8.83512 0.964063 9.21681 1.25 10.0002 1.25L10 2.8125Z" fill="currentcolor"></path>
                            </svg>
                          </span>
                          May 15, 2025
                        </time>
                      </div>
                      <p className="line-clamp-2 !leading-normal">
                        Follow a comprehensive roadmap for aspiring entrepreneurs, covering everything...
                      </p>

                      <p className="mt-4 xl:mt-6">
                        <Link href="/blog/3" className="font-semibold text-base leading-none text-darkGray dark:text-pastelGrey flex items-center justify-between" aria-label="Read More">
                          Read More
                          <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="isotop-item">
                  <div className="blog-item group">
                    <div className="thumbnail relative overflow-hidden rounded-xl">
                      <Link href="/blog/3">
                        <img src="/assets/blog/img9.png" alt="3 ideas to keep you healthy and strong" className="w-full transition-all duration-300 group-hover:scale-110" />
                      </Link>
                      <div className="tags absolute right-4 top-4">
                        <a href="\#" className="bg-white/60 dark:bg-black/50 transition-all px-3 py-1 rounded-3xl text-darkGray dark:text-pastelGrey text-sm">
                          Design
                        </a>
                      </div>
                    </div>
                    <div className="description py-6 px-4 pb-4">
                      <h4 className="text-xl 2xl:text-2xl font-bold text-darkGray dark:text-pastelGrey mb-1">
                        <Link href="/blog/3" className="inline bg-gradient-to-r from-current from-0% to-current to-100% bg-no-repeat bg-[length:0_1px] bg-[0_95%] ease-in-out duration-200 transition-[background-size] hover:underline">
                          3 ideas to keep you healthy and strong
                        </Link>
                      </h4>
                      <div className="meta my-5">
                        <a href="\#" className="text-regular">
                          <img className="w-9 h-9 inline-block rounded-full bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack border border-flasWhite dark:border-flasBlack" src="/assets/images/blog-author.png" alt="Adriana Martins" />
                          <span className="author-name inline-block">
                            <span className="ml-1 mr-2">By</span>
                            Adriana
                          </span>
                        </a>
                        <time className="text-regular" dateTime="2025-05-15">
                          <span className="mx-3 inline-block mb-1">
                            <svg width="10" height="3" className="text-darkGray dark:text-pastelGrey" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 2.8125C9.11669 2.8125 8.66862 2.47656 8.23544 2.15156C7.83156 1.84844 7.44981 1.5625 6.66669 1.5625C5.88349 1.5625 5.5018 1.84883 5.09771 2.15156C4.66454 2.47656 4.21667 2.8125 3.33317 2.8125C2.44967 2.8125 2.00196 2.47656 1.56879 2.15156C1.16487 1.84844 0.783169 1.5625 0 1.5625V0C0.883331 0 1.33121 0.335938 1.76438 0.660938C2.1683 0.964063 2.55 1.25 3.33317 1.25C4.11634 1.25 4.49804 0.963675 4.90196 0.660938C5.33529 0.335938 5.78317 0 6.66669 0C7.55019 0 7.99806 0.335938 8.43119 0.660938C8.83512 0.964063 9.21681 1.25 10.0002 1.25L10 2.8125Z" fill="currentcolor"></path>
                            </svg>
                          </span>
                          May 15, 2025
                        </time>
                      </div>
                      <p className="line-clamp-2 !leading-normal">
                        Follow a comprehensive roadmap for aspiring entrepreneurs, covering everything...
                      </p>

                      <p className="mt-4 xl:mt-6">
                        <Link href="/blog/3" className="font-semibold text-base leading-none text-darkGray dark:text-pastelGrey flex items-center justify-between" aria-label="Read More">
                          Read More
                          <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="isotop-item">
                  <div className="blog-item group">
                    <div className="thumbnail relative overflow-hidden rounded-xl">
                      <Link href="/blog/3">
                        <img src="/assets/blog/img2.png" alt="Far far away, behind the word mountains" className="w-full transition-all duration-300 group-hover:scale-110" />
                      </Link>
                      <div className="tags absolute right-4 top-4">
                        <a href="\#" className="bg-white/60 dark:bg-black/50 transition-all px-3 py-1 rounded-3xl text-darkGray dark:text-pastelGrey text-sm">
                          Design
                        </a>
                      </div>
                    </div>
                    <div className="description py-6 px-4 pb-4">
                      <h4 className="text-xl 2xl:text-2xl font-bold text-darkGray dark:text-pastelGrey mb-1">
                        <Link href="/blog/3" className="inline bg-gradient-to-r from-current from-0% to-current to-100% bg-no-repeat bg-[length:0_1px] bg-[0_95%] ease-in-out duration-200 transition-[background-size] hover:underline">
                          Far far away, behind the word mountains
                        </Link>
                      </h4>
                      <div className="meta my-5">
                        <a href="\#" className="text-regular">
                          <img className="w-9 h-9 inline-block rounded-full bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack border border-flasWhite dark:border-flasBlack" src="/assets/images/blog-author.png" alt="Adriana Martins" />
                          <span className="author-name inline-block">
                            <span className="ml-1 mr-2">By</span>
                            Adriana
                          </span>
                        </a>
                        <time className="text-regular" dateTime="2025-05-15">
                          <span className="mx-3 inline-block mb-1">
                            <svg width="10" height="3" className="text-darkGray dark:text-pastelGrey" viewBox="0 0 10 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 2.8125C9.11669 2.8125 8.66862 2.47656 8.23544 2.15156C7.83156 1.84844 7.44981 1.5625 6.66669 1.5625C5.88349 1.5625 5.5018 1.84883 5.09771 2.15156C4.66454 2.47656 4.21667 2.8125 3.33317 2.8125C2.44967 2.8125 2.00196 2.47656 1.56879 2.15156C1.16487 1.84844 0.783169 1.5625 0 1.5625V0C0.883331 0 1.33121 0.335938 1.76438 0.660938C2.1683 0.964063 2.55 1.25 3.33317 1.25C4.11634 1.25 4.49804 0.963675 4.90196 0.660938C5.33529 0.335938 5.78317 0 6.66669 0C7.55019 0 7.99806 0.335938 8.43119 0.660938C8.83512 0.964063 9.21681 1.25 10.0002 1.25L10 2.8125Z" fill="currentcolor"></path>
                            </svg>
                          </span>
                          May 15, 2025
                        </time>
                      </div>
                      <p className="line-clamp-2 !leading-normal">
                        Follow a comprehensive roadmap for aspiring entrepreneurs, covering everything...
                      </p>

                      <p className="mt-4 xl:mt-6">
                        <Link href="/blog/3" className="font-semibold text-base leading-none text-darkGray dark:text-pastelGrey flex items-center justify-between" aria-label="Read More">
                          Read More
                          <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full text-center pt-10 xl:pt-16 space-x-2 lg:space-x-4 *:transition-all *:duration-200 *:border *:border-flasWhite *:dark:border-flasBlack *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack aos-init" data-aos="fade-up">
                <button type="button" className="text-regular text-darkGray font-semibold py-2 lg:py-3 px-7 lg:px-10 inline-flex transition-all duration-200 rounded-full dark:text-pastelGrey hover:bg-none hover:bg-darkGray hover:text-white">
                  Load More Blogs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
