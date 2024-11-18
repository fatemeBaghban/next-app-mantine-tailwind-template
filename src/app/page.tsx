// import { ColorSchemesSwitcher } from "@/components/color-schemes-switcher";
// import { HeaderMegaMenu } from "@/components/header";
import { Comments } from "@/components/comments";
import { FeatureSection } from "@/components/featureSection";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/heroSection";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Container,
  Flex,
  Group,
  Text,
  Title,
} from "@mantine/core";

export default function Home() {
  return (
    <Container>
      <HeroSection />
      <FeatureSection />
      <HeroSection />
      <Comments />
      <Footer />
    </Container>
    // <AppShell header={{ height: 60 }} padding="md">
    //   <AppShellMain>
    //
    //     {/* <Title className="text-center mt-20">
    //       Welcome to{" "}
    //       <Text
    //         inherit
    //         variant="gradient"
    //         component="span"
    //         gradient={{ from: "pink", to: "yellow" }}
    //       >
    //         Mantine
    //       </Text>{" "}
    //       +
    //       <Text
    //         inherit
    //         variant="gradient"
    //         component="span"
    //         gradient={{ from: "blue", to: "green" }}
    //       >
    //         TailwindCSS
    //       </Text>
    //     </Title>
    //     <Text
    //       className="text-center text-gray-700 dark:text-gray-300 max-w-[500px] mx-auto mt-xl"
    //       ta="center"
    //       size="lg"
    //       maw={580}
    //       mx="auto"
    //       mt="xl"
    //     >
    //       This starter Next.js project includes a minimal setup for Mantine with
    //       TailwindCSS. To get started edit page.tsx file.
    //     </Text>

    //     <div className="flex justify-center mt-10">
    //       <ColorSchemesSwitcher />
    //     </div> */}
    //   </AppShellMain>
    // </AppShell>
  );
}
