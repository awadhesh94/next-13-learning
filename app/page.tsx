import { HomeProps } from '../types/home';
import { HomeMock } from '@mocks/home-mock';
import Image from 'next/image';
import CenterNavigation from '@components/Navigation/CenterNavigation';

import Illuminated from '../public/assets/images/illuminated.svg';

import JavascriptLogo from '../public/assets/icons/javascript-logo.svg';
import ReactHookLogo from '../public/assets/icons/react-hooks-logo.svg';
import ReactLogo from '../public/assets/icons/react-logo.svg';
import ReactWithTypescriptLogo from '../public/assets/icons/react-with-typescript-logo.svg';
import TypescriptLogo from '../public/assets/icons/typescript-logo.svg';

const Home = () => {
  const { navigationsProps, pageTitle, pageDescription }: HomeProps = HomeMock;

  return (
    <div className="flex sm:flex-col items-center justify-center w-screen h-auto flex-col-reverse  sm:h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="flex flex-col items-center justify-cente">
        <div className="flex justify-center items-center">
          <Image
            src={Illuminated}
            alt="illuminated"
            className="w-72 h-72 duration-700 cursor-pointer hover:drop-shadow-pink"
          />
        </div>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <h1 className="drop-shadow-purple hover:drop-shadow-carrot cursor-pointer">{pageTitle}</h1>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="mt-16 mb-2 text-center animate-fade-in">
          <h2 className="text-base font-light cursor-pointer text-grayDark hover:text-biege md:w-[45rem] w-50 mx-6">
            {pageDescription}
          </h2>
          <div className="flex flex-row gap-5 justify-center items-center mt-10 sm:mb-0 mb-5 md:flex-nowrap flex-wrap">
            <Image
              src={JavascriptLogo}
              alt="javascript-logo"
              className="tech-stack-logo hover:drop-shadow-red"
            />
            <Image
              src={ReactLogo}
              alt="react-logo"
              className="tech-stack-logo hover:drop-shadow-biege"
            />
            <Image
              src={ReactHookLogo}
              alt="react-hooks-logo"
              className="tech-stack-logo hover:drop-shadow-green"
            />
            <Image
              src={ReactWithTypescriptLogo}
              alt="react-with-typescript-logo"
              className="tech-stack-logo hover:drop-shadow-blue"
            />
            <Image
              src={TypescriptLogo}
              alt="typescript-logo"
              className="tech-stack-logo hover:drop-shadow-biege"
            />
          </div>
        </div>
      </div>
      <CenterNavigation navigations={navigationsProps?.navigations || {}} />
    </div>
  );
};

export default Home;
