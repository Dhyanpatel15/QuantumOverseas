import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';
import { Reveal } from '../components/common/ReferenceSections';

const livePosts = [
  { title: 'Một Hành Trình Thành Viên Có Điều Kiện Rõ Ràng', excerpt: 'Trang chủ / Không gian thành viên Trải nghiệm theo cấp độ...', slug: 'mot-hanh-trinh-thanh-vien-co-dieu-kien-ro-rang' },
  { title: 'Hiểu Quy Trình Thanh Toán Trước Khi Thao Tác', excerpt: 'Trang chủ / Thanh toán và bảo mật Hướng dẫn có kiểm...', slug: 'hieu-quy-trinh-thanh-toan-truoc-khi-thao-tac' },
  { title: 'Hiểu Nhịp Bàn Trước Khi Tham Gia Phòng Trực Tiếp', excerpt: 'Trang chủ / Casino trực tiếp Không gian nội dung điện ảnh...', slug: 'hieu-nhip-ban-truoc-khi-tham-gia-phong-truc-tiep' },
];

function Sidebar() {
  return (
    <aside className="space-y-10">
      <div>
        <h4 className="mb-5 text-[22px] font-bold text-[#16171a]">Search</h4>
        <form className="flex" onSubmit={(event) => event.preventDefault()}>
          <input aria-label="Search" className="min-h-[58px] min-w-0 flex-1 bg-[#f5f5f7] px-4 text-sm outline-none" />
          <button aria-label="Submit search" className="flex w-[58px] items-center justify-center bg-[#e20935] text-white"><Search className="h-5 w-5" /></button>
        </form>
      </div>
      <div>
        <h4 className="mb-6 text-[22px] font-bold text-[#16171a]">Recent Posts</h4>
        <div className="divide-y divide-[#dedee0] border-y border-[#dedee0]">
          {[...livePosts].reverse().map((post) => <Link key={post.slug} to={`/blog/${post.slug}`} className="block py-5 text-[16px] font-bold leading-6 text-[#16171a] transition-colors hover:text-[#e20935]">{post.title}</Link>)}
        </div>
      </div>
    </aside>
  );
}

export default function BlogPage() {
  const { pathname } = useLocation();
  const grid = pathname.includes('blog-grid');

  return (
    <>
      <SEO title={`${grid ? 'Blog Grid' : 'Blog'} - Quantum Overseas`} description="Latest Quantum Overseas updates." canonical={grid ? '/blog-grid' : '/blog'} />
      <PageHeader title={grid ? 'Blog Grid' : 'Blog'} breadcrumb={[{ name: grid ? 'Blog Grid' : 'Blog' }]} />

      {grid ? (
        <main className="bg-white py-[120px]">
          <div className="qo-container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {livePosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 90}>
                <article className="group min-h-[500px] border border-[#ececee] bg-white px-[30px] pb-[35px] pt-5 transition-shadow hover:shadow-[0_20px_45px_rgba(22,23,26,.09)]">
                  <div className="relative mb-[92px] h-5 bg-[#f5f5f7]">
                    <span className="absolute left-[-20px] top-[-10px] flex h-[70px] w-[64px] flex-col items-center justify-center bg-[#e20935] text-white"><strong className="text-[18px]">29</strong><small className="text-[11px] uppercase">Aug</small></span>
                  </div>
                  <p className="mb-5 text-xs text-[#8a8c94]">rmdmhub@gmail.com &nbsp; Comments (0) &nbsp; No tags found</p>
                  <h3 className="mb-5 text-[24px] font-bold leading-[1.45] text-[#16171a] transition-colors group-hover:text-[#e20935]">{post.title}</h3>
                  <p className="mb-8 text-base leading-7 text-[#5e5f63]">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-3 text-sm font-bold text-[#16171a] hover:text-[#e20935]">Read More <ChevronRight className="h-4 w-4" /></Link>
                </article>
              </Reveal>
            ))}
          </div>
        </main>
      ) : (
        <main className="bg-white py-[120px]">
          <div className="qo-container grid gap-16 lg:grid-cols-[minmax(0,736px)_292px] lg:justify-between">
            <Reveal><h1 className="text-[48px] font-bold leading-[1.15] text-[#16171a]">Nothing Found</h1></Reveal>
            <Reveal delay={100}><Sidebar /></Reveal>
          </div>
        </main>
      )}
    </>
  );
}
