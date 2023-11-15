<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}



class Elementor_Scratch_Card_Widget extends \Elementor\Widget_Base
{


    public function get_script_depends()
    {
        return ['elementor_scratch_card-script-1'];
    }

    public function get_style_depends()
    {
        return ['widget-style-1'];
    }


    public function get_name()
    {
        return 'elementor_scratch_card';
    }

    public function get_title()
    {
        return esc_html__('כרטיס גירוד', 'elementor_scratch_card');
    }

    public function get_icon()
    {
        return 'eicon-custom';
    }

    public function get_categories()
    {
        return ['general'];
    }

    public function get_keywords()
    {
        return ['כרטיס גירוד', 'גירוד'];
    }


    protected function register_controls()
    {
        $this->start_controls_section(
            'content_section',
            [
                'label' => esc_html__('תוכן', 'elementor_scratch_card'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'content_typography',
                'selector' => '{{WRAPPER}} .card-title',
            ]
        );

     
  

      


        $this->add_control(
            'height',
            [
                'label' => esc_html__('גובה', 'elementor_scratch_card'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px', '%', 'em', 'rem', 'custom'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                        'step' => 5,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 300,
                ],
                'selectors' => [
                    '{{WRAPPER}} .mySwiper' => 'height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        $this->add_control(
            'width',
            [
                'label' => esc_html__('רוחב', 'elementor_scratch_card'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px', '%', 'em', 'rem', 'custom'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                        'step' => 5,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 300,
                ],
                'selectors' => [
                    '{{WRAPPER}} .mySwiper' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );


        $this->end_controls_tab();

    }


    protected function render()
    {
        $settings = $this->get_settings_for_display();

        echo '<div class="swiper-container mySwiper" data-isAutoplay="'. esc_html($settings['is_autoplay']??0).'" data-delay="'. esc_html($settings['delay']).'" data-effect="'. esc_html($settings['effect']).'"><div class="swiper-wrapper">';

        foreach ($settings['cards'] as $card) {
            echo '<div class="swiper-slide" style="background-image: url(' . esc_url($card['image']['url']) . ');background-size: cover;background-position: center;flex-direction: column;">';
            echo '<h2 class="card-title" style="color:' . esc_html($card['title_color']) . ';    text-align: center;">' . esc_html($card['title']) . '</h2>';
            echo '</div>';
        }

        echo '</div></div>';
    }
    protected function _content_template()
    {
        ?>
        <# view.addInlineEditingAttributes('cards', 'repeater' ); #>
            <div class="swiper-container mySwiper" data-isAutoplay="{{settings.is_autoplay}}" data-delay="{{settings.delay}}" data-effect="{{settings.effect}}">
                <div class="swiper-wrapper">

                    <# _.each(settings.cards, function(card) { #>
                        <div class="swiper-slide"
                            style="background-image: url({{card.image.url}});background-size: cover;background-position: center;flex-direction: column;">
                            <h2 class="card-title" style="color:{{card.title_color}};text-align: center;">{{card.title}}
                            </h2>
                            <# } ); #>
                        </div>
                </div>
                <?php
    }

}