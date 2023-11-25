import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  CircularProgress,
  Stack,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import GetDetailMovie from "../../utils/networks/GetDetailMovie";



const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getDetail = async (id) => {
    const data = await GetDetailMovie(id);
    setMovie(data);
  };

  useEffect(() => {
    getDetail(id);
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const day = date.toLocaleDateString(undefined, { day: "numeric" });
    const month = date.toLocaleDateString(undefined, { month: "long" });
    const year = date.toLocaleDateString(undefined, { year: "numeric" });

    return `${day} ${month} ${year}`;
  };

  const gradientColor = useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(0, 0, 0, 0.8)");

  if (!movie.id) {
    return (
      <Box textAlign="center" justifyContent={"center"} p={5}>
        <CircularProgress isIndeterminate color="red.900" />
      </Box>
    );
  }

  return (
    <Box>
      <Stack spacing={8} p={8}>
        <Box
          bgImage={`linear-gradient(${gradientColor}, ${gradientColor}), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}
          bgSize="cover"
          borderBottom="1px solid teal.500"
          borderRadius="xl"
          boxShadow="md"
          p={8}
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "1fr 2fr", lg: "1fr 3fr" }}
          gap={8}
        >
          <Box>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              style={{
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                width: "100%",
                maxWidth: "300px",
              }}
            />
          </Box>
          <Box>
            <Heading as="h1" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} mb={4}>
              {movie.title}
            </Heading>
            <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} mb={4}>{movie.overview}</Text>
            <Text fontSize="md" mb={2}>Release Date: {formatDate(movie.release_date)}</Text>
            <Text fontSize="md" mb={2}>Vote Average: {movie.vote_average}</Text>
            <Text fontSize="md" mb={4}>
              Genres: {movie.genres.map((genre) => genre.name).join(", ")}
            </Text>
            <Button
              as="a"
              href={`https://www.themoviedb.org/movie/${movie.id}`}
              target="_blank"
              colorScheme="teal"
            >
              View on TMDB
            </Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default MovieDetail;