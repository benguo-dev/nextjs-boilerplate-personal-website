import Link from 'next/link';

export const Footer = () => (
  <footer className="mt-24 pb-8 aos-init aos-animate" data-aos="fade-up">
    <div className="container mx-auto text-center space-y-6 border-t-1 border-gray-300 dark:border-flasBlack pt-8">
      <h5 className="text-powerBlack dark:text-pastelGrey font-semibold text-4xl xl:text-6xl">Let's Talk</h5>
      <p>
        <Link href="#" className="text-powerBlack dark:text-pastelGrey py-4 px-12 rounded-4xl bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack text-regular xl:text-lg inline-flex items-center border border-gray-100  dark:border-white/5">
          youremail@domain.com
        </Link>
      </p>
      <p>{`© Copyright ${new Date().getFullYear()} All Rights Reserved `}</p>
    </div>
  </footer>
);
