import Image from 'next/image';

export const GitHubLink = () => (
  <div className="fixed bottom-0 right-0 z-10">
    <a href="https://github.com/benguo-dev/nextjs-boilerplate-personal-website" target="_blank" rel="noreferrer noopener">
      <div className="w-15 h-15 mr-5 mb-5">
        <Image src="/assets/images/GitHub.png" alt="GitHub Profile" width={60} height={60} className="bg-[#F5F7F9] dark:bg-[#222428]" />
      </div>
    </a>
  </div>
);
