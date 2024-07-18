// import React from 'react';
import { Box, Container, Heading, Image, Stack, Text} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
};



const Home = () => {
  return (
    <Box>
        <MyCarousel/>
        <Container maxW={'container.xl'} minH={'100vh'} p={16}>
            <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>Services</Heading>
            <Stack
                h="full"
                p={'4'}
                alignItems={'center'}
                direction={["column","row"]}
            >
                <Image src={img5} h={['40','400']} filter={"hue-rotate(-130deg)"}/>
                <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={['center','left']}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus ducimus magnam, odit molestias f
                    acere nam cumque beatae architecto, doloremque, vero commodi facilis minima repellendus in explicabo eum rem expedita dolore 
                    pariatur tempora consequuntur voluptatum. Ipsa fugiat quisquam laborum deleniti doloribus tempore 
                    perferendis ut, praesentium dolorum a? Delectus, officia sint!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, dignissimos libero cumque necessitatibus vitae vero! Quibusdam quis animi illo 
                    odit sint delectus sapiente culpa cum nam explicabo repellat similique rerum officia, nulla eos vel amet blanditiis quia doloremque 
                    dolore placeat nemo possimus. Natus suscipit alias autem nostrum, corporis aspernatur deleniti.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quis labore quos asperiores quas sint aliquam harum nam quod error.
        
                </Text>
            </Stack>
        </Container>
    </Box>
  );
};

const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >
        <Box w="full" h={'100vh'}>
            <Image src={img1} h="full" w={'full'} objectFit={'cover'}/>
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Experience The Future
            </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
            <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Embrace Gaming
            </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
            <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Colsole is the way
            </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
            <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Neon all the way
            </Heading>
        </Box>

    </Carousel>
);
export default Home;

//--------------------------------------------------------------------------------------------------------------------------------


// import { Box,Heading, Image} from '@chakra-ui/react';
// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import img1 from '../assets/1.jpg';
// import img2 from '../assets/2.jpg';
// import img3 from '../assets/3.jpg';
// import img4 from '../assets/4.jpg';
// import img5 from '../assets/5.png';

// const headingOptions = {
//     pos: 'absolute',
//     left: '50%',
//     top: '50%',
//     transform: 'translate(-50%,-50%)',
//     textTransform: 'uppercase',
//     p: '4',
//     size: '4xl',
// };

// const Home = () => {
//     return (
//         <Box>
//             <MyCarousel />

//             {/* <Container maxW={'container.xl'} minH={'100vh'} p="16">
//                 <Heading
//                     textTransform={'uppercase'}
//                     py="2"
//                     w={'fit-content'}
//                     borderBottom={'2px solid'}
//                     m="auto"
//                 >
//                     Services
//                 </Heading>

//                 <Stack
//                     h="full"
//                     p={'4'}
//                     alignItems={'center'}
//                     direction={['column', 'row']}
//                 >
//                     <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

//                     <Text
//                         letterSpacing={'widest'}
//                         lineHeight={'190%'}
//                         p={['4', '16']}
//                         textAlign={'center'}
//                     >
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
//                         tempora deleniti quod, est eos veniam autem asperiores rem, nam
//                         laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
//                         at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
//                         sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
//                         Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
//                         modi soluta ullam voluptatum unde repellat in molestias quod?
//                         Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
//                         velit culpa maiores. Inventore esse illum excepturi dolores est
//                         natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
//                         adipisci minima hic, nam provident quo aperiam quasi vel?
//                         Dignissimos accusantium aliquid aut vel explicabo voluptatum
//                         molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
//                         omnis officiis autem dolorum!
//                     </Text>
//                 </Stack>
//             </Container> */}
//         </Box>
//     );
// };

// const MyCarousel = () => (
//     <Carousel
//         autoPlay
//         infiniteLoop
//         interval={1000}
//         showStatus={false}
//         showThumbs={false}
//         showArrows={false}
//     >
//         <Box w="full" h={'100vh'}>
//             <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
//             <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
//                 Watch The Future
//             </Heading>
//         </Box>
//         <Box w="full" h={'100vh'}>
//             <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
//             <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
//                 Future is Gaming
//             </Heading>
//         </Box>

//         <Box w="full" h={'100vh'}>
//             <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
//             <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
//                 Gaming on Console
//             </Heading>
//         </Box>

//         <Box w="full" h={'100vh'}>
//             <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
//             <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
//                 Night life is cool
//             </Heading>
//         </Box>
//     </Carousel>
// );

// export default Home;
