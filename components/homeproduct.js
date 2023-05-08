import { Box, Flex,Heading,ScrollView,Text,Image} from "native-base";
import React from "react";
import product from "./data/product";
import { Pressable } from "react-native";

function Homeproduct(){
    return(
        <ScrollView flex={1}>
            <Flex
            flexWrap="wrap"
            direction="row"
            justifyContent="space-between"
            px={6}
            >
                {   product.map((product) =>(
                     <Pressable key={product._id}
                     w = "47%"
                     bg = "secondary.50"
                     rounded = "md"
                     shadow = {2}
                     pt={0.3}
                     my={3}
                     pb={2}
                     overflow="hidden"
                     >
                     <Image 
                     source={{uri:product.image}}
                     alt={product.name}
                     w="full"
                     h={24}
                     resizeMode="cover"
                     />
                     <Box px={4} pt={1}>
                        <Heading size="sm" bold >
                            {product.name}
                        </Heading>
                        <Text fontSize={10} mt={1} isTruncated w="full">
                             RP{product.price} 
                        </Text>
                        <Text fontSize={10} isTruncated w="full">
                        {product.lokasi}
                        </Text>
                     </Box>
                     </Pressable>
                    ))}
            </Flex>
        </ScrollView>
    );
}

export default Homeproduct;