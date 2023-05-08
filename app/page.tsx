import { HomeProps } from '../types/home';
import { HomeMock } from '@mocks/home-mock';
import CenterNavigation from '@components/Navigation/CenterNavigation';

const Home = () => {
  const { navigationsProps, pageTitle, pageDescription }: HomeProps = HomeMock;

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <CenterNavigation navigations={navigationsProps?.navigations || {}} />
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1>{pageTitle}</h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-grayDark hover:text-biege sm:w-[45rem] w-64">
          {pageDescription}
        </h2>
      </div>
    </div>
  );
};

export default Home;
