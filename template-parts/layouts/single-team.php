<?php
get_header();
$wordpress_domain_url = home_url();



while (have_posts()) : the_post();
    $parentID = get_the_ID();
?>
    <style>
        .team--bottom {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-content: flex-end;
            justify-content: center;
        }
        
        #block_74c4d{
        overflow: hidden;
         overflow-y: hidden;
        }
         .author-posts {
            display: flex;
         }   
        .team--bottom img {
            height: 400px;
        }

        .team-member-absolute{
         right: -0.3% !important;
    bottom: -3% !important;
    position: absolute;
    z-index: 99;
        }

        .rte.team--member h2 {
            font-size: 1.8rem !important;
        }

        .btn-accordion.team--collapse {

            border-top: none !important;
        }

        .team--faq.block--faq-v2 {
            margin-bottom: 30px !important;
            border-radius: 15px;
            border: 1px solid #fff;

        }

        .is-headline--center--team {
            text-align: center;
        }

        .is-bg--bg {
            background-color: #ffffff8f;
        }

        .block--faq-v2 .team-half {
            color: #fff !important;

        }

        .people__image.team--member {
            max-width: 180px !important;
        }

        .people__image.team--member--top {
            max-width: 350px !important;
        }

        .team__title {
            font-size: 1.8rem !important;
            padding-top: 10px;
        }

        .block--people-storytelling-v2.team--member {

            padding-bottom: 20%;
        }

        .team-members {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-content: center;
            justify-content: center;
            align-items: center;
            margin-top: -120px;
        }

        .is-bottom--md.stats {
            border-top: 1px solid #fff;
            padding-top: 30px;
        }

        .transform--upper {
            text-transform: uppercase;
            margin-top: 10px;
        }

        .logo-grid {
            display: grid;
            align-content: center;
            justify-content: space-around;
            align-items: center;
            justify-items: center;
            grid-template-columns: repeat(4, 1fr);
        }

        @media screen and (max-width: 480px) {
           .team-member-absolute{
           right: -31% !important;
  		   bottom: -5% !important;
           position: absolute;
        }
.team--bottom img {
    height: 270px !important;
}
            .author-posts {
            display: grid !important;
            grid-template-columns: 1fr;
            justify-content: center;
            row-gap: 20px;
            align-items: center;
         }   

            .team-members {
                margin-top: 0;
            }

            .logo-grid {
                display: grid;
                align-content: center;
                justify-content: space-around;
                align-items: center;
                justify-items: center;
                grid-template-columns: repeat(2, 1fr);
            }

        }
    </style>


    <section id="block_d661c" class="block block--header is-bg--blue-30 is-text--white is-top--xl is-bottom--xl rel is--layout-eleven header--inverted header__people-storytelling">
        <div class="cont is-default front">
            <div class="" style="transform: translate(0px, 0px); opacity: 1; visibility: inherit;">
                <img decoding="async" class="pos-rel z-2 lazyloaded" src="<?php echo get_template_directory_uri(); ?>/assets/img/clock.svg" alt="">
                <div class="header__subheadline"><?php echo '<a href="' . esc_url($wordpress_domain_url . '/our-guides') . '">'; ?><p><strong>&lt; BACK TO GUIDES</strong></p></a>
                </div>
                <div class="team-members">
                    <div class="team-member-header">
                        <div class="people__image team--member--top mb-3 mb-lg-0">
                            <div class="img-container pos-rel">

                                <?php
                                $image = get_field('image', $parentID);
                                if (!empty($image)) : ?>
                                    <img class="img-container pos-rel" src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                    <h2 class="is-text--white transform--upper"><?php the_title(); ?></h2>
                    <?php if (get_field('job_title', $parentID)) : ?>
                        <p class="people__job-title is-text--green-10"><?php echo esc_attr(get_field('job_title', $parentID)); ?></p>


                    <?php endif; ?>

                </div>
            </div>
        </div>
        <div class="header__imageV2 text-right image z-4" style="background: url(&quot;<?php echo get_template_directory_uri(); ?>/assets/img/hero.svg&quot;) no-repeat; transform-origin: 951.5px 335.75px; transform: translate(0px, 0px); opacity: 1; visibility: inherit;"></div>
        <div class="radial__bg z-3 shape" style="transform: translate(0px, 0px); opacity: 1; visibility: inherit;"></div>

    </section>

    <section id="block_6586d" class="block block--centered-text is-bg--white is-text--blue-30 is-top--lg is-bottom--lg">
        <div class="cont pos-rel z-5 is-sm is-headline--center is-body--center">
            <div class="centered-text__inner rte team--member is-bottom--xxl">
                <div class="people__cell-description stats is-text--blue-30"><?php echo get_field('description'); ?></div>
            </div>
            <div class="cta-container">

            </div>
        </div>
    </section>




    <section id="block_74c4d" class="block block--people-storytelling-v2 team--member is-bg--white is-text--blue-30 is-top--md is-bottom--md  has__bg-img story">
        <div class="block-bg__imgV2 absolute-fill z-2 is-bg--white" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/BG.svg) no-repeat;"></div>
        <div class="svg__shape svg__shape-line z-3 d-none d-xl-block">
            <div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/storytelling-line.svg) no-repeat;"></div>
        </div>
        <div class="svg__image-step z-3 d-none d-xl-block">
            <div class="svg__image z-2" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/career-steps-svg.svg) no-repeat;"></div>
        </div>

        <div class="cont pos-rel z-5 is-default">
            <div class="inner inner__top pos-rel z-5 mb-5">
                <div class="row">
                    <div class="content-area col-lg-6 mb-4 mb-lg-0">
                        <div class="pps__text">

                        </div>
                    </div>

                    <?php
                    $modal = get_field('block_modal');
                    $args = array('post_type' => 'team', 'posts_per_page' => -1, 'orderby' => 'post__in');
                    $loop = new WP_Query($args);
                    if ($loop->have_posts()) : ?>
                        <div class="cont pos-rel is-default is-headline--center is-body--center">
                            <div class="people__image">
                                <div class="img-container pos-rel"></div>
                            </div>
                            <div class="rounded-0 pb-0">
                                <section class="modal-body w-100 h-100 nooverf is-text--blue-30">
                                    <section class="inner">
                                        <div class="mb-5 pb-3 text-center cont js-team__content">
                                            <section id="block_f4295_1" class="is--blue-green-G block team--faq block--faq-v2 is-bg--white is-text--blue-30 ">
                                                <div class="cont pos-rel z-5 is-default is-headline--center is-body--center">
                                                    <div class="inner pos-rel z-5">
                                                        <div id="accordion64d248f40d5be_1" class="faq-v2 accordion">
                                                            <div class="card border-0 rounded-0 card-accordion">
                                                                <header class="card-header bg-transparent border-0 rounded-0 p-0" id="accHead64d248f40d5be-0_1">
                                                                    <h3 class="mb-0">
                                                                        <button class="btn btn-block btn-accordion team--collapse collapsed" data-toggle="collapse" data-target="#accCollapse64d248f40d5be-0_1" aria-expanded="false" aria-controls="accCollapse64d248f40d5be-0_1">
                                                                            <h2 class="team-half">Profitability + Growth Stats</h2>
                                                                            <div class="collapse-icon">
                                                                                <div class="symbol-plus"></div>
                                                                            </div>
                                                                        </button>
                                                                    </h3>
                                                                </header>
                                                                <section id="accCollapse64d248f40d5be-0_1" class="collapse" aria-labelledby="accHead64d248f40d5be-0_1" data-parent="#accordion64d248f40d5be_1" style="">
                                                                    <div class="card-body accordion-body pos-rel">
                                                                        <div class="is-bottom--md stats">
                                                                            <div class="people__cell-description stats is-text--white"><?php
                                                                                                                                        $stats_repeater = get_field('stats_repeater');

                                                                                                                                        if ($stats_repeater) :
                                                                                                                                            $stats_counter = 0;
                                                                                                                                            foreach ($stats_repeater as $card) :
                                                                                                                                                if ($stats_counter == 1) { // Only display the 2nd stats
                                                                                                                                                    $title = $card['title'];
                                                                                                                                                    $stats = $card['stats'];
                                                                                                                                        ?>
                                                                                            <div class="slider-item" data-stats-index="<?php echo $stats_counter; ?>">
                                                                                                <div class="people__cell-title h2 text-center"><?php echo esc_attr($title); ?></div>
                                                                                                <?php if ($stats) : ?>
                                                                                                    <ul class="nav__stats nav <?php echo ($stats[0]['value']) ? 'has__values' : 'no__values'; ?>">
                                                                                                        <?php foreach ($stats as $stat) :
                                                                                                                                                            $option = $stat['option'];
                                                                                                                                                            $value = $stat['value']; ?>
                                                                                                            <li class="nav-item <?php echo ($value) ? 'has__value' : 'no__value'; ?>">
                                                                                                                <span class="value stat-number"><?php echo $value; ?></span>
                                                                                                                <span class="option"><?php echo $option; ?></span>
                                                                                                            </li>
                                                                                                        <?php endforeach; ?>
                                                                                                    </ul>
                                                                                                <?php endif; ?>
                                                                                            </div>
                                                                                <?php
                                                                                                                                                    break; // Break out of the loop after displaying the 2nd stats
                                                                                                                                                }
                                                                                                                                                $stats_counter++;
                                                                                                                                            endforeach;
                                                                                                                                        endif;
                                                                                ?>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </section>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <section id="block_f4295_2" class="block is-bg--bg team--faq block--faq-v2 is-text--blue-30 ">
                                                <div class="cont pos-rel z-5 is-default is-headline--center is-body--center">
                                                    <div class="inner pos-rel z-5">
                                                        <div id="accordion64d248f40d5be_2" class="faq-v2 accordion">
                                                            <div class="card border-0 rounded-0 card-accordion">
                                                                <header class="card-header bg-transparent border-0 rounded-0 p-0" id="accHead64d248f40d5be-0_2">
                                                                    <h3 class="mb-0">
                                                                        <button class="btn btn-block btn-accordion team--collapse collapsed" data-toggle="collapse" data-target="#accCollapse64d248f40d5be-0_2" aria-expanded="false" aria-controls="accCollapse64d248f40d5be-0_2">
                                                                            <h2 class="team-half">Products and Industries:</h2>
                                                                            <div class="collapse-icon">
                                                                                <div class="symbol-plus"></div>
                                                                            </div>
                                                                        </button>
                                                                    </h3>
                                                                </header>
                                                                <section id="accCollapse64d248f40d5be-0_2" class="collapse" aria-labelledby="accHead64d248f40d5be-0_2" data-parent="#accordion64d248f40d5be_2" style="">
                                                                    <div class="card-body accordion-body pos-rel">
                                                                        <div class="is-bottom--md stats">
                                                                            <!-- ... PHP code for stats_repeater ... -->
                                                                            <?php
                                                                            $stats_repeater = get_field('stats_repeater');

                                                                            if ($stats_repeater) :
                                                                                $stats_counter = 0;
                                                                                foreach ($stats_repeater as $card) :
                                                                                    if ($stats_counter == 0) { // Only display the first stats
                                                                                        $title = $card['title'];
                                                                                        $stats = $card['stats'];
                                                                            ?>
                                                                                        <div class="slider-item" data-stats-index="<?php echo $stats_counter; ?>">
                                                                                            <div class="people__cell-title h2 text-center"><?php echo esc_attr($title); ?></div>
                                                                                            <?php if ($stats) : ?>
                                                                                                <ul class="nav__stats nav <?php echo ($stats[0]['value']) ? 'has__values' : 'no__values'; ?>">
                                                                                                    <?php foreach ($stats as $stat) :
                                                                                                        $option = $stat['option'];
                                                                                                        $value = $stat['value']; ?>
                                                                                                        <li class="nav-item <?php echo ($value) ? 'has__value' : 'no__value'; ?>">
                                                                                                            <span class="value stat-number"><?php echo $value; ?></span>
                                                                                                            <span class="option"><?php echo $option; ?></span>
                                                                                                        </li>
                                                                                                    <?php endforeach; ?>
                                                                                                </ul>
                                                                                            <?php endif; ?>
                                                                                        </div>
                                                                            <?php
                                                                                    }
                                                                                    $stats_counter++;
                                                                                endforeach;
                                                                            endif;
                                                                            ?>

                                                                        </div>
                                                                    </div>
                                                                </section>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                            <section id="block_f4295_3" class="is-bg--navy-blue-G team--faq block block--faq-v2 is-bg--white is-text--blue-30 ">
                                                <div class="cont pos-rel z-5 is-default is-headline--center is-body--center">
                                                    <div class="inner pos-rel z-5">
                                                        <div id="accordion64d248f40d5be_3" class="faq-v2 accordion">
                                                            <div class="card border-0 rounded-0 card-accordion">
                                                                <header class="card-header bg-transparent border-0 rounded-0 p-0" id="accHead64d248f40d5be-0_3">
                                                                    <h3 class="mb-0">
                                                                        <button class="btn btn-block btn-accordion team--collapse collapsed" data-toggle="collapse" data-target="#accCollapse64d248f40d5be-0_3" aria-expanded="false" aria-controls="accCollapse64d248f40d5be-0_3">
                                                                            <h2 class="team-half">Brand Experience</h2>
                                                                            <div class="collapse-icon">
                                                                                <div class="symbol-plus"></div>
                                                                            </div>
                                                                        </button>
                                                                    </h3>
                                                                </header>
                                                                <section id="accCollapse64d248f40d5be-0_3" class="collapse" aria-labelledby="accHead64d248f40d5be-0_3" data-parent="#accordion64d248f40d5be_3" style="">
                                                                    <div class="card-body accordion-body pos-rel">
                                                                        <div class="is-bottom--md stats">
                                                                            <!-- ... PHP code for logos ... -->
                                                                            <?php
                                                                            $logos = get_field('logos');

                                                                            if ($logos) : ?>
                                                                                <div class="logo-grid">
                                                                                    <?php foreach ($logos as $image) : ?>
                                                                                        <div class="logo-column">
                                                                                            <img src="<?= esc_url($image['url']) ?>" alt="<?= esc_attr($image['alt']) ?>" class="logo-gallery__single" />
                                                                                        </div>
                                                                                    <?php endforeach; ?>
                                                                                </div>
                                                                            <?php endif; ?>
                                                                        </div>
                                                                    </div>
                                                                </section>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                        <div class="js-team__slider-container pos-rel">
                                            <div>
                                                <h2 class="pps__heading is-headline--center--team "><span class="ez-toc-section" id="START_YOUR_ADVENTURE_WITH_ONE_OF_OUR_GUIDES" ez-toc-data-id="#START_YOUR_ADVENTURE_WITH_ONE_OF_OUR_GUIDES"></span>VIEW GUIDES<span class="ez-toc-section-end"></span></h2>
                                            </div>
                                            <div class="js-team__slider pos-rel z-1" data-slick="slick-<?php echo $block['id']; ?>">
                                                <?php while ($loop->have_posts()) : $loop->the_post();
                                                    $parentID = get_the_ID(); ?>
                                                    <div class="navigator__cell pos-rel item w-100">
                                                        <button type="button">
                                                            <div class="card-header bg-transparent border-0 rounded-0">
                                                                <a href="<?php echo get_permalink($parentID); ?>">
                                                                    <div class="people__image team--member"><?php echo acfImgOutput(get_field('image', $parentID), '', 'img-container pos-rel'); ?></div>
                                                                </a>
                                                            </div>
                                                            <div class="card-body bg-transparent border-0 rounded-0">
                                                                <a href="<?php echo get_permalink($parentID); ?>">
                                                                    <h4 class="team__title is-text--white"><?php the_title(); ?></h4>
                                                                    <?php if (get_field('job_title', $parentID)) : ?>
                                                                </a>
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
                        jQuery(document).ready(function() {
                            jQuery(".js-team__slider").slick({
                                infinite: true,
                                slidesToShow: 5,
                                slidesToScroll: 1,
                                autoplay: false,
                                autoplaySpeed: 2000,
                                dots: false,
                                arrows: true,
                                prevArrow: '<div class="slick-prev"><img src="<?php echo get_template_directory_uri() . '/assets/img/left-arrow-carousel.png'; ?>" class="w-6 h-6"></div>',
                                nextArrow: '<div class="slick-next"><img src="<?php echo get_template_directory_uri() . '/assets/img/right-arrow-carousel.png'; ?>" class="w-6 h-6"></div>',
                                responsive: [{
                                    breakpoint: 480,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1
                                    }
                                }]
                            });
                        });
                    </script>


                    <style>
                        .slick-prev,
                        .slick-next {
                            position: absolute;
                            top: 40%;
                            z-index: 1;
                            width: 25px;
                            height: 25px;
                            font-size: 25px;
                            cursor: pointer;
                            color: #6cba42;
                            background-color: #ffffff;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
                        }

                        .slick-prev:hover,
                        .slick-next:hover {
                            position: absolute;
                            top: 40%;
                            z-index: 1;
                            width: 25px;
                            height: 25px;
                            font-size: 25px;
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
                            content: none !important;
                        }

                        .slick-prev {
                            left: -12px;
                            transform: translateY(-60%);
                        }

                        .slick-next {
                            right: -12px;
                            transform: translateY(-60%);
                        }

                        .single-team .slick-prev img,
                        .single-team .slick-next img {
                            height: 16px !important;
                        }

                        /* Responsive */
                        @media screen and (max-width: 480px) {

                            .slick-prev,
                            .slick-next {
                                width: 25px;
                                height: 25px;
                                font-size: 25px;
                            }
                        }
                    </style>

                </div>
            </div>
        </div>
 <div class="image__inner-bottom-img team--bottom team-member-absolute"><img class=" lazyloaded" data-src="<?php echo get_template_directory_uri(); ?>/assets/img/adventure.svg" alt="" src="https://vendavostage.wpengine.com/wp-content/uploads/2023/06/adventure.svg"></div>
      
    </section>

    <?php
    // 1. Get the related author from the Team page
    $related_author = get_field('related_author');

    if ($related_author) {
        $author_name = $related_author[0]->post_title; // Get the name of the related author

        // 2. Query the posts of the related author
        $args = array(
            'post_type' => 'post',
            'meta_key' => 'author_override',
            'meta_value' => $author_name,
            'posts_per_page' => 3
        );

        $author_posts = new WP_Query($args);
    ?>

        <!-- 3. Display the fetched posts -->
        <section id="block_a5c97" class="block block--resource-grid-v2 is-bg--gray-10 is-text--blue-30 is-top--md is-bottom--sm">
            <div class="cont pos-rel is-default is-headline--center is-body--center">
                <div class="inner pos-rel z-5">
                    <div class="centered-text__inner rte is-bottom--md">
                        <h2 class="half-text__headline">Latest Contributions from <?php the_title(); ?></h2>
                    </div>
                    <div class="author-posts">
                        <?php
                        if ($author_posts->have_posts()) {
                            while ($author_posts->have_posts()) : $author_posts->the_post();
                                $details = array(
                                    'link' => get_permalink(),
                                    'target' => '_self',
                                    'headshot' => get_field('headshot', $post->ID),
                                    'image' => get_field('image', $post->ID),
                                    'logo' => get_field('logo', $post->ID),
                                    'excerpt' => get_the_excerpt()
                                );

                                // Additional logic for 'resources' post type
                                if (get_post_type() == 'resources') {
                                    $resourceDetails = get_field('resource_page', $post->ID);
                                    $redirect = get_field('resource_redirect', $post->ID);
                                    $details['link'] = $redirect['url'] ?: get_the_permalink($post->ID);
                                    $details['target'] = '_self';
                                    $details['excerpt'] = $resourceDetails['excerpt'];
                                    $details['image']['url'] = $resourceDetails['image']['sizes']['card-default'];
                                    $details['headshot']['url'] = $resourceDetails['headshot']['url'];
                                } else {
                                    $author = get_field('author_override', $post->ID);
                                    if ($author) {
                                        $authorDetails = get_field('author_details', $author);
                                        $details['headshot']['url'] = $authorDetails['headshot']['url'];
                                    } else {
                                        $details['headshot']['url'] = '';
                                    }
                                    $details['target'] = '_self';
                                    $details['link'] = get_the_permalink($post->ID);
                                    $details['excerpt'] = get_the_excerpt($post->ID);
                                    if (has_post_thumbnail($post->ID)) {
                                        $details['image']['url'] = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'card-default')[0];
                                    } else {
                                        $details['image']['url'] = '';
                                    }
                                }
                        ?>

                                <!-- Display the posts in your desired format -->
                                <article class="content-card">
                                    <a target="<?php echo $details['target']; ?>" href="<?php echo $details['link']; ?>" class="content-card__inner">
                                        <div class="content-card__top">
                                            <div class="content-card__aspect">
                                                <div class="content-card__flag"></div>
                                                <?php if ($details['headshot']['url']) : ?>
                                                    <div class="content-card__pip">
                                                        <img class="image-fit lazyload" data-src="<?php echo $details['headshot']['url']; ?>" alt="">
                                                    </div>
                                                <?php endif; ?>
                                                <div class="content-card__aspect-inner">
                                                    <img class="content-card__image image-fit lazyload" data-src="<?php echo $details['image']['url']; ?>" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="content-card__bottom">
                                            <?php if ($details['logo']['url']) : ?>
                                                <img class="content-card__logo lazyload" data-src="<?php echo $details['logo']['url']; ?>" alt="">
                                            <?php endif; ?>
                                            <h4 class="content-card__title"><?php echo get_the_title(); ?></h4>
                                            <p class="content-card__excerpt"><?php echo wp_trim_words($details['excerpt'], 20); ?></p>
                                            <div class="cta-container">
                                                <span class="btn btn--secondary is-text--green-20 is-sm"><?php _e('Read More', 'vendavo'); ?></span>
                                            </div>
                                        </div>
                                    </a>
                                </article>

                        <?php
                            endwhile;
                            wp_reset_postdata();
                        } else {
                            echo "No author posts found!";
                        }
                        ?>
                    </div>
                </div>
            </div>
        </section>

    <?php } // end of if($related_author) 
    ?>

    <!-- End Display Section for Author's Posts -->


<?php
endwhile;
get_footer();
?>