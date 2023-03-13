import { useSelector } from 'react-redux';
import { Loader } from '../Loader/Loader';
import { NotReviews } from '../Info/NotReviews';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import tmdbConfigs from 'api/configs/tmdb.configs';
import modeConfig from 'configs/mode.config';
import css from './Reviews.module.scss';

const Reviews = ({ reviews, isLoading }) => {
  const { themeMode } = useSelector(state => state.themeMode);

  return (
    <>
      <div className="container">
        <h3
          style={{ ...modeConfig.style.textColor[themeMode] }}
          className={css.title}
        >
          Social
        </h3>
        {isLoading ? <Loader /> : null}
        {!isLoading && !reviews.length ? <NotReviews /> : null}
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
