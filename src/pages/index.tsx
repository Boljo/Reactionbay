import { GetServerSideProps } from 'next';
import Head from 'next/head';
import LandingPage from '../components/LandingPage';
import { getLocaleFromHost, Locale } from '../utils/i18n';

interface HomeProps {
  locale: Locale;
}

export default function Home({ locale }: HomeProps) {
  return (
    <>
      <Head>
        <title>ReactionBay - The Amazon of Scientific Equipment</title>
        <meta name="description" content="Discover premium scientific instruments from Bruker, Thermo Fisher, and leading manufacturers. Coming soon to revolutionize your research." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage locale={locale} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
  const host = context.req.headers.host || '';
  const locale = getLocaleFromHost(host);

  return {
    props: {
      locale,
    },
  };
};
