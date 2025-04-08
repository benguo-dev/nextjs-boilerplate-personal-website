import { routing } from '@/libs/i18nNavigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

type IProjectDetailProps = {
  params: Promise<{ id: string; locale: string }>;
};

export function generateStaticParams() {
  return routing.locales
    .map(locale =>
      Array.from(Array.from({ length: 6 }).keys()).map(elt => ({
        id: `${elt}`,
        locale,
      })),
    )
    .flat(1);
}

export async function generateMetadata(props: IProjectDetailProps) {
  const { locale, id } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'ProjectsDetail',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description', { id }),
  };
}

export default async function ProjectDetail(props: IProjectDetailProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'ProjectsDetail',
  // });

  return (
    <>
      <div className="container space-y-12">
        <div className="summery space-y-12 xl:space-y-20 rounded-2xl p-4 md:p-6 xl:p-10 bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack border border-flasWhite dark:border-flasBlack">
          <div className="details grid md:grid-cols-3 gap-6 lg:gap-32">
            <div className="info space-y-4 col-span-2">
              <h2 className="font-bold text-3xl md:text-4xl xl:text-5xl text-darkGray dark:text-pastelGrey">
                Brand Identity Design
              </h2>
              <p className="lg:text-lg">
                Artificial Intelligence and Machine Learning represent powerful technologies that are revolutionizing the way we interact with machines, process information, and solve complex problems. As these technologies continue to advance.
              </p>
            </div>
            <div className="serving-area space-y-2">
              <h6>
                Service Area
              </h6>
              <ul className="list-disc ml-5 *:text-lg *:font-semibold *:text-darkGray dark:*:text-pastelGrey space-y-2">
                <li>
                  Product Strategy
                </li>
                <li>
                  Product Design
                </li>
                <li>
                  User Experience
                </li>
                <li>
                  Design
                </li>
              </ul>
            </div>
          </div>
          <ul className="meta sm:flex items-center *:flex-auto max-sm:space-y-4">
            <li>
              <p className="text-sm text-nobelGray">
                CLIENT NAME
              </p>
              <h6 className="text-darkGray dark:text-pastelGrey text-lg">
                XYZ Enterprises
              </h6>
            </li>
            <li>
              <p className="text-sm text-nobelGray">
                TIMELINE
              </p>
              <h6 className="text-darkGray dark:text-pastelGrey text-lg">
                Jan 2023 - May 2023
              </h6>
            </li>
            <li>
              <a href="\#" className="border border-darkGray dark:border-pastelGrey flex items-center justify-center gap-2 text-darkGray dark:text-pastelGrey rounded-4xl font-semibold py-3 transition-all duration-200 hover:bg-darkGray hover:text-white dark:hover:bg-pastelGrey dark:hover:text-darkGray">
                Live Demo
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5955 6H0.25C0.111929 6 0 6.11193 0 6.25V7.75C0 7.88807 0.111929 8 0.25 8H15.5955C15.7813 8 15.8997 8.19333 15.8083 8.35517C15.2155 9.40517 14.0746 11.2034 14.0035 13.7498C13.9996 13.8878 14.1119 14 14.25 14H15.5764C15.8209 14 16.0284 13.8228 16.0765 13.5832C16.6149 10.8994 17.9604 8.6482 19.7374 7.20503C19.8668 7.09996 19.8668 6.90004 19.7374 6.79497C17.9604 5.3518 16.6149 3.10055 16.0765 0.416824C16.0284 0.17718 15.8209 0 15.5764 0H14.25C14.1119 0 13.9996 0.112221 14.0035 0.250238C14.0746 2.79663 15.2155 4.59483 15.8083 5.64483C15.8997 5.80667 15.7813 6 15.5955 6Z" fill="currentcolor"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="thumbnail rounded-xl lg:rounded-2xl overflow-hidden">
          <img src="/assets/projects/img1.png" alt="Brand Identity Design" className="min-h-72 object-cover object-center w-full" />
        </div>

        <div className="blog-content space-y-6 group">
          <div>
            <h3 className="text-2xl text-darkGray dark:text-pastelGrey font-bold mb-4">
              Introduction
            </h3>
            <p>
              The project challenge encapsulates the primary obstacle or problem that the project aims to address. It outlines the specific issue or pain point that the team must overcome in order to achieve the project's objectives. Identifying and clearly articulating the project challenge is essential for guiding the project's direction and ensuring that efforts are focused on the most critical areas.
            </p>
          </div>
          <div className="p-6 lg:p-8 xl:p-10 rounded-xl xl:rounded-2xl bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack border border-flasWhite dark:border-flasBlack">
            <h3 className="text-2xl text-darkGray dark:text-pastelGrey font-bold mb-4">
              Goal
            </h3>
            <p>
              The project challenge encapsulates the primary obstacle or problem that the project aims to address. It outlines the specific issue or pain point that the team must overcome in order to achieve the project's objectives. Identifying and clearly articulating the project challenge is essential for guiding the project's direction and ensuring that efforts are focused on the most critical areas.
            </p>
          </div>
          <div>
            <h3 className="text-2xl text-darkGray dark:text-pastelGrey font-bold mb-4">
              Challenge
            </h3>
            <p>
              The project challenge encapsulates the primary obstacle or problem that the project aims to address. It outlines the specific issue or pain point that the team must overcome in order to achieve the project's objectives.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 *:rounded-xl xl:*:rounded-3xl">
            <img src="/assets/projects/img8.png" alt="" />
            <img src="/assets/projects/img9.png" alt="" />
          </div>
          <div>
            <h3 className="text-2xl text-darkGray dark:text-pastelGrey font-bold mb-4">
              Outcome
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 *:p-6 lg:*:p-8 xl:*:p-10 *:rounded-xl xl:*:rounded-2xl *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack *:border *:border-flasWhite dark:*:border-flasBlack">
              <div>
                <h2 className="text-darkGray dark:text-pastelGrey font-bold text-3xl md:text-4xl xl:text-5xl mb-3">
                  25%
                </h2>
                <h4 className="text-darkGray dark:text-pastelGrey font-semibold mb-3 text-xl ">
                  Increased in Customer Engagement
                </h4>
                <p>
                  Spreading positive word-of-mouth and helping us attract new customers organically.
                </p>
              </div>
              <div>
                <h2 className="text-darkGray dark:text-pastelGrey font-bold text-3xl md:text-4xl xl:text-5xl mb-3">
                  14M
                </h2>
                <h4 className="text-darkGray dark:text-pastelGrey font-semibold mb-3 text-xl ">
                  Reached Profit Margin
                </h4>
                <p>
                  By implementing these strategies company achieve long-term success in business environment.
                </p>
              </div>
            </div>
          </div>
          <blockquote className="p-6 lg:p-8 xl:p-10 rounded-xl xl:rounded-2xl sm:flex sm:gap-6 md:gap-8 lg:gap-10 max-sm:space-y-8 bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack border border-flasWhite dark:border-flasBlack">
            <div className="image text-center sm:flex-[0_0_18rem] md:flex-[0_0_20rem]">
              <img src="/assets/projects/quote-author.png" alt="" className="rounded-xl xl:rounded-2xl" />
            </div>
            <div className="text-content space-y-4 lg:space-y-10 flex-auto">
              <svg className="w-12 text-darkGray dark:text-nobelGray" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 42L22 24V6H4V24H10L4 42H14Z" fill="currentcolor"></path>
                <path d="M36 42L44 24V6H26V24H32L26 42H36Z" fill="currentcolor"></path>
              </svg>
              <p className="max-w-screen-md lg:text-lg">
                <q>I've been consistently impressed by the level of customer engagement demonstrated by XYZ Company. Alex initiate a proactive approach to addressing customer needs and concerns is truly commendable.</q>
              </p>

              <div className="quote-footer">
                <h6 className="text-lg font-bold text-darkGray dark:text-pastelGrey">
                  Brian Adams
                </h6>
                <h6 className="text-nobelGray dark:text-slateGray text-sm mt-1">
                  CEO, XYZ Enterprise
                </h6>
              </div>
            </div>
          </blockquote>
          <div>
            <h3 className="text-2xl text-darkGray dark:text-pastelGrey font-bold mb-4">
              Conclusion
            </h3>
            <p className="max-w-screen-lg">
              Artificial Intelligence and Machine Learning represent powerful technologies that are revolutionizing the way we interact with machines, process information, and solve complex problems. As these technologies continue to advance, they hold the potential to drive unprecedented levels of innovation, efficiency, and progress across various industries and sectors.
            </p>
          </div>

        </div>

        <div className="button-groups text-center mt-10 lg:mt-18 *:transition-all *:duration-200 *:border *:border-flasWhite *:dark:border-flasBlack *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack">
          <Link href="/projects/2" className="text-regular text-darkGray font-semibold py-2 lg:py-3 px-7 lg:px-10 inline-flex transition-all duration-200 rounded-full dark:text-pastelGrey hover:bg-none hover:bg-darkGray hover:text-white">
            Next Project
          </Link>
        </div>
      </div>
    </>
  );
};
