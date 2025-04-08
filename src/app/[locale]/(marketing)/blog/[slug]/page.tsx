import { routing } from '@/libs/i18nNavigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import BlogSidebar from '../blog-sidebar';

type IBlogDetailProps = {
  params: Promise<{ slug: string; locale: string }>;
};

export function generateStaticParams() {
  return routing.locales
    .map(locale =>
      Array.from(Array.from({ length: 6 }).keys()).map(elt => ({
        slug: `${elt}`,
        locale,
      })),
    )
    .flat(1);
}

export async function generateMetadata(props: IBlogDetailProps) {
  const { locale, slug } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'BlogSlug',
  });

  return {
    title: t('meta_title', { slug }),
    description: t('meta_description', { slug }),
  };
}

export default async function BlogDetail(props: IBlogDetailProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'BlogSlug',
  // });

  return (
    <>
      <div className="container space-y-6">
        <div className="blog-wrapper md:flex gap-x-4 xl:gap-x-8 2xl:gap-x-12">
          <BlogSidebar params={{ locale }} />
          <div className="blog-details-wrapper sticky_sidebar md:flex-1">
            <div className="theiaStickySidebar">
              <div className="details-header">
                <h2 className="font-bold text-3xl lg:text-4xl text-darkGray dark:text-pastelGrey mb-2">
                  Idea to Launch: A Step-by-Step Guide
                </h2>
                <ul className="meta flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 mb-6 text-sm lg:text-base">
                  <li>
                    <a href="\#" className="bg-white dark:bg-black/50 transition-all inline-flex px-6 py-2 rounded-3xl text-darkGray dark:text-pastelGrey">
                      Design
                    </a>
                  </li>
                  <li>
                    <i className="fal fa-clock"></i>
                    Feb 15, 2025
                  </li>
                  <li>
                    <i className="fal fa-comments-alt"></i>
                    3 Comments
                  </li>
                </ul>
              </div>
              <div className="thumbnail mb-12">
                <img src="/assets/blog/img1-xl.webp" alt="Idea to Launch: A Step-by-Step Guide" className="rounded-xl xl:rounded-2xl max-md:h-60 w-full object-cover object-center" />
              </div>
              <div className="space-y-12">

                <div className="details-body">
                  <h3 className="text-xl lg:text-2xl text-darkGray dark:text-pastelGrey font-bold mb-2">
                    Introduction
                  </h3>
                  <p>
                    The project challenge encapsulates the primary obstacle or problem that the project aims to address. It outlines the specific issue or pain point that the team must overcome in order to achieve the project's objectives. Identifying and clearly articulating the project challenge is essential for guiding the project's direction and ensuring that efforts are focused on the most critical areas.
                  </p>
                  <br />
                  <h3 className="text-xl lg:text-2xl text-darkGray dark:text-pastelGrey font-bold mb-2">
                    Ideation and Validation
                  </h3>
                  <p>
                    Explore techniques for generating business ideas, identifying market opportunities, and validating your concept through market research, competitor analysis, and customer feedback. Learn how to assess the feasibility and viability of your idea, refine your value proposition, and identify your target audience and customer personas.
                  </p>
                  <br />
                  <h3 className="text-xl lg:text-2xl text-darkGray dark:text-pastelGrey font-bold mb-2">
                    Business Planning and Strategy
                  </h3>
                  <p>
                    Develop a solid business plan outlining your mission, vision, goals, and strategies for achieving success. Dive into key elements of business planning, including revenue models, pricing strategies, sales and marketing plans, and financial projections.
                  </p>
                  <br />
                  <h3 className="text-xl lg:text-2xl text-darkGray dark:text-pastelGrey font-bold mb-2">
                    Product Development and Launcing
                  </h3>
                  <p>
                    Dive into the product development process, from concept ideation and design to prototyping and testing. Learn how to build minimum viable products (MVPs), gather user feedback, iterate on your product or service, and refine your offering based on market validation.
                  </p>

                  <br />

                  <div className="p-6 lg:p-8 xl:p-10 rounded-xl xl:rounded-3xl bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack border border-flasWhite dark:border-flasBlack">
                    <h3 className="text-xl lg:text-2xl text-darkGray dark:text-pastelGrey font-bold mb-2">
                      Conclusion
                    </h3>
                    <p>
                      The convergence of AI and design heralds a new era of innovation and creativity, where human designers and intelligent machines collaborate to push the boundaries of what's possible. By embracing AI-powered tools and techniques, designers can unlock new levels of efficiency, creativity, and personalization, ultimately shaping a future where design is more accessible, inclusive, and impactful than ever before.
                    </p>
                    <br />
                    <p>
                      Join us as we embark on this exciting journey into the future of design, where AI evolves the landscape and opens up endless possibilities for innovation and creativity. Welcome to the new era of design powered by artificial intelligence.
                    </p>
                  </div>
                </div>
                <div className="meta-info grid md:grid-cols-2 gap-4">
                  <div className="tags flex flex-wrap items-center gap-4 text-sm">
                    <span>
                      Tags
                    </span>
                    <a href="\#" className="inline-flex transition-all duration-200 border border-black/5 dark:border-white/5 hover:border-white hover:bg-white dark:hover:bg-black dark:hover:text-pastelGrey px-6 py-2 rounded-3xl">
                      Design
                    </a>
                    <a href="\#" className="inline-flex transition-all duration-200 border border-black/5 dark:border-white/5 hover:border-white hover:bg-white dark:hover:bg-black dark:hover:text-pastelGrey px-6 py-2 rounded-3xl">
                      Artificial Intelligence
                    </a>
                  </div>
                  <div className="share flex flex-wrap items-center md:justify-end gap-4 *:transition-all *:bg-white dark:*:bg-white/5 *:text-darkGray dark:*:text-pastelGrey">
                    <a href="\#" className="px-5 leading-10 rounded-3xl font-medium dark:hover:bg-black dark:hover:text-pastelGrey">
                      <i className="fal fa-clone"></i>
                      Copy Link
                    </a>
                    <a href="\#" className="w-10 h-10 rounded-full flex-center shadow-sm dark:hover:bg-black dark:hover:text-pastelGrey">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="\#" className="w-10 h-10 rounded-full flex-center shadow-sm dark:hover:bg-black dark:hover:text-pastelGrey">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="\#" className="w-10 h-10 rounded-full flex-center shadow-sm dark:hover:bg-black dark:hover:text-pastelGrey">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <div className="comments">
                  <h3 className="text-xl lg:text-2xl text-darkGray dark:text-pastelGrey font-bold mb-4">
                    Comments (03)
                  </h3>
                  <ul className="comment-list space-y-4">
                    <li className="comment">
                      <div className="flex gap-4 author">
                        <div className="thumb">
                          <img src="/assets/blog/comment-author.png" className="rounded-full w-12 h-12 lg:w-16 lg:h-16" alt="Pablo Stanley" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-darkGray dark:text-pastelGrey">
                            Pablo Stanley
                          </h4>
                          <p className="text-regular">
                            Feb 16, 2025
                          </p>
                        </div>
                      </div>
                      <div className="description md:ml-20">

                        <p className="my-2">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation.
                        </p>
                        <p className="text-end">
                          <button className="font-semibold" data-twe-collapse-init="" data-twe-target="#reply_form1" aria-label="Reply Comment">
                            Reply
                          </button>
                        </p>
                        <form action="#" method="post" id="reply_form1" className="mt-2 !visible hidden" data-twe-collapse-item="">
                          <textarea name="replyComment" rows={5} className="w-full p-4 text-regular bg-white dark:bg-powerBlack border dark:border-white/20 rounded-lg outline-none resize-none"></textarea>
                          <div className="space-x-3 button-group text-end">
                            <button type="reset" className="px-4 py-1 text-regular border rounded-md dark:border-white/20" aria-label="Cancel" data-twe-collapse-init="" data-twe-target="#reply_form1">
                              Cancel
                            </button>
                            <button type="submit" className="px-4 py-1 text-regular border rounded-md bg-nobelGray dark:border-pastelGrey text-darkGray" aria-label="Reply Comment">
                              Reply
                            </button>
                          </div>
                        </form>
                      </div>
                      <ul className="ml-10 lg:ml-20 space-y-4">
                        <li className="comment">
                          <div className="flex gap-4 author">
                            <div className="thumb">
                              <img src="/assets/blog/comment-author3.png" className="rounded-full w-12 h-12 lg:w-16 lg:h-16" alt="Pedro Lima" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-darkGray dark:text-pastelGrey">
                                Pedro Lima
                              </h4>
                              <p className="text-regular">
                                Feb 16, 2025
                              </p>
                            </div>
                          </div>
                          <div className="description md:ml-20">

                            <p className="my-2">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation.
                            </p>
                            <p className="text-end">
                              <button className="font-semibold" data-twe-collapse-init="" data-twe-target="#reply_com1" aria-label="Reply Comment">
                                Reply
                              </button>
                            </p>
                            <form action="#" method="post" id="reply_com1" className="mt-2 !visible hidden" data-twe-collapse-item="">
                              <textarea name="replyComment" rows={5} className="w-full p-4 text-regular bg-white dark:bg-powerBlack border dark:border-white/20 rounded-lg outline-none resize-none"></textarea>
                              <div className="space-x-3 button-group text-end">
                                <button type="reset" className="px-4 py-1 text-regular border rounded-md dark:border-white/20" aria-label="Cancel" data-twe-collapse-init="" data-twe-target="#reply_com1">
                                  Cancel
                                </button>
                                <button type="submit" className="px-4 py-1 text-regular border rounded-md bg-nobelGray dark:border-pastelGrey text-darkGray" aria-label="Reply Comment">
                                  Reply
                                </button>
                              </div>
                            </form>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="comment">
                      <div className="flex gap-4 author">
                        <div className="thumb">
                          <img src="/assets/blog/comment-author2.png" className="rounded-full w-12 h-12 lg:w-16 lg:h-16" alt="Pablo Stanley" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-darkGray dark:text-pastelGrey">
                            Pablo Stanley
                          </h4>
                          <p className="text-regular">
                            Feb 16, 2025
                          </p>
                        </div>
                      </div>
                      <div className="description md:ml-20">
                        <p className="my-2">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation.
                        </p>
                        <p className="text-end">
                          <button className="font-semibold" data-twe-collapse-init="" data-twe-target="#reply_form2" aria-label="Reply Comment">
                            Reply
                          </button>
                        </p>
                        <form action="#" method="post" id="reply_form2" className="mt-2 !visible hidden" data-twe-collapse-item="">
                          <textarea name="replyComment" rows={5} className="w-full p-4 text-regular bg-white dark:bg-powerBlack border dark:border-white/20 rounded-lg outline-none resize-none"></textarea>
                          <div className="space-x-3 button-group text-end">
                            <button type="reset" className="px-4 py-1 text-regular border rounded-md dark:border-white/20" aria-label="Cancel" data-twe-collapse-init="" data-twe-target="#reply_form2">
                              Cancel
                            </button>
                            <button type="submit" className="px-4 py-1 text-regular border rounded-md bg-nobelGray dark:border-pastelGrey text-darkGray" aria-label="Reply Comment">
                              Reply
                            </button>
                          </div>
                        </form>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="add-comments">
                  <h3 className="text-xl lg:text-2xl text-darkGray dark:text-pastelGrey font-bold mb-4">
                    Add Your Comment
                  </h3>
                  <form action="#">
                    <div className="row grid sm:grid-cols-2 gap-3 sm:gap-6">
                      <div className="input-item">
                        <input type="text" className="rounded-xl" placeholder="Ex. Pedro Lima" required={true} />
                      </div>
                      <div className="input-item">
                        <input type="email" className="rounded-xl" placeholder="Ex. pedro_olima@gmail.com" />
                      </div>
                      <div className="input-item sm:col-span-2">
                        <textarea name="message" className="rounded-xl resize-none" rows={10} placeholder="Type your message..."></textarea>
                      </div>
                    </div>
                    <div className="text-end mt-6">
                      <button type="submit" className="text-regular text-darkGray font-semibold py-2 lg:py-3 px-7 lg:px-10 inline-flex transition-all duration-200 rounded-full dark:text-pastelGrey hover:bg-none hover:bg-darkGray hover:text-white border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                        Submit Comment
                      </button>
                    </div>
                  </form>
                </div>
                <div className="recent-posts">
                  <h3 className="text-xl lg:text-2xl text-darkGray dark:text-pastelGrey font-bold mb-2">
                    Related Posts
                  </h3>
                  <div className="grid sm:grid-cols-2 items-start gap-6 *:p-2 *:rounded-xl xl:*:rounded-3xl *:bg-gradient-to-b *:from-milkWhite *:to-seashell *:dark:from-metalBlack *:dark:to-oilBlack *:border *:border-gray-100 dark:*:border-white/5">

                    <div className="blog-item group">
                      <div className="thumbnail relative overflow-hidden rounded-xl">
                        <a href="blogs-details.html">
                          <img src="/assets/blog/img7.png" alt="5 Spanish Cities that will make you fall in Love" className="w-full transition-all duration-300 group-hover:scale-110" />
                        </a>
                        <div className="tags absolute right-4 top-4">
                          <a href="\#" className="bg-white/60 dark:bg-black/50 transition-all px-3 py-1 rounded-3xl text-darkGray dark:text-pastelGrey text-sm">
                            Design
                          </a>
                        </div>
                      </div>
                      <div className="description py-6 px-4 pb-4">
                        <h4 className="text-xl 2xl:text-2xl font-bold text-darkGray dark:text-pastelGrey mb-1">
                          <a href="blogs-details.html" className="inline bg-gradient-to-r from-current from-0% to-current to-100% bg-no-repeat bg-[length:0_1px] bg-[0_95%] ease-in-out duration-200 transition-[background-size] hover:underline">
                            5 Spanish Cities that will make you fall in Love
                          </a>
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
                          <a href="blogs-details.html" className="font-semibold text-base leading-none text-darkGray dark:text-pastelGrey flex items-center justify-between" aria-label="Read More">
                            Read More
                            <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="blog-item group">
                      <div className="thumbnail relative overflow-hidden rounded-xl">
                        <a href="blogs-details.html">
                          <img src="/assets/blog/img8.png" alt="These Are The 10 Best Restaurants in The World" className="w-full transition-all duration-300 group-hover:scale-110" />
                        </a>
                        <div className="tags absolute right-4 top-4">
                          <a href="\#" className="bg-white/60 dark:bg-black/50 transition-all px-3 py-1 rounded-3xl text-darkGray dark:text-pastelGrey text-sm">
                            Design
                          </a>
                        </div>
                      </div>
                      <div className="description py-6 px-4 pb-4">
                        <h4 className="text-xl 2xl:text-2xl font-bold text-darkGray dark:text-pastelGrey mb-1">
                          <a href="blogs-details.html" className="inline bg-gradient-to-r from-current from-0% to-current to-100% bg-no-repeat bg-[length:0_1px] bg-[0_95%] ease-in-out duration-200 transition-[background-size] hover:underline">
                            These Are The 10 Best Restaurants in The World
                          </a>
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
                          <a href="blogs-details.html" className="font-semibold text-base leading-none text-darkGray dark:text-pastelGrey flex items-center justify-between" aria-label="Read More">
                            Read More
                            <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
