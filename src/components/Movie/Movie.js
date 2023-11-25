import { Box, Center, Flex, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Movie = (props) => {
    const { item } = props
    const url_image = `https://image.tmdb.org/t/p/w300/${item.poster_path}`
    const bg_image = `https://image.tmdb.org/t/p/w300/${item.backdrop_path}
    `
    console.log(item)

    return (
        <Center py={6} m={5}>
          <Box
            w={'300px'}
            h={'500px'}
            bg={useColorModeValue('white', 'black')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}>
            <Image
              h={'150px'}
              w={'full'}
              src={
                bg_image
              }
              objectFit="cover"
              alt="#"
            />
    
            <Box p={6} w={''}>
              <Stack spacing={0} align={'center'} mb={5}>
                <Heading fontSize={'2xl'} fontWeight={'bold'} fontFamily={'body'}>
                  {item.title}
                </Heading> <br />
                <Text fontWeight={600}>{item.release_date}</Text>
              </Stack>
              <Stack direction={'row'} justify={'center'} spacing={6}mb={5}>
                <Stack spacing={0} align={'center'}>
                  <Text fontWeight={600}>{item.vote_average}</Text>
                  <Text fontWeight={'bold'} fontSize={'sm'} color={'gray.500'}>
                    Vote Avergae
                  </Text>
                </Stack>
                <Stack spacing={0} align={'center'}>
                  <Text fontWeight={600}>{item.vote_count}</Text>
                  <Text fontWeight={'bold'} fontSize={'sm'} color={'gray.500'}>
                    Vote Count
                  </Text>
                </Stack>
              </Stack>
    
              <Link to={`/movie/${item.id}`}>
                <Button variant="secondary">Descripsi</Button>
              </Link>
            </Box>
          </Box>
        </Center>
      )
}


export default Movie;