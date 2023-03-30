import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 border-b z-10 bg-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center h-12">
        {/* todo: ロゴ作る */}
        <Link href="/">Homeへ</Link>
        <div>メニュー</div>
      </div>
    </header>
  );
};
