import { format, formatDistance, subDays } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import React from 'react';
import SideBar from '../../components/Blog/SideBar';
import HeroPage from '../../components/Hero/HeroPage';
import Layout from '../../components/Layout';
import PostType from '../../interfaces/post';
import { getAllPosts } from '../../lib/api';

type Props = {
  allPosts: PostType[];
};
const BlogPage = ({ allPosts }: Props) => {
  return (
    <Layout
      ogTitle="Blog"
      ogOriginalUrl="/"
      ogDescription="Fique por dentro das últimas notícias"
    >
      <HeroPage
        title="Blog"
        subtitle="Fique por dentro das últimas notícias"
        imgSrc="https://via.placeholder.com/1920x490"
      />
      <section className="bg-zinc-100">
        <div className="row">
          <div className="container md:grid grid-cols-3 gap-32">
            <div className="col-span-2 flex flex-col divide-y -mt-5">
              {allPosts.map((post, item) => (
                <article key={item} className="bg-white group my-5">
                  <figure className="overflow-hidden">
                    <img
                      className="group-hover:scale-110 duration-500"
                      src={post.coverImage}
                      alt={post.title}
                      title={post.title}
                    />
                  </figure>
                  <span className="ml-8 -mt-5 block w-fit z-10 relative rounded bg-brand-200 text-white px-3 py-2 text-sm">
                    CrypTaj |{' '}
                    {formatDistance(
                      subDays(
                        //data do post
                        new Date(post.date),
                        //data minima, caso seja inferior a um dia ele vai colocar o valor abaixo
                        0
                      ),
                      new Date(),
                      { addSuffix: true, locale: ptBR }
                    )}{' '}
                  </span>
                  <div className="p-8">
                    <h1 className="text-xl font-bold mb-3 text-brand-200">{post.title}</h1>
                    <p className="text-black">{post.excerpt}</p>
                    <a
                      href={`/blog/${post.slug}`}
                      className="bg-brand-200 text-white py-2 px-10 mt-4 block w-fit rounded"
                    >
                      Saiba Mais
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <SideBar data={allPosts} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
