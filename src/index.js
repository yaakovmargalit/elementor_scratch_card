import './index.css';
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js';

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
    console.log("dd");
    this.elements.$scratchCard.ready(this.onScratchCardLoad.bind(this));
  }

  onScratchCardLoad() {
    const containerHeight = this.elements.$scratchCard.data('containerheight')
    console.log(containerHeight);
    const scContainer = document.querySelector('.elementor-scratch-card');
    console.log(scContainer);
    const sc = new ScratchCard(scContainer, {
      scratchType: SCRATCH_TYPE.LINE,
      containerWidth: scContainer.offsetWidth,
      containerHeight,
      imageForwardSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcOPfWbbXlK68w9GtueTUonD2gdaoC_zA3p1WpQvLgnar54qBq2LOneoX9tvHUeu3Ii3Q&usqp=CAU',
      imageBackgroundSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQUbvWX2EsoBDFuYJjzUVmKzCN0PYvlb4K1qPsNgnvlprMuWfKxQRaYLG0IY_oUCIpesc&usqp=CAU',
      // htmlBackground: '<p class="elementor-scratch-card-background-html"><strong>Hello i am HTML content !</strong></p>',
      clearZoneRadius: 40,
      nPoints: 30,
      pointSize: 3,
      percentToFinish:100,
      callback: function () {
        // alert('Now the window will reload !')
        // window.location.reload()
      }
    })

    // Init
    sc.init().then(() => {
      sc.canvas.addEventListener('scratch.move', () => {
        let percent = sc.getPercent().toFixed(2)
      })
    }).catch((error) => {
      // image not loaded
      alert(error.message);
    });

  }
}



jQuery(window).on('elementor/frontend/init', () => {
  const addHandler = ($element) => {
    elementorFrontend.elementsHandler.addHandler(elementorScratchCard, {
      $element,
    });
  };

  elementorFrontend.hooks.addAction('frontend/element_ready/elementor_scratch_card.default', addHandler);
});