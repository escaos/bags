import { Box, Button, Divider, HStack, Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import bannerImage from "../assets/images/banner.webp";
import textImage from "../assets/images/bannerText.webp";
import bodegaImage from "../assets/images/bodega.webp";

import styles from "./Banner.module.scss";
import Icon from "../assets/Icon";
import { APP_BG_YELLOW_500 } from "../styles/Theme";

export const Banner = () => {
  const handleClick = () => {
    console.log("Talk to Funding Coach");
  };

  return (
    <HStack
      spacing="24px"
      bgImage={`url(${bannerImage})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      className={styles.container}
      h="100%"
    >
      <Box
        h="100%"
        w="25%"
        display="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        <Image src={bodegaImage} alt="banner" w="60%" />
        <Image src={textImage} alt="banner" w="60%" />
      </Box>
      <Box className={styles.box}>
        <Icon name="Route" className={styles.icon} />
        <Text className={styles.subtitle}>Funding Plan</Text>
        <Divider />
        <Text className={styles.textW}>
          Your first call with a Funding Coach is on us. Learn more about how a
          Bodega Plan is the next step in growing your business with Bags.
        </Text>
      </Box>
      <Box className={styles.box}>
        <Icon name="Chats" className={styles.icon} />
        <Text className={styles.subtitle}>Funding Courses</Text>
        <Divider />
        <Text className={styles.textW}>
          Unlock exclusive access to our funding courses and start learning how
          good loans can help you grow.
        </Text>
      </Box>
      <Box className={styles.card}>
        <Icon name="Star" />
        <Text className={styles.text}>
          Your first call with a Funding Coach is on us. Learn more about how a
          Bodega Plan is the next step in growing your business with Bags.
        </Text>
        <Button
          onClick={handleClick}
          className={styles.button}
          bg={APP_BG_YELLOW_500}
          fontSize="var(--chakra-fontSizes-2xs)"
        >
          Talk to Funding Coach
        </Button>
      </Box>
    </HStack>
  );
};
