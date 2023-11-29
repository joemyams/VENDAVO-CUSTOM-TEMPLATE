<?php
/**
 * Template Name: Single Author
 *
 * This template is used to display the single author page.
 */
get_header();

if (have_posts()) {
    while (have_posts()) : the_post();

    if ($author_override) {
        // Get ACF fields.
        $name = get_the_title($author_override);
        $author_bio = get_the_author_meta('description', $override_author);
        $author_image = get_the_author_meta('ID', $override_author);
    } else {
        // Get default WordPress author data.
        $name = get_the_author_meta('display_name');
        $author_bio = get_the_author_meta('description');
        $author_image = get_avatar_url(get_the_author_meta('ID'));
    }

    ?>

    <section class="single-author">
        <div class="container">

            <!-- AJAX Load More Shortcode -->
            <?php echo do_shortcode('[ajax_load_more id="2885602167" filters="true" theme_repeater="theme_repeater.php" paging_controls="true" paging_first_label="First" paging="true"  paging_show_at_most="4" paging_controls="true" paging_first_label="First" paging_last_label="Last"  post_type="post" posts_per_page="6" images_loaded="true" scroll="false" button_label="More Posts"]'); ?>

        </div>
    </section>

    <?php
    endwhile;
} else {
    // No posts found
    echo '<p>No posts found.</p>';
}

get_footer();
?>