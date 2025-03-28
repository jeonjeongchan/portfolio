import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

/**
 * @description SEO를 위해 본인의 정보로 수정해주세요.
 */
const DEFAULT_SEO = {
  title: "전정찬 | 포트폴리오",
  description: "안녕하세요, 풀스택 개발자 전정찬입니다.",
  canonical: "https://www.naver.com/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.naver.com/",
    title: "전정찬 | 포트폴리오",
    site_name: "전정찬 | 포트폴리오",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "전정찬 | 포트폴리오",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "전정찬 | 포트폴리오",
    },
    {
      name: "msapplication-tooltip",
      content: "전정찬 | 포트폴리오",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
