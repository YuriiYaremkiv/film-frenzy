import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';
import { NotReviews } from '../Info/NotReviews';
import { getFetchByReviews } from '../../utils/fetchAPI';

import css from './Reviews.module.scss';

import tmdbConfigs from 'api/configs/tmdb.configs';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import modeConfig from 'configs/mode.config';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoadind] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  const { themeMode } = useSelector(state => state.themeMode);

  useEffect(() => {
    setLoadind(true);
    (async () => {
      try {
        const response = await getFetchByReviews(movieId);
        const reviews = response.filter(review => {
          if (review.author_details.avatar_path) {
            return true;
          }
        });
        setReviews(reviews);
        setLoadind(false);
      } catch (error) {
        setLoadind(false);
        setError(true);
      }
    })();
  }, [movieId]);

  return (
    <>
      <div className="container">
        <h3
          style={{ ...modeConfig.style.textColor[themeMode] }}
          className={css.title}
        >
          Social
        </h3>
        {loading ? <Loader /> : null}
        {error ? <Error /> : null}
        {!loading && !reviews.length ? <NotReviews /> : null}
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {reviews.length
            ? reviews.map(
                ({
                  id,
                  author,
                  author_details: { name, avatar_path: path },
                  created_at: date,
                  content,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className={css.card}>
                        <div>
                          <img
                            src={tmdbConfigs.avatarImage(path)}
                            alt={name}
                            className={css.card__img}
                          />
                        </div>
                        <div>
                          <p
                            style={{ ...modeConfig.style.textColor[themeMode] }}
                            className={css.card__name}
                          >{`A review by ${author}`}</p>
                          <p
                            style={{ ...modeConfig.style.textColor[themeMode] }}
                            className={css.card__data}
                          >{`Written by ${author} on ${new Date(
                            date
                          ).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}`}</p>
                          <p
                            style={{ ...modeConfig.style.textColor[themeMode] }}
                            className={css.card__content}
                          >
                            {content}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                }
              )
            : null}
        </Swiper>
        {/* <ul>
          {reviews.length
            ? reviews.map(({ id, author, content }) => {
                return (
                  <li key={id}>
                    <b>{author}</b>
                    <p>{content}</p>
                  </li>
                );
              })
            : null}
        </ul> */}
      </div>
    </>
  );
};

export default Reviews;
