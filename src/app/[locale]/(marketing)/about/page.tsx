import { MySwiper } from '@/components/MySwiper';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type IAboutProps = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata(props: IAboutProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function About(props: IAboutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'About',
  // });

  return (
    <>
      <div className="container space-y-6">
        <div className="grid items-center sm:grid-cols-5 gap-8 sm:gap-6 lg:gap-10 rounded-2xl p-4 lg:p-6 xl:p-10 bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack border border-gray-100 dark:border-white/5 aos-init aos-animate" data-aos="fade-up">

          <div className="thumbnail sm:order-last sm:col-span-2 text-center sm:text-end">
            <img src="/assets/images/user.webp" className="rounded-lg bg-pastelGrey dark:bg-oilBlack" alt="Alex Hales" />
          </div>

          <div className="sm:order-first sm:col-span-3">
            <h1 className="text-powerBlack dark:text-pastelGrey font-bold text-4xl xl:text-5xl">
              Alex Hales
            </h1>
            <h2 className="text-smokeGray dark:text-regentGray font-medium text-lg xl:text-2xl mt-1.5">
              Versatile Designer
            </h2>

            <p className="mt-2 sm:mt-4 lg:mt-6 lg:text-lg max-w-screen-sm">
              A creative and versatile digital designer with over twelve years of experience in
              {' '}
              <span className="px-2 inline-block text-darkGray dark:text-pastelGrey rounded-md border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">designing and developing</span>
              {' '}
              engaging digital media for various platforms and audiences. Lorem ipsum dolor sit amet consectetur.
            </p>

            <ul className="flex items-center mt-4 lg:mt-6 -mx-3 *:flex *:items-center *:mx-3 *:text-regular lg:*:text-lg">
              <li className="text-darkGray dark:text-pastelGrey">
                <i className="mr-2 fal fa-check-double"></i>
                Available for work
              </li>
              <li className="text-darkGray dark:text-pastelGrey">
                <i className="mr-2 fal fa-check-double"></i>
                Full Time Job
              </li>
            </ul>

            <div className="button-groups mt-4 lg:mt-6 xl:mt-8 space-x-2 lg:space-x-4 *:transition-all *:duration-200 *:border *:border-flasWhite *:dark:border-flasBlack *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack">
              <a href="contact.html" className="text-regular text-darkGray font-semibold py-2 lg:py-3 px-7 lg:px-10 inline-flex transition-all duration-200 rounded-full dark:text-pastelGrey hover:bg-none hover:bg-darkGray hover:text-white">
                Get in Touch
              </a>
              <a href="cv.pdf" download="" className="text-regular text-darkGray font-semibold py-2 lg:py-3 px-7 lg:px-10 inline-flex transition-all duration-200 rounded-full dark:text-pastelGrey hover:bg-none hover:bg-darkGray hover:text-white">
                My Resume
              </a>
            </div>
          </div>

        </div>
        <div className="grid md:grid-cols-2 gap-6 *:rounded-2xl *:p-4 lg:p*:-6 xl:*:p-10 *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack *:border *:border-gray-100 dark:*:border-white/5 aos-init aos-animate" data-aos="fade-up">
          <div className="experience">
            <h3 className="text-powerBlack dark:text-pastelGrey font-semibold text-2xl xl:text-3xl mb-6">
              My Experience
            </h3>
            <ul className="space-y-15">
              <li>
                <div className="flex max-sm:justify-center max-sm:text-center flex-wrap gap-6">
                  <div className="icon w-18 h-18 flex justify-center items-center rounded-full flex justify-center items-center max-sm:mb-4 border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
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
                  <div className="icon w-18 h-18 flex justify-center items-center rounded-full flex justify-center items-center max-sm:mb-4 border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
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
            </ul>
          </div>

          <div className="education">
            <h3 className="text-powerBlack dark:text-pastelGrey font-semibold text-2xl xl:text-3xl mb-6">
              My Education
            </h3>

            <ul className="space-y-15">
              <li>
                <div className="sm:flex flex-wrap gap-6 ">
                  <div className="icon w-18 h-18 flex justify-center items-center rounded-full flex justify-center items-center max-sm:mb-4 border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                    <img src="/assets/images/google.svg" alt="Google" />
                  </div>
                  <div className="sm:flex-1">
                    <h4 className="font-bold text-lg text-metalBlack dark:text-pastelGrey mb-2">
                      Google Design School
                    </h4>
                    <h5 className="text-smokeGray dark:text-regentGray font-medium text-base mb-1">
                      Master in Interaction Design
                    </h5>
                    <p className="text-nobelGray dark:text-slateGray text-sm">
                      2016 - 2018
                    </p>
                    <p className="mt-4">
                      Examination of the relationship between humans and computers, focusing on usability, accessibility, and cognitive psychology principles.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="sm:flex flex-wrap gap-6 ">
                  <div className="icon w-18 h-18 flex justify-center items-center rounded-full flex justify-center items-center max-sm:mb-4 border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                    <img src="/assets/images/evernote.svg" alt="Figma" />
                  </div>
                  <div className="sm:flex-1">
                    <h4 className="font-bold text-lg text-metalBlack dark:text-pastelGrey mb-2">
                      Design School of Evernote
                    </h4>
                    <h5 className="text-smokeGray dark:text-regentGray font-medium text-base mb-1">
                      Bachelor in Design
                    </h5>
                    <p className="text-nobelGray dark:text-slateGray text-sm">
                      2011 - 2015
                    </p>
                    <p className="mt-4">
                      Examination of the relationship between humans and computers, focusing on usability, accessibility, and cognitive psychology principles.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="facts_awards grid lg:grid-cols-2 gap-6 max-xl:items-start *:rounded-2xl *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack *:border *:border-gray-100 dark:*:border-white/5">
          <div className="funfacts grid grid-cols-2 *:py-10 lg:*:py-15 divide-y divide-x divide-black/5 dark:divide-white/5 *:grid *:place-content-center [&>*:nth-child(2)]:!border-r-0 [&>*:nth-child(3)]:!border-b-0">
            <div className="item text-center">
              <div className="number font-semibold text-4xl lg:text-5xl 2xl:text-6xl text-darkGray dark:text-pastelGrey mb-2">
                12
              </div>
              <p className="text-regular md:text-lg text-smokeGray">
                Years of Experience
              </p>
            </div>
            <div className="item text-center">
              <div className="number font-semibold text-4xl lg:text-5xl 2xl:text-6xl text-darkGray dark:text-pastelGrey mb-2">
                1.5k
              </div>
              <p className="text-regular md:text-lg text-smokeGray">
                Projects Completed
              </p>
            </div>
            <div className="item text-center odd">
              <div className="number font-semibold text-4xl lg:text-5xl 2xl:text-6xl text-darkGray dark:text-pastelGrey mb-2">
                950
              </div>
              <p className="text-regular md:text-lg text-smokeGray">
                Happy Customers
              </p>
            </div>
            <div className="item text-center">
              <div className="number font-semibold text-4xl lg:text-5xl 2xl:text-6xl text-darkGray dark:text-pastelGrey mb-2">
                14
              </div>
              <p className="text-regular md:text-lg text-smokeGray">
                Awards Won
              </p>
            </div>
          </div>
          <div className="awards grid grid-cols-2 *:py-10 xl:*:py-15 divide-y divide-x divide-black/5 dark:divide-white/5 [&>*:nth-child(2)]:!border-r-0 [&>*:nth-child(3)]:!border-b-0">
            <div className="item text-center">
              <div className="icon w-16 h-16 rounded-full flex justify-center items-center mx-auto mb-6 border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                <img src="/assets/images/award-icon1.svg" alt="" />
              </div>
              <p className="text-regular lg:text-lg text-smokeGray">
                AWWWARDS
              </p>
              <h6 className="font-semibold text-xl lg:text-2xl xl:text-3xl text-darkGray dark:text-pastelGrey">
                2 Awards
              </h6>
            </div>
            <div className="item text-center">
              <div className="icon w-16 h-16 rounded-full flex justify-center items-center mx-auto mb-6 border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                <img src="/assets/images/award-icon2.svg" alt="" />
              </div>
              <p className="text-regular lg:text-lg text-smokeGray">
                FWA of the Day
              </p>
              <h6 className="font-semibold text-xl lg:text-2xl xl:text-3xl text-darkGray dark:text-pastelGrey">
                3 Awards
              </h6>
            </div>
            <div className="item text-center">
              <div className="icon w-16 h-16 rounded-full flex justify-center items-center mx-auto mb-6 border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                <img src="/assets/images/award-icon3.svg" alt="" />
              </div>
              <p className="text-regular lg:text-lg text-smokeGray">
                Best of Behance
              </p>
              <h6 className="font-semibold text-xl lg:text-2xl xl:text-3xl text-darkGray dark:text-pastelGrey">
                5 Awards
              </h6>
            </div>
            <div className="item text-center">
              <div className="icon w-16 h-16 rounded-full flex justify-center items-center mx-auto mb-6 border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                <img src="/assets/images/award-icon4.svg" alt="" />
              </div>
              <p className="text-regular lg:text-lg text-smokeGray">
                Product of the Day
              </p>
              <h6 className="font-semibold text-xl lg:text-2xl xl:text-3xl text-darkGray dark:text-pastelGrey">
                4 Awards
              </h6>
            </div>
          </div>
        </div>

        <div className="services overflow-hidden rounded-2xl p-4 lg:p-6 xl:p-10 bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack border border-gray-100 dark:border-white/5 aos-init aos-animate" data-aos="fade-up">
          <h3 className="text-powerBlack dark:text-pastelGrey font-semibold text-2xl xl:text-3xl mb-6">
            My Services
          </h3>

          <ul className="divide-y dark:divide-white/5 *:py-6 sm:*:grid *:gap-4 sm:*:grid-cols-3 *:items-start *:relative max-sm:*:space-y-4">
            <li className="group first:pt-0 last:pb-0">
              <div className="name flex items-center gap-5">
                <div className="icon">
                  <svg className="w-8 text-smokeGray group-hover:text-darkGray dark:group-hover:text-pastelGrey transition-all" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0002 16.3335C15.4135 16.3335 14.8268 16.1868 14.2935 15.9068L5.6135 11.2268C4.82683 10.8001 4.3335 9.96013 4.3335 9.0268C4.3335 8.09346 4.82683 7.25346 5.6135 6.8268L14.2935 2.1468C15.3602 1.57346 16.6402 1.57346 17.6935 2.1468L26.3735 6.8268C27.1602 7.25346 27.6535 8.09346 27.6535 9.0268C27.6535 9.96013 27.1602 10.8001 26.3735 11.2268L17.6935 15.9068C17.1735 16.2001 16.5868 16.3335 16.0002 16.3335ZM16.0002 3.7068C15.7468 3.7068 15.4802 3.77346 15.2402 3.9068L6.5735 8.57346C6.34683 8.69346 6.3335 8.9468 6.3335 9.0268C6.3335 9.1068 6.34683 9.36013 6.5735 9.4668L15.2535 14.1468C15.7335 14.4001 16.2802 14.4001 16.7602 14.1468L25.4402 9.4668C25.6535 9.3468 25.6802 9.09346 25.6802 9.0268C25.6802 8.9468 25.6668 8.69346 25.4402 8.5868L16.7602 3.9068C16.5202 3.77346 16.2535 3.7068 16.0002 3.7068Z" fill="currentcolor"></path>
                    <path d="M13.0398 30.2932C12.6665 30.2932 12.2798 30.1999 11.9332 30.0265L3.85317 25.9999C2.5065 25.3199 1.6665 23.9599 1.6665 22.4532V14.8265C1.6665 13.9599 2.1065 13.1732 2.83984 12.7199C3.5865 12.2665 4.47984 12.2265 5.25317 12.6132L13.3332 16.6399C14.6798 17.3199 15.5198 18.6665 15.5198 20.1865V27.8132C15.5198 28.6799 15.0798 29.4665 14.3465 29.9199C13.9465 30.1732 13.4932 30.2932 13.0398 30.2932ZM4.1465 14.3465C4.03984 14.3465 3.9465 14.3865 3.89317 14.4132C3.81317 14.4665 3.6665 14.5865 3.6665 14.8265V22.4532C3.6665 23.1999 4.07984 23.8799 4.7465 24.2132L12.8132 28.2532C13.0265 28.3599 13.1998 28.2799 13.2798 28.2399C13.3598 28.1865 13.5065 28.0665 13.5065 27.8265V20.1999C13.5065 19.4532 13.0932 18.7732 12.4265 18.4399L4.35984 14.3999C4.27984 14.3599 4.21317 14.3465 4.1465 14.3465Z" fill="currentcolor"></path>
                    <path d="M18.96 30.2933C18.5066 30.2933 18.0533 30.1733 17.6533 29.92C16.92 29.4667 16.48 28.68 16.48 27.8133V20.1867C16.48 18.68 17.32 17.32 18.6666 16.64L26.7333 12.6C27.5066 12.2133 28.4133 12.2533 29.1466 12.7067C29.88 13.16 30.32 13.9467 30.32 14.8133V22.44C30.32 23.9467 29.48 25.3067 28.1333 25.9867L20.0666 30.0267C19.72 30.2133 19.3333 30.2933 18.96 30.2933ZM27.8533 14.3467C27.7866 14.3467 27.72 14.36 27.64 14.4L19.5733 18.44C18.9066 18.7733 18.4933 19.44 18.4933 20.2V27.8267C18.4933 28.0667 18.64 28.1867 18.72 28.24C18.8 28.2933 18.9733 28.36 19.1866 28.2533L27.2533 24.2133C27.92 23.88 28.3333 23.2 28.3333 22.4533V14.8267C28.3333 14.5867 28.1866 14.4667 28.1066 14.4133C28.0533 14.3867 27.96 14.3467 27.8533 14.3467Z" fill="currentcolor"></path>
                  </svg>
                </div>
                <h4 className="text-smokeGray dark:text-regentGray group-hover:text-darkGray dark:group-hover:text-pastelGrey font-bold text-xl transition-all">
                  Product Design
                </h4>
              </div>
              <div className="description col-span-2 md:flex items-start">
                <p className="flex-[0_0_25rem] lg:flex-[0_0_30rem] xl:flex-[0_0_33rem] group-hover:text-darkGray dark:group-hover:text-pastelGrey transition-all">
                  The creation and development of physical or digital products that meet the needs and preferences of users while aligning with business objectives.
                </p>

                <a href="\#" className="stretched-link ml-auto max-md:hidden group-hover:text-darkGray dark:group-hover:text-pastelGrey" aria-label="Go to Service page">
                  <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
              </div>
            </li>
            <li className="group first:pt-0 last:pb-0">
              <div className="name flex items-center gap-5">
                <div className="icon">
                  <svg className="w-8 text-smokeGray group-hover:text-darkGray dark:group-hover:text-pastelGrey transition-all" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9065 24.4934C13.7065 24.4934 13.5199 24.4401 13.3465 24.3201C13.0665 24.1334 12.9065 23.8267 12.9065 23.4934C12.9065 23.2934 12.8932 23.0801 12.8665 22.8667C12.7465 21.9201 12.3199 21.0934 11.5999 20.3734C10.8799 19.6534 9.98655 19.2001 9.02655 19.0801C8.86655 19.0667 8.63988 19.0534 8.42655 19.0667C8.07988 19.0934 7.75988 18.9467 7.55988 18.6667C7.35988 18.4001 7.30655 18.0401 7.41321 17.7201C7.61321 17.1734 7.90655 16.6801 8.25321 16.2801L10.3065 13.6934C13.8399 9.28006 20.9999 3.97339 26.2399 1.86673C27.3599 1.44006 28.5332 1.69339 29.3465 2.49339C30.1865 3.33339 30.4399 4.53339 29.9999 5.62672C27.8932 10.8801 22.5999 18.0267 18.1865 21.5601L15.5599 23.6667C15.0665 24.0267 14.6665 24.2534 14.2665 24.4134C14.1599 24.4667 14.0265 24.4934 13.9065 24.4934ZM10.0532 17.2534C11.1732 17.5467 12.1732 18.1334 13.0132 18.9734C13.8532 19.8001 14.4132 20.7601 14.6932 21.8267L16.9465 20.0134C21.1332 16.6667 26.1599 9.88006 28.1465 4.89339C28.3465 4.40006 28.0665 4.05339 27.9332 3.93339C27.8399 3.84006 27.4932 3.54672 26.9599 3.74672C21.9999 5.74673 15.2132 10.7734 11.8532 14.9601L10.0532 17.2534Z" fill="currentcolor"></path>
                    <path d="M5.44015 30.3336C4.44015 30.3336 3.48015 29.9336 2.76015 29.2136C1.93348 28.3869 1.53348 27.2402 1.66681 26.0669L2.02681 22.7869C2.37348 19.5336 5.04015 17.1202 8.34681 17.0536C8.60015 17.0402 8.93348 17.0536 9.24015 17.0802C10.6935 17.2669 11.9868 17.9202 13.0268 18.9602C14.0535 19.9869 14.6668 21.2136 14.8535 22.5869C14.8935 22.8802 14.9201 23.2002 14.9201 23.4802C14.9201 25.2402 14.2401 26.8802 13.0135 28.1202C11.9868 29.1336 10.6668 29.7602 9.17348 29.9469L5.88015 30.3069C5.73348 30.3202 5.58681 30.3336 5.44015 30.3336ZM8.60015 19.0669C8.54681 19.0669 8.48015 19.0669 8.42681 19.0669C6.41348 19.1069 4.28015 20.4802 4.01348 23.0136L3.65348 26.2936C3.58681 26.8536 3.78681 27.4002 4.17348 27.8002C4.56015 28.1869 5.10681 28.3869 5.65348 28.3202L8.93348 27.9602C9.96015 27.8269 10.8801 27.4002 11.5735 26.7069C12.4268 25.8536 12.9068 24.7069 12.9068 23.4802C12.9068 23.2802 12.8935 23.0669 12.8668 22.8536C12.7468 21.9069 12.3201 21.0802 11.6001 20.3602C10.8801 19.6402 9.98681 19.1869 9.02681 19.0669C8.92015 19.0669 8.76015 19.0669 8.60015 19.0669Z" fill="currentcolor"></path>
                    <path d="M18.9868 20.2935C18.4402 20.2935 17.9868 19.8401 17.9868 19.2935C17.9868 16.3601 15.6002 13.9868 12.6802 13.9868C12.1335 13.9868 11.6802 13.5335 11.6802 12.9868C11.6802 12.4401 12.1202 11.9868 12.6668 11.9868C16.6935 11.9868 19.9735 15.2668 19.9735 19.2935C19.9868 19.8535 19.5335 20.2935 18.9868 20.2935Z" fill="currentcolor"></path>
                    <path d="M20.9069 30.3069C19.6669 30.3069 18.4269 29.7202 17.2402 28.5335C16.8535 28.1469 16.8535 27.5069 17.2402 27.1202C17.6269 26.7335 18.2669 26.7335 18.6535 27.1202C20.2269 28.6935 21.5735 28.6935 23.1469 27.1202L27.0935 23.1735C28.6802 21.5869 28.6802 20.2402 27.0935 18.6669L26.1069 17.6935C25.7202 17.3069 25.7069 16.6669 26.0935 16.2802C26.4802 15.8802 27.1202 15.8802 27.5069 16.2669L28.4935 17.2402C30.8669 19.6135 30.8669 22.2135 28.4935 24.5869L24.5469 28.5335C23.3869 29.7069 22.1469 30.3069 20.9069 30.3069Z" fill="currentcolor"></path>
                    <path d="M4.14684 15.0135C3.89351 15.0135 3.62684 14.9202 3.44018 14.7202C1.09351 12.3602 1.09351 9.74684 3.44018 7.38684L7.38684 3.44018C9.73351 1.09351 12.3735 1.09351 14.7202 3.44018L15.7068 4.42684C16.0935 4.81351 16.0935 5.45351 15.7068 5.84018C15.3202 6.22684 14.6802 6.22684 14.2935 5.84018L13.2935 4.85351C11.7202 3.28018 10.3602 3.28018 8.80018 4.85351L4.85351 8.80018C3.28018 10.3868 3.28018 11.7335 4.85351 13.3202C5.24018 13.7068 5.24018 14.3468 4.85351 14.7335C4.65351 14.9202 4.40018 15.0135 4.14684 15.0135Z" fill="currentcolor"></path>
                    <path d="M10.0665 11.0667C9.81316 11.0667 9.55982 10.9734 9.35982 10.7734C8.97316 10.3867 8.97316 9.74672 9.35982 9.36005L14.2932 4.42672C14.6798 4.04005 15.3198 4.04005 15.7065 4.42672C16.0932 4.81339 16.0932 5.45339 15.7065 5.84005L10.7732 10.7734C10.5732 10.9734 10.3198 11.0667 10.0665 11.0667Z" fill="currentcolor"></path>
                    <path d="M22.88 21.9067C22.6266 21.9067 22.3733 21.8134 22.1733 21.6134C21.7866 21.2267 21.7866 20.5867 22.1733 20.2L26.12 16.2534C26.5066 15.8667 27.1466 15.8667 27.5333 16.2534C27.92 16.64 27.92 17.28 27.5333 17.6667L23.5866 21.6134C23.4 21.8134 23.1466 21.9067 22.88 21.9067Z" fill="currentcolor"></path>
                  </svg>
                </div>
                <h4 className="text-smokeGray dark:text-regentGray group-hover:text-darkGray dark:group-hover:text-pastelGrey font-bold text-xl transition-all">
                  Graphics Design
                </h4>
              </div>
              <div className="description col-span-2 md:flex items-start">
                <p className="flex-[0_0_25rem] lg:flex-[0_0_30rem] xl:flex-[0_0_33rem] group-hover:text-darkGray dark:group-hover:text-pastelGrey transition-all">
                  Graphics design encompasses the creation of visual assets, including illustrations, logos, icons, and infographics, to communicate messages or concepts effectively.
                </p>
                <a href="\#" className="stretched-link ml-auto max-md:hidden group-hover:text-darkGray dark:group-hover:text-pastelGrey" aria-label="Go to Service page">
                  <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
              </div>
            </li>
            <li className="group first:pt-0 last:pb-0">
              <div className="name flex items-center gap-5">
                <div className="icon">
                  <svg className="w-8 text-smokeGray group-hover:text-darkGray dark:group-hover:text-pastelGrey transition-all" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6665 30.3335C5.7065 30.3335 1.6665 26.2935 1.6665 21.3335C1.6665 17.2802 4.3865 13.7068 8.29317 12.6535C8.7865 12.5202 9.29317 12.7735 9.47984 13.2535C10.2932 15.2935 12.0265 16.8535 14.1465 17.4268C15.3198 17.7468 16.6798 17.7468 17.8265 17.4268C18.3198 17.2935 18.8398 17.5468 19.0265 18.0268C19.4398 19.0802 19.6532 20.2002 19.6532 21.3468C19.6532 23.9068 18.5598 26.3468 16.6532 28.0402C15.0265 29.5068 12.8932 30.3335 10.6665 30.3335ZM8.0265 14.8402C5.4265 15.9068 3.6665 18.4668 3.6665 21.3335C3.6665 25.1868 6.81317 28.3335 10.6665 28.3335C12.3998 28.3335 14.0532 27.6935 15.3332 26.5335C16.8265 25.2135 17.6665 23.3202 17.6665 21.3335C17.6665 20.7202 17.5865 20.1335 17.4398 19.5602C16.1865 19.7602 14.8265 19.6935 13.6265 19.3602C11.2132 18.6935 9.1865 17.0402 8.0265 14.8402Z" fill="currentcolor"></path>
                    <path d="M16 19.6665C15.1733 19.6665 14.3733 19.5598 13.6267 19.3465C10.92 18.5998 8.66667 16.5998 7.62667 13.9732C7.21333 12.9332 7 11.8132 7 10.6665C7 5.7065 11.04 1.6665 16 1.6665C20.96 1.6665 25 5.7065 25 10.6665C25 11.8132 24.7867 12.9332 24.3733 13.9865C23.3333 16.5998 21.0933 18.6132 18.3733 19.3598C17.6267 19.5598 16.8267 19.6665 16 19.6665ZM16 3.6665C12.1467 3.6665 9 6.81317 9 10.6665C9 11.5598 9.16 12.4265 9.49333 13.2398C10.3067 15.2798 12.04 16.8398 14.16 17.4132C15.3333 17.7332 16.6933 17.7332 17.84 17.4132C19.96 16.8398 21.7067 15.2665 22.5067 13.2398C22.8267 12.4265 23 11.5598 23 10.6665C23 6.81317 19.8533 3.6665 16 3.6665Z" fill="currentcolor"></path>
                    <path d="M21.3333 30.3331C19.1067 30.3331 16.9733 29.5065 15.3333 28.0265C15.12 27.8398 15 27.5598 15 27.2798C15 26.9998 15.12 26.7198 15.3333 26.5331C16.8133 25.2265 17.6667 23.3331 17.6667 21.3331C17.6667 20.4398 17.5067 19.5731 17.1733 18.7598C17.0667 18.4931 17.08 18.1998 17.2133 17.9465C17.3467 17.6931 17.5733 17.5065 17.84 17.4265C19.96 16.8531 21.6933 15.2931 22.5067 13.2531C22.6933 12.7731 23.2133 12.5331 23.6933 12.6531C27.6 13.7198 30.32 17.2798 30.32 21.3331C30.3333 26.2931 26.2933 30.3331 21.3333 30.3331ZM17.4933 27.1865C18.6267 27.9331 19.9467 28.3331 21.3333 28.3331C25.1867 28.3331 28.3333 25.1865 28.3333 21.3331C28.3333 18.4665 26.5733 15.9065 23.9733 14.8398C22.9867 16.7198 21.3333 18.2131 19.36 19.0131C19.56 19.7598 19.6667 20.5465 19.6667 21.3331C19.6667 23.4931 18.8933 25.5731 17.4933 27.1865Z" fill="currentcolor"></path>
                  </svg>
                </div>
                <h4 className="text-smokeGray dark:text-regentGray group-hover:text-darkGray dark:group-hover:text-pastelGrey font-bold text-xl transition-all">
                  Brand Design
                </h4>
              </div>
              <div className="description col-span-2 md:flex items-start">
                <p className="flex-[0_0_25rem] lg:flex-[0_0_30rem] xl:flex-[0_0_33rem] group-hover:text-darkGray dark:group-hover:text-pastelGrey transition-all">
                  Brand designing focuses on shaping the visual identity and perception of the brand through strategic design thinking process on the elements and so on.
                </p>
                <a href="\#" className="stretched-link ml-auto max-md:hidden group-hover:text-darkGray dark:group-hover:text-pastelGrey" aria-label="Go to Service page">
                  <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
              </div>
            </li>
            <li className="group first:pt-0 last:pb-0">
              <div className="name flex items-center gap-5">
                <div className="icon">
                  <svg className="w-8 text-smokeGray group-hover:text-darkGray dark:group-hover:text-pastelGrey transition-all" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6667 19.6665C10.4134 19.6665 10.1601 19.5732 9.96008 19.3732L7.29342 16.7065C6.90675 16.3198 6.90675 15.6798 7.29342 15.2931L9.96008 12.6264C10.3468 12.2398 10.9867 12.2398 11.3734 12.6264C11.7601 13.0131 11.7601 13.6532 11.3734 14.0398L9.41341 15.9998L11.3734 17.9598C11.7601 18.3464 11.7601 18.9865 11.3734 19.3732C11.1734 19.5732 10.9201 19.6665 10.6667 19.6665Z" fill="currentcolor"></path>
                    <path d="M21.3331 19.6665C21.0798 19.6665 20.8264 19.5732 20.6264 19.3732C20.2398 18.9865 20.2398 18.3464 20.6264 17.9598L22.5864 15.9998L20.6264 14.0398C20.2398 13.6532 20.2398 13.0131 20.6264 12.6264C21.0131 12.2398 21.6531 12.2398 22.0398 12.6264L24.7064 15.2931C25.0931 15.6798 25.0931 16.3198 24.7064 16.7065L22.0398 19.3732C21.8398 19.5732 21.5864 19.6665 21.3331 19.6665Z" fill="currentcolor"></path>
                    <path d="M15.9998 30.3332C8.09317 30.3332 1.6665 23.9065 1.6665 15.9998C1.6665 8.09317 8.09317 1.6665 15.9998 1.6665C23.9065 1.6665 30.3332 8.09317 30.3332 15.9998C30.3332 23.9065 23.9065 30.3332 15.9998 30.3332ZM15.9998 3.6665C9.19984 3.6665 3.6665 9.19984 3.6665 15.9998C3.6665 22.7998 9.19984 28.3332 15.9998 28.3332C22.7998 28.3332 28.3332 22.7998 28.3332 15.9998C28.3332 9.19984 22.7998 3.6665 15.9998 3.6665Z" fill="currentcolor"></path>
                    <path d="M14.6667 20.1069C14.5333 20.1069 14.4 20.0803 14.28 20.0269C13.7733 19.8136 13.5333 19.2269 13.76 18.7069L16.4267 12.4802C16.64 11.9735 17.2267 11.7335 17.7333 11.9602C18.24 12.1735 18.48 12.7603 18.2533 13.2803L15.5867 19.5069C15.4267 19.8802 15.0533 20.1069 14.6667 20.1069Z" fill="currentcolor"></path>
                  </svg>
                </div>
                <h4 className="text-smokeGray dark:text-regentGray group-hover:text-darkGray dark:group-hover:text-pastelGrey font-bold text-xl transition-all">
                  Web Development
                </h4>
              </div>
              <div className="description col-span-2 md:flex items-start">
                <p className="flex-[0_0_25rem] lg:flex-[0_0_30rem] xl:flex-[0_0_33rem] group-hover:text-darkGray dark:group-hover:text-pastelGrey transition-all">
                  Involves in the implementation of designs and the creation of functional websites and web applications using programming languages such as HTML, CSS, and JavaScript.
                </p>
                <a href="\#" className="stretched-link ml-auto max-md:hidden group-hover:text-darkGray dark:group-hover:text-pastelGrey" aria-label="Go to Service page">
                  <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <MySwiper />
        <div className="social-contacts grid sm:grid-cols-2 md:grid-cols-3 gap-6 *:relative *:rounded-2xl *:p-4 lg:*:p-6 xl:*:p-8 *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack *:flex *:items-center *:gap-4 *:border *:border-gray-100 dark:*:border-white/5 aos-init aos-animate" data-aos="fade-up">
          <div className="contact-item">
            <div className="icon w-16 h-16 rounded-full flex justify-center items-center border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
              <a href="#/" className="stretched-link" aria-label="Follow me on Instagram">
                <svg className="w-8 text-powerBlack dark:text-pastelGrey" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.3335 10.0002C2.3335 5.76598 5.76598 2.3335 10.0002 2.3335H21.3335C25.5677 2.3335 29.0002 5.76598 29.0002 10.0002V21.3335C29.0002 25.5677 25.5677 29.0002 21.3335 29.0002H10.0002C5.76598 29.0002 2.3335 25.5677 2.3335 21.3335V10.0002ZM10.0002 4.3335C6.87055 4.3335 4.3335 6.87055 4.3335 10.0002V21.3335C4.3335 24.4631 6.87055 27.0002 10.0002 27.0002H21.3335C24.4631 27.0002 27.0002 24.4631 27.0002 21.3335V10.0002C27.0002 6.87055 24.4631 4.3335 21.3335 4.3335H10.0002Z" fill="currentcolor"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12ZM10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16Z" fill="currentcolor"></path>
                  <path d="M22.3332 11.3333C23.2536 11.3333 23.9998 10.5871 23.9998 9.66667C23.9998 8.74619 23.2536 8 22.3332 8C21.4127 8 20.6665 8.74619 20.6665 9.66667C20.6665 10.5871 21.4127 11.3333 22.3332 11.3333Z" fill="currentcolor"></path>
                </svg>
              </a>
            </div>
            <div className="text">
              <h5 className="text-darkGray dark:text-pastelGrey text-xl font-semibold">
                Instagram
              </h5>
              <p className="text-nobelGray dark:text-slateGray text-regular">
                50.8k followers
              </p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon w-16 h-16 rounded-full flex justify-center items-center border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
              <a href="#/" className="stretched-link" aria-label="Follow me on Youtube">
                <svg className="w-8 text-powerBlack dark:text-pastelGrey" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.848 11.1425C13.5391 10.9571 13.1543 10.9523 12.8408 11.1298C12.5273 11.3073 12.3335 11.6397 12.3335 12V20C12.3335 20.3602 12.5273 20.6928 12.8408 20.8702C13.1543 21.0477 13.5391 21.0429 13.848 20.8576L20.5147 16.8576C20.8159 16.6768 21.0002 16.3513 21.0002 16C21.0002 15.6488 20.8159 15.3233 20.5147 15.1425L13.848 11.1425ZM18.0566 16L14.3335 18.2338V13.7662L18.0566 16Z" fill="currentcolor"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.4716 5.6109C18.1636 5.24103 13.836 5.24103 9.52814 5.6109L6.64559 5.85839C4.89271 6.0089 3.45872 7.45067 3.16895 9.35388C2.49902 13.7542 2.49902 18.2461 3.16895 22.6465C3.45872 24.5496 4.89271 25.9914 6.64559 26.1419L9.52814 26.3894C13.836 26.7593 18.1636 26.7593 22.4716 26.3894L25.3541 26.1419C27.1069 25.9914 28.5409 24.5496 28.8308 22.6465C29.5006 18.2461 29.5006 13.7542 28.8308 9.35388C28.5409 7.45067 27.1069 6.0089 25.3541 5.85839L22.4716 5.6109ZM9.67866 7.7222C13.8864 7.36092 18.1133 7.36092 22.3211 7.7222L25.2036 7.96969C26.0727 8.04432 26.7838 8.7592 26.9275 9.70289C27.5622 13.8722 27.5622 18.1282 26.9275 22.2975C26.7838 23.2412 26.0727 23.9561 25.2036 24.0307L22.3211 24.2781C18.1133 24.6394 13.8863 24.6394 9.67866 24.2781L6.7961 24.0307C5.92696 23.9561 5.21592 23.2412 5.07225 22.2975C4.4375 18.1282 4.4375 13.8722 5.07225 9.70289C5.21592 8.7592 5.92696 8.04432 6.7961 7.96969L9.67866 7.7222Z" fill="currentcolor"></path>
                </svg>
              </a>
            </div>
            <div className="text">
              <h5 className="text-darkGray dark:text-pastelGrey text-xl font-semibold">
                Youtube
              </h5>
              <p className="text-nobelGray dark:text-slateGray text-regular">
                25k subscribers
              </p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon w-16 h-16 rounded-full flex justify-center items-center border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
              <a href="#/" className="stretched-link" aria-label="Follow me on Twitter">
                <svg className="w-8 text-powerBlack dark:text-pastelGrey" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.7852 4.21833C11.6921 4.08173 11.5374 4 11.3721 4H4.94607C4.54436 4 4.30666 4.44976 4.53295 4.78167L12.8049 16.9139C12.928 17.0945 12.9196 17.3341 12.7841 17.5056L5.13098 27.1899C4.87189 27.5177 5.1054 27.9999 5.52327 27.9999H7.3818L13.9289 19.7152C14.1381 19.4504 14.5442 19.4647 14.7343 19.7435L20.2148 27.7817C20.3079 27.9183 20.4626 28 20.6279 28H27.0539C27.4556 28 27.6933 27.5502 27.467 27.2183L18.8161 14.5303C18.6929 14.3497 18.7014 14.11 18.8369 13.9386L26.0509 4.81001C26.31 4.48216 26.0765 4 25.6586 4H23.8001L17.6921 11.7289C17.4829 11.9937 17.0768 11.9794 16.8867 11.7006L11.7852 4.21833ZM21.7188 25.6C21.5535 25.6 21.3988 25.5183 21.3057 25.3817L8.89659 7.18167C8.67029 6.84976 8.908 6.4 9.30971 6.4H10.2812C10.4465 6.4 10.6012 6.48173 10.6943 6.61833L23.1034 24.8183C23.3297 25.1502 23.092 25.6 22.6903 25.6H21.7188Z" fill="currentcolor"></path>
                </svg>
              </a>
            </div>
            <div className="text">
              <h5 className="text-darkGray dark:text-pastelGrey text-xl font-semibold">
                Twitter
              </h5>
              <p className="text-nobelGray dark:text-slateGray text-regular">
                3.5k follower
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
