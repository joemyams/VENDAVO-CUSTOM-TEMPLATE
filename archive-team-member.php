<?php get_header(); ?>

<main id="siteMain" role="main" class="page-builder-body">
    <section class="team-archive">
        <div class="container">
            <h1 class="archive-title"><?php post_type_archive_title(); ?></h1>
            <div class="team-members">
                <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                    <div class="team-member">
                        <h2 class="team-member-name"><?php the_title(); ?></h2>
                        <?php if ( has_post_thumbnail() ) : ?>
                            <div class="team-member-thumbnail">
                                <?php the_post_thumbnail( 'thumbnail' ); ?>
                            </div>
                        <?php endif; ?>
                        <div class="team-member-content">
                            <?php the_content(); ?>
                        </div>
                    </div>
                <?php endwhile; endif; ?>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>