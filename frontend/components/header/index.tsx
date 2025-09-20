import {
  fetchSanityBanner,
  fetchSanitySettings,
  fetchSanityHeader,
} from "@/sanity/lib/fetch";
import Banner from "@/components/blocks/banner";
import Banner5 from "@/components/blocks/banner/banner5";
import Navbar1 from "./navbar-1";

export default async function Header() {
  const banner = await fetchSanityBanner();
  const settings = await fetchSanitySettings();
  const navigation = await fetchSanityHeader();

  return (
    <>
      <Navbar1 settings={settings} navigation={navigation} />
      {banner && banner.length > 0 && (
        <Banner data={banner[0]} component={Banner5} bannerId="banner5" />
      )}
    </>
  );
}
