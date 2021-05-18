import { NextPage } from "next";
import Link from "next/link";
import { members } from "@members";
import posts from "@.contents/posts.json";
import { config } from "@site.config";
import { PostItem } from "@src/types";
import { ScrollableMembers } from "@src/components/ScrollableMembers";
import { PostList } from "@src/components/PostList";
import { PageSEO } from "@src/components/PageSEO";
import {
  ContentWrapper,
  UndoWrapForScroll,
} from "@src/components/ContentWrapper";

const Page: NextPage = () => {
  const {
    name,
    bio,
    avatarSrc,
    twitterUsername,
    githubUsername,
    websiteUrl,
  } = members[0];

  return (
    <>
      <PageSEO
        title={config.siteMeta.title}
        description={config.siteMeta.description}
        path="/"
        removeSiteNameFromTitle={true}
      />

      <section className="home-hero">
        <ContentWrapper>
          <h1 className="home-hero__title">
            {config.siteMeta.title}
            <Link href="/feed" passHref>
              <a className="site-header__link">
                <img
                  src="/icons/rss.svg"
                  alt="RSS" width={33} height={33}
                />
              </a>
            </Link>
          </h1>
          {!!config.siteMeta.description && (
            <p className="home-hero__description">
              {config.siteMeta.description}
            </p>
          )}
        </ContentWrapper>
      </section>

      <section className="member">
        <ContentWrapper>
          <div className="home-section-title-container">
            <h2 className="home-section-title">Author</h2>
          </div>
          <header className="member-header">
            <div className="member-header__avatar">
              <img
                src={avatarSrc}
                alt={name}
                width={100}
                height={100}
                className="member-header__avatar-img"
              />
            </div>
            <h1 className="member-header__name">{name}</h1>
            <p className="member-header__bio">{bio}</p>
            <div className="member-header__links">
              {twitterUsername && (
                <a
                  href={`https://twitter.com/${twitterUsername}`}
                  className="member-header__link"
                >
                  <img
                    src="/icons/twitter.svg"
                    alt={`Twitterのユーザー@${twitterUsername}`}
                    width={22}
                    height={22}
                  />
                </a>
              )}
              {githubUsername && (
                <a
                  href={`https://github.com/${githubUsername}`}
                  className="member-header__link"
                >
                  <img
                    src="/icons/github.svg"
                    alt={`GitHubのユーザー@${githubUsername}`}
                    width={22}
                    height={22}
                  />
                </a>
              )}
              {websiteUrl && (
                <a href={websiteUrl} className="member-header__link">
                  <img
                    src="/icons/link.svg"
                    alt={`ウェブサイトのリンク`}
                    width={22}
                    height={22}
                  />
                </a>
              )}
            </div>
          </header>
        </ContentWrapper>
      </section>

      <section className="home-posts">
        <ContentWrapper>
          <div className="home-section-title-container">
            <h2 className="home-section-title">Articles</h2>
          </div>

          <div className="home-posts-container">
            <PostList items={posts as PostItem[]} />
          </div>
        </ContentWrapper>
      </section>
    </>
  );
};

export default Page;
