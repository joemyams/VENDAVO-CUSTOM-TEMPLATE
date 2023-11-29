<?php
/**
 * Template Name: Authors Archive
 *
 * This template is used to display the archive page for authors.
 */

get_header();

if (have_posts()) {
    // Get the current author's ID
    $author_id = get_queried_object_id();

    // Get the author's name
    $author_name = get_the_author_meta('display_name', $author_id);
    ?>

    <section class="author-archive">
        <div class="container">
            <h1 class="author-archive__title"><?php echo $author_name; ?></h1>
            
            <div class="author-archive__posts">
                <?php while (have_posts()) : the_post(); ?>
                    <article <?php post_class('author-archive__post'); ?>>
                        <h2 class="author-archive__post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                        <div class="author-archive__post-content"><?php the_excerpt(); ?></div>
                    </article>
                <?php endwhile; ?>
            </div>
        </div>
    </section>

    <?php
} else {
    // No posts found
    echo '<p>No posts found.</p>';
}

get_footer();
?>