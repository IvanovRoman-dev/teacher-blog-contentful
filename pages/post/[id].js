import { createClient } from "contentful";
import { useRouter } from "next/router";
import Image from "next/future/image";
import { Container, Button } from "react-bootstrap";
import moment from "moment";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ArrowIcon from "../../components/ArrowIcon";
import DateIcon from "../../components/DateIcon";

const client = createClient({
   space: process.env.CONTENTFUL_SPACE_ID,
   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
   const posts = await client.getEntries({
      content_type: "blogPost",
   });

   const paths = posts.items.map((post) => {
      return { params: { id: post.sys.id.toString() } };
   });

   return {
      paths,
      fallback: false,
   };
}

export async function getStaticProps({ params }) {
   const post = await client.getEntries({
      content_type: "blogPost",
      "sys.id": params.id,
   });
   return {
      props: {
         post: post.items,
      },
   };
}

const SignlePostPage = ({ post }) => {
   const router = useRouter();

   const PostImages = {
      renderNode: {
         [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const ImageURL = node.data.target.fields.file.url;
            const ImageALT = node.data.target.fields.file.fileName;
            return (
               <div className="text-center">
                  <Image
                     width={1920}
                     height={1080}
                     src={`http:${ImageURL}`}
                     alt={ImageALT}
                     className="img-fluid post__image"
                  />
               </div>
            );
         },
      },
   };
   return (
      <article className="post">
         <Container>
            <Button onClick={() => router.back()} className="pink-button">
               <ArrowIcon />
               {"Обратно"}
            </Button>
            <h1 className="text-green-200">{post[0].fields.title}</h1>
            <p className="post-date">
               <DateIcon />
               {moment(post[0].fields.publeshedDate).format("DD.MM.YYYY")}
            </p>
            <div>
               {documentToReactComponents(post[0].fields.content, PostImages)}
            </div>
         </Container>
      </article>
   );
};

export default SignlePostPage;
