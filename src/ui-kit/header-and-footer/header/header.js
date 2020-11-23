import * as $ from 'jquery';

export class Header {
  constructor() {
    this.init();
  }

  init() {
    this.$navItems = $('[data-signed="false"]').hide();
    this.$nav = $('.header__nav');
    this.$burger = $('.header__burger');
    this.$slideUp = $('.header__slide-up');
    this.handleSlideUpClick = this.handleSlideUpClick.bind(this);
    this.handleBurgerClick = this.handleBurgerClick.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.$slideUp.on('click', this.handleSlideUpClick);
    this.$burger.on('click', this.handleBurgerClick);
    $(window).on('resize', this.handleWindowResize);
  }

  handleWindowResize() {
    if (window.innerWidth >= 1280) {
      this.$slideUp.hide();
      this.$burger.hide();
      this.$nav.show();
    } else {
      this.$nav.hide();
      this.$slideUp.hide();
      this.$burger.show();
    }
  }

  handleSlideUpClick() {
    this.$slideUp.hide();
    this.$burger.show();
    this.$nav.slideUp(250);
  }

  handleBurgerClick() {
    this.$burger.hide();
    this.$slideUp.show();
    this.$nav.slideDown(250);
  }
}
