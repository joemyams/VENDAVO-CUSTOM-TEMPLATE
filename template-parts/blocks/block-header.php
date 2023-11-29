<?php
$ctas = get_field('block_ctas');
$content = get_field('block_content');
$images = get_field('block_images');
$variant = get_field('block_variant');
$design = get_field('block_design');
$testimonial = get_field('block_testimonial');
$form = get_field('block_form');

$imageClass = '';
$invertImage = $images['invert_image_on_mobile'];
if ($invertImage) :
    $imageClass = ' header--inverted';
endif;

$blockInfo = acfGetBlockInfo($block, $design, 'rel is--' . $variant . $imageClass);

$isHidden = get_field('block_is_hidden');
if ($isHidden && !(is_user_logged_in())) :
else :
?>

    <section <?php echo $blockInfo; ?>>
        <?php echo acfImgOutput($images['background_image'], 'image-cover', 'header__bg-image'); ?>
        <?php if (!empty($content['bottom'])) : ?>
            <div class="header__bottom d-none d-lg-block">
                <div class="cont is-default front">
                    <div class="header__text">
                        <?php echo acfOutput($content['bottom'], 'div', 'py-3'); ?>
                    </div>
                </div>
            </div>
        <?php endif; ?>
        <div class="cont is-default front">
            <?php if ($variant == 'layout-three') : ?>
                <div class="half half--text mt-5 mt-lg-0">
                    <div class="header-text__inner rte">
                        <?php echo acfOutput($content['kicker'], 'p', 'kicker') .
                            acfOutput($content['headline'], 'h1', 'header__headline') .
                            acfOutput($content['subheadline'], 'div', 'header__subheadline');
                        if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
                            set_query_var('ctas', $ctas);
                            get_template_part('/template-parts/components/cta-container');
                        } ?>
                    </div>
                </div>
                <?php if (!empty($form['form_id'])) : ?>
                    <div class="half half--form">
                        <div class="half-form__inner block--contact-form">
                            <?php
                            if ($form['form_heading']) : echo acfOutput($form['form_heading'], 'h4', 'header-form__headline');
                            endif; ?>
                            <form id="mktoForm_<?php echo $form['form_id']; ?>"></form>
                            <script>
                                jQuery(document).ready(function() {
                                    MktoForms2.loadForm("//app-abb.marketo.com", "526-WQV-792", <?php echo $form['form_id']; ?>);
                                });
                            </script>
                        </div>
                    </div>
                <?php endif; ?>
            <?php else : ?>
                <div class="header__text">
                    <?php
                    if (strlen($content['headline']) > 30) {
                        $headlineClass = 'header__headline h2';
                    } else {
                        $headlineClass = "header__headline";
                    };
                    if ($variant !== 'layout-ten') :
                        echo acfOutput($content['kicker'], 'p', 'kicker') .
                            acfOutput($content['headline'], 'h1', $headlineClass) .
                            acfOutput($content['subheadline'], 'div', 'header__subheadline');
                    else :
                        echo acfOutput($content['kicker'], 'h1', 'kicker') .
                            acfOutput($content['headline'], 'p', $headlineClass) .
                            acfOutput($content['subheadline'], 'div', 'header__subheadline');
                    endif;
                    if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
                        set_query_var('ctas', $ctas);
                        get_template_part('/template-parts/components/cta-container');
                    } ?>
                    <?php if (!empty($content['bottom'])) :
                        echo acfOutput($content['bottom'], 'div', 'header__bottom d-lg-none is-top--md is-bottom--md');
                    endif; ?>
                </div>
        </div>
        <?php if ($variant !== 'layout-four' && $variant !== 'layout-five' && $variant !== 'layout-six' && $variant !== 'layout-seven' && $variant !== 'layout-eight' && $variant !== 'layout-nine' && $variant !== 'layout-ten' && $variant !== 'layout-eleven') : ?>
            <div class="header__testimonial">
                <?php if ($testimonial['quote']) {
                        echo '<blockquote class="header__quote">';
                        get_template_part('/template-parts/svg/quote-left');
                        echo acfOutput($testimonial['quote'], 'p', 'header-quote__quote') .
                            acfOutput($testimonial['source'], 'p', 'header-quote__source') .
                            '</blockquote>';
                    };
                    if ($images['main_image']) {
                        set_query_var('image', $images['main_image']);
                        set_query_var('variant', $variant);
                        get_template_part('/template-parts/svg/header-image');
                    }; ?>
            </div>
        <?php endif; ?>
        <?php if ($variant === 'layout-five' || $variant === 'layout-six' || $variant === 'layout-seven' || $variant === 'layout-eight' || $variant === 'layout-nine' || $variant == 'layout-ten' || $variant == 'layout-eleven') :
                    if ($testimonial['quote']) : ?>
                <div class="header__testimonial">
                    <?php if ($variant === 'layout-six') :
                            $hasQuote2 = $testimonial['quote2'] ? 'is-multiple justify-content-center' : 'justify-content-center';
                            echo '<div class="header__quote text-center d-flex w-100 ' . $hasQuote2 . '">';
                            echo '<blockquote class="header__quote-inner">';
                            echo acfOutput($testimonial['quote'], 'p', 'header-quote__quote') .
                                acfOutput($testimonial['source'], 'p', 'header-quote__source') .
                                '</blockquote>';
                            if ($testimonial['quote2']) :
                                echo '<blockquote class="header__quote-inner">';
                                echo acfOutput($testimonial['quote2'], 'p', 'header-quote__quote') .
                                    acfOutput($testimonial['source2'], 'p', 'header-quote__source') .
                                    '</blockquote>';
                            endif;
                            echo '</div>';
                        else :
                            echo '<blockquote class="header__quote text-center">';
                            echo acfOutput($testimonial['quote'], 'p', 'header-quote__quote') .
                                acfOutput($testimonial['source'], 'p', 'header-quote__source') .
                                '</blockquote>';
                        endif; ?>
                </div>
            <?php endif; ?>
            <?php
    if ($images['main_image']) :
        if ($variant !== 'layout-eight' && $variant !== 'layout-eleven') :
            echo '<div class="header__imageV2 text-right image z-1">
                    <div class="imagV2">
                        <div class="grid--story">
                            <a class="podcast-grid__video fancybox" href="' . esc_url($images['video_link']) . '">
                                <img class="lazyload z-1" src="' . $images['playbutton']['url'] . '" alt="' . $images['playbutton']['alt'] . '" />
                            </a>
                            <div class="py-3"><a class="podcast-grid__video fancybox" href="' . $images['second_video_link'] . '">' . $images['story_text'] . '</a></div>
                        </div>
                    </div>
                    <img class="lazyload pos-rel z-2" src="' . $images['main_image']['url'] . '" alt="' . $images['main_image']['alt'] . '" /> 
                  </div>';

                        else :
                            echo '<div class="header__imageV2 text-right image z-4" style="background: url(' . esc_url($images['main_image']['url']) . ') no-repeat;"></div>';
                        endif;
                        if ($variant !== 'layout-nine') :
                            echo '<div class="radial__bg z-3 shape"></div>';
                        endif;
                    endif; ?>

        <?php endif; ?>

    <?php endif; ?>
    </section>

<?php endif; ?>