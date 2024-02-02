import Link from "next/link";
import BentoCard, {
  BentoCardType,
  BentoContainer,
  BentoFlavicon,
  BentoImage,
  BentoLink,
  BentoSubtitle,
  BentoTitle,
  BentoToolTip,
} from "../BentoCard";

const data = {
  flavicon: "",
  title: "",
  description: "",
  thumbnail: "",
};

// staticdata.data.publication.links.github

type linkPreviewType = {
  link: string;
  type: BentoCardType;
};

async function LinkPreview({ link, type }: linkPreviewType) {
  const url = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
  const res = await fetch(`${url}/api/linkpreview?link=${link}`);

  const data = await res.json();

  return (
    <BentoCard type={type}>
      <BentoContainer type={type}>
        <div className="flex flex-col gap-2">
          {/* <BentoFlavicon src={link + "/favicon.ico"} type={type} /> */}
          <BentoTitle type={type}>{data?.title}</BentoTitle>
          <BentoSubtitle type={type}>{data?.description}</BentoSubtitle>
        </div>
        <BentoImage type={type} alt={data?.description} src={data?.ogImage}>
          <BentoToolTip type={type}>
            {link.replace("https://", "")}
          </BentoToolTip>
        </BentoImage>
      </BentoContainer>
      <BentoLink href={link} />
    </BentoCard>
  );
}

export default LinkPreview;
