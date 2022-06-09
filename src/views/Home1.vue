<template>
  <div class="ar">

    <div v-if="whats_app_form" class="whats-app">
      <b-form class="whats-app__form">
        <div class="whats-app__form__title d-flex justify-content-between align-items-center">
          <div class="title-3">تواصل معانا</div>
          <div @click="closeWhatsAppForm" class="whats-app__form__title__close"><i class="fas fa-times"></i></div>
        </div>
        <div class="whats-app__form__content">
          <div class="desc w-100">ادخل رقم جوالك لإنتقال للخبير العقاري مباشره</div>
          <div class="form-group">
            <span>الجوال</span>
            <b-form-input type="text" placeholder="الجوال"></b-form-input>
          </div>
          <a target="_blank" href="https://wa.me/+201012703497" class="btn register__form__btn">الإنتقال إلي واتساب</a>
        </div>
      </b-form>
    </div>

    <div class="header"
         :class="{sticky: scrollPosition > 40}">
      <router-link to="/" class="header__logo">
        كيان
      </router-link>
      <div class="header__mobile-content">
        <i v-if="!mobileNav" @click="openMobileNav()" class="fas fa-align-justify"></i>
        <i v-if="mobileNav" @click="closeMobileNav()" class="fas fa-times"></i>
      </div>

      <div class="header__content">
        <div class="header__content__items">
          <a href="#slider" class="header__content__items__item"><span>الرئيسية</span></a>
          <a href="#register" class="header__content__items__item"><span>التسجيل</span></a>
          <a href="#about" class="header__content__items__item"><span>معلومات عنا</span></a>
          <a href="#services" class="header__content__items__item"><span>الخدمات</span></a>
          <a href="#contact" class="header__content__items__item"><span>تواصل بنا</span></a>
        </div>
      </div>
    </div>

    <div class="mobile-nav animate__animated animate__fadeInRight" v-if="mobileNav">
      <div class="mobile-nav__header">
        <router-link to="/" class="header__logo">
          كيان
        </router-link>
        <i v-if="mobileNav" @click="closeMobileNav()" class="fas fa-times"></i>
      </div>
      <div class="mobile-nav__items">
        <a href="#slider" exact class="mobile-nav__items__item"><span>الرئيسية</span></a>
        <a href="#register" class="mobile-nav__items__item"><span>التسجيل</span></a>
        <a href="#about" class="mobile-nav__items__item"><span>معلومات عنا</span></a>
        <a href="#services" class="mobile-nav__items__item"><span>الخدمات</span></a>
        <a href="#contact" class="mobile-nav__items__item"><span>تواصل بنا</span></a>
      </div>
    </div>

    <div id="slider" class="slider">
      <div v-if="slider_1" class="slider__item">
        <div class="slider__item__img">
          <img src="../assets/images/slider/slider-bg1.jpg">
        </div>
        <div class="slider__item__content row">
          <div class="slider__item__content__container col-12 col-md-6">
            <div class="title-1 mb-2 animate__animated animate__fadeInDown">مؤسسة كيان</div>
            <div class="title-3 mb-2 animate__animated animate__zoomIn">انطلق بنشاطك التجاري بعلامة جديدة</div>
            <div class="desc mb-2 animate__animated animate__zoomIn">
              النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته.
            </div>
            <div class="about__section__content__contact animate__animated animate__fadeInUp">
              <span @click="openWhatsAppForm" class="about__section__content__contact__btn">
                <span>واتساب</span>
                <i class="fab fa-whatsapp"></i>
              </span>
              <a target="_blank" href="tel:+201012703497"  class="about__section__content__contact__btn">
                <span>إتصال مباشر</span>
                <i class="fas fa-phone-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="slider_2" class="slider__item">
        <div class="slider__item__img">
          <img src="../assets/images/slider/slider-bg2.jpg">
        </div>
        <div class="slider__item__content row">
          <div class="slider__item__content__container col-12 col-md-6">
            <div class="title-1 mb-2 animate__animated animate__fadeInDown">مؤسسة كيان</div>
            <div class="title-3 mb-2 animate__animated animate__zoomIn">انطلق بنشاطك التجاري بعلامة جديدة</div>
            <div class="desc mb-2 animate__animated animate__zoomIn">
              النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته.
            </div>
            <div class="about__section__content__contact animate__animated animate__fadeInUp">
              <span @click="openWhatsAppForm" class="about__section__content__contact__btn">
                <span>واتساب</span>
                <i class="fab fa-whatsapp"></i>
              </span>
              <a target="_blank" href="tel:+201012703497"  class="about__section__content__contact__btn">
                <span>إتصال مباشر</span>
                <i class="fas fa-phone-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div v-if="slider_3" class="slider__item">
        <div class="slider__item__img">
          <img src="../assets/images/slider/slider-bg3.jpg">
        </div>
        <div class="slider__item__content row">
          <div class="slider__item__content__container col-12 col-md-6">
            <div class="title-1 mb-2 animate__animated animate__fadeInDown">مؤسسة كيان</div>
            <div class="title-3 mb-2 animate__animated animate__zoomIn">انطلق بنشاطك التجاري بعلامة جديدة</div>
            <div class="desc mb-2 animate__animated animate__zoomIn">
              النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته.
            </div>
            <div class="about__section__content__contact animate__animated animate__fadeInUp">
              <span @click="openWhatsAppForm" class="about__section__content__contact__btn">
                <span>واتساب</span>
                <i class="fab fa-whatsapp"></i>
              </span>
              <a target="_blank" href="tel:+201012703497"  class="about__section__content__contact__btn">
                <span>إتصال مباشر</span>
                <i class="fas fa-phone-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="register__container no-mobile">
        <div class="title-2 mb-2">إستشارتك مجانية الإن مع كيان</div>
        <div class="break mb-3"></div>
        <div class="title-4">سجل الان وسيتواصل معك مستشار عقاري متخصص لتقديم حلول لك</div>
        <b-form class="register__form">
          <div class="form-group">
            <span>الإسم</span>
            <b-form-input type="text" placeholder="الإسم"></b-form-input>
          </div>
          <div class="form-group">
            <span>الجوال</span>
            <b-form-input type="text" placeholder="الجوال"></b-form-input>
          </div>
          <b-button class="register__form__btn">تسجيل الان</b-button>
        </b-form>
      </div>

      <div class="slider__previous">
        <div class="slider__previous__btn"
             @click="displaySlider('last')"><i class="fas fa-arrow-right"></i></div>
      </div>
      <div class="slider__next">
        <div class="slider__next__btn"
             @click="displaySlider('next')"><i class="fas fa-arrow-left"></i></div>
      </div>

      <div class="slider__owl">
        <div class="slider__owl__container">
          <div class="slider__owl__item"
               :class="(slider_1) ? 'active' : ''"
               @click="displaySlider('slider_1')"></div>
          <div class="slider__owl__item"
               :class="(slider_2) ? 'active' : ''"
               @click="displaySlider('slider_2')"></div>
          <div class="slider__owl__item"
               :class="(slider_3) ? 'active' : ''"
               @click="displaySlider('slider_3')"></div>
        </div>
      </div>
    </div>

    <div id="register" class="register__container no-lg">
      <div class="title-2 mb-2">إستشارتك مجانية الإن مع كيان</div>
      <div class="break mb-3"></div>
      <div class="title-4">سجل الان وسيتواصل معك مستشار عقاري متخصص لتقديم حلول لك</div>
      <b-form class="register__form">
        <div class="form-group">
          <span>الإسم</span>
          <b-form-input type="text" placeholder="الإسم"></b-form-input>
        </div>
        <div class="form-group">
          <span>الجوال</span>
          <b-form-input type="text" placeholder="الجوال"></b-form-input>
        </div>
        <b-button class="register__form__btn">تسجيل الان</b-button>
      </b-form>
      <div class="space"></div>
    </div>

    <div id="about" class="about">
      <div class="space"></div>
      <div class="title-1 text-center mb-3 color-primary">معلومات عنا</div>
      <div class="desc about-desc text-center mb-5">
        النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته.
      </div>
      <div class="about__section">
        <div class="about__section__img">
          <img src="../assets/images/about_us_2.jpg">
        </div>
        <div class="about__section__content">
          <div class="title-4 mb-2">نقدم لك افضل واسرع الحلول التمويلية</div>
          <div class="break mb-4"></div>
          <div class="desc w-100 mb-3">
            النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته.
          </div>
          <div class="title-5 me-3 mb-2">يمكنك التحدث الينا مباشره من خلال</div>
          <div class="break me-3"></div>
          <div class="about__section__content__contact me-3">
              <span @click="openWhatsAppForm" class="about__section__content__contact__btn">
                <span>واتساب</span>
                <i class="fab fa-whatsapp"></i>
              </span>
            <a href="tel:+201012703497"  class="about__section__content__contact__btn">
              <span>إتصال مباشر</span>
              <i class="fas fa-phone-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div id="services" class="services">
      <div class="space"></div>
      <div class="title-1 text-center mb-3 color-primary">تقدم مؤسسة كيان العديد من الخدمات</div>
      <div class="desc text-center w-75 mb-2">
        النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته.
      </div>
      <div class="services__items row">
        <div class="services__items__item col-12 col-md-3">
          <div class="services__items__item__icon"><i class="fas fa-university"></i></div>
          <div class="services__items__item__connector"><span></span></div>
          <div class="services__items__item__card">
            <div class="title-4 mb-3 text-center">التمويل العقاري</div>
            <div class="desc text-center">
              النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته.
            </div>
          </div>
        </div>
        <div class="services__items__item col-12 col-md-3">
          <div class="services__items__item__icon"><i class="fas fa-university"></i></div>
          <div class="services__items__item__connector"><span></span></div>
          <div class="services__items__item__card">
            <div class="title-4 mb-3 text-center">التمويل العقاري</div>
            <div class="desc text-center">
              النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته.
            </div>
          </div>
        </div>
        <div class="services__items__item col-12 col-md-3">
          <div class="services__items__item__icon"><i class="fas fa-university"></i></div>
          <div class="services__items__item__connector"><span></span></div>
          <div class="services__items__item__card">
            <div class="title-4 mb-3 text-center">التمويل العقاري</div>
            <div class="desc text-center">
              النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته.
            </div>
          </div>
        </div>
        <div class="services__items__item col-12 col-md-3">
          <div class="services__items__item__icon"><i class="fas fa-university"></i></div>
          <div class="services__items__item__connector"><span></span></div>
          <div class="services__items__item__card">
            <div class="title-4 mb-3 text-center">التمويل العقاري</div>
            <div class="desc text-center">
              النص ما ازداد وضوحا على الظاهر لمعنى المتكلم، وهو سوق الكلام لأجل ذلك المعنى، فإذا قيل أحسنوا إلى فلان الذي يفرح بفرحي ويغتم بغمي، كان نصا في بيان محبته.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="space"></div>

    <div id="contact" class="contact row">
      <div class="space"></div>
      <div class="col-12 col-md-6 contact__info">
        <div class="title-2 mb-2">معلومات الاتصال</div>
        <div class="break mb-5"></div>
        <div class="contact__info__item">
          <div class="contact__info__item__icon"><i class="fas fa-map-marker-alt"></i></div>
          <div class="contact__info__item__details">
            <span class="contact__info__item__details__title">العنوان</span>
            <span class="contact__info__item__details__desc">123, Street Name, City Name, State Name, Country Name, Pin Code : 123456</span>
          </div>
        </div>
        <div class="contact__info__item">
          <div class="contact__info__item__icon"><i class="fas fa-phone-alt"></i></div>
          <div class="contact__info__item__details">
            <span class="contact__info__item__details__title">اتصل بنا على</span>
            <span class="contact__info__item__details__desc">
              المكتب الرئيسي: 0123-456-789
            </span>
          </div>
        </div>
        <div class="contact__info__item">
          <div class="contact__info__item__icon"><i class="fas fa-mail-bulk"></i></div>
          <div class="contact__info__item__details">
            <span class="contact__info__item__details__title">أرسل لنا على</span>
            <span class="contact__info__item__details__desc">support@info.com</span>
          </div>
        </div>


      </div>
      <div class="col-12 col-md-6 contact__form">
        <div class="title-2 mb-2">نموذج الاتصال</div>
        <div class="break mb-3"></div>
        <b-form class="p-2">
          <div class="form-group">
            <span>الإسم</span>
            <b-form-input type="text" placeholder="الإسم"></b-form-input>
          </div>
          <div class="form-group">
            <span>البريد الالكتروني</span>
            <b-form-input type="text" placeholder="البريد الالكتروني"></b-form-input>
          </div>
          <div class="form-group">
            <span>عنوان الرسالة</span>
            <b-form-input type="text" placeholder="عنوان الرسالة"></b-form-input>
          </div>
          <div class="form-group">
            <span>الرسالة</span>
            <b-form-textarea class="input" placeholder="الرسالة" rows="5"></b-form-textarea>
          </div>
          <b-button class="register__form__btn">إرسال الان</b-button>
        </b-form>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home1",
  data() {
    return {
      scrollPosition: null,
      mobileNav: false,
      slider_1: true,
      slider_2: false,
      slider_3: false,
      whats_app_form: false,
      call_form: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
    window.setInterval(() => {
      this.displaySlider('next')
    }, 6000);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    openMobileNav() {
      this.mobileNav = true
    },
    closeMobileNav() {
      this.mobileNav = false
    },
    displaySlider(slider) {
      if (slider == 'slider_1') {
        this.slider_3 = false
        this.slider_2 = false
        this.slider_1 = true
      }
      else if (slider == 'slider_2') {
        this.slider_3 = false
        this.slider_1 = false
        this.slider_2 = true
      }
      else if (slider == 'slider_3') {
        this.slider_1 = false
        this.slider_2 = false
        this.slider_3 = true
      }
      else if (slider == 'next') {
        if (this.slider_1) {
          this.slider_3 = false
          this.slider_1 = false
          this.slider_2 = true
        }
        else if (this.slider_2) {
          this.slider_2 = false
          this.slider_1 = false
          this.slider_3 = true
        }
        else if (this.slider_3) {
          this.slider_2 = false
          this.slider_3 = false
          this.slider_1 = true
        }
      }
      else if (slider == 'last') {
        if (this.slider_1) {
          this.slider_1 = false
          this.slider_2 = false
          this.slider_3 = true
        }
        else if (this.slider_2) {
          this.slider_2 = false
          this.slider_3 = false
          this.slider_1 = true
        }
        else if (this.slider_3) {
          this.slider_3 = false
          this.slider_1 = false
          this.slider_2 = true
        }

      }
    },
    openWhatsAppForm() {
      this.whats_app_form = true;
    },
    closeWhatsAppForm() {
      this.whats_app_form = false;
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/mixins";

$color-primary: #16A085;
$color-primary-light: #2bf6ce;
$color-primary-dark: #0e705c;

$color-white: #fff;
$color-black: #000;

$shadow: 0 0 1.1rem rgba(0,0,0,0.3);

@import "../assets/css/form";

.no-lg {
  display: none;
}

#register {
  padding-top: 6rem;
}

::selection {
  background-color: $color-primary;
  color: $color-white;
}

.space {
  height: 5rem;
}

.break {
  width: 30%;
  height: .3rem;
  background-color: $color-primary;
}

.color-primary {
  color: $color-primary;
}

.header {
  position: fixed;
  top: 0;
  z-index: 100;
  padding: 0 5%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: $color-black;

  &__logo {
    font-size: 2rem;
    color: $color-white !important;
    padding: .5rem 1rem;
  }

  &__mobile-content {
    display: none;

    & i {
      color: $color-white;
      cursor: pointer;
      font-size: 2rem;
    }

  }

  &__content {

    &__items {
      display: flex;
      height: 100%;

      &__item {
        padding: 0 .7rem;
        margin: 0 2px;
        text-decoration: none;
        color: $color-white !important;
        font-size: 1rem;
        position: relative;
        display: flex;
        align-items: center;
        transition: 0s;

        &::before {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: $color-primary;
          transform: translate(-50%,-8px) rotate(45deg);
          transition: .3s cubic-bezier(.55,.17,.05,.85);
          opacity: 0;
          top: -5px;
          left: 50%;
        }

        &:hover,
        &.active,
        &.router-link-active {
          color: $color-primary;
          transition: 0.1s;
          border-bottom: 3px solid $color-primary;
        }

        &:hover::before,
        &.active::before,
        &.router-link-active::before  {
          z-index: 1;
          opacity: 1;
          transform: translate(-50%,0) rotate(45deg);
        }
      }
    }
  }
}

.sticky {
  position: fixed;
  top: 0;
  opacity: 1;
  background: $color-white;
  z-index: 100;

  & .header__logo {
    color: $color-primary !important;
  }

  & .header__content__items__item,
  & .header__mobile-content i {
    color: $color-black !important;
    transition: 0s;
  }
}

.mobile-nav {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  background-color: $color-white;
  width: 60%;
  z-index: 101;
  min-height: 100vh;
  padding: 1rem;

  & .header__logo {
    color: $color-primary !important;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & i {
      font-size: 1.6rem;
    }
  }

  &__items {
    display: flex;
    flex-direction: column;
    margin: 2rem 0rem 0;

    &__item {
      padding: .5rem 1rem;
      text-decoration: none;
      color: $color-black;
      font-size: 1rem;
      position: relative;
      display: flex;
      align-items: center;

      &::before {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: $color-primary;
        transform: translate(-50%, -8px) rotate(45deg);
        transition: .3s cubic-bezier(.55,.17,.05,.85);
        opacity: 0;
        right: -5px;
      }

      &:hover,
      &.active,
      &.router-link-active {
        color: $color-primary;
        transition: 0.1s;
        border-bottom: 3px solid $color-primary;
      }

      &:hover::before,
      &.active::before,
      &.router-link-active::before  {
        z-index: 1;
        //opacity: 1;
        transform: translate(-50%,0) rotate(45deg);
      }

    }

  }
}

.slider {
  width: 100%;
  height: 100vh;
  position: relative;

  &__item {
    position: relative;
    height: 100%;
    overflow: hidden;
    background-image: linear-gradient(45deg, $color-black 4%, $color-black 100%), linear-gradient(-45deg, $color-black 0%, $color-black 80%);

    &__img img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      vertical-align: middle;
      border-style: none;
      opacity: .6;
      z-index: -1;
    }

    &__content {
      position: absolute;
      width: 90%;
      height: 100vh;
      top: 0;
      left: 5%;
      right: 5%;
      display: flex;
      align-items: center;
      color: $color-white;
      z-index: 10;
      padding-top: 2rem;

      &__container {
      }

      & .desc {
        width: 100%;
      }
    }

    &::after {
      content: '';
      background: linear-gradient(to bottom, rgba($color-primary, 0.15) 0%, rgba($color-primary, 0.5) 100%);
      height: 100vh;
      width: 100%;
      z-index: 1;
      position: absolute;
      top: 0;
    }
  }

  &__owl {
    position: relative;
    bottom: 20%;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__container {
      display: flex;
      justify-content: center;
      padding: 1rem 2rem;
    }

    &__item {
      background-color: $color-primary;
      width: .3rem;
      height: 1.5rem;
      display: block;
      border-radius: 1rem;
      margin: 0 .5rem;
      cursor: pointer;
      z-index: 10;

      &.active {
        margin-top: -1rem;
        height: 2.5rem;
      }
    }
  }

  &__previous,
  &__next {
    position: absolute;
    height: 100vh;
    top: 0;
    display: flex;
    align-items: center;
  }

  &__previous {
    right: 0;
  }

  &__next {
    left: 0;
  }

  &__previous__btn,
  &__next__btn {
    color: $color-white;
    margin: 0 1rem;
    padding: 1rem 1.2rem;
    cursor: pointer;
    box-shadow: 0 1rem 2rem rgba($color-black, .4);
    z-index: 20;

    & i {
      font-size: 1rem;
    }

    &:hover {
      outline: none;
      transform: translateY(-1px);
      box-shadow: 0 .5rem 1rem rgba($color-black, .6);

      &::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
      }
    }

    &::after {
      content: "";
      display: inline-block;
      height: 100%;
      width: 100%;
      border-radius: 10rem;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: all .4s;
    }
  }

  & .register__container {
    z-index: 10;
    position: absolute;
    top: 13%;
    bottom: 8%;
    right: 55%;
    left: 5%;
  }
}

