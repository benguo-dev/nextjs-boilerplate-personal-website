import { getTranslations } from 'next-intl/server';

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

export default async function Index(/* props: IIndexProps */) {
  // const { locale } = await props.params;
  // setRequestLocale(locale);
  // const t = await getTranslations({
  //   locale,
  //   namespace: 'Index',
  // });

  return (
    <>
      <div className="container mx-auto">
        <div className="md:grid md:grid-cols-2 xl:grid-cols-3 gap-6 justify-center">
          <div className="space-y-6 *:rounded-2xl max-md:*:p-4 *:p-6 xl:*:px-10 *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:bg-gradient-to-b *:border *:border-flasWhite dark:*:border-flasBlack">
            <div className="widget transition duration-700 ease-in-out hover:scale-105">
              <img src="/assets/images/user.webp" alt="bentoMan - Personal portfolio resume template" className="rounded-2xl w-full bg-[#F5F7F9] dark:bg-[#222428]" />
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
              <h6 className="font-semibold text-lg text-darkGray dark:text-pastelGrey group mt-5">
                <a href="about.html" className="flex items-center justify-between">
                  About Myself
                  <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
              </h6>
            </div>
            <div className="widget *:py-3 divide-y divide-flasWhite dark:divide-flasBlack mb-6">
              <div className="social_media_item first:pt-0 last:pb-0">
                <a href="#/" className="flex gap-3 items-center group">
                  <div className="w-12 h-12 rounded-full grid place-content-center text-powerBlack dark:text-pastelGrey border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                    <i className="iconfont icon-instagram"></i>
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
                    <i className="iconfont icon-youtube"></i>
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
                    <i className="iconfont icon-twiter text-[30px]"></i>
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
          <div className="space-y-6 *:rounded-2xl max-md:*:p-4 *:p-6 xl:*:px-10 *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack *:border *:border-flasWhite dark:*:border-flasBlack">
            <div className="widget">
              <div className="flex flex-wrap items-center justify-between">
                <div className="space-y-2 text-center flex-1 p-4">
                  <div className="icon h-12 grid place-content-center">
                    <svg width="30" height="43" viewBox="0 0 30 43" className="text-darkGray dark:text-pastelGrey" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16.5 27.745C17.0878 28.2156 17.7402 28.6018 18.4386 28.891C19.4092 29.293 20.4494 29.5 21.5 29.5C22.5506 29.5 23.5908 29.293 24.5614 28.891C25.532 28.489 26.414 27.8998 27.1568 27.1568C27.8998 26.414 28.489 25.532 28.891 24.5614C29.293 23.5908 29.5 22.5506 29.5 21.5C29.5 20.4494 29.293 19.4092 28.891 18.4386C28.489 17.468 27.8998 16.586 27.1568 15.8431C26.8486 15.5348 26.5162 15.253 26.1636 15C26.5162 14.747 26.8486 14.4652 27.1568 14.1569C27.8998 13.414 28.489 12.5321 28.891 11.5615C29.293 10.5909 29.5 9.55058 29.5 8.5C29.5 7.44942 29.293 6.40914 28.891 5.43854C28.489 4.46792 27.8998 3.58602 27.1568 2.84314C26.414 2.10028 25.532 1.511 24.5614 1.10896C23.5908 0.70692 22.5506 0.5 21.5 0.5H8.5C6.37826 0.5 4.34344 1.34286 2.84314 2.84314C1.34286 4.34344 0.5 6.37826 0.5 8.5C0.5 10.6217 1.34286 12.6566 2.84314 14.1569C3.15274 14.4664 3.48508 14.748 3.83626 15C3.48508 15.252 3.15274 15.5336 2.84314 15.8431C1.34286 17.3434 0.5 19.3782 0.5 21.5C0.5 23.6218 1.34286 25.6566 2.84314 27.1568C3.15274 27.4664 3.48508 27.748 3.83626 28C3.48508 28.252 3.15274 28.5336 2.84314 28.8432C1.34286 30.3434 0.5 32.3782 0.5 34.5C0.5 36.6218 1.34286 38.6566 2.84314 40.1568C4.34344 41.6572 6.37826 42.5 8.5 42.5C10.6217 42.5 12.6566 41.6572 14.1568 40.1568C15.6572 38.6566 16.5 36.6218 16.5 34.5V27.745ZM8.5 3.5C7.17392 3.5 5.90214 4.02678 4.96446 4.96446C4.02678 5.90214 3.5 7.17392 3.5 8.5C3.5 9.82608 4.02678 11.0979 4.96446 12.0355C5.90214 12.9732 7.17392 13.5 8.5 13.5H13.5V3.5H8.5ZM13.5 29.5H8.5C7.17392 29.5 5.90214 30.0268 4.96446 30.9644C4.02678 31.9022 3.5 33.174 3.5 34.5C3.5 35.826 4.02678 37.0978 4.96446 38.0356C5.90214 38.9732 7.17392 39.5 8.5 39.5C9.82608 39.5 11.0978 38.9732 12.0356 38.0356C12.9732 37.0978 13.5 35.826 13.5 34.5V29.5ZM8.5 16.5C7.17392 16.5 5.90214 17.0268 4.96446 17.9644C4.02678 18.9022 3.5 20.174 3.5 21.5C3.5 22.826 4.02678 24.0978 4.96446 25.0356C5.90214 25.9732 7.17392 26.5 8.5 26.5H13.5V16.5H8.5ZM16.5 21.5C16.5 22.1566 16.6294 22.8068 16.8806 23.4134C17.1318 24.02 17.5002 24.5712 17.9644 25.0356C18.4288 25.4998 18.98 25.8682 19.5866 26.1194C20.1932 26.3706 20.8434 26.5 21.5 26.5C22.1566 26.5 22.8068 26.3706 23.4134 26.1194C24.02 25.8682 24.5712 25.4998 25.0356 25.0356C25.4998 24.5712 25.8682 24.02 26.1194 23.4134C26.3706 22.8068 26.5 22.1566 26.5 21.5C26.5 20.8434 26.3706 20.1932 26.1194 19.5866C25.8682 18.98 25.4998 18.4288 25.0356 17.9644C24.5712 17.5002 24.02 17.1318 23.4134 16.8806C22.8068 16.6293 22.1566 16.5 21.5 16.5C20.8434 16.5 20.1932 16.6293 19.5866 16.8806C18.98 17.1318 18.4288 17.5002 17.9644 17.9644C17.5002 18.4288 17.1318 18.98 16.8806 19.5866C16.6294 20.1932 16.5 20.8434 16.5 21.5ZM21.5 13.5C22.1566 13.5 22.8068 13.3707 23.4134 13.1194C24.02 12.8681 24.5712 12.4998 25.0356 12.0355C25.4998 11.5712 25.8682 11.02 26.1194 10.4134C26.3706 9.80678 26.5 9.1566 26.5 8.5C26.5 7.8434 26.3706 7.19322 26.1194 6.58658C25.8682 5.97996 25.4998 5.42876 25.0356 4.96446C24.5712 4.50018 24.02 4.13188 23.4134 3.8806C22.8068 3.62932 22.1566 3.5 21.5 3.5H16.5V13.5H21.5Z" fill="currentcolor"></path>
                    </svg>
                  </div>
                  <p>
                    Figma
                  </p>
                </div>
                <div className="space-y-2 text-center flex-1 p-4">
                  <div className="icon h-12 grid place-content-center">
                    <svg width="40" height="32" viewBox="0 0 40 32" className="text-darkGray dark:text-pastelGrey" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M35.5737 3H30.1912L26.4481 12.251C25.9679 13.4377 24.8158 14.2144 23.5356 14.2144C21.8004 14.2144 20.3937 12.8078 20.3937 11.0726V3H17.3609L13.7633 12.2808C13.447 13.097 12.814 13.7253 12.0372 14.0474C12.0809 14.8606 11.8173 15.7173 11.1377 16.4847C8.51241 19.4491 5.19106 20.7875 3 21.3905V28.4234C9.55029 26.8247 14.3189 22.9313 17.7538 17.2398C18.3129 16.3133 19.3205 15.7335 20.4219 15.7335C22.6296 15.7335 24.1371 17.9659 23.3123 20.0138L19.6926 29H25.2042L35.5737 3ZM7.69375 10.7234V3H3V10.7234H7.69375ZM10.6938 2C10.6938 0.89543 9.79832 0 8.69375 0H2C0.895431 0 0 0.895431 0 2V11.7234C0 12.828 0.895432 13.7234 2 13.7234H8.5245C8.93546 13.7234 9.16424 14.1881 8.89178 14.4958C8.77128 14.6318 8.64876 14.7638 8.5245 14.8917C8.0451 15.3852 7.53974 15.819 7.02419 16.2002C6.77158 16.3869 6.51653 16.5611 6.26088 16.7234C4.65037 17.7463 3.01616 18.3013 1.82135 18.5983C0.806626 18.8505 0 19.7336 0 20.7792V29.7519C0 30.9487 1.04751 31.8835 2.22334 31.6602C7.1045 30.7329 11.1644 28.7189 14.5065 25.8164C16.0676 24.4607 17.4721 22.9111 18.7305 21.1879C19.2861 20.427 19.8132 19.6324 20.3128 18.8056C20.316 18.8003 20.3191 18.7951 20.3223 18.7899C20.3433 18.755 20.3812 18.7335 20.4219 18.7335C20.5041 18.7335 20.5603 18.8166 20.5295 18.8929L16.3566 29.2527C15.8272 30.5671 16.7948 32 18.2118 32H25.882C26.7005 32 27.4364 31.5012 27.7397 30.7409L38.9069 2.7409C39.4307 1.42745 38.4632 0 37.0491 0H29.517C28.7021 0 27.9687 0.494429 27.663 1.24985L23.6671 11.1258C23.6454 11.1794 23.5934 11.2144 23.5356 11.2144C23.4573 11.2144 23.3937 11.1509 23.3937 11.0726V2C23.3937 0.895431 22.4983 0 21.3937 0H16.676C15.8504 0 15.1096 0.507333 14.8112 1.27715L10.9661 11.1966C10.9451 11.2508 10.8929 11.2866 10.8347 11.2866C10.7569 11.2866 10.6938 11.2235 10.6938 11.1456V2Z" fill="currentcolor"></path>
                    </svg>
                  </div>
                  <p>
                    Webflow
                  </p>
                </div>
                <div className="space-y-2 text-center flex-1 p-4">
                  <div className="icon h-12 grid place-content-center">
                    <svg width="28" height="40" viewBox="0 0 28 40" className="text-darkGray dark:text-pastelGrey" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.118455 1.01199C0.359224 0.399413 0.926435 0 1.5556 0H26.4444C27.3035 0 28 0.733959 28 1.63934V14.7541C28 15.6595 27.3035 16.3934 26.4444 16.3934H17.7554L27.5443 26.7096C27.9892 27.1785 28.1223 27.8836 27.8815 28.4962C27.6408 29.1087 27.0736 29.5082 26.4444 29.5082H15.5556V38.3606C15.5556 39.0237 15.1766 39.6214 14.5953 39.8752C14.014 40.1289 13.3449 39.9886 12.9001 39.5198L0.455656 26.4051C0.163933 26.0976 4.54405e-05 25.6807 4.54405e-05 25.2459V14.7541C4.54405e-05 13.8487 0.696489 13.1147 1.5556 13.1147H10.2446L0.455656 2.79853C0.0107712 2.32968 -0.122315 1.62457 0.118455 1.01199ZM14.6443 13.1147H24.8889V3.27868H5.31103L14.6443 13.1147ZM13.3557 16.3934H3.11115V24.5668L12.4444 34.4029V27.8688C12.4444 26.9634 13.1409 26.2295 14 26.2295H22.689L13.3557 16.3934Z" fill="currentcolor"></path>
                    </svg>
                  </div>
                  <p>
                    Framer
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-sm opacity-70">
                  TOOLS &amp; TECHNOLOGY
                </p>
                <h6 className="font-semibold text-lg text-darkGray dark:text-pastelGrey group">
                  <a href="#!" className="flex items-center justify-between">
                    My Credentials
                    <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </a>
                </h6>
              </div>
            </div>
            <div className="widget">
              <div className="text-center p-4">
                <a href="blog.html">
                  <img src="/assets/images/project-image.svg" alt="bentoMan - Personal portfolio resume template" className="dark:hidden" />
                  <img src="/assets/images/project-image-dark.svg" alt="bentoMan - Personal portfolio resume template" className="hidden dark:inline-block" />
                </a>
                <div className="mt-10">
                  <p className="text-sm opacity-70">
                    RECENT WORKS
                  </p>
                  <h6 className="font-semibold text-lg text-darkGray dark:text-pastelGrey group">
                    <a href="projects.html" className="flex items-center justify-between">
                      All Projects
                      <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="widget">
              <div className="flex items-center flex-wrap *:text-center *:rounded-lg *:py-4 gap-6">
                <div className="flex-1">
                  <h5 className="text-powerBlack dark:text-pastelGrey font-semibold text-4xl xl:text-5xl mb-2">
                    12
                  </h5>
                  <p>Years Experience</p>
                </div>
                <div className="flex-1">
                  <h5 className="text-powerBlack dark:text-pastelGrey font-semibold text-4xl xl:text-5xl mb-2">
                    1.5k
                  </h5>
                  <p>Projects Complete</p>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-sm opacity-70">
                  CAREER STATS
                </p>
                <h6 className="font-semibold text-lg text-darkGray dark:text-pastelGrey group">
                  <a href="#!" className="flex items-center justify-between">
                    My Credentials
                    <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </a>
                </h6>
              </div>
            </div>
          </div>
          <div className="space-y-6 lg:max-xl:space-y-0 md:max-xl:col-span-2 lg:max-xl:grid lg:max-xl:grid-cols-2 lg:max-xl:gap-6 *:rounded-2xl max-md:*:p-4 *:p-6 xl:*:px-10 *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack *:border *:border-flasWhite dark:*:border-flasBlack">
            <div className="widget overflow-hidden">
              <div className="cta_swiper -rotate-[5deg] mb-10 mt-8 -ml-12 -mr-12">
                <div className="marquee_wrapper bg-seashell dark:bg-darkGray py-4">
                  <p className="text-smokeGray font-light dark:text-pastelGrey whitespace-nowrap animate-marquee">
                    I am Available for hearing your 🧭 Product Strategy - 🤹‍♂️ UX Design - 🎨 Graphics Design - 📐 Design System - 🛠️ Product Design Task
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <p className="text-sm opacity-70">
                  HAVE PROPOSAL?
                </p>
                <h6 className="font-semibold text-lg text-darkGray dark:text-pastelGrey group">
                  <a href="contact.html" className="flex items-center justify-between">
                    Let's Start
                    <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </a>
                </h6>
              </div>
            </div>
            <div className="widget">
              <div className="text-center -mb-20">
                <a href="blog.html">
                  <img src="/assets/images/blog-img.svg" alt="bentoMan - Personal portfolio resume template" className="dark:hidden" />
                  <img src="/assets/images/blog-img-dark.svg" alt="bentoMan - Personal portfolio resume template" className="hidden dark:inline-block" />
                </a>
              </div>
              <div className="mt-10">
                <p className="text-sm opacity-70">
                  ARTICLES
                </p>
                <h6 className="font-semibold text-lg text-darkGray dark:text-pastelGrey group">
                  <a href="blog.html" className="flex items-center justify-between">
                    All Blogs
                    <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </a>
                </h6>
              </div>
            </div>
            <div className="widget">
              <div className="grid grid-cols-2 *:text-center *:py-5 *:space-y-5 divide-black/5 dark:divide-white/5 divide-y divide-x [&>*:nth-child(2)]:!border-r-0 [&>*:nth-child(3)]:!border-b-0">
                <div>
                  <svg width="44" height="44" viewBox="0 0 44 44" className="text-darkGray dark:text-pastelGrey inline-block" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 22.5002C21.12 22.5002 20.24 22.2802 19.44 21.8602L6.42 14.8402C5.24 14.2002 4.5 12.9402 4.5 11.5402C4.5 10.1402 5.24 8.8802 6.42 8.2402L19.44 1.2202C21.04 0.360195 22.96 0.360195 24.54 1.2202L37.56 8.2402C38.74 8.8802 39.48 10.1402 39.48 11.5402C39.48 12.9402 38.74 14.2002 37.56 14.8402L24.54 21.8602C23.76 22.3002 22.88 22.5002 22 22.5002ZM22 3.5602C21.62 3.5602 21.22 3.6602 20.86 3.8602L7.86 10.8602C7.52 11.0402 7.5 11.4202 7.5 11.5402C7.5 11.6602 7.52 12.0402 7.86 12.2002L20.88 19.2202C21.6 19.6002 22.42 19.6002 23.14 19.2202L36.16 12.2002C36.48 12.0202 36.52 11.6402 36.52 11.5402C36.52 11.4202 36.5 11.0402 36.16 10.8802L23.14 3.8602C22.78 3.6602 22.38 3.5602 22 3.5602Z" fill="currentcolor"></path>
                    <path d="M17.56 43.44C17 43.44 16.42 43.3 15.9 43.04L3.78 37C1.76 35.98 0.5 33.94 0.5 31.68V20.24C0.5 18.94 1.16 17.76 2.26 17.08C3.38 16.4 4.72 16.34 5.88 16.92L18 22.96C20.02 23.98 21.28 26 21.28 28.28V39.72C21.28 41.02 20.62 42.2 19.52 42.88C18.92 43.26 18.24 43.44 17.56 43.44ZM4.22 19.52C4.06 19.52 3.92 19.58 3.84 19.62C3.72 19.7 3.5 19.88 3.5 20.24V31.68C3.5 32.8 4.12 33.82 5.12 34.32L17.22 40.38C17.54 40.54 17.8 40.42 17.92 40.36C18.04 40.28 18.26 40.1 18.26 39.74V28.3C18.26 27.18 17.64 26.16 16.64 25.66L4.54 19.6C4.42 19.54 4.32 19.52 4.22 19.52Z" fill="currentcolor"></path>
                    <path d="M26.4402 43.44C25.7602 43.44 25.0802 43.26 24.4802 42.88C23.3802 42.2 22.7202 41.02 22.7202 39.72V28.28C22.7202 26.02 23.9802 23.98 26.0002 22.96L38.1002 16.9C39.2602 16.32 40.6202 16.38 41.7202 17.06C42.8202 17.74 43.4802 18.92 43.4802 20.22V31.66C43.4802 33.92 42.2202 35.96 40.2002 36.98L28.1002 43.04C27.5802 43.32 27.0002 43.44 26.4402 43.44ZM39.7802 19.52C39.6802 19.52 39.5802 19.54 39.4602 19.6L27.3602 25.66C26.3602 26.16 25.7402 27.16 25.7402 28.3V39.74C25.7402 40.1 25.9602 40.28 26.0802 40.36C26.2002 40.44 26.4602 40.54 26.7802 40.38L38.8802 34.32C39.8802 33.82 40.5002 32.8 40.5002 31.68V20.24C40.5002 19.88 40.2802 19.7 40.1602 19.62C40.0802 19.58 39.9402 19.52 39.7802 19.52Z" fill="currentcolor"></path>
                  </svg>
                  <p className="!leading-none">Product Design</p>
                </div>
                <div>
                  <svg width="44" height="44" viewBox="0 0 44 44" className="text-darkGray dark:text-pastelGrey inline-block" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8598 34.7398C18.5598 34.7398 18.2798 34.6598 18.0198 34.4798C17.5998 34.1998 17.3598 33.7398 17.3598 33.2398C17.3598 32.9398 17.3398 32.6198 17.2998 32.2998C17.1198 30.8798 16.4798 29.6398 15.3998 28.5598C14.3198 27.4798 12.9798 26.7998 11.5398 26.6198C11.2998 26.5998 10.9598 26.5798 10.6398 26.5998C10.1198 26.6398 9.63982 26.4198 9.33982 25.9998C9.03982 25.5998 8.95982 25.0598 9.11982 24.5798C9.41982 23.7598 9.85982 23.0198 10.3798 22.4198L13.4598 18.5398C18.7598 11.9198 29.4998 3.95984 37.3598 0.799843C39.0398 0.159843 40.7998 0.539843 42.0198 1.73984C43.2798 2.99984 43.6598 4.79984 42.9998 6.43984C39.8398 14.3198 31.8998 25.0398 25.2798 30.3398L21.3398 33.4998C20.5998 34.0398 19.9998 34.3798 19.3998 34.6198C19.2398 34.6998 19.0398 34.7398 18.8598 34.7398ZM13.0798 23.8798C14.7598 24.3198 16.2598 25.1998 17.5198 26.4598C18.7798 27.6998 19.6198 29.1398 20.0398 30.7398L23.4198 28.0198C29.6998 22.9998 37.2398 12.8198 40.2198 5.33984C40.5198 4.59984 40.0998 4.07984 39.8998 3.89984C39.7598 3.75984 39.2398 3.31984 38.4398 3.61984C30.9998 6.61984 20.8198 14.1598 15.7798 20.4398L13.0798 23.8798Z" fill="currentcolor"></path>
                    <path d="M6.16022 43.5001C4.66022 43.5001 3.22022 42.9001 2.14022 41.8201C0.900221 40.5801 0.300221 38.8601 0.500221 37.1001L1.04022 32.1801C1.56022 27.3001 5.56022 23.6801 10.5202 23.5801C10.9002 23.5601 11.4002 23.5801 11.8602 23.6201C14.0402 23.9001 15.9802 24.8801 17.5402 26.4401C19.0802 27.9801 20.0002 29.8201 20.2802 31.8801C20.3402 32.3201 20.3802 32.8001 20.3802 33.2201C20.3802 35.8601 19.3602 38.3201 17.5202 40.1801C15.9802 41.7001 14.0002 42.6401 11.7602 42.9201L6.82022 43.4601C6.60022 43.4801 6.38022 43.5001 6.16022 43.5001ZM10.9002 26.6001C10.8202 26.6001 10.7202 26.6001 10.6402 26.6001C7.62022 26.6601 4.42022 28.7201 4.02022 32.5201L3.48022 37.4401C3.38022 38.2801 3.68022 39.1001 4.26022 39.7001C4.84022 40.2801 5.66022 40.5801 6.48022 40.4801L11.4002 39.9401C12.9402 39.7401 14.3202 39.1001 15.3602 38.0601C16.6402 36.7801 17.3602 35.0601 17.3602 33.2201C17.3602 32.9201 17.3402 32.6001 17.3002 32.2801C17.1202 30.8601 16.4802 29.6201 15.4002 28.5401C14.3202 27.4601 12.9802 26.7801 11.5402 26.6001C11.3802 26.6001 11.1402 26.6001 10.9002 26.6001Z" fill="currentcolor"></path>
                    <path d="M26.48 28.44C25.66 28.44 24.98 27.76 24.98 26.94C24.98 22.54 21.4 18.98 17.02 18.98C16.2 18.98 15.52 18.3 15.52 17.48C15.52 16.66 16.18 15.98 17 15.98C23.04 15.98 27.96 20.9 27.96 26.94C27.98 27.78 27.3 28.44 26.48 28.44Z" fill="currentcolor"></path>
                    <path d="M29.3598 43.4598C27.4998 43.4598 25.6398 42.5798 23.8598 40.7998C23.2798 40.2198 23.2798 39.2598 23.8598 38.6798C24.4398 38.0998 25.3998 38.0998 25.9798 38.6798C28.3398 41.0398 30.3598 41.0398 32.7198 38.6798L38.6398 32.7598C41.0198 30.3798 41.0198 28.3598 38.6398 25.9998L37.1598 24.5398C36.5798 23.9598 36.5598 22.9998 37.1398 22.4198C37.7198 21.8198 38.6798 21.8198 39.2598 22.3998L40.7398 23.8598C44.2998 27.4198 44.2998 31.3198 40.7398 34.8798L34.8198 40.7998C33.0798 42.5598 31.2198 43.4598 29.3598 43.4598Z" fill="currentcolor"></path>
                    <path d="M4.22002 20.52C3.84002 20.52 3.44002 20.38 3.16002 20.08C-0.359981 16.54 -0.359981 12.62 3.16002 9.08002L9.08002 3.16002C12.6 -0.359981 16.56 -0.359981 20.08 3.16002L21.56 4.64002C22.14 5.22002 22.14 6.18002 21.56 6.76002C20.98 7.34002 20.02 7.34002 19.44 6.76002L17.94 5.28002C15.58 2.92002 13.54 2.92002 11.2 5.28002L5.28002 11.2C2.92002 13.58 2.92002 15.6 5.28002 17.98C5.86002 18.56 5.86002 19.52 5.28002 20.1C4.98002 20.38 4.60002 20.52 4.22002 20.52Z" fill="currentcolor"></path>
                    <path d="M13.1 14.6001C12.72 14.6001 12.34 14.4601 12.04 14.1601C11.46 13.5801 11.46 12.6201 12.04 12.0401L19.44 4.64008C20.02 4.06008 20.98 4.06008 21.56 4.64008C22.14 5.22008 22.14 6.18008 21.56 6.76008L14.16 14.1601C13.86 14.4601 13.48 14.6001 13.1 14.6001Z" fill="currentcolor"></path>
                    <path d="M32.3202 30.8598C31.9402 30.8598 31.5602 30.7198 31.2602 30.4198C30.6802 29.8398 30.6802 28.8798 31.2602 28.2998L37.1802 22.3798C37.7602 21.7998 38.7202 21.7998 39.3002 22.3798C39.8802 22.9598 39.8802 23.9198 39.3002 24.4998L33.3802 30.4198C33.1002 30.7198 32.7202 30.8598 32.3202 30.8598Z" fill="currentcolor"></path>
                  </svg>
                  <p className="!leading-none">Product Design</p>
                </div>
                <div>
                  <svg width="44" height="44" viewBox="0 0 44 44" className="text-darkGray dark:text-pastelGrey inline-block" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 43.4998C6.56 43.4998 0.5 37.4398 0.5 29.9998C0.5 23.9198 4.58 18.5598 10.44 16.9798C11.18 16.7798 11.94 17.1598 12.22 17.8798C13.44 20.9398 16.04 23.2798 19.22 24.1398C20.98 24.6198 23.02 24.6198 24.74 24.1398C25.48 23.9398 26.26 24.3198 26.54 25.0398C27.16 26.6198 27.48 28.2998 27.48 30.0198C27.48 33.8598 25.84 37.5198 22.98 40.0598C20.54 42.2598 17.34 43.4998 14 43.4998ZM10.04 20.2598C6.14 21.8598 3.5 25.6998 3.5 29.9998C3.5 35.7798 8.22 40.4998 14 40.4998C16.6 40.4998 19.08 39.5398 21 37.7998C23.24 35.8198 24.5 32.9798 24.5 29.9998C24.5 29.0798 24.38 28.1998 24.16 27.3398C22.28 27.6398 20.24 27.5398 18.44 27.0398C14.82 26.0398 11.78 23.5598 10.04 20.2598Z" fill="currentcolor"></path>
                    <path d="M22 27.5C20.76 27.5 19.56 27.34 18.44 27.02C14.38 25.9 11 22.9 9.44 18.96C8.82 17.4 8.5 15.72 8.5 14C8.5 6.56 14.56 0.5 22 0.5C29.44 0.5 35.5 6.56 35.5 14C35.5 15.72 35.18 17.4 34.56 18.98C33 22.9 29.64 25.92 25.56 27.04C24.44 27.34 23.24 27.5 22 27.5ZM22 3.5C16.22 3.5 11.5 8.22 11.5 14C11.5 15.34 11.74 16.64 12.24 17.86C13.46 20.92 16.06 23.26 19.24 24.12C21 24.6 23.04 24.6 24.76 24.12C27.94 23.26 30.56 20.9 31.76 17.86C32.24 16.64 32.5 15.34 32.5 14C32.5 8.22 27.78 3.5 22 3.5Z" fill="currentcolor"></path>
                    <path d="M30 43.5C26.66 43.5 23.46 42.26 21 40.04C20.68 39.76 20.5 39.34 20.5 38.92C20.5 38.5 20.68 38.08 21 37.8C23.22 35.84 24.5 33 24.5 30C24.5 28.66 24.26 27.36 23.76 26.14C23.6 25.74 23.62 25.3 23.82 24.92C24.02 24.54 24.36 24.26 24.76 24.14C27.94 23.28 30.54 20.94 31.76 17.88C32.04 17.16 32.82 16.8 33.54 16.98C39.4 18.58 43.48 23.92 43.48 30C43.5 37.44 37.44 43.5 30 43.5ZM24.24 38.78C25.94 39.9 27.92 40.5 30 40.5C35.78 40.5 40.5 35.78 40.5 30C40.5 25.7 37.86 21.86 33.96 20.26C32.48 23.08 30 25.32 27.04 26.52C27.34 27.64 27.5 28.82 27.5 30C27.5 33.24 26.34 36.36 24.24 38.78Z" fill="currentcolor"></path>
                  </svg>
                  <p className="!leading-none">Product Design</p>
                </div>
                <div>
                  <svg width="44" height="44" viewBox="0 0 44 44" className="text-darkGray dark:text-pastelGrey inline-block" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9999 27.4999C13.6199 27.4999 13.2399 27.36 12.9399 27.06L8.93988 23.06C8.35988 22.48 8.35988 21.5199 8.93988 20.9399L12.9399 16.9399C13.5199 16.3599 14.4799 16.3599 15.0599 16.9399C15.6399 17.5199 15.6399 18.48 15.0599 19.06L12.1199 21.9999L15.0599 24.9399C15.6399 25.5199 15.6399 26.48 15.0599 27.06C14.7599 27.36 14.3799 27.4999 13.9999 27.4999Z" fill="currentcolor"></path>
                    <path d="M29.9999 27.4999C29.6199 27.4999 29.2399 27.36 28.9399 27.06C28.3599 26.48 28.3599 25.5199 28.9399 24.9399L31.8799 21.9999L28.9399 19.06C28.3599 18.48 28.3599 17.5199 28.9399 16.9399C29.5199 16.3599 30.4799 16.3599 31.0599 16.9399L35.0599 20.9399C35.6399 21.5199 35.6399 22.48 35.0599 23.06L31.0599 27.06C30.7599 27.36 30.3799 27.4999 29.9999 27.4999Z" fill="currentcolor"></path>
                    <path d="M22 43.5C10.14 43.5 0.5 33.86 0.5 22C0.5 10.14 10.14 0.5 22 0.5C33.86 0.5 43.5 10.14 43.5 22C43.5 33.86 33.86 43.5 22 43.5ZM22 3.5C11.8 3.5 3.5 11.8 3.5 22C3.5 32.2 11.8 40.5 22 40.5C32.2 40.5 40.5 32.2 40.5 22C40.5 11.8 32.2 3.5 22 3.5Z" fill="currentcolor"></path>
                    <path d="M20.0002 28.1601C19.8002 28.1601 19.6002 28.1201 19.4202 28.0401C18.6602 27.7201 18.3002 26.8402 18.6402 26.0602L22.6402 16.7201C22.9602 15.9601 23.8402 15.6 24.6002 15.94C25.3602 16.26 25.7202 17.1402 25.3802 17.9202L21.3802 27.2601C21.1402 27.8201 20.5802 28.1601 20.0002 28.1601Z" fill="#2F3236"></path>
                  </svg>
                  <p className="!leading-none">Product Design</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm opacity-70">
                  MY SERVICE AREA
                </p>
                <h6 className="font-semibold text-lg text-darkGray dark:text-pastelGrey group">
                  <a href="\#" className="flex items-center justify-between">
                    Service Details
                    <svg className="w-11 text-nobelGray group-hover:text-darkGray dark:text-slateGray dark:group-hover:text-white transition-all duration-300" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26 16.1284C26.4158 16.9337 26.9612 17.6894 27.6363 18.3644C31.151 21.8792 36.8495 21.8792 40.3642 18.3644C43.8789 14.8497 43.8789 9.15127 40.3642 5.63653C36.8495 2.12181 31.151 2.12181 27.6363 5.63653C26.9612 6.31161 26.4158 7.06729 26 7.87259" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M1 12H39L35 16M35 8L36.5 9.5" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
