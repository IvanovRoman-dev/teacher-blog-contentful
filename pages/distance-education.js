import Head from "next/head";
import { createClient } from "contentful";
import Link from "next/link";
import useRouter from "next/router";
import Image from "next/future/image";
import { Container, Button } from "react-bootstrap";
import ArrowIcon from "../components/ArrowIcon";
import moment from "moment";

const PAGE_LIMIT = 5;
export async function getServerSideProps({ query: { page = 1 } }) {
   const PAGE_START = +page === 1 ? 0 : (+page - 1) * PAGE_LIMIT;

   const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
   });

   const posts = await client.getEntries({
      content_type: "blogPost",
      limit: PAGE_LIMIT,
      skip: PAGE_START,
      "fields.category[in]": "дистанционка",
      order: "-sys.createdAt",
   });

   return {
      props: {
         posts: posts,
         page: +page,
      },
   };
}

const distanceEducation = ({ posts, page }) => {
   const router = useRouter;
   const lastPage = Math.ceil(posts.total / PAGE_LIMIT);
   return (
      <section className="distance-education">
         <Head>
            <title>Дистанционное обучение</title>
         </Head>
         <Container>
            <h1 className="distance-education__title text-center main-title-margin">
               Задания для{" "}
               <span className="text-green-200">дистанционного обучения</span>
            </h1>
            <div className="distance-education__posts">
               {posts.items.map((post) => (
                  <div className="distance-education__post" key={post.sys.id}>
                     <Link href={`/post/${post.sys.id}`}>
                        <div className="distance-education__post-link">
                           <div className="distance-education__post-col--1">
                              <Image
                                 src={`http:${post.fields.image.fields.file.url}`}
                                 className="distance-education__post-image"
                                 width="1920"
                                 height="1080"
                                 alt="post-image"
                                 // alt={post.fields.image.fields.file.title}
                              />
                              <div className="distance-education__post-info">
                                 <h3 className="distance-education__post-title">
                                    {post.fields.title}
                                 </h3>
                                 <p className="distance-education__post-date">
                                    {moment(post.fields.publeshedDate).format(
                                       "DD.MM.YYYY"
                                    )}
                                 </p>
                              </div>
                           </div>
                           <div className="distance-education__post-col--2">
                              <a className="wave-link link--iocaste">
                                 <span>Читать дальше</span>
                                 <ArrowIcon />
                                 <svg
                                    className="link__graphic link__graphic--slide"
                                    width="300%"
                                    height="100%"
                                    viewBox="0 0 1200 60"
                                    preserveAspectRatio="none"
                                 >
                                    <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
                                 </svg>
                              </a>
                           </div>
                        </div>
                     </Link>
                  </div>
               ))}
            </div>
            <div className="distance-education__pagination">
               <Button
                  onClick={() =>
                     router.push(`/distance-education?page=${page - 1}`)
                  }
                  disabled={page <= 1}
                  className="pink-button"
               >
                  <ArrowIcon />
                  {"Позже"}
               </Button>
               <Button
                  onClick={() =>
                     router.push(`/distance-education?page=${page + 1}`)
                  }
                  disabled={page >= lastPage}
                  className="pink-button"
               >
                  {"Раньше"}
                  <ArrowIcon />
               </Button>
            </div>
         </Container>

         {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      </section>
   );
};

export default distanceEducation;
