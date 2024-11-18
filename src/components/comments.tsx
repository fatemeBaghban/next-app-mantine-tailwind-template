"use client";
import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
  Paper,
  Avatar,
  TypographyStylesProvider,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";
import classes from "../style/Comments.module.css";

const mockdata = [
  {
    title: "Extreme performance",
    description:
      "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
    icon: IconGauge,
  },
  {
    title: "Privacy focused",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
    icon: IconUser,
  },
  {
    title: "No third parties",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
    icon: IconCookie,
  },
];

export function Comments() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Paper
      withBorder
      radius="md"
      key={feature.title}
      className={classes.comment}
    >
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          alt="Jacob Warnhalter"
          radius="xl"
        />
        <div>
          <Text fz="sm">Jacob Warnhalter</Text>
          <Text fz="xs" c="dimmed">
            10 minutes ago
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{
            __html:
              '<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>',
          }}
        />
      </TypographyStylesProvider>
    </Paper>
    // <Card
    //   key={feature.title}
    //   shadow="md"
    //   radius="md"
    //   className={classes.card}
    //   padding="xl"
    // >
    //   <feature.icon
    //     style={{ width: rem(50), height: rem(50) }}
    //     stroke={2}
    //     color={theme.colors.blue[6]}
    //   />
    //   <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
    //     {feature.title}
    //   </Text>
    //   <Text fz="sm" c="dimmed" mt="sm">
    //     {feature.description}
    //   </Text>
    // </Card>
  ));

  return (
    <Container size="lg" py="xl">
      {/* <Group justify="center">
        <Badge variant="filled" size="lg">
          Best company ever
        </Badge>
      </Group> */}

      <Title order={4} className={classes.title} ta="center" mt="sm">
        Integrate effortlessly with any technology stack
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
