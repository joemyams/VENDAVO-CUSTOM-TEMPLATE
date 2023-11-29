<?php 
get_header(); 

$postID = get_the_ID();

$partner = get_field('partner_details');
$useLogoWhite = $partner['use_logo_white'];
if($useLogoWhite):
    $logo = $partner['logo_white'];
else: 
    $logo = $partner['logo'];
endif;
$text = $partner['content'];
$url = $partner['website'];

$regionTerms = get_the_terms( $postID, 'partner-region' );
$industryTerms = get_the_terms( $postID, 'partner-industry' );
$specializationTerms = get_the_terms( $postID, 'partner-specialization' );
?>

<main id="siteMain" role="main" class="page-builder-body">
    <section class="block block--header partners-header is-bg--blue-30 is-text--white is-top--xl is-bottom--xl rel is--layout-seven header--inverted">
        <div class="header__bg-image"><img data-src="https://www.vendavo.com/wp-content/uploads/2022/09/header-bg.png" alt="" title="" class="lazyload image-cover" /></div>        
        <div class="cont is-default front pos-rel z-5 is-bottom--xxl pb-lg-0">
            <div class="row justify-content-lg-between align-items-center">
                <div class="col-lg-5 mb-3 mb-lg-0">
                    <div class="image text-center text-lg-left">
                        <?php echo wp_get_attachment_image( $logo['ID'], 'full', false, array('class' => 'image__top img-fluid w-lg-100' ) ); ?>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="header__text w-100">
                        <h1 class="header__headline"><?php the_title(); ?></h1>
                        <div class="header__subheadline">
                            <div class="header__description"><?php echo $text; ?></div>
                            <div class="header__meta is-top--md">
                                <?php if($regionTerms): ?>
                                    <p class="entry-meta mb-1"><?php _e( 'Regions:', 'vendavo' ); ?> <span class="entry-terms"><?php echo getCommaTermList($regionTerms); ?></span></p>
                                <?php endif; ?>
                                <?php if($industryTerms): ?>
                                    <p class="entry-meta mb-1"><?php _e( 'Industries:', 'vendavo' ); ?> <span class="entry-terms"><?php echo getCommaTermList($industryTerms); ?></span></p>
                                <?php endif; ?>
                                <?php if($specializationTerms): ?>
                                    <p class="entry-meta mb-1"><?php _e( 'Specializations:', 'vendavo' ); ?> <span class="entry-terms"><?php echo getCommaTermList($specializationTerms); ?></span></p>
                                <?php endif; ?>
                            </div>
                        </div>
                        <?php if($url): ?>
                            <div class="cta-container">
                                <a class="btn btn--primary is--blue-green-G" href="<?php echo esc_url($url); ?>" target="_blank"><?php _e( 'Website', 'vendavo' ); ?></a>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>           
    </section>
    <section class="partners-body">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); 
            the_content(); 
        endwhile;
    endif; ?>
</section>
</main>

<?php get_footer();