"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: "funAndTrendy",
      colorTemplate: 2,
      textAnimation: "slide"
    }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="BlueWave Crypto"
          logoSrc="/images/logo.svg"
          logoAlt="BlueWave Logo"
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" },
          ]}
        />
      </div>
      <div id="hero" data-section="hero">
        <TokenBillboardHero
          title="Welcome to BlueWave Crypto"
          subtitle="Your Gateway to Innovative Trading"
          contractAddress="0x123..."
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about">
        <SocialsAbout
          title="Connect with Us"
          descriptions={["Join us on social media!", "Stay updated with the latest news!"]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <TextGridTokenomics
          title="Tokenomics"
          description="Understand the economics of our token."
          tokenData={[
            { value: "1M", description: "Total Supply" },
            { value: "80%", description: "Liquidity" }
          ]} />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="BlueWave Logo"
          columns={[
            {
              items: [
                { label: "Home", onClick: () => {} },
                { label: "About", onClick: () => {} },
                { label: "Services", onClick: () => {} }
              ]
            }
          ]}
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}