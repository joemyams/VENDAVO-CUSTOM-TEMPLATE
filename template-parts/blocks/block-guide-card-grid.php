<?php
$modal = get_field('block_modal');
$args = array( 'post_type' => 'team', 'posts_per_page' => -1, 'orderby' => 'post__in' );
$loop = new WP_Query( $args );
if ( $loop->have_posts() ) : ?>
    <div class="cont pos-rel is-default is-headline--center is-body--center">
        <div class="people__image"><div class="img-container pos-rel"></div></div>
        <div class="modal-content rounded-0 pb-0">            
            <section class="modal-body w-100 h-100 nooverf is-text--blue-30 z-1">      
                <section class="inner">
                    <div class="mb-5 pb-3 text-center cont js-team__content">
                        <?php echo acfOutput($modal['subheadline'], 'h4', 'modal__inner-subheading is-text--green-10'); ?>
                        <?php echo acfOutput($modal['headline'], 'h3', 'modal__inner-heading is-text--blue90-V2 mt-0 mb-5'); ?>
                    </div>
                    <div class="js-team__slider-container pos-rel">
                        <div class="js-team__slider pos-rel z-5" data-slick="slick-<?php echo $block['id']; ?>">
                            <?php while ( $loop->have_posts() ) : $loop->the_post(); $parentID = get_the_ID(); ?>
                                <div class="navigator__cell pos-rel item w-100">
                                    <button type="button">
                                        <div class="card-header bg-transparent border-0 rounded-0">
                                            <a href="<?php echo get_permalink($parentID); ?>">
                                                <div class="people__image"><?php echo acfImgOutput(get_field('image', $parentID), '', 'img-container pos-rel'); ?></div>
                                            </a>
                                        </div>
                                        <div class="card-body bg-transparent border-0 rounded-0">
                                           <a href="<?php echo get_permalink($parentID); ?>">   <h4 class="people__title"><?php the_title(); ?></h4>
                                            <?php if(get_field('job_title', $parentID)): ?></a>
                                                <p class="people__job-title is-text--green-10"><?php echo esc_attr(get_field('job_title', $parentID)); ?></p>
                                            <?php endif; ?>
                                        </div>
                                    </button>
                                </div>
                            <?php endwhile; ?>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </div>
<?php endif; ?>
<?php wp_reset_postdata(); ?>


<script>
jQuery(document).ready(function(){
    jQuery(".js-team__slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        prevArrow: '<div class="slick-prev"><img src="<?php echo get_template_directory_uri() . '/assets/img/left-arrow-carousel.png'; ?>" class="w-6 h-6"></div>',
        nextArrow: '<div class="slick-next"><img src="<?php echo get_template_directory_uri() . '/assets/img/right-arrow-carousel.png'; ?>" class="w-6 h-6"></div>',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
</script>


<style>
.slick-prev, .slick-next {
    position: absolute;
    top: 40%;
    z-index: 1;
    width: 40px;
    height: 40px;
    font-size: 50px;
    cursor: pointer;
    color: #6cba42;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.slick-prev:hover, .slick-next:hover {
    position: absolute;
    top: 40%;
    z-index: 1;
    width: 40px;
    height: 40px;
    font-size: 50px;
    cursor: pointer;
    color: #6cba42;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.03);
}
.slick-prev:before {
   display: none;
}

.slick-next:before {
    content:  none !important;
}

.slick-prev {
    left: -12px;
    transform: translateY(-50%);
}

.slick-next {
    right: -12px;
    transform: translateY(-50%);
}

/* Responsive */
@media screen and (max-width: 480px) {
    .slick-prev, .slick-next {
        width: 40px;
        height: 40px;
        font-size: 30px;
    }
}
</style>