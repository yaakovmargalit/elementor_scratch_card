import './index.css';
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js';




class ElementorScratchCard extends elementorModules.frontend.handlers.Base {

  onInit() {
    super.onInit();

    this.onScratchCardLoad()
  }

  getDefaultSettings() {
    return {
      selectors: {
        scratchCard: '.elementor-scratch-card'
      },
    };
  }

  getDefaultElements() {
    const selectors = this.getSettings('selectors');
    return {
      $scratchCard: this.$element.find(selectors.scratchCard),
    };
  }

  bindEvents() {
  }

  onScratchCardLoad() {
    const containerHeight = this.getElementSettings('height')
    const frontImage = this.getElementSettings('front_image')
    const backImage = this.getElementSettings('back_image')
    const backHTML = this.getElementSettings('back_html')
    const percentage = this.getElementSettings('percentage')
    const scratchStyle = +this.getElementSettings('scratch_style')
    const pluginUrl = this.getElementSettings('plugin_url')
    const scratchWidth = this.getElementSettings('scratch_width')
    const callbackCode = this.getElementSettings('callback_code')
    const showConfetti = this.getElementSettings('show_confetti')
    const confettiDuration = this.getElementSettings('confetti_duration')
    var myCodeFunction = new Function(callbackCode);

    const scContainer = this.elements.$scratchCard[0];
    const sc = new ScratchCard(scContainer, {
      scratchType: scratchStyle,
      containerWidth: scContainer.offsetWidth,
      containerHeight: containerHeight.size,
      imageForwardSrc: frontImage.url,
      imageBackgroundSrc: backImage.url,
      htmlBackground: backHTML || '',
      brushSrc: pluginUrl + '/images/brush.png',
      clearZoneRadius: scratchStyle === 0 ? 0 : scratchWidth?.size||30,
      width: 5,
      nPoints: 30,
      pointSize: 3,
      percentToFinish: percentage,
      callback: callbackFunction.bind(this)
    })

    function callbackFunction() {
      if (showConfetti==="yes") {
        this.elements.$scratchCard.find('.elementor-scratch-card-confetti-box').fadeIn()
        setTimeout(() => {
          this.elements.$scratchCard.find('.elementor-scratch-card-confetti-box').fadeOut()
        }, confettiDuration?.size*1000)
      }
      myCodeFunction()
    }

    // Init
    sc.init().then(() => {
      sc.canvas.addEventListener('scratch.move', () => {
        let percent = sc.getPercent().toFixed(2)
      })
    }).catch((error) => {
      // image not loaded
      console.error(error.message);
    });

  }
}

// jQuery('#elementor-scratch-card-confetti-box').css('display','block')
// setTimeout(()=>{
//   jQuery('#elementor-scratch-card-confetti-box').css('display','none')
// },1500)

jQuery(window).on('elementor/frontend/init', () => {
  elementorFrontend.elementsHandler.attachHandler('elementor_scratch_card', ElementorScratchCard);
});

// jQuery(window).on('elementor/frontend/init', () => {
//   const addHandler = ($element) => {
//     elementorFrontend.elementsHandler.addHandler(elementorScratchCard, {
//       $element,
//     });
//   };

//   elementorFrontend.hooks.addAction('frontend/element_ready/elementor_scratch_card.default', addHandler);
// });