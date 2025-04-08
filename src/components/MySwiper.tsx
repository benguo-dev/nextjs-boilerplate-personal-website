'use client';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const MySwiper = () => (
  <>

    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <div className="swiper-wrapper *:rounded-2xl *:p-4 lg:*:p-6 xl:*:p-10 *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack *:border *:border-gray-100 *:dark:border-white/5" aria-live="off">
          <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev">
            <div className="testimonial_item space-y-6">
              <div className="icon w-16 h-16 rounded-full flex justify-center items-center border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                <svg className="w-10 text-darkGray dark:text-pastelGrey" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4835 19.3831H5.66683C5.80016 11.5998 7.3335 10.3165 12.1168 7.48312C12.6668 7.14979 12.8502 6.44979 12.5168 5.88312C12.2002 5.33312 11.4835 5.14979 10.9335 5.48312C5.30016 8.81646 3.3335 10.8498 3.3335 20.5331V29.5165C3.3335 32.3665 5.65016 34.6665 8.4835 34.6665H13.4835C16.4168 34.6665 18.6335 32.4498 18.6335 29.5165V24.5165C18.6335 21.5998 16.4168 19.3831 13.4835 19.3831Z" fill="currentcolor"></path>
                  <path d="M31.5168 19.3831H23.7001C23.8334 11.5998 25.3668 10.3165 30.1501 7.48312C30.7001 7.14979 30.8834 6.44979 30.5501 5.88312C30.2168 5.33312 29.5168 5.14979 28.9501 5.48312C23.3168 8.81646 21.3501 10.8498 21.3501 20.5498V29.5331C21.3501 32.3831 23.6668 34.6831 26.5001 34.6831H31.5001C34.4334 34.6831 36.6501 32.4665 36.6501 29.5331V24.5331C36.6668 21.5998 34.4501 19.3831 31.5168 19.3831Z" fill="currentcolor"></path>
                </svg>
              </div>
              <div className="review text-yellow-400 leading-none">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                <q>I've had the pleasure of witnessing Alex's incredible energy and attitude firsthand. His enthusiasm is infectious, and his unwavering optimism makes him a pleasure to work alongside.</q>
              </p>
              <div className="">
                <h5 className="text-darkGray dark:text-pastelGrey text-xl font-semibold">
                  Ashton Agar
                </h5>
                <h6 className="text-nobelGray dark:text-slateGray text-regular">
                  Social Influencer
                </h6>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-wrapper *:rounded-2xl *:p-4 lg:*:p-6 xl:*:p-10 *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack *:border *:border-gray-100 *:dark:border-white/5" aria-live="off">
          <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev">
            <div className="testimonial_item space-y-6">
              <div className="icon w-16 h-16 rounded-full flex justify-center items-center border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                <svg className="w-10 text-darkGray dark:text-pastelGrey" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4835 19.3831H5.66683C5.80016 11.5998 7.3335 10.3165 12.1168 7.48312C12.6668 7.14979 12.8502 6.44979 12.5168 5.88312C12.2002 5.33312 11.4835 5.14979 10.9335 5.48312C5.30016 8.81646 3.3335 10.8498 3.3335 20.5331V29.5165C3.3335 32.3665 5.65016 34.6665 8.4835 34.6665H13.4835C16.4168 34.6665 18.6335 32.4498 18.6335 29.5165V24.5165C18.6335 21.5998 16.4168 19.3831 13.4835 19.3831Z" fill="currentcolor"></path>
                  <path d="M31.5168 19.3831H23.7001C23.8334 11.5998 25.3668 10.3165 30.1501 7.48312C30.7001 7.14979 30.8834 6.44979 30.5501 5.88312C30.2168 5.33312 29.5168 5.14979 28.9501 5.48312C23.3168 8.81646 21.3501 10.8498 21.3501 20.5498V29.5331C21.3501 32.3831 23.6668 34.6831 26.5001 34.6831H31.5001C34.4334 34.6831 36.6501 32.4665 36.6501 29.5331V24.5331C36.6668 21.5998 34.4501 19.3831 31.5168 19.3831Z" fill="currentcolor"></path>
                </svg>
              </div>
              <div className="review text-yellow-400 leading-none">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                <q>I've had the pleasure of witnessing Alex's incredible energy and attitude firsthand. His enthusiasm is infectious, and his unwavering optimism makes him a pleasure to work alongside.</q>
              </p>
              <div className="">
                <h5 className="text-darkGray dark:text-pastelGrey text-xl font-semibold">
                  Ashton Agar
                </h5>
                <h6 className="text-nobelGray dark:text-slateGray text-regular">
                  Social Influencer
                </h6>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-wrapper *:rounded-2xl *:p-4 lg:*:p-6 xl:*:p-10 *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack *:border *:border-gray-100 *:dark:border-white/5" aria-live="off">
          <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="2" role="group" aria-label="3 / 3">
            <div className="testimonial_item space-y-6">
              <div className="icon w-16 h-16 rounded-full flex justify-center items-center border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                <svg className="w-10 text-darkGray dark:text-pastelGrey" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4835 19.3831H5.66683C5.80016 11.5998 7.3335 10.3165 12.1168 7.48312C12.6668 7.14979 12.8502 6.44979 12.5168 5.88312C12.2002 5.33312 11.4835 5.14979 10.9335 5.48312C5.30016 8.81646 3.3335 10.8498 3.3335 20.5331V29.5165C3.3335 32.3665 5.65016 34.6665 8.4835 34.6665H13.4835C16.4168 34.6665 18.6335 32.4498 18.6335 29.5165V24.5165C18.6335 21.5998 16.4168 19.3831 13.4835 19.3831Z" fill="currentcolor"></path>
                  <path d="M31.5168 19.3831H23.7001C23.8334 11.5998 25.3668 10.3165 30.1501 7.48312C30.7001 7.14979 30.8834 6.44979 30.5501 5.88312C30.2168 5.33312 29.5168 5.14979 28.9501 5.48312C23.3168 8.81646 21.3501 10.8498 21.3501 20.5498V29.5331C21.3501 32.3831 23.6668 34.6831 26.5001 34.6831H31.5001C34.4334 34.6831 36.6501 32.4665 36.6501 29.5331V24.5331C36.6668 21.5998 34.4501 19.3831 31.5168 19.3831Z" fill="currentcolor"></path>
                </svg>
              </div>
              <div className="review text-yellow-400 leading-none">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                <q>I've had the pleasure of witnessing Alex's incredible energy and attitude firsthand. His enthusiasm is infectious, and his unwavering optimism makes him a pleasure to work alongside.</q>
              </p>
              <div className="">
                <h5 className="text-darkGray dark:text-pastelGrey text-xl font-semibold">
                  Ashley Kutcher
                </h5>
                <h6 className="text-nobelGray dark:text-slateGray text-regular">
                  CEO, Tech Company
                </h6>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-wrapper *:rounded-2xl *:p-4 lg:*:p-6 xl:*:p-10 *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack *:border *:border-gray-100 *:dark:border-white/5" aria-live="off">
          <div className="swiper-slide swiper-slide-duplicate-next" data-swiper-slide-index="0" role="group" aria-label="1 / 3">
            <div className="testimonial_item space-y-6">
              <div className="icon w-16 h-16 rounded-full flex justify-center items-center border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                <svg className="w-10 text-darkGray dark:text-pastelGrey" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4835 19.3831H5.66683C5.80016 11.5998 7.3335 10.3165 12.1168 7.48312C12.6668 7.14979 12.8502 6.44979 12.5168 5.88312C12.2002 5.33312 11.4835 5.14979 10.9335 5.48312C5.30016 8.81646 3.3335 10.8498 3.3335 20.5331V29.5165C3.3335 32.3665 5.65016 34.6665 8.4835 34.6665H13.4835C16.4168 34.6665 18.6335 32.4498 18.6335 29.5165V24.5165C18.6335 21.5998 16.4168 19.3831 13.4835 19.3831Z" fill="currentcolor"></path>
                  <path d="M31.5168 19.3831H23.7001C23.8334 11.5998 25.3668 10.3165 30.1501 7.48312C30.7001 7.14979 30.8834 6.44979 30.5501 5.88312C30.2168 5.33312 29.5168 5.14979 28.9501 5.48312C23.3168 8.81646 21.3501 10.8498 21.3501 20.5498V29.5331C21.3501 32.3831 23.6668 34.6831 26.5001 34.6831H31.5001C34.4334 34.6831 36.6501 32.4665 36.6501 29.5331V24.5331C36.6668 21.5998 34.4501 19.3831 31.5168 19.3831Z" fill="currentcolor"></path>
                </svg>
              </div>
              <div className="review text-yellow-400 leading-none">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                <q>I've had the pleasure of witnessing Alex's incredible energy and attitude firsthand. His enthusiasm is infectious, and his unwavering optimism makes him a pleasure to work alongside.</q>
              </p>
              <div className="">
                <h5 className="text-darkGray dark:text-pastelGrey text-xl font-semibold">
                  Ashley Cole
                </h5>
                <h6 className="text-nobelGray dark:text-slateGray text-regular">
                  Enterpreneur
                </h6>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-wrapper *:rounded-2xl *:p-4 lg:*:p-6 xl:*:p-10 *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack *:border *:border-gray-100 *:dark:border-white/5" aria-live="off">
          <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index="1" role="group" aria-label="2 / 3">
            <div className="testimonial_item space-y-6">
              <div className="icon w-16 h-16 rounded-full flex justify-center items-center border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                <svg className="w-10 text-darkGray dark:text-pastelGrey" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4835 19.3831H5.66683C5.80016 11.5998 7.3335 10.3165 12.1168 7.48312C12.6668 7.14979 12.8502 6.44979 12.5168 5.88312C12.2002 5.33312 11.4835 5.14979 10.9335 5.48312C5.30016 8.81646 3.3335 10.8498 3.3335 20.5331V29.5165C3.3335 32.3665 5.65016 34.6665 8.4835 34.6665H13.4835C16.4168 34.6665 18.6335 32.4498 18.6335 29.5165V24.5165C18.6335 21.5998 16.4168 19.3831 13.4835 19.3831Z" fill="currentcolor"></path>
                  <path d="M31.5168 19.3831H23.7001C23.8334 11.5998 25.3668 10.3165 30.1501 7.48312C30.7001 7.14979 30.8834 6.44979 30.5501 5.88312C30.2168 5.33312 29.5168 5.14979 28.9501 5.48312C23.3168 8.81646 21.3501 10.8498 21.3501 20.5498V29.5331C21.3501 32.3831 23.6668 34.6831 26.5001 34.6831H31.5001C34.4334 34.6831 36.6501 32.4665 36.6501 29.5331V24.5331C36.6668 21.5998 34.4501 19.3831 31.5168 19.3831Z" fill="currentcolor"></path>
                </svg>
              </div>
              <div className="review text-yellow-400 leading-none">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                <q>I've had the pleasure of witnessing Alex's incredible energy and attitude firsthand. His enthusiasm is infectious, and his unwavering optimism makes him a pleasure to work alongside.</q>
              </p>
              <div className="">
                <h5 className="text-darkGray dark:text-pastelGrey text-xl font-semibold">
                  Ashton Agar
                </h5>
                <h6 className="text-nobelGray dark:text-slateGray text-regular">
                  Social Influencer
                </h6>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-wrapper *:rounded-2xl *:p-4 lg:*:p-6 xl:*:p-10 *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack *:border *:border-gray-100 *:dark:border-white/5" aria-live="off">
          <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="2" role="group" aria-label="3 / 3">
            <div className="testimonial_item space-y-6">
              <div className="icon w-16 h-16 rounded-full flex justify-center items-center border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                <svg className="w-10 text-darkGray dark:text-pastelGrey" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4835 19.3831H5.66683C5.80016 11.5998 7.3335 10.3165 12.1168 7.48312C12.6668 7.14979 12.8502 6.44979 12.5168 5.88312C12.2002 5.33312 11.4835 5.14979 10.9335 5.48312C5.30016 8.81646 3.3335 10.8498 3.3335 20.5331V29.5165C3.3335 32.3665 5.65016 34.6665 8.4835 34.6665H13.4835C16.4168 34.6665 18.6335 32.4498 18.6335 29.5165V24.5165C18.6335 21.5998 16.4168 19.3831 13.4835 19.3831Z" fill="currentcolor"></path>
                  <path d="M31.5168 19.3831H23.7001C23.8334 11.5998 25.3668 10.3165 30.1501 7.48312C30.7001 7.14979 30.8834 6.44979 30.5501 5.88312C30.2168 5.33312 29.5168 5.14979 28.9501 5.48312C23.3168 8.81646 21.3501 10.8498 21.3501 20.5498V29.5331C21.3501 32.3831 23.6668 34.6831 26.5001 34.6831H31.5001C34.4334 34.6831 36.6501 32.4665 36.6501 29.5331V24.5331C36.6668 21.5998 34.4501 19.3831 31.5168 19.3831Z" fill="currentcolor"></path>
                </svg>
              </div>
              <div className="review text-yellow-400 leading-none">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                <q>I've had the pleasure of witnessing Alex's incredible energy and attitude firsthand. His enthusiasm is infectious, and his unwavering optimism makes him a pleasure to work alongside.</q>
              </p>
              <div className="">
                <h5 className="text-darkGray dark:text-pastelGrey text-xl font-semibold">
                  Ashley Kutcher
                </h5>
                <h6 className="text-nobelGray dark:text-slateGray text-regular">
                  CEO, Tech Company
                </h6>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-wrapper *:rounded-2xl *:p-4 lg:*:p-6 xl:*:p-10 *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack *:border *:border-gray-100 *:dark:border-white/5" aria-live="off">
          <div className="swiper-slide swiper-slide-duplicate swiper-slide-next" data-swiper-slide-index="0" role="group" aria-label="1 / 3">
            <div className="testimonial_item space-y-6">
              <div className="icon w-16 h-16 rounded-full flex justify-center items-center border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                <svg className="w-10 text-darkGray dark:text-pastelGrey" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4835 19.3831H5.66683C5.80016 11.5998 7.3335 10.3165 12.1168 7.48312C12.6668 7.14979 12.8502 6.44979 12.5168 5.88312C12.2002 5.33312 11.4835 5.14979 10.9335 5.48312C5.30016 8.81646 3.3335 10.8498 3.3335 20.5331V29.5165C3.3335 32.3665 5.65016 34.6665 8.4835 34.6665H13.4835C16.4168 34.6665 18.6335 32.4498 18.6335 29.5165V24.5165C18.6335 21.5998 16.4168 19.3831 13.4835 19.3831Z" fill="currentcolor"></path>
                  <path d="M31.5168 19.3831H23.7001C23.8334 11.5998 25.3668 10.3165 30.1501 7.48312C30.7001 7.14979 30.8834 6.44979 30.5501 5.88312C30.2168 5.33312 29.5168 5.14979 28.9501 5.48312C23.3168 8.81646 21.3501 10.8498 21.3501 20.5498V29.5331C21.3501 32.3831 23.6668 34.6831 26.5001 34.6831H31.5001C34.4334 34.6831 36.6501 32.4665 36.6501 29.5331V24.5331C36.6668 21.5998 34.4501 19.3831 31.5168 19.3831Z" fill="currentcolor"></path>
                </svg>
              </div>
              <div className="review text-yellow-400 leading-none">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                <q>I've had the pleasure of witnessing Alex's incredible energy and attitude firsthand. His enthusiasm is infectious, and his unwavering optimism makes him a pleasure to work alongside.</q>
              </p>
              <div className="">
                <h5 className="text-darkGray dark:text-pastelGrey text-xl font-semibold">
                  Ashley Cole
                </h5>
                <h6 className="text-nobelGray dark:text-slateGray text-regular">
                  Enterpreneur
                </h6>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-wrapper *:rounded-2xl *:p-4 lg:*:p-6 xl:*:p-10 *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack *:border *:border-gray-100 *:dark:border-white/5" aria-live="off">
          <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="1" role="group" aria-label="2 / 3">
            <div className="testimonial_item space-y-6">
              <div className="icon w-16 h-16 rounded-full flex justify-center items-center border border-flasWhite dark:border-flasBlack bg-gradient-to-b from-milkWhite to-seashell dark:from-metalBlack dark:to-oilBlack">
                <svg className="w-10 text-darkGray dark:text-pastelGrey" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.4835 19.3831H5.66683C5.80016 11.5998 7.3335 10.3165 12.1168 7.48312C12.6668 7.14979 12.8502 6.44979 12.5168 5.88312C12.2002 5.33312 11.4835 5.14979 10.9335 5.48312C5.30016 8.81646 3.3335 10.8498 3.3335 20.5331V29.5165C3.3335 32.3665 5.65016 34.6665 8.4835 34.6665H13.4835C16.4168 34.6665 18.6335 32.4498 18.6335 29.5165V24.5165C18.6335 21.5998 16.4168 19.3831 13.4835 19.3831Z" fill="currentcolor"></path>
                  <path d="M31.5168 19.3831H23.7001C23.8334 11.5998 25.3668 10.3165 30.1501 7.48312C30.7001 7.14979 30.8834 6.44979 30.5501 5.88312C30.2168 5.33312 29.5168 5.14979 28.9501 5.48312C23.3168 8.81646 21.3501 10.8498 21.3501 20.5498V29.5331C21.3501 32.3831 23.6668 34.6831 26.5001 34.6831H31.5001C34.4334 34.6831 36.6501 32.4665 36.6501 29.5331V24.5331C36.6668 21.5998 34.4501 19.3831 31.5168 19.3831Z" fill="currentcolor"></path>
                </svg>
              </div>
              <div className="review text-yellow-400 leading-none">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>
                <q>I've had the pleasure of witnessing Alex's incredible energy and attitude firsthand. His enthusiasm is infectious, and his unwavering optimism makes him a pleasure to work alongside.</q>
              </p>
              <div className="">
                <h5 className="text-darkGray dark:text-pastelGrey text-xl font-semibold">
                  Ashton Agar
                </h5>
                <h6 className="text-nobelGray dark:text-slateGray text-regular">
                  Social Influencer
                </h6>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </>
);
