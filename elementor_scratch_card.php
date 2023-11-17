<?php
/**
 * Plugin Name: Scratch card for Elementor
 * Description: Create a scratch card on your website
 * Text Domain: elementor-scratch-card
 * Elementor tested up to: 3.16.0
 * Elementor Pro tested up to: 3.16.0
 */


 if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}







function elementor_scratch_card() {

	// Load plugin file
	require_once( __DIR__ . '/includes/widgets-manager.php' );

}
add_action( 'plugins_loaded', 'elementor_scratch_card' );
