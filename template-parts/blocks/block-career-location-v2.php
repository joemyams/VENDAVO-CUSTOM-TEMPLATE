<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$cards = get_field('block_cards');


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
    <div class="svg__shape svg__shape-bottom z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/bg-shape-bottom.svg) no-repeat;"></div></div>
<?php endif; 
if ($cards):
    echo '<div class="cont pos-rel z-5 '. $design['width'] . ' '. $blockAlignClass. '">'; ?>
    <div class="inner pos-rel z-5">
        <?php if(!empty($text['headline'])): ?>
            <?php echo '<div class="centered-text__inner rte is-bottom--md">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; ?>
        <?php endif; ?>
        <?php $i = 0; $uni = uniqid(); ?>
    </div>
    <?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
        set_query_var('ctas', $ctas);
        get_template_part('/template-parts/components/cta-container'); };
        echo '</div>'; ?>
        <div class="cl__container career-loc__container">
            <div class="cont is-lg pos-rel z-5">
                <ul class="nav flex-column flex-md-row nav-pills nav-fill">
                    <?php
                    foreach ($cards as $card): ?>
                        <li class="nav-item nav-item-<?php echo $i + 1; ?>">
                            <button type="button" data-target="#career-loc-modal" class="btn btn-none pos-rel cl-link pos-rel mb-2 mb-xl-0">
                                <div class="cl__headline d-inline-block mb-2"><?php echo $card['title']; ?></div>
                                <?php if($card['svg'] && !empty($card['svg'])): ?>
                                    <div class="card__icon-loc d-block z-2"><div class="inner pos-rel"><?php echo $card['svg']; ?></div></div>
                                <?php endif; ?>
                                <div id="career__info-<?php echo $block['id']; ?>" class="career__info d-none">
                                    <?php echo acfOutput($card['title'], 'h3', 'md__title'); ?>
                                    <?php echo acfOutput($card['modal_content'], 'div', 'md__body is-top--xs'); ?>      
                                </div>
                            </button>
                        </li>
                        <?php $i++; endforeach; ?>
                    </ul>
                </div>
            </div>

        <?php endif;
    echo '</section>'; ?>

<?php endif; ?>