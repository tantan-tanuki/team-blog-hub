import { GetServerSidePropsContext } from 'next';
import posts from "@.contents/posts.json";
import { config } from "@site.config";

import RSS from 'rss';

async function generateFeedXml() {
  const feed = new RSS({
    title: config.siteMeta.title,
    description: config.siteMeta.description,
    site_url: config.siteRoot,
    feed_url: `${config.siteRoot}/feed`,
    language: 'ja',
  });

  // 例としてpostsを含めるイメージ
  // このあたりの書き方はライブラリのドキュメントを参考にしてください
  posts?.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.contentSnippet,
      date: new Date(post.isoDate),
      url: post.link,
    });
  })
  
  // XML形式の文字列にする
  return feed.xml();
}

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  const xml = await generateFeedXml(); // フィードのXMLを生成する（後述）

  res.statusCode = 200;
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // 24時間キャッシュする
  res.setHeader('Content-Type', 'text/xml');
  res.end(xml);

  return {
    props: {},
  };
};

const Page = () => null;
export default Page;