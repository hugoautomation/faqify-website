import { PAGE_QUERYResult } from "@/sanity.types";
import SectionHeader from "@/components/blocks/section-header";
import Hero12 from "@/components/blocks/hero/hero12";
import Hero13 from "@/components/blocks/hero/hero13";
import Hero25 from "@/components/blocks/hero/hero25";
import Hero57 from "@/components/blocks/hero/hero57";
import Hero85 from "@/components/blocks/hero/hero85";
import Logos1 from "@/components/blocks/logos1";
import FAQ1 from "@/components/blocks/faq/faq1";
import Feature1 from "@/components/blocks/feature/feature1";
import Feature3 from "@/components/blocks/feature/feature3";
import Feature12 from "@/components/blocks/feature/feature12";
import Feature15 from "@/components/blocks/feature/feature15";
import Feature66 from "@/components/blocks/feature/feature66";
import Feature117 from "@/components/blocks/feature/feature117";
import Feature157 from "@/components/blocks/feature/feature157";
import Feature202 from "@/components/blocks/feature/feature202";

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number];

const componentMap: {
  [K in Block["_type"]]: React.ComponentType<Extract<Block, { _type: K }>>;
} = {
  "section-header": SectionHeader,
  "hero-12": Hero12,
  "hero-13": Hero13,
  "hero-25": Hero25,
  "hero-57": Hero57,
  "hero-85": Hero85,
  "faq-1": FAQ1,
  "logos-1": Logos1,
  "feature-1": Feature1,
  "feature-3": Feature3,
  "feature-12": Feature12,
  "feature-15": Feature15,
  "feature-66": Feature66,
  "feature-117": Feature117,
  "feature-157": Feature157,
  "feature-202": Feature202,
};

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks?.map((block) => {
        const Component = componentMap[block._type];
        if (!Component) {
          // Fallback for development/debugging of new component types
          console.warn(
            `No component implemented for block type: ${block._type}`
          );
          return <div data-type={block._type} key={block._key} />;
        }
        return <Component {...(block as any)} key={block._key} />;
      })}
    </>
  );
}
