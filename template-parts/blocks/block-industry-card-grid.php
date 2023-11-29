<?php
$text = get_field('block_text');
$cards = get_field('block_cards');
$ctas = get_field('block_ctas');
$design = get_field('block_design');

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

$blockInfo = acfGetBlockInfo($block, $design, $blockCSSRadial);

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>';
if($hasBgShape): ?>
    <div class="svg__shape svg__shape-right z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/shape-right-industry-card-grid.svg) no-repeat;"></div></div>
<?php endif;
echo '<div class="cont pos-rel z-5 '. $design['width'] . ' '. $blockAlignClass. '">';
if(!empty($text['kicker']) || !empty($text['headline']) || !empty($text['subheadline']) || !empty($text['body'])):
    echo '<div class="centered-text__inner rte is-bottom--md">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; 
endif; ?>
<?php if ($cards): ?>
    <div class="industry-card__grid">
        <?php foreach($cards as $card): ?>
            <article class="industry-card">
                <?php if ($card['link']): ?>
                    <a href="<?php echo $card['link']['url']; ?>" class="industry-card__inner">
                    <?php else: ?>
                        <div class="industry-card__inner">
                        <?php endif; ?>
                        <div class="front industry-card__text">
                            <?php echo acfOutput($card['headline'], 'h3', 'industry-card__headline'); ?>
                        </div>
                        <div class="industry-card__bg ">
                            <?php echo acfImgOutput($card['image'], 'image-cover', 'industry-card__aspect '); ?>
                        </div>
                        <?php if ($card['link']): ?>
                        </a>
                    <?php else: ?>
                    </div>
                <?php endif; ?>
            </article>
        <?php endforeach; ?>
    </div>
<?php endif; ?>
<?php echo '</div></section>'; ?>

<?php endif; ?>