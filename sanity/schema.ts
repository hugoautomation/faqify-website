import { type SchemaTypeDefinition } from "sanity";
// documents
import page from "./schemas/documents/page";
import post from "./schemas/documents/post";
import author from "./schemas/documents/author";
import category from "./schemas/documents/category";
import faq from "./schemas/documents/faq";
import testimonial from "./schemas/documents/testimonial";
import navigation from "./schemas/documents/navigation";
import settings from "./schemas/documents/settings";
import contact from "./schemas/documents/contact";

// Schema UI shared objects
import blockContent from "./schemas/blocks/shared/block-content";
import link from "./schemas/blocks/shared/link";
import linkGroup from "./schemas/blocks/shared/link-group";
import { buttonVariant } from "./schemas/blocks/shared/button-variant";
import sectionPadding from "./schemas/blocks/shared/section-padding";
// Schema UI objects
import sectionHeader from "./schemas/blocks/section-header";
import hero12 from "./schemas/blocks/hero/hero12";
import faq1 from "./schemas/blocks/faq/faq1";
import logos1 from "./schemas/blocks/logos/logos1";
import feature1 from "./schemas/blocks/feature/feature1";
import featureContent from "./schemas/blocks/feature/feature-content";
import featureImage from "./schemas/blocks/feature/feature-image";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    page,
    post,
    author,
    category,
    faq,
    testimonial,
    navigation,
    settings,
    contact,
    // shared objects
    blockContent,
    link,
    linkGroup,
    buttonVariant,
    sectionPadding,
    // blocks
    sectionHeader,
    hero12,
    faq1,
    logos1,
    feature1,
    featureContent,
    featureImage,
  ],
};
