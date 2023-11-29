<?php
/* Template Name: Guide Page */ 
get_header();
 ?>  
        <?php
        $modal = get_field('block_modal');
        $args = array( 'post_type' => 'team', 'posts_per_page' => -1, 'orderby' => 'post__in' );
        $loop = new WP_Query( $args );
        if ( $loop->have_posts() ) : ?>
            <aside class="modal modal__popup modal__full fade people-modal" id="people-modal" tabindex="-1" role="dialog" aria-labelledby="people-modal" aria-hidden="false">
                <div class="modal-dialog" role="document">
                    <div class="people__image-clone"><div class="img-container pos-rel"></div></div>
                    <div class="modal-content rounded-0 pb-0">            
                        <header class="modal-header">
                            <button class="btn btn-transparent btn-close px-0 ml-auto" type="button" data-dismiss="modal" aria-label="Close">
                                <div class="btn-close-text d-inline-block align-middle mr-1 sr-only">Close</div>
                                <div class="card__icon-plus svg__icon-plus z-2">
                                    <?php echo Vendavo_SVG_Icons::get_svg( 'ui', 'plus', 32, 'capability__plus'); ?>
                                </div>
                            </button>
                        </header>
                        <section class="modal-body w-100 h-100 nooverf is-text--blue-30">      
                            <section class="inner">
                                <div class="mb-5 pb-3 text-center cont js-team__content">
                                    <?php echo acfOutput($modal['subheadline'], 'h4', 'modal__inner-subheading is-text--green-10'); ?>
                                    <?php echo acfOutput($modal['headline'], 'h3', 'modal__inner-heading is-text--blue90-V2 mt-0 mb-5'); ?>
                                </div>
                                <div class="js-team__slider-container pos-rel">

                                    <div class="js-team__slider pos-rel z-5" data-slick="slick-<?php echo $block['id']; ?>">
                                        <?php while ( $loop->have_posts() ) : $loop->the_post(); $parentID = get_the_ID(); ?>
                                            <div class="navigator__cell pos-rel item w-100">
                                                <button type="button" data-target="#people-modal-inner" class="card card__team pos-rel modal-people-link align-items-stretch w-100 pos-rel">
                                                    <div class="card-header bg-transparent border-0 rounded-0">
                                                        <div class="modal__text people__image"><?php echo acfImgOutput(get_field('image', $parentID), 'image-cover', 'img-container pos-rel'); ?></div>
                                                    </div>
                                                    <div class="card-body bg-transparent border-0 rounded-0">
                                                        <h4 class="people__title"><?php the_title(); ?></h4>
                                                        <?php if(get_field('job_title', $parentID)): ?>
                                                            <p class="people__job-title is-text--green-10"><?php echo esc_attr(get_field('job_title', $parentID)); ?></p>
                                                        <?php endif; ?>

                                                        <div class="people__content d-none">
                                                            <?php if(get_field('description', $parentID)): ?>
                                                                <div>
                                                                    <div class="navigator__cell">
                                                                        <div class="inner">
                                                                            <div class="people__cell-description"><?php echo get_field('description', $parentID); ?></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            <?php endif; ?>
                                                            <?php if(get_field('stats_repeater', $parentID)): $cards = get_field('stats_repeater', $parentID); ?>
                                                                <?php foreach ($cards as $card):
                                                                    set_query_var('card', $card);
                                                                    $title = $card['title'];
                                                                    $stats = $card['stats'];
                                                                    ?>
                                                                    <div>
                                                                        <div class="navigator__cell">
                                                                            <div class="inner">
                                                                                <div class="people__cell-title h2 text-center"><?php echo esc_attr( $title ); ?></div>
                                                                                <?php if($stats): ?>
                                                                                    <ul class="nav__stats nav <?php echo ($stats[0]['value']) ? 'has__values': 'no__values'; ?>">
                                                                                        <?php foreach ($stats as $stat):
                                                                                            $option = $stat['option'];
                                                                                            $value = $stat['value']; ?>
                                                                                            <li class="nav-item <?php echo ($value) ? 'has__value' : 'no__value'; ?>">
                                                                                                <span class="value stat-number"><?php echo $value; ?></span>
                                                                                                <span class="option"><?php echo $option ; ?></span>
                                                                                            </li>
                                                                                        <?php endforeach; ?>
                                                                                    </ul>
                                                                                <?php endif; ?>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                <?php endforeach; ?>
                                                            <?php endif; ?>
                                                            <?php if(get_field('has_logos', $parentID)): ?>
                                                                <?php if(get_field('logos', $parentID)): $gallery = get_field('logos', $parentID); ?>
                                                                    <div>
                                                                        <div class="navigator__cell">
                                                                            <div class="inner">
                                                                                <div class="logo-gallery__grid" data-width="4">
                                                                                    <?php 
                                                                                    foreach ($gallery as $image) :
                                                                                        echo acfImgOutput($image, '', 'logo-gallery__single');
                                                                                    endforeach;
                                                                                    ?>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                <?php endif;
                                                            endif; ?>
                                                        </div>

                                                    </div>
                                                </button>
                                            </div>
                                        <?php endwhile; ?>
                                    </div>
                                </div>
                            </section>
                        </section>
                    </div>
                    <div id="people-modal-inner" class="panel__inner collapse fade">
                        <div class="modal-content rounded-0 pb-0">
                            <header class="modal-header">
                                <button class="btn btn-transparent btn-close px-0 mr-auto" type="button" type="button" data-toggle="collapse"  data-target="#people-modal-inner" aria-label="Close">
                                    <div class="btn-close-text d-inline-block align-middle mr-1 sr-only">Close</div>
                                    <div class="card__icon-plus svg__icon-plus z-2">
                                        <?php echo Vendavo_SVG_Icons::get_svg( 'ui', 'plus', 32, 'capability__plus'); ?>
                                    </div>
                                </button>
                            </header>
                            <section class="modal-body w-100 h-100 nooverf is-text--blue-30">
                                <div class="container-fluid px-0">
                                    <div class="inner row no-gutters">
                                        <div class="image-area col-lg-5 text-center mb-5 mb-lg-0">
                                            <div class="cont">
                                                <div class="people__image mb-3 mb-lg-0"><div class="img-container pos-rel"></div></div>
                                                <div class="people__title fadeinModal h4"></div>
                                                <div class="people__job-title fadeinModal is-text--green-10"></div>
                                            </div>
                                        </div>
                                        <div class="content-area col-lg-7 pos-rel is-text--white">
                                            <div class="shape__triangle d-none d-lg-block shape1 z-2"></div>
                                            <div class="shape__triangle d-none d-lg-block shape2 z-2"></div>
                                            <div class="shape__triangle d-none d-lg-block shape3 z-1"></div>
                                            <div class="shape__triangle d-none d-lg-block shape4 z-1"></div>
                                            <div class="shape__image d-none d-lg-block z-3" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/binoculars.png) no-repeat;"></div>
                                            <div class="cont pos-rel z-5">
                                                <div class="js-team__slider-inner js-card__slider pos-rel z-5" data-slick="slick-<?php echo $block['id']; ?>"></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        <?php endif; ?>
        <?php wp_reset_postdata(); ?>



<?php get_footer(); ?>