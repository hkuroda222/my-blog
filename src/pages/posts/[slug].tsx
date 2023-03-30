import React from 'react';
import { NextPage } from 'next';
import fs from 'fs';
import matter from 'gray-matter';

const Post: NextPage<{
  frontMatter: { date: string; description: string; title: string };
  content: string;
}> = (props) => {
  const { frontMatter, content } = props;
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <div>{content}</div>
    </div>
  );
};

export async function getStaticProps(context) {
  const params = context.params;
  const file = fs.readFileSync(`./src/posts/${params.slug}.md`, 'utf-8');
  const { data, content } = matter(file);

  return { props: { frontMatter: data, content: content } };
}

export async function getStaticPaths() {
  const files = fs.readdirSync('./src/posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default Post;
