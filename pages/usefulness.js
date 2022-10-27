import Head from "next/head";
import { createClient } from "contentful";
import Link from "next/link";
import useRouter from "next/router";
import ArrowIcon from "../components/ArrowIcon";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const PAGE_LIMIT = 6;
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
      "fields.category[in]": "полезности",
      order: "-sys.createdAt",
   });

   return {
      props: {
         posts: posts,
         page: +page,
      },
   };
}

const Usefulness = ({ posts, page }) => {
   const router = useRouter;
   const lastPage = Math.ceil(posts.total / PAGE_LIMIT);
   return (
      <section className="usefulness-section">
         <Head>
            <title>Полезности</title>
         </Head>
         <Container>
            <h1 className="usefulness-section__title main-title-margin text-center text-green-200">
               Полезности
            </h1>
            <Row className="mb-5">
               {posts.items.map((post) => (
                  <Col md={4} key={post.sys.id}>
                     <Link href={`/post/${post.sys.id}`}>
                        <Card
                           style={{
                              width: "100%",
                              border: "none",
                           }}
                           className="cursor-pointer"
                        >
                           <Card.Img
                              variant="top"
                              src={`http://${post.fields.image.fields.file.url}`}
                           />
                           <Card.Body>
                              <Card.Title as="h4">
                                 {post.fields.title}
                              </Card.Title>

                              <Button className="pink-button card-button">
                                 <span>Читать</span>
                                 <ArrowIcon />
                              </Button>
                           </Card.Body>
                        </Card>
                     </Link>
                  </Col>
               ))}
            </Row>
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
      </section>
   );
};

export default Usefulness;
