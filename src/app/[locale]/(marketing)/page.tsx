import { Skill } from '@/components/Skill';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return (
    <>
      <div className="container mx-auto">
        <div className="md:grid md:grid-cols-2 xl:grid-cols-3 gap-6 justify-center">
          <div className="space-y-6 *:rounded-2xl max-md:*:p-4 *:p-6 xl:*:px-10 *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:bg-gradient-to-b *:border *:border-flasWhite dark:*:border-flasBlack">
            <div className="widget transition duration-700 ease-in-out hover:scale-105">
              <Image
                src="/assets/images/user.webp"
                alt="bentoMan - Personal portfolio resume template"
                className="rounded-2xl w-full bg-[#F5F7F9] dark:bg-[#222428]"
                width="300"
                height="300"
              />
            </div>
            <div className="widget">
              <div className="flex items-center justify-between">
                <p className="text-regular font-light">
                  Hello there. I am
                </p>
                <span className="px-5 py-2 rounded-3xl text-sm text-powerBlack dark:text-pastelGrey inline-flex items-center gap-1.5 before:inline-block before:w-2 before:h-2 before:bg-green-600 before:rounded-full border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                  Available for hire
                </span>
              </div>
              <div className="name text-powerBlack dark:text-pastelGrey font-bold text-4xl leading-tight">
                Alex Hales
              </div>
              <p className="my-3 line-clamp-2">
                As a
                <b className="text-darkGray dark:text-pastelGrey font-medium">product designer</b>
                , I specialize in creating magical visual identities for
                <b className="text-darkGray dark:text-pastelGrey font-medium">digital products</b>
                .
              </p>
              {/* <h6 className="font-semibold text-lg text-darkGray dark:text-pastelGrey group mt-5">
                <a href="about.html" className="flex items-center justify-between">
                  About Myself
                  <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </a>
              </h6> */}
            </div>
            <div className="widget *:py-3 divide-y divide-flasWhite dark:divide-flasBlack mb-6">
              <div className="social_media_item first:pt-0 last:pb-0">
                <a href="#/" className="flex gap-3 items-center group">
                  <div className="w-12 h-12 rounded-full grid place-content-center text-powerBlack dark:text-pastelGrey border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                    <i className="fab fa-instagram"></i>
                  </div>
                  <div>
                    <h6 className="font-semibold text-lg text-powerBlack dark:text-pastelGrey">
                      Instagram
                    </h6>
                    <p className="leading-none text-sm">
                      50.8k followers
                    </p>
                  </div>
                </a>
              </div>
              <div className="social_media_item first:pt-0 last:pb-0">
                <a href="#/" className="flex gap-3 items-center group">
                  <div className="w-12 h-12 rounded-full grid place-content-center text-powerBlack dark:text-pastelGrey border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                    <i className="fab fa-youtube"></i>
                  </div>
                  <div>
                    <h6 className="font-semibold text-lg text-powerBlack dark:text-pastelGrey">
                      Youtube
                    </h6>
                    <p className="leading-none text-sm">
                      25k subscribers
                    </p>
                  </div>
                </a>
              </div>
              <div className="social_media_item first:pt-0 last:pb-0">
                <a href="#/" className="flex gap-3 items-center group">
                  <div className="w-12 h-12 rounded-full grid place-content-center text-powerBlack dark:text-pastelGrey border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                    <i className="fab fa-twitter"></i>
                  </div>
                  <div>
                    <h6 className="font-semibold text-lg text-powerBlack dark:text-pastelGrey">
                      Twitter
                    </h6>
                    <p className="leading-none text-sm">
                      3.5k followers
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="xl:col-span-2 space-y-6 *:rounded-2xl max-md:*:p-4 *:p-6 xl:*:px-10 *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack *:border *:border-flasWhite dark:*:border-flasBlack">
            <div className="experience">
              <h3 className="text-powerBlack dark:text-pastelGrey font-semibold text-2xl xl:text-3xl mb-6">
                My Experience
              </h3>
              <ul className="space-y-15">
                <li>
                  <div className="flex max-sm:justify-center max-sm:text-center flex-wrap gap-6">
                    <div className="icon w-18 h-18 flex justify-center items-center rounded-full max-sm:mb-4 border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                      <img src="/assets/images/envato-icon.svg" alt="Envato" />
                    </div>
                    <div className="sm:flex-1">
                      <h4 className="font-bold text-lg text-metalBlack dark:text-pastelGrey mb-2">
                        Envato
                      </h4>
                      <h5 className="text-smokeGray dark:text-regentGray font-medium text-base mb-1">
                        UI/UX Designer
                      </h5>
                      <p className="text-nobelGray dark:text-slateGray text-sm">
                        2022 - Present
                      </p>
                      <p className="mt-4">
                        My role as a UI/UX Designer is crucial in creating digital products that are not only visually appealing but also intuitive, user-friendly, and aligned with the needs and preferences.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex max-sm:justify-center max-sm:text-center flex-wrap gap-6 ">
                    <div className="icon w-18 h-18 flex justify-center items-center rounded-full flex-center max-sm:mb-4 border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                      <img src="/assets/images/figma.svg" alt="Figma" />
                    </div>
                    <div className="sm:flex-1">
                      <h4 className="font-bold text-lg text-metalBlack dark:text-pastelGrey mb-2">
                        Figma
                      </h4>
                      <h5 className="text-smokeGray dark:text-regentGray font-medium text-base mb-1">
                        UI Designer
                      </h5>
                      <p className="text-nobelGray dark:text-slateGray text-sm">
                        2018 - 2022
                      </p>
                      <p className="mt-4">
                        My role as a UI/UX Designer is crucial in creating digital products that are not only visually appealing but also intuitive, user-friendly, and aligned with the needs and preferences.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex max-sm:justify-center max-sm:text-center flex-wrap gap-6">
                    <div className="icon w-18 h-18 flex justify-center items-center rounded-full max-sm:mb-4 border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                      <img src="/assets/images/envato-icon.svg" alt="Envato" />
                    </div>
                    <div className="sm:flex-1">
                      <h4 className="font-bold text-lg text-metalBlack dark:text-pastelGrey mb-2">
                        Envato
                      </h4>
                      <h5 className="text-smokeGray dark:text-regentGray font-medium text-base mb-1">
                        UI/UX Designer
                      </h5>
                      <p className="text-nobelGray dark:text-slateGray text-sm">
                        2022 - Present
                      </p>
                      <p className="mt-4">
                        My role as a UI/UX Designer is crucial in creating digital products that are not only visually appealing but also intuitive, user-friendly, and aligned with the needs and preferences.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex max-sm:justify-center max-sm:text-center flex-wrap gap-6">
                    <div className="icon w-18 h-18 flex justify-center items-center rounded-full max-sm:mb-4 border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                      <img src="/assets/images/envato-icon.svg" alt="Envato" />
                    </div>
                    <div className="sm:flex-1">
                      <h4 className="font-bold text-lg text-metalBlack dark:text-pastelGrey mb-2">
                        Envato
                      </h4>
                      <h5 className="text-smokeGray dark:text-regentGray font-medium text-base mb-1">
                        UI/UX Designer
                      </h5>
                      <p className="text-nobelGray dark:text-slateGray text-sm">
                        2022 - Present
                      </p>
                      <p className="mt-4">
                        My role as a UI/UX Designer is crucial in creating digital products that are not only visually appealing but also intuitive, user-friendly, and aligned with the needs and preferences.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="skills">
              <h3 className="text-powerBlack dark:text-pastelGrey font-semibold text-2xl xl:text-3xl mb-6">
                My Skills
              </h3>
              <div className="xl:col-span-2 space-y-6 *:rounded-2xl max-md:*:p-4 *:p-6 xl:*:px-10 *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack *:border *:border-flasWhite dark:*:border-flasBlack">
                <Skill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
