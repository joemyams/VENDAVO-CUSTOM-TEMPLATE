<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');
$blockAlign = get_field('block_alignment');

$cards = get_field('block_cards');
$form = get_field('block_form');
$formID = !empty($form) ? $form : '610';

$blockAlignHead = $blockAlign['headline'];
$blockAlignCopy = $blockAlign['body'];
if($blockAlign):
    $blockAlignClass = 'is-headline--'. $blockAlignHead .' is-body--'. $blockAlignCopy; 
else:
    $blockAlignClass = 'text-center'; 
endif;


$hasBgImage = get_field('block_has_bg_image');
$bgImage = get_field('block_bg_image');
$hasBgShape = get_field('block_has_bg_shape');

$bgImgCSS = $bgImage ? ' has__bg-img' : '';

$blockInfo = acfGetBlockInfo($block, $design, $bgImgCSS);

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>';
if($hasBgImage && !empty($bgImage)): 
    echo '<div class="block-bg__imgV2 absolute-fill z-2 '. $design['background'] .'" style="background: url('. esc_url( $bgImage['url'] ) .') no-repeat;"></div>';
endif;
if($hasBgShape): ?>
    <div class="svg__shape svg__shape-left z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/shape-left.svg) no-repeat;"></div></div>
<?php endif; 
echo '<div class="cont pos-rel z-5 '. $design['width'] . ' '. $blockAlignClass. '">';
if($cards): ?>
    <div class="inner pos-rel z-5 w-100">
        <?php 
        if(!empty($text['kicker']) || !empty($text['headline']) || !empty($text['subheadline']) || !empty($text['body'])):
            echo '<div class="centered-text__inner rte ">'. acfReturnTextBlock( $text, 'half-text') . '</div>';
    endif;
    ?>
    <?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
                set_query_var('ctas', $ctas);
                get_template_part('/template-parts/components/cta-container'); }; ?>
    <div class="row is-top--md">
        <div class="item col-lg-8 pr-lg-4">

            
                <div class="form__container">
                    <form data-formId="<?php echo $formID; ?>" id="mktoForm_<?php echo $formID; ?>"></form>
                </div>
            </div>
            <div class="item col-lg-4 mt-4 mt-lg-0">
              <?php foreach($cards as $card): ?>
                <div class="contact-block text-center">
                    <?php echo acfOutput($card['headline'], 'h5', 'card-title'); ?>
                    <?php echo acfOutput($card['text'], 'div', 'card-text'); ?>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>
<?php else: ?>
    <div class="inner pos-rel z-5">
        <?php if(!empty($text['kicker']) || !empty($text['headline']) || !empty($text['subheadline']) || !empty($text['body'])):
        echo '<div class="centered-text__inner rte">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; 
    endif;
    ?>
    <?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
        set_query_var('ctas', $ctas);
        get_template_part('/template-parts/components/cta-container'); }; ?>
        <div class="form__container is-top--md">
            <form data-formId="<?php echo $formID; ?>" id="mktoForm_<?php echo $formID; ?>"></form>
        </div>
    </div>
<?php endif;
echo '</div></section>'; ?>

<?php endif; ?>