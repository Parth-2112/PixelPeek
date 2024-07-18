import { Box,Stack, Heading, VStack, HStack, Button, Input, Text } from '@chakra-ui/react';
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
            
            <VStack w={'full'} px={4} alignItems={'stretch'}>
                  <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
                    Subscribe To our newsletter for updates.
                </Heading>

                  <HStack borderBottom={'2px solid #987D9A'} py={'2'}>
                    <Input 
                        placeholder='Enter Email Here... ' 
                        border={'none'} 
                        borderRadius={'none'}
                        outline={'none'}
                        color={'#BB9AB1'}
                        focusBorderColor='none'
                    />
                    <Button
                        p={'0'}
                        colorScheme={'purple'}
                        variant={'ghost'}
                        borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend size={25}/>
                    </Button>
                </HStack>      
            </VStack>
              
            <VStack 
                borderLeft={['none','2px Solid #987D9A']}
                borderRight={['none','2px Solid #987D9A']}
                w={'full'} 
                px={'4'}
            >
                <Heading textAlign={'center'}>
                    PixelPeek
                </Heading>
                <Text color={'#BB9AB1'}>
                    All rights reserved.
                </Text>
            </VStack>
            
            <VStack
                w={'full'}
                px={'4'}
            >
                <Heading size={'md'} textTransform={'uppercase'}>
                    Social Media
                </Heading>
                <Button variant={'link'} colorScheme='purple'>
                    <a target="blank" href="https://youtube.com">YouTube</a>
                </Button>
                <Button variant={'link'} colorScheme='purple'>
                    <a target="blank" href="https://google.com">Google</a>
                </Button>
                <Button variant={'link'} colorScheme='purple'>
                    <a target="blank" href="https://github.com/Parth-2112">GitHub</a>
                </Button>
            </VStack>
        </Stack>
    </Box>
  );
};

export default Footer;