<?php
/**
 * Plugin Name: ערטיס גירוד לאלמנטור
 * Description: צור כרטיס גירוד באתר שלך
 * Text Domain: elementor_scratch_card
 * 
 * Elementor tested up to: 3.16.0
 * Elementor Pro tested up to: 3.16.0
 */


 if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}







function ym_carrousel() {

	// Load plugin file
	require_once( __DIR__ . '/includes/widgets-manager.php' );

}
add_action( 'plugins_loaded', 'elementor_scratch_card' );
