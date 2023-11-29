<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');

$cards = get_field('block_links');

$design = get_field('block_design');
$variant = get_field('block_variant');
$textPosition = get_field('block_text_position');

$bgImage = get_field('block_bg_image');
$hasBgShape = get_field('block_has_bg_shape');

$bgImgCSS = $bgImage ? ' has__bg-img' : '';

$blockInfo = acfGetBlockInfo($block, $design, $bgImgCSS);

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>';
if($hasBgShape): ?>
    <div class="svg__shape svg__shape-right z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/list-bg-shape.svg) no-repeat;"></div></div>
<?php endif; 
echo '<div class="cont is-flex--desktop pos-rel z-5 '. $design['width'] .' '.  $textPosition .'">'; ?>
<div class="row justify-content-lg-between">

    <div class="half half--text col-lg-6">
        <div class="featured-case-study__text">
            <?php echo acfReturnTextBlock( $text, 'cs-feature'); ?>
            <?php echo acfImgOutput($text['logo'], '', 'cs-feature__logo'); ?>

            <?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
                set_query_var('ctas', $ctas);
                get_template_part('/template-parts/components/cta-container'); }; ?>
            </div>
        </div>
        <?php if($cards): 
            echo '<div class="col-lg-5 col-xl-4 mt-4 mt-lg-0 order-lg-first">';
            if(get_field('block_links_title')): 
                echo acfOutput(get_field('block_links_title'), 'h4', 'list-text__title px-lg-4 font-weight-bold mb-0');
            endif;
            echo '<ul class="nav nav__underline flex-column px-lg-4 pt-4">';
            foreach ($cards as $card):
                $link = $card['link'];
                if(!empty($link['url']) && !empty($link['title'])): ?>
                    <li class="nav-item"><a class="nav-link link-underline" href="<?php echo esc_url($link['url']); ?>" title="<?php echo $link['title']; ?>" <?php echo $link['target'] == '_blank' ? 'target="'. $link['target'] .'"' : ''; ?>><?php echo $link['title']; ?></a></li>
            <?php endif;
        endforeach;
        echo '</ul></div>';
    endif; ?>
    <?php echo '</div>'; ?>
    
</div>

<?php if(!empty($bgImage)): 
    echo '<div class="block-bg__imgV2 absolute-fill z-2 '. $design['background'] .'" style="background: url('. esc_url( $bgImage['url'] ) .') no-repeat;"></div>';
endif;
echo '</section>'; ?>

<?php endif; ?>