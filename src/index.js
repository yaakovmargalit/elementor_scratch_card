import './index.css';
import {ScratchCard, SCRATCH_TYPE} from 'scratchcard-js';

class elementorScratchCard extends elementorModules.frontend.handlers.Base {
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
    this.elements.$scratchCard.ready(this.onScratchCardLoad.bind(this));
  }

  onScratchCardLoad() {
 
    const sc = new ScratchCard('.elementor-scratch-card', {
      scratchType: SCRATCH_TYPE.SPRAY,
      containerWidth: scContainer.offsetWidth,
      containerHeight: 300,
      imageForwardSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcOPfWbbXlK68w9GtueTUonD2gdaoC_zA3p1WpQvLgnar54qBq2LOneoX9tvHUeu3Ii3Q&usqp=CAU',
      imageBackgroundSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQUbvWX2EsoBDFuYJjzUVmKzCN0PYvlb4K1qPsNgnvlprMuWfKxQRaYLG0IY_oUCIpesc&usqp=CAU',
      htmlBackground: '<p class="test"><strong>Hello i am HTML content !</strong></p>',
      clearZoneRadius: 50,
      nPoints: 30,
      pointSize: 4,
      callback: function () {
        alert('Now the window will reload !')
        window.location.reload()
      }
    })

  }
}



jQuery(window).on('elementor/frontend/init', () => {
  const addHandler = ($element) => {
    elementorFrontend.elementsHandler.addHandler(elementorScratchCard, {
      $element,
    });
  };

  elementorFrontend.hooks.addAction('frontend/element_ready/ym_carrousel.default', addHandler);
});