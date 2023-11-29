<?php
/**
 * Template Name: Utility Page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_header();

/* Start the Loop */
while ( have_posts() ) :
    the_post();
    echo '<section class="utility-page"><div class="cont is-sm is-top--lg is-bottom--lg rte">';
    the_content();
    echo '</div></section>';


endwhile; // End of the loop.

get_footer();