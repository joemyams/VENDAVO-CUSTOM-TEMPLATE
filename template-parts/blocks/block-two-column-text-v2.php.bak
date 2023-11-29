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
if($hasBgShape):
    if(strpos($block['className'], 'is__leaders-card') !== false): ?>
        <div class="svg__shape svg__shape-right z-3"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/shape-right.svg) no-repeat;"></div></div>
    <?php else: ?>
        <div class="svg__shape svg__shape-bottom z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/bg-shape-bottom.svg) no-repeat;"></div></div>
    <?php endif; ?>
<?php endif; 
echo '<div class="cont pos-rel z-5 '. $design['width'] . ' '. $blockAlignClass. '">';
if ($cards): ?>
    <div class="inner pos-rel z-5">
        <?php if(!empty($text['headline'])): ?>
            <?php echo '<div class="centered-text__inner rte is-bottom--md">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; ?>
        <?php endif; ?>
        <?php $i = 0; $uni = uniqid(); ?>
        <div class="cards__container two-col-v2">
            <?php
            foreach ($cards as $card): ?>
                <div class="card__inner-container">
                    <div class="row">
                        <div class="col-lg-6 card__inner mb-5 <?php echo ($card['image']) ? ' has__img' : ''; ?>">
                            <?php if($card['image']): ?>
                                <?php echo acfImgOutput($card['image'], 'card__img-inner', 'card__img'); ?>
                            <?php endif; ?>
                            <div class="inner">
                                <?php if($card['content_left_title'] && !empty($card['content_left_title'])): 
                                    echo acfOutput($card['content_left_title'], 'h3', 'acc-ctn__title');
                                endif; ?>
                                <?php if($card['content_left'] && !empty($card['content_left'])): 
                                    echo acfOutput($card['content_left'], 'div', 'acc-ctn__text');
                                endif; ?>
                                <?php if($card['content_left_link'] && !empty($card['content_left_link'])): $links = $card['content_left_link']; ?>
                                    <p class="is-sm mt-4">
                                        <?php foreach ($links as $linkAux):
                                            $link = $linkAux['link'];
                                            if(!empty($link['url']) && !empty($link['title'])): ?>
                                                <a class="btn" href="<?php echo esc_url($link['url']); ?>" title="<?php echo esc_attr ( $link['title'] ); ?>" <?php echo $link['target'] == '_blank' ? 'target="'. $link['target'] .'"' : ''; ?>><?php echo esc_attr ( $link['title'] ); ?></a>
                                        <?php endif; 
                                    endforeach; ?>
                                </p>
                            <?php endif; ?>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-4 mt-lg-0 card__inner mb-5 <?php echo ($card['image']) ? ' has__img' : ''; ?>">
                        <?php if($card['image_right']): ?>
                            <?php echo acfImgOutput($card['image_right'], 'card__img-inner', 'card__img'); ?>
                        <?php endif; ?>
                        <div class="inner">
                            <?php if($card['content_right_title'] && !empty($card['content_right_title'])): 
                                echo acfOutput($card['content_right_title'], 'h3', 'acc-ctn__title');
                            endif; ?>
                            <?php if($card['content_right'] && !empty($card['content_right'])): 
                                echo acfOutput($card['content_right'], 'div', 'acc-ctn__text');
                            endif; ?>
                            <?php if($card['content_right_link'] && !empty($card['content_right_link'])): $links = $card['content_right_link']; ?>
                                <p class="is-sm mt-4">
                                    <?php foreach ($links as $linkAux):
                                        $link = $linkAux['link'];
                                        if(!empty($link['url']) && !empty($link['title'])): ?>
                                            <a class="btn" href="<?php echo esc_url($link['url']); ?>" title="<?php echo esc_attr ( $link['title'] ); ?>" <?php echo $link['target'] == '_blank' ? 'target="'. $link['target'] .'"' : ''; ?>><?php echo esc_attr ( $link['title'] ); ?></a>
                                    <?php endif; 
                                endforeach; ?>
                            </p>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    <?php endforeach; ?>
</div>

</div>

<?php endif; ?>

<?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
    set_query_var('ctas', $ctas);
    get_template_part('/template-parts/components/cta-container'); };
echo '</div></section>'; ?>

<?php endif; ?>