import { HStack,Input } from "native-base";
import React from "react";

function Homesearch() {
    return(
        <HStack 
        space={3} 
        w="full"
        px={6} 
        bg="error.50" 
        py={4} 
        alignItems="center" 
        safeAreaTop
        >
            <Input placeholder="Cari Produk ...."
             w="100%" 
             bg="light.50"
             type="search" h={12}
             variant="filled"
             borderWidth={0}
             alignItems="center"
             />
        
        </HStack>
    );
}

export default Homesearch;