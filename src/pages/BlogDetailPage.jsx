import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';
import { Reveal } from '../components/common/ReferenceSections';
import blogs from '../content/blogs.json';

const referencePosts = [
  { slug: 'mot-hanh-trinh-thanh-vien-co-dieu-kien-ro-rang', title: 'Một Hành Trình Thành Viên Có Điều Kiện Rõ Ràng', content: 'Trang chủ / Không gian thành viên. Trải nghiệm theo cấp độ với quy trình rõ ràng và nội dung được sắp xếp dễ theo dõi.', date: '29 Aug', author: 'rmdmhub@gmail.com', image: '/images/01.jpg' },
  { slug: 'hieu-quy-trinh-thanh-toan-truoc-khi-thao-tac', title: 'Hiểu Quy Trình Thanh Toán Trước Khi Thao Tác', content: 'Trang chủ / Thanh toán và bảo mật. Hướng dẫn có kiểm soát để người dùng hiểu từng bước trước khi thao tác.', date: '29 Aug', author: 'rmdmhub@gmail.com', image: '/images/02-1.jpg' },
  { slug: 'hieu-nhip-ban-truoc-khi-tham-gia-phong-truc-tiep', title: 'Hiểu Nhịp Bàn Trước Khi Tham Gia Phòng Trực Tiếp', content: 'Trang chủ / Casino trực tiếp. Không gian nội dung điện ảnh với nhịp trải nghiệm được trình bày rõ ràng.', date: '29 Aug', author: 'rmdmhub@gmail.com', image: '/images/03-1.jpg' },
];

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = [...blogs, ...referencePosts].find((item) => item.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <SEO title={`${post.title} - Quantum Overseas`} description={post.excerpt || post.content} canonical={`/blog/${post.slug}`} />
      <PageHeader title={post.title} breadcrumb={[{ name: 'Blog', path: '/blog-grid' }, { name: post.title }]} />
      <main className="bg-white py-[120px]">
        <div className="qo-container grid items-start gap-14 lg:grid-cols-[minmax(0,847px)_292px] lg:justify-between">
          <Reveal>
            <article>
              <img src={post.image || '/images/01.jpg'} alt={post.title} className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[500px]" />
              <p className="mb-5 mt-7 text-sm text-[#8a8c94]">{post.date || '29 Aug'} &nbsp; {post.author || 'Quantum Overseas'} &nbsp; Comments (0)</p>
              <h2 className="mb-5 text-[38px] font-bold leading-[1.22] text-[#16171a]">{post.title}</h2>
              <p className="text-base leading-7 text-[#5e5f63]">{post.content}</p>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <aside>
              <h4 className="mb-5 text-[22px] font-bold text-[#16171a]">Search</h4>
              <form className="mb-10 flex" onSubmit={(event) => event.preventDefault()}><input aria-label="Search" className="min-h-[58px] min-w-0 flex-1 bg-[#f5f5f7] px-4 outline-none" /><button aria-label="Search posts" className="flex w-[58px] items-center justify-center bg-[#e20935] text-white"><Search className="h-5 w-5" /></button></form>
              <h4 className="mb-5 text-[22px] font-bold text-[#16171a]">Recent Posts</h4>
              <div className="divide-y divide-[#dedee0] border-y border-[#dedee0]">{referencePosts.map((item) => <Link key={item.slug} to={`/blog/${item.slug}`} className="block py-5 text-base font-bold leading-6 text-[#16171a] hover:text-[#e20935]">{item.title}</Link>)}</div>
            </aside>
          </Reveal>
        </div>
      </main>
    </>
  );
}
