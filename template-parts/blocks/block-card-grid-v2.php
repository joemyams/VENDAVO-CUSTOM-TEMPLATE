<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$cards = get_field('block_cards');
$blockInfo = acfGetBlockInfo($block, $design, '');

$blockAlign = get_field('block_alignment');
$blockAlignHead = $blockAlign['headline'];
$blockAlignCopy = $blockAlign['body'];
if($blockAlign):
    $blockAlignClass = 'is-headline--'. $blockAlignHead .' is-body--'. $blockAlignCopy; 
else:
    $blockAlignClass = 'text-center'; 
endif;

$hasBgImage = get_field('block_has_bg_image');
$bgImage = get_field('block_bg_image');
$bgPos = get_field('block_bg_pos');
$hasBgShape = get_field('block_has_bg_shape');

$textPosition = get_field('block_text_position');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>';
if($hasBgImage && !empty($bgImage)): 
    if($bgPos): 
        $bgPosCSS = 'background-position: '. $bgPos . ' center !important';
    endif;
    echo '<div class="block-bg__imgV2 absolute-fill z-2 '. $design['background'] .'" style="background: url('. esc_url( $bgImage['url'] ) .') no-repeat; '. $bgPosCSS .';"></div>';
endif;
if($hasBgShape): ?>
    <div class="svg__shape svg__shape-left z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/shape-left.svg) no-repeat;"></div></div>
<?php endif; 
echo '<div class="cont pos-rel z-5 '. $design['width'] . ' '. $blockAlignClass. '">';
if ($cards): ?>
    <div class="inner pos-rel z-5">
        <?php if($textPosition !== 'bottom'): 
            echo '<div class="centered-text__inner rte is-bottom--md">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; 
        endif; ?>
        <?php 
        if(count($cards) > 2):
            $cardItemCSS = 'item col-lg-4';
            $cardRowCSS = '';
        else:
            $cardItemCSS = 'item col-lg-6';
            $cardRowCSS = ' grid-40';
        endif;
        ?>
        <div class="card-row row  <?php echo $cardRowCSS; ?>">     
            <?php foreach ($cards as $card):
                set_query_var('card', $card);
                echo '<div class="'. $cardItemCSS .' d-flex align-items-stretch mb-4 pb-2">'; get_template_part('/template-parts/cards/card-grid-v2'); echo '</div>';
            endforeach; ?>
        </div>
        <?php if($textPosition === 'bottom'): 
            echo '<div class="centered-text__inner rte is-top--md cont is-md">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; 
        endif; ?>
    </div>
<?php endif; ?>

<?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
    set_query_var('ctas', $ctas);
    get_template_part('/template-parts/components/cta-container'); };
echo '</div></section>'; ?>

<?php endif; ?>