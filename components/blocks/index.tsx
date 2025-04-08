import { PAGE_QUERYResult } from "@/sanity.types";
import SectionHeader from "@/components/blocks/section-header";
import Hero12 from "@/components/blocks/hero12";
import Logos1 from "@/components/blocks/logos1";
import FAQ1 from "@/components/blocks/faq/faq1";
import Feature1 from "@/components/blocks/feature/feature1";
import Feature3 from "@/components/blocks/feature/feature3";

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number];

const componentMap: {
  [K in Block["_type"]]: React.ComponentType<Extract<Block, { _type: K }>>;
} = {
  "section-header": SectionHeader,
  "hero-12": Hero12,
  "faq-1": FAQ1,
  "logos-1": Logos1,
  "feature-1": Feature1,
  "feature-3": Feature3,
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
