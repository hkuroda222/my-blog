import Image from 'next/image';
import Link from 'next/link';

export const Card: React.FC<{ post: any }> = (props) => {
  const { post } = props;
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="border rounded-lg">
        <Image
          src={`/static/images/${post.frontMatter.image}`}
          width={240}
          height={200}
          alt={post.frontMatter.title}
        />
      </div>
      <div className="px-2 py-4">
        <h1 className="font-bold text-lg">{post.frontMatter.title}</h1>
        <span>{post.frontMatter.date}</span>
      </div>
    </Link>
  );
};
