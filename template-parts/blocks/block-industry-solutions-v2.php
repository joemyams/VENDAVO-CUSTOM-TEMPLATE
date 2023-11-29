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
$hasBgShape = get_field('block_has_bg_shape');
$hasBgRadial = get_field('block_has_bg_radial');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>';
if($hasBgShape): ?>
    <div class="svg__shape svg__shape-left z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/shape-left-challengeV2.svg) no-repeat;"></div></div>
<?php endif; 
echo '<div class="cont pos-rel '. $design['width'] . ' '. $blockAlignClass. '">';
if ($cards): ?>
    <div class="inner pos-rel z-5">
        <?php if(!empty($text['headline'])): ?>
            <?php echo '<div class="centered-text__inner rte is-bottom--md">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; ?>
        <?php endif; ?>
        <div class="card-container">

            <div class="inner">
                <div class="chout-card">
                    <div class="chout-card__inner">
                        <div class="chout-card__body">
                            <div class="chout-card__left">
                                <div class="chout-card__column ">
                                    <?php echo acfOutput($cards['title'], 'h4', 'chout-card__headline') 
                                    .acfOutput($cards['text'], 'div', 'rte')
                                    . acfLinkOutput($cards['link'], 'chout-card__btn btn btn--primary is--blue90-V2'); ?>
                                </div>
                            </div>
                            <div class="chout-card__right">
                                <div class="chout-card__column rel z-5">
                                    <?php echo acfOutput($cards['title_right'], 'h4', 'chout-card__headline') 
                                    . acfOutput($cards['text_right'], 'div', 'rte'); ?>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    <?php endif; ?>

    <?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
        set_query_var('ctas', $ctas);
        get_template_part('/template-parts/components/cta-container'); };
    echo '</div></section>'; ?>

<?php endif; ?>

