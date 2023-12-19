import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import type PostType from "../../interfaces/post";
import LayoutDefault from "../../components/Blog/LayoutBlog";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <LayoutDefault
      ogTitle={post.title}
      ogDate={post.date}
      ogDescription={post.excerpt}
      ogKeywords={post.keywords}
      ogImageUrl={`https://www.clinicakarencampos.com.br${post.coverImage}`}
      ogOriginalUrl={`https://www.clinicakarencampos.com.br/blog/${post.slug}`}
    >
      <section className="hidden md:block mt-20 border-t relative py-20 md:py-32 z-10 bg-gradient-to-br bg-brand-200/60">
        <div className="max-w-4xl mx-auto">
          <div className="container">
            <h1 className="text-2xl md:text-4xl text-center text-white font-bold">
              {post.title}
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-zinc-100  pt-0 md:px-5 px-0">
        <div className="max-w-5xl mx-auto mt-20 bg-white relative rounded z-20 pb-5 md:py-12 lg:py-20 md:-mt-10 px-5 shadow-lg">
          <div className="container">
            <div className="col-span-2">
              {router.isFallback ? (
                <h1>Loading…</h1>
              ) : (
                <article id="blog" className="max-w-3xl mx-auto">
                  <figure className="overflow-hidden group rounded flex -mx-5  mb-4 ">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className=" group-hover:scale-110 duration-500 group-hover:rotate-2 "
                    />
                  </figure>
                  <h1 className="text-2xl md:text-3xl font-semibold pb-4 text-brand-200">
                    {post.title}
                  </h1>
                  <div
                    className="post_content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></div>
                </article>
              )}
            </div>
          </div>
        </div>
      </section>
    </LayoutDefault>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "excerpt",
    "keywords",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
