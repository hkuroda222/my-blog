import fs from 'fs';
import { NextPage } from 'next';
import Link from 'next/link';
import matter from 'gray-matter';

import Head from 'next/head';

const Home: NextPage<{
  posts: Array<{
    frontMatter: { date: string; description: string; title: string };
    slug: string;
  }>;
}> = (props) => {
  const { posts } = props;
  console.log(posts);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="my-8">
          {posts.map((post) => (
            <div key={post.slug}>
              <Link href={`posts/${post.slug}`}>{post.frontMatter.title}</Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export const getStaticProps = () => {
  // posts内のファイルを配列で取得
  const files = fs.readdirSync('./src/posts');

  // ファイルの中身を取得
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, ''); // 末尾の.mdを削除
    const fileContent = fs.readFileSync(`./src/posts/${fileName}`, 'utf-8');
    const { data } = matter(fileContent); // front-matterを取得
    return { frontMatter: data, slug: slug };
  });
  return {
    props: {
      posts: posts,
    },
  };
};

export default Home;
