<?php get_header(); ?>

<main id="siteMain" role="main" class="page-builder-body">
    <section class="is-top--xl is-bottom--xl is-text--blue-30">
        <div class="cont is-md text-center rte">
            <h1><?php _e( 'Error 404', 'vendavo' ); ?></h1>
            <h3><?php _e( 'Page Not Found', 'vendavo' ); ?></h3>
            <p><?php _e( 'The page you are looking for has moved or no longer exists.', 'vendavo' ); ?></p>
            <a class="btn btn--primary is-green" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php _e( 'Back Home', 'vendavo' ); ?></a>
        </div>
    </section>
</main>

<?php get_footer();