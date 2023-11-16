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

        $this->add_control(
			'plugin_url',
			[
				'label' => esc_html__( 'View', 'textdomain' ),
				'type' => \Elementor\Controls_Manager::HIDDEN,
				'default' => plugin_dir_url(__FILE__),
                'frontend_available' => true,
			]
		);

        $this->add_control(
            'percentage',
            [
                'label' => esc_html__('מספר אחוזים לסיום הגירוד', 'elementor_scratch_card'),
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
				'label' => esc_html__( 'הצג קונפטי בסיום', 'elementor_scratch_card' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'כן', 'elementor_scratch_card' ),
				'label_off' => esc_html__( 'לא', 'elementor_scratch_card' ),
				'return_value' => 'yes',
				'default' => 'yes',
                'frontend_available' => true,
			]
		);

        $this->add_control(
            'confetti_style',
            [
                'label' => esc_html__('סגנון קונפטי', 'elementor_scratch_card'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'confetti',
                'options' => [
                    'confetti' => esc_html__('קונפטי ציבעוני', 'elementor_scratch_card'),
                    'starts' => esc_html__('כוכבים זהב', 'elementor_scratch_card'),
                  
                ]

            ]
        );

        $this->add_control(
			'confetti_duration',
			[
				'label' => esc_html__( 'זמן הצגת הקונפטי (בשניות)', 'elementor_scratch_card' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
                // 'default' => 1,
				'range' =>  [
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
                'label' => esc_html__('תמונה קדמית', 'elementor_scratch_card'),
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
                'label' => esc_html__('תמונה אחורית', 'elementor_scratch_card'),
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
                'label' => esc_html__('שימו ❤️', 'elementor_scratch_card'),
                'type' => \Elementor\Controls_Manager::RAW_HTML,
                'raw' => esc_html__(' אם יוגדר קוד HTML  התוכן שלו יופיע ברקע הכרטיס במקום התמונה האחורית.', 'textdomain'),
                'content_classes' => 'your-class',
            ]
        );

        $this->add_control(
            'back_html',
            [
                'label' => esc_html__('Custom HTML', 'elementor_scratch_card'),
                'type' => \Elementor\Controls_Manager::CODE,
                'language' => 'html',
                'frontend_available' => true,
                'rows' => 20,
            ]
        );


        $this->add_control(
            'callback_code',
            [
                'label' => esc_html__('קוד js בעת סיום הגירוד', 'elementor_scratch_card'),
                'type' => \Elementor\Controls_Manager::CODE,
                'frontend_available' => true,
                'rows' => 20,
            ]
        );

        $this->end_controls_section();



        $this->start_controls_section(
            'scratch_style_section',
            [
                'label' => esc_html__('סגנון גירוד', 'elementor_scratch_card'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'scratch_style',
            [
                'label' => esc_html__('סגנון המברשת', 'elementor_scratch_card'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 3,
                'options' => [
                    0 => esc_html__('מברשת', 'elementor_scratch_card'),
                    1 => esc_html__('ספריי', 'elementor_scratch_card'),
                    2 => esc_html__('עיגול', 'elementor_scratch_card'),
                    3 => esc_html__('קו', 'elementor_scratch_card'),
                ],
                'frontend_available' => true

            ]
        );

        $this->add_control(
			'scratch_width',
			[
				'label' => esc_html__( 'עובי מברשת', 'elementor_scratch_card' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
                'default' => 30,
				'range' =>  [
						'min' => 1,
						'max' => 100,
					],
				'default' => [
					'size' => 30,
                ],
                'frontend_available' => true,
                'condition' => [
                    'scratch_style' => [1,2,3],
                ],

			]
		);
        $this->end_controls_section();


        $this->start_controls_section(
            'box_shadow_section',
            [
                'label' => esc_html__('הצללה', 'elementor_scratch_card'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
        $this->add_control(
            'custom_box_shadow',
            [
                'label' => esc_html__('הצללה', 'elementor_scratch_card'),
                'type' => \Elementor\Controls_Manager::BOX_SHADOW,
                'selectors' => [
                    '{{SELECTOR}} .sc__container' => 'box-shadow: {{HORIZONTAL}}px {{VERTICAL}}px {{BLUR}}px {{SPREAD}}px {{COLOR}};',
                ],
            ]
        );
        $this->end_controls_section();

        $this->start_controls_section(
            'style_section',
            [
                'label' => esc_html__('מסגרת', 'elementor_scratch_card'),
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
                'label' => esc_html__('עיגול פינות', 'elementor_scratch_card'),
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

        $this->start_controls_section(
            'size_section',
            [
                'label' => esc_html__('מידות', 'elementor_scratch_card'),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
        $this->add_control(
            'height',
            [
                'label' => esc_html__('גובה', 'elementor_scratch_card'),
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
        $t = time();
        // echo '<div class="sc__wrapper">';
        echo '<div class="elementor-scratch-card sc__container">';
        echo '<div id="elementor-scratch-card-confetti-box" style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index:1;
        display: none;
    ">';
        echo '<img class="elementor-scratch-card-confetti" style="height: 100%; width: 100%;" src="'.esc_html( plugin_dir_url(__FILE__).'/images/'.esc_html( $settings['confetti_style'] ).'.gif' ).'" />';
        echo '</div>';
        echo '</div>';
        // echo '</div>';
    }


}