.slider__item__content .register__container {
  margin: 1rem;
  border-radius: 1rem;
}

.register {
  position: relative;

  & .col-12,
  & .col-md-6, {
    padding: 0 5%;
  }

  &__container {
    background-color: $color-primary-dark;
    padding: 2rem 3rem;
    color: $color-white;
    box-shadow: 0 1rem 2rem rgba($color-primary-dark, .8);
  }

  &__form {
    margin: .8rem .4rem 1rem;
    z-index: 100;

    &__btn {

      &,
      &__btn:link,
      &__btn:visited, {
        margin: 1rem .5rem 0;
        padding: .5rem 1.5rem;
        border-radius: .5rem;
        transition: all .2s;
        position: relative;
        border: none;
        cursor: pointer;
        background-color: $color-primary;
      }

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba($color-black, .2);
        background-color: $color-primary;

        &::after {
          transform: scaleX(1.4) scaleY(1.6);
          opacity: 0;
        }
      }

      &:active,
      &:focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 .5rem 1rem rgba($color-primary, .4);
        background-color: $color-primary;
      }
    }
  }
}

.about {
  display: flex;
  flex-direction: column;
  align-items: center;

  & .about-desc {
    width: 50%;
  }

  &__section {
    display: flex;
    align-items: center;
    padding: 0 5%;

    &__img {
      position: relative;
      width: 100%;

      &::before {
        content: '';
        border-radius: 20px;
        border: solid 1px rgba(255, 255, 255, 0.5);
        width: 89%;
        height: 85%;
        margin: 5%;
        position: absolute;
        z-index: 1;
      }

      & img {
        border-radius: 20px;
        width: 100%;
        height: 100%;
      }
    }

    &__content {
      border-radius: 20px;
      padding: 2rem;
      background: $color-white;
      margin-right: -4rem;
      box-shadow: $shadow;
      z-index: 1;

      &__contact {
        margin-top: 1rem;
        display: flex;

        &__btn {
          margin: 0 1rem;
          padding: 1rem 1.2rem;
          cursor: pointer;
          box-shadow: 0 1rem 2rem rgba($color-primary, .4);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40%;
          font-size: 1rem;

          & i {
            margin-right: .8rem;
            font-size: 1.5rem;
          }

          &:hover {
            outline: none;
            color: $color-white;
            background-color: $color-primary;
            transform: translateY(-3px);
            box-shadow: 0 .5rem 1rem rgba($color-black, .6);
          }
        }
      }
    }
  }
}

