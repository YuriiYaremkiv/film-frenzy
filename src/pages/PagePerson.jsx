import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ListActing } from 'components/ListActing/ListActing';
import { SectionPerson } from 'components/SectionPerson/SectionPerson';
import personApi from 'api/modules/person.api';
import { SliderMovies } from 'components/SectionPerson/SliderMovies/SliderMovies';

const PagePerson = () => {
  const [personInfo, setPersonInfo] = useState([]);
  const [personMovieCredits, setPersonMovieCredits] = useState([]);
  const { personId } = useParams();

  useEffect(() => {
    (async () => {
      const { response } = await personApi.getDetails({
        personId: personId,
      });

      if (response) {
        setPersonInfo(response.data);
      }
    })();
  }, [personId]);

  useEffect(() => {
    (async () => {
      const { response } = await personApi.getMovieCredits({
        personId: personId,
      });

      if (response) {
        setPersonMovieCredits(response.data);
      }
    })();
  }, [personId]);

  const movies = personMovieCredits.cast
    ?.filter(movie => {
      if (movie.backdrop_path) {
        return true;
      }
      return false;
    })
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 10);
  const allMovies = personMovieCredits.cast
    ?.filter(movie => {
      if (movie.backdrop_path) {
        return true;
      }
      return false;
    })
    .sort((a, b) => b.release_date.slice(0, 4) - a.release_date.slice(0, 4));

  return (
    <>
      <SectionPerson personInfo={personInfo} />
      <SliderMovies movies={movies} />
      <ListActing allMovies={allMovies} />
    </>
  );
};

export default PagePerson;
