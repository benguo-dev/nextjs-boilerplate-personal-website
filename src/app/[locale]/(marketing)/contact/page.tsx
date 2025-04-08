import { getTranslations, setRequestLocale } from 'next-intl/server';

type IAboutProps = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata(props: IAboutProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Contact',
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
  //   namespace: 'Contact',
  // });

  return (
    <>
      <div className="container space-y-6">

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="grid sm:grid-cols-2 gap-6 items-start aos-init aos-animate" data-aos="fade-up">
            <div className="rounded-2xl max-md:p-4 p-6 xl:px-10 bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack border border-flasWhite dark:border-flasBlack">
              <div className="icon w-15 h-15 lg:w-20 lg:h-20 rounded-full flex justify-center items-center sm:mb-4 border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                <svg className="w-8 lg:w-10 text-darkGray dark:text-pastelGrey" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.6468 35C26.0671 35 24.4035 34.6233 22.6841 33.8977C21.0065 33.186 19.315 32.2093 17.6654 31.0233C16.0298 29.8233 14.4501 28.4837 12.9543 27.0186C11.4725 25.5256 10.1305 23.9488 8.94222 22.3302C7.73998 20.6558 6.7754 18.9814 6.0904 17.3628C5.36347 15.6326 5 13.9581 5 12.3814C5 11.293 5.19571 10.2605 5.57316 9.29767C5.96459 8.30698 6.59366 7.38605 7.44641 6.5907C8.52283 5.53023 9.75303 5 11.0671 5C11.6123 5 12.1715 5.12558 12.6468 5.34884C13.192 5.6 13.6533 5.97674 13.9888 6.47907L17.2321 11.0419C17.5256 11.4465 17.7493 11.8372 17.9031 12.2279C18.0848 12.6465 18.1827 13.0651 18.1827 13.4698C18.1827 14 18.0289 14.5163 17.7353 15.0047C17.5256 15.3814 17.2041 15.786 16.7987 16.1907L15.8481 17.1814C15.8621 17.2233 15.876 17.2512 15.89 17.2791C16.0578 17.5721 16.3933 18.0744 17.0363 18.8279C17.7213 19.6093 18.3644 20.3209 19.0075 20.9767C19.8322 21.786 20.5172 22.4279 21.1603 22.9581C21.9571 23.6279 22.7819 24.1163 22.7819 24.1163V24.1163L23.7745 23.1814C24.2078 22.7488 24.6272 22.4279 25.0326 22.2186C25.8015 21.7442 26.7801 21.6605 27.7586 22.0651C28.1221 22.2186 28.5135 22.4279 28.9329 22.7209L33.5741 26.014C34.0913 26.3628 34.4688 26.8093 34.6925 27.3395C34.9021 27.8698 35 28.3581 35 28.8465C35 29.5163 34.8462 30.186 34.5527 30.814C34.2591 31.4419 33.8956 31.986 33.4343 32.4884C32.6375 33.3674 31.7707 33.9953 30.7642 34.4C29.7996 34.7907 28.7512 35 27.6468 35ZM11.0671 7.09302C10.2982 7.09302 9.58527 7.42791 8.90028 8.09767C8.25722 8.69767 7.80988 9.35349 7.53029 10.0651C7.23672 10.7907 7.09692 11.5581 7.09692 12.3814C7.09692 13.6791 7.40447 15.0884 8.01957 16.5395C8.64865 18.0186 9.52936 19.5535 10.6477 21.0884C11.7661 22.6233 13.0382 24.1163 14.4362 25.5256C15.8341 26.907 17.3439 28.1907 18.8956 29.3209C20.4054 30.4233 21.9571 31.3163 23.4949 31.9581C25.8854 32.9767 28.1221 33.214 29.9674 32.4465C30.6803 32.1535 31.3094 31.707 31.8826 31.0651C32.2041 30.7163 32.4557 30.3395 32.6654 29.893C32.8332 29.5442 32.9171 29.1814 32.9171 28.8186C32.9171 28.5953 32.8751 28.3721 32.7633 28.1209C32.7213 28.0372 32.6375 27.8837 32.3719 27.7023L27.7307 24.4093C27.4511 24.214 27.1994 24.0744 26.9618 23.9767C26.6542 23.8512 26.5284 23.7256 26.0531 24.0186C25.7735 24.1581 25.5219 24.3674 25.2423 24.6465L24.1799 25.693C23.6347 26.2233 22.7959 26.3488 22.1528 26.1116L21.7754 25.9442C21.2022 25.6372 20.5312 25.1628 19.7903 24.5349C19.1193 23.9628 18.3924 23.293 17.5116 22.4279C16.8267 21.7302 16.1417 20.9907 15.4287 20.1674C14.7717 19.4 14.2964 18.7442 14.0028 18.2L13.835 17.7814C13.7512 17.4605 13.7232 17.2791 13.7232 17.0837C13.7232 16.5814 13.9049 16.1349 14.2544 15.786L15.3029 14.6977C15.5825 14.4186 15.7922 14.1535 15.932 13.9163C16.0438 13.7349 16.0857 13.5814 16.0857 13.4419C16.0857 13.3302 16.0438 13.1628 15.9739 12.9953C15.876 12.7721 15.7223 12.5209 15.5266 12.2558L12.2833 7.67907C12.1435 7.48372 11.9758 7.34419 11.7661 7.24651C11.5424 7.14884 11.3048 7.09302 11.0671 7.09302ZM22.7819 24.1163V24.1163V24.1163C22.712 24.1023 22.8099 24.0884 22.7819 24.1163Z" fill="currentcolor"></path>
                </svg>
              </div>
              <div className="description">
                <h6 className="font-semibold text-xl xl:text-2xl text-darkGray dark:text-pastelGrey">
                  <a href="tel:+0123456789">
                    +0123 456 789
                  </a>
                </h6>
                <p>
                  Phone Number
                </p>
              </div>
            </div>

            <div className="rounded-2xl max-md:p-4 p-6 xl:px-10 bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack border border-flasWhite dark:border-flasBlack">
              <div className="icon w-15 h-15 lg:w-20 lg:h-20 rounded-full flex justify-center items-center sm:mb-4 border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                <svg className="w-8 lg:w-10 text-darkGray dark:text-pastelGrey" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.334 35.4168H11.6673C5.58398 35.4168 2.08398 31.9168 2.08398 25.8335V14.1668C2.08398 8.0835 5.58398 4.5835 11.6673 4.5835H28.334C34.4173 4.5835 37.9173 8.0835 37.9173 14.1668V25.8335C37.9173 31.9168 34.4173 35.4168 28.334 35.4168ZM11.6673 7.0835C6.90065 7.0835 4.58398 9.40016 4.58398 14.1668V25.8335C4.58398 30.6002 6.90065 32.9168 11.6673 32.9168H28.334C33.1007 32.9168 35.4173 30.6002 35.4173 25.8335V14.1668C35.4173 9.40016 33.1007 7.0835 28.334 7.0835H11.6673Z" fill="currentcolor"></path>
                  <path d="M20 21.4499C18.6 21.4499 17.1833 21.0166 16.1 20.1333L10.8833 15.9666C10.35 15.5333 10.25 14.7499 10.6833 14.2166C11.1166 13.6833 11.9 13.5833 12.4333 14.0166L17.6499 18.1833C18.9166 19.2 21.0666 19.2 22.3333 18.1833L27.55 14.0166C28.0833 13.5833 28.8833 13.6666 29.3 14.2166C29.7333 14.7499 29.65 15.55 29.1 15.9666L23.8833 20.1333C22.8166 21.0166 21.4 21.4499 20 21.4499Z" fill="currentcolor"></path>
                </svg>
              </div>
              <div className="description">
                <h6 className="font-semibold text-xl xl:text-2xl text-darkGray dark:text-pastelGrey">
                  <a href="mailto:alex@gmail.com">alex@gmail.com</a>
                </h6>
                <p>
                  My Contact Mail
                </p>
              </div>
            </div>
            <div className="contact-map sm:col-span-2 rounded-2xl overflow-hidden relative">
              <iframe title="google map" className="w-full h-80" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5898.94195686004!2d-71.05058320763719!3d42.33248101904471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a8da85c5995%3A0xf103dd123258d82b!2sTelegraph%20Hill%2C%20Boston%2C%20MA%2002127%2C%20USA!5e0!3m2!1sen!2sbd!4v1714472705494!5m2!1sen!2sbd"></iframe>
              <div className="absolute bottom-4 right-4 left-4 xl:bottom-6 xl:right-6 xl:left-6 p-4 xl:p-6 rounded-xl flex flex-wrap items-start gap-6 bg-[#fdfdfd] dark:bg-[#1d1d1e] border border-flasWhite dark:border-flasBlack">
                <div className="icon w-15 h-15 flex-[0_0_3.75rem] rounded-full flex justify-center items-center sm:mb-4 border border-flasWhite dark:border-flasBlack">
                  <svg className="w-6 text-darkGray dark:text-pastelGrey" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0009 13.4299C13.724 13.4299 15.1209 12.0331 15.1209 10.3099C15.1209 8.58681 13.724 7.18994 12.0009 7.18994C10.2777 7.18994 8.88086 8.58681 8.88086 10.3099C8.88086 12.0331 10.2777 13.4299 12.0009 13.4299Z" stroke="currentcolor" strokeWidth="1.5"></path>
                    <path d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z" stroke="currentcolor" strokeWidth="1.5"></path>
                  </svg>
                </div>
                <div className="description flex-1">
                  <h5 className="text-darkGray dark:text-pastelGrey font-bold text-lg lg:text-xl xl:text-2xl">
                    Currently Living
                  </h5>
                  <p>
                    2350 Jericho Turnpike, Garden City Park, NY 11040, United States
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div className="rounded-2xl max-md:p-4 p-6 xl:px-10 bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack border border-flasWhite dark:border-flasBlack aos-init aos-animate" data-aos="fade-up">

            <h3 className="font-bold text-darkGray dark:text-pastelGrey text-xl lg:text-2xl ">
              Send an e-mail
            </h3>
            <p>
              for your inquiry and ideas
            </p>
            <form action="contact-form.php" method="post" className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="input-item">
                <input type="text" name="clientName" className="rounded-4xl" placeholder="Name" required={true} />
              </div>
              <div className="input-item">
                <input type="email" name="clientEmail" className="rounded-4xl" placeholder="email" required={true} />
              </div>
              <div className="input-item sm:col-span-2">
                <input type="text" name="contactSubject" className="rounded-4xl" placeholder="Subject" />
              </div>
              <div className="input-item sm:col-span-2">
                <textarea name="contact__message" rows={10} className="rounded-2xl resize-none" placeholder="Description"></textarea>
              </div>
              <div className="input-item sm:col-span-2 text-center lg:text-end">
                <button type="submit" className="text-regular text-darkGray font-semibold py-2 lg:py-3 px-7 lg:px-10 inline-flex transition-all duration-200 rounded-full dark:text-pastelGrey hover:bg-none hover:bg-darkGray hover:text-white border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </>
  );
};
