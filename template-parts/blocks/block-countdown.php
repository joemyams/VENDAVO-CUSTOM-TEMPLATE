<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');
/*
$blockAlign = get_field('block_alignment');
$blockAlignHead = $blockAlign['button'];
if($blockAlign):
    $blockAlignClass = 'is-headline--'. $blockAlignHead;
else:
    $blockAlignClass = 'text-center'; 
endif;
*/
if(!empty($text['kicker']) || !empty($text['headline']) || !empty($text['subheadline']) || !empty($text['body'])):
    $blockAlignClass = 'is-headline--left is-body--left'; 
else:
    $blockAlignClass = 'text-center';
endif;
$blockDate = get_field('block_date');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

    echo '<section '. $blockInfo .'><div class="cont '. $design['width'] . ' '. $blockAlignClass. '">';

    if(!empty($text['kicker']) || !empty($text['headline']) || !empty($text['subheadline']) || !empty($text['body'])):
        echo '<div class="row align-items-center"><div class="col-lg-6"><div class="block__text rte">'. acfReturnTextBlock( $text, 'half-text') . '</div>';
    if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
        set_query_var('ctas', $ctas);
        get_template_part('/template-parts/components/cta-container'); };
        echo '</div>';
        echo '<div class="col-lg-6 mt-4 mt-lg-0"><div class="block__countdown" data-Date="'. $blockDate .'"></div></div></div>';
    else:
        echo '<div class="block__countdown" data-Date="'. $blockDate .'"></div>';
        if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
            set_query_var('ctas', $ctas);
            get_template_part('/template-parts/components/cta-container'); };
        endif;
        echo '</div></section>'; ?>

        <?php endif; ?>