.services {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__items {
    padding: 4rem 5% 2rem;

    &__item {
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      &__icon {
        transition: all 0.5s ease;
        background: #fff;
        width: 70px;
        height: 70px;
        border-radius: 100%;
        border: solid 1px #e0e0e0;
        z-index: 9;
        display: flex;
        justify-content: center;
        align-items: center;

        & i {
          font-size: 2rem;
        }
      }

      &__connector {
        height: 5rem;
        width: 1px;
        background-color: #e0e0e0;
        position: relative;

        & span {
          position: absolute;
          top: calc(50% - .4rem);
          right: - .35rem;
          width: .8rem;
          height: .8rem;
          background-color: #e0e0e0;

        }
      }

      &__card {
        padding: 1.5rem 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid #e0e0e0;
        border-radius: 10px;
        transition: 0.2s all;

        & .desc {
          font-size: .8rem;
          font-weight: 300;
          width: 95%;
          color: #777;
        }
      }

      &:hover .services__items__item__icon {
        transform: scale(1.1);
        box-shadow: 0px 10px 32px -14px rgb(173 173 173);
      }

      &:hover .services__items__item__connector span {
        background-color: #a1a1a1;
        transition: .02s;
      }

      &:hover .services__items__item__card {
        background-color: $color-primary;
        color: $color-white;
        transition: 0.2s all;
      }

      &:hover .services__items__item__card .desc {
        color: $color-white;
        transition: 0.2s all;
      }

    }
  }
}

