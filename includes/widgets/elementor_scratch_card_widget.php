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
			'important_note',
			[
				'label' => esc_html__( 'שימו ❤️', 'elementor_scratch_card' ),
				'type' => \Elementor\Controls_Manager::RAW_HTML,
				'raw' => esc_html__( ' אם יוגדר קוד HTML התוכן שלו יופיע ברקע הכרטיס במקום התמונה', 'textdomain' ),
				'content_classes' => 'your-class',
			]
		);

        $this->add_control(
			'custom_html',
			[
				'label' => esc_html__( 'Custom HTML', 'elementor_scratch_card' ),
				'type' => \Elementor\Controls_Manager::CODE,
				'language' => 'html',
				'rows' => 20,
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
                    '{{WRAPPER}} .sc__wrapper' => 'height: {{SIZE}}{{UNIT}};',
                    '{{WRAPPER}} .sc__container' => 'height: {{SIZE}}{{UNIT}};',
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
                    '{{WRAPPER}} .sc__wrapper' => 'width: {{SIZE}}{{UNIT}};',
                    '{{WRAPPER}} .sc__container' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );


        $this->end_controls_tab();

    }


    protected function render()
    {
        $settings = $this->get_settings_for_display();
        echo '<div class="sc__wrapper">';
        echo '<div data-containerHeight="'.esc_html($settings['height']["size"]).'" class="elementor-scratch-card sc__container">';
        echo '</div>';
        echo '</div>';
    }
  

}