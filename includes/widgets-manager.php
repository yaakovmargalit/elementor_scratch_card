<?php

function register_elementor_scratch_card_custom_widgets( $widgets_manager ) {

require_once( __DIR__ . '/widgets/elementor_scratch_card_widget.php' );  // include the widget file

$widgets_manager->register( new \Elementor_Scratch_Card_Widget() );  // register the widget

}
add_action( 'elementor/widgets/register', 'register_elementor_scratch_card_custom_widgets' );




function elementor_scratch_card_widgets_dependencies() {

	/* Scripts */
	wp_register_script( 'elementor_scratch_card-script-1', plugins_url( '/js/index.js', __FILE__ ), array( 'elementor-frontend'), '2.0.3', true );


	/* Styles */
	wp_register_style( 'widget-style-1', plugins_url( '/css/index.css', __FILE__ ) );
	

}
add_action( 'wp_enqueue_scripts', 'elementor_scratch_card_widgets_dependencies' );

