import { NextPage } from "next";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { LinkBackHome } from "@src/components/LinkBackHome";
import { PageSEO } from "@src/components/PageSEO";

const Page: NextPage = () => {
  return (
    <>
      <PageSEO title="About" path="/about" />
      <ContentWrapper>
        <section className="about">
          <h1 className="about__title">About</h1>
          <div className="about__body">
            <p>
              このサイトは坦々狸のブログのRSSを一覧表示するサイトです。
            </p>
            <p>
              記事自体は他のブログサイトに投稿されています。
            </p>
            <p>
              詳しくは
              <a href="https://zenn.dev/tantan_tanuki/articles/559f4912028cea">
                闘わないコピペプログラマー 1 〜閉ざされた未来〜
              </a>
              をご覧ください。
            </p>
          </div>
          <div className="about__actions">
            <LinkBackHome />
          </div>
        </section>
      </ContentWrapper>
    </>
  );
};

export default Page;
