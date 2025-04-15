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
import linkIcon from "./schemas/blocks/shared/link-icon";
import linkGroup from "./schemas/blocks/shared/link-group";
import { buttonVariant } from "./schemas/blocks/shared/button-variant";
import sectionPadding from "./schemas/blocks/shared/section-padding";
// Schema UI objects
import sectionHeader from "./schemas/blocks/section-header";
import hero12 from "./schemas/blocks/hero/hero12";
import hero13 from "./schemas/blocks/hero/hero13";
import faq1 from "./schemas/blocks/faq/faq1";
import logos1 from "./schemas/blocks/logos/logos1";
// Feature 1
import feature1 from "./schemas/blocks/feature/feature1";
import featureContent from "./schemas/blocks/feature/feature1/feature-content";
import featureImage from "./schemas/blocks/feature/feature1/feature-image";
// Feature 3
import feature3 from "./schemas/blocks/feature/feature3";
import feature3Card from "./schemas/blocks/feature/feature3/feature3-card";
// Feature 12
import feature12 from "./schemas/blocks/feature/feature12";
import feature12Card from "./schemas/blocks/feature/feature12/feature12-card";
// Feature 15
import feature15 from "./schemas/blocks/feature/feature15";
import feature15Card from "./schemas/blocks/feature/feature15/feature15-card";
// Feature 66
import feature66 from "./schemas/blocks/feature/feature66";
import feature66Card from "./schemas/blocks/feature/feature66/feature66-card";
// Feature 117
import feature117 from "./schemas/blocks/feature/feature117";
import feature117Card from "./schemas/blocks/feature/feature117/feature117-card";
// Feature 157
import feature157 from "./schemas/blocks/feature/feature157";
import feature157Card from "./schemas/blocks/feature/feature157/feature157-card";
// Feature 202
import feature202 from "./schemas/blocks/feature/feature202";
import feature202Card from "./schemas/blocks/feature/feature202/feature202-card";

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
    linkIcon,
    linkGroup,
    buttonVariant,
    sectionPadding,
    // blocks
    sectionHeader,
    hero12,
    hero13,
    faq1,
    logos1,
    // Feature 1
    feature1,
    featureContent,
    featureImage,
    // Feature 3
    feature3,
    feature3Card,
    // Feature 12
    feature12,
    feature12Card,
    // Feature 15
    feature15,
    feature15Card,
    // Feature 66
    feature66,
    feature66Card,
    // Feature 117
    feature117,
    feature117Card,
    // Feature 157
    feature157,
    feature157Card,
    // Feature 202
    feature202,
    feature202Card,
  ],
};