.contact {
  background-color: $color-primary-dark;
  color: $color-white;
  padding: 3rem 5%;

  &__info {
    padding: 1rem;

    &__item {
      margin: 1rem 1rem 2rem;
      display: flex;
      align-items: center;

      &__icon {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid $color-primary;
        border-radius: 100%;

        & i {
          padding: 1.5rem 1.7rem;
          font-size: 1.4rem;
        }
      }

      &__details {
        margin-right: 2rem;
        display: flex;
        flex-direction: column;

        &__title {
          font-size: 1.2rem;
          margin-bottom: .5rem;
        }

        &__desc {
          font-size: 1rem;
        }
      }
    }
  }
}

.whats-app {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 101;
  display: flex;
  justify-content: center;

  &__form {
    padding: 1rem 0;
    height: max-content;
    margin-top: 3rem;
    color: $color-white;
    background-color: $color-primary-dark;
    box-shadow: 0 1rem 2rem rgba($color-primary-dark, .8);
    border-radius: 1rem;
    width: 40rem;

    &__title {
      padding: .8rem 1rem;
      border-bottom: 1px solid #e0e0e0;

      & i {
        font-size: 1.4rem;
        cursor: pointer;
      }
    }

    &__content {
      padding: 1rem 1.5rem;
    }
  }
}

@include respond(tab-port) {
  .no-mobile {
    display: none;
  }

  .no-lg {
    display: block;
  }

  .lg-nav {
    display: none;
  }

  .header__mobile-content {
    display: flex;
    align-items: center;
  }

  .header__content {
    display: none;
  }

  .slider__item__content {
    padding: 0 3%;
  }

  .slider__item__content__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .mobile-nav {
    display: block;
  }

  .about__section {
    flex-direction: column;
    justify-content: center;
  }

  .about__section__content {
    margin: 2rem 0;
  }

  .about-desc {
    width: 85% !important;
  }

  .register__container {
    padding: 0 2%;
  }

}
</style>