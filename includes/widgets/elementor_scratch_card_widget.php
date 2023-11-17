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
        return esc_html__('Scratch Card', 'elementor-scratch-card');
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
        return ['scratch card','scratch','card'];
    }


    protected function register_controls()
    {
        $this->start_controls_section(
            'content_section',
            [
                'label' => esc_html__('Content', 'elementor-scratch-card'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'plugin_url',
            [
                'label' => esc_html__('View', 'elementor-scratch-card'),
                'type' => \Elementor\Controls_Manager::HIDDEN,
                'default' => plugin_dir_url(__FILE__),
                'frontend_available' => true,
            ]
        );

        $this->add_control(
            'percentage',
            [
                'label' => esc_html__('Number of percentages to finish scratching', 'elementor-scratch-card'),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'min' => 5,
                'max' => 100,
                'step' => 1,
                'default' => 70,
                'frontend_available' => true,
            ]
        );

        $this->add_control(
            'show_confetti',
            [
                'label' => esc_html__('Show confetti at the end', 'elementor-scratch-card'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__('Yes', 'elementor-scratch-card'),
                'label_off' => esc_html__('No', 'elementor-scratch-card'),
                'return_value' => 'yes',
                'default' => 'yes',
                'frontend_available' => true,
            ]
        );

        $this->add_control(
            'confetti_style',
            [
                'label' => esc_html__('Confetti style', 'elementor-scratch-card'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'confetti',
                'options' => [
                    'confetti' => esc_html__('olored paper', 'elementor-scratch-card'),
                    'starts' => esc_html__('gold stars', 'elementor-scratch-card'),
                    'gold' => esc_html__('gold paper', 'elementor-scratch-card'),
                    'fireworks' => esc_html__('fireworks', 'elementor-scratch-card'),
                    'custom' => esc_html__('custom', 'elementor-scratch-card')
                ]

            ]
        );
        $this->add_control(
			'confetti_custom_img',
			[
				'label' => esc_html__( 'Upload a gif with a transparent background', 'elementor-scratch-card' ),
				'type' => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
                'condition' => [
                    'confetti_style' => 'custom',
                ],
			]
		);

        $this->add_control(
            'confetti_duration',
            [
                'label' => esc_html__('Confetti display time (in seconds)', 'elementor-scratch-card'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                // 'default' => 1,
                'range' => [
                    'min' => 1,
                    'max' => 100,
                    'step' => 1,

                ],
                'default' => [
                    'size' => 2,
                ],
                'frontend_available' => true

            ]
        );

        $this->add_control(
            'front_image',
            [
                'label' => esc_html__('Front image', 'elementor-scratch-card'),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'frontend_available' => true,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $this->add_control(
            'back_image',
            [
                'label' => esc_html__('Back image', 'elementor-scratch-card'),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'frontend_available' => true,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );


        $this->add_control(
            'important_note',
            [
                'label' => esc_html__('Pay attention', 'elementor-scratch-card'),
                'type' => \Elementor\Controls_Manager::RAW_HTML,
                'raw' => esc_html__('If an HTML code is defined, its content will appear in the background of the card instead of the background image.', 'elementor-scratch-card')            ]
        );

        $this->add_control(
            'back_html',
            [
                'label' => esc_html__('Custom HTML', 'elementor-scratch-card'),
                'type' => \Elementor\Controls_Manager::CODE,
                'language' => 'html',
                'frontend_available' => true,
                'rows' => 20,
            ]
        );


        $this->add_control(
            'callback_code',
            [
                'label' => esc_html__('js code when scraping is finished', 'elementor-scratch-card'),
                'type' => \Elementor\Controls_Manager::CODE,
                'frontend_available' => true,
                'rows' => 20,
            ]
        );

        $this->end_controls_section();


        $this->start_controls_section(
            'size_section',
            [
                'label' => esc_html__('Size', 'elementor-scratch-card'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
        $this->add_control(
            'height',
            [
                'label' => esc_html__('height', 'elementor-scratch-card'),
                'frontend_available' => true,
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
                'label' => esc_html__('width', 'elementor-scratch-card'),
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

        $this->end_controls_section();

        $this->start_controls_section(
            'scratch_style_section',
            [
                'label' => esc_html__('Scratch style', 'elementor-scratch-card'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'scratch_style',
            [
                'label' => esc_html__('scratch type', 'elementor-scratch-card'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 3,
                'options' => [
                    0 => esc_html__('brush', 'elementor-scratch-card'),
                    1 => esc_html__('spray', 'elementor-scratch-card'),
                    2 => esc_html__('circle', 'elementor-scratch-card'),
                    3 => esc_html__('line', 'elementor-scratch-card'),
                ],
                'frontend_available' => true

            ]
        );

        $this->add_control(
            'scratch_width',
            [
                'label' => esc_html__('scratch width', 'elementor-scratch-card'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'default' => 30,
                'range' => [
                    'min' => 1,
                    'max' => 100,
                ],
                'default' => [
                    'size' => 30,
                ],
                'frontend_available' => true,
                'condition' => [
                    'scratch_style' => ['1', '2', '3'],
                ],

            ]
        );
        $this->end_controls_section();


        $this->start_controls_section(
            'box_shadow_section',
            [
                'label' => esc_html__('Box shadow', 'elementor-scratch-card'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Box_Shadow::get_type(),
            [
                'name' => 'box_shadow',
                'selector' => '{{WRAPPER}} .sc__container',
            ]
        );
        $this->end_controls_section();

        $this->start_controls_section(
            'style_section',
            [
                'label' => esc_html__('Border', 'elementor-scratch-card'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'border',
                'selector' => '{{WRAPPER}} .sc__container',
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'border',
                'selector' => '{{WRAPPER}} .sc__container',
            ]
        );

        $this->add_control(
            'border-radius',
            [
                'label' => esc_html__('border radius', 'elementor-scratch-card'),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => ['px', '%', 'em', 'rem', 'custom'],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 0,
                ],
                'selectors' => [
                    '{{WRAPPER}} .sc__container' => 'border-radius: {{SIZE}}{{UNIT}};',
                ],
            ]
        );


        $this->end_controls_section();

      





        $this->end_controls_tab();

    }


    protected function render()
    {
        $settings = $this->get_settings_for_display();
        $gif_url = '';
        if ($settings['confetti_style'] == 'custom') {
            $gif_url = $settings['confetti_custom_img']['url'];
        } else {
            $gif_url = plugin_dir_url(__FILE__) . '/images/' . esc_html($settings['confetti_style']) . '.gif';
        }
        echo '<div class="elementor-scratch-card sc__container">';
        echo '<div class="elementor-scratch-card-confetti-box" style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index:1;
        display: none;
    ">';
        echo '<img class="elementor-scratch-card-confetti" style="height: 100%; width: 100%;" src="' . esc_html($gif_url) . '" />';
        echo '</div>';
        echo '</div>';
    }


}