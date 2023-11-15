

import './index.css'
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