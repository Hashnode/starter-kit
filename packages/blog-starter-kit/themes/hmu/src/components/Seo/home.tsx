import { addPublicationJsonLd } from "@/lib/seo/addPublicationJsonLd";
import Head from "next/head";

//TODO: update this with generatemetaData Component
const SeoHome = ({ publication }: { publication: any }) => {
  return (
    <Head>
      <script
        id="ldjson"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(addPublicationJsonLd(publication)),
        }}
      />
    </Head>
  );
};

export default SeoHome;
