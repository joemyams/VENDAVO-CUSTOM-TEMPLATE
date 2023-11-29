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
if ($cards): ?>
    <div class="inner pos-rel z-5">
        <?php echo '<div class="centered-text__inner rte is-bottom--md">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; ?>
        <div class="card-row row grid-40">     
            <?php foreach ($cards as $card):
                set_query_var('card', $card); 
                $type = $card['type'];
                $image = $card['image'];
                $logo = $card['logo'];
                $text = $card['text'];
                $icon = $card['icon'];
                $iconBG = $card['icon_bg'];
                $link = $card['link'];
                $class = 'is-'. $type;
                $btnClass = $iconStyle = '';
                if($type === 'video'):
                    $btnClass = 'fancybox';
                endif;
                if($iconBG):
                    $iconStyle = ' style="background:'. $iconBG .'!important;"';
                endif;
                ?>
                <div class="item col-md-6 col-lg-4 d-flex align-items-stretch mb-4 pb-2">
                    <a class="card card__story w-100 border-0 is-text--white <?php echo $class . ' ' . $btnClass ; ?>" href="<?php echo esc_url($link['url']); ?>" <?php echo $link['target'] == '_blank' ? 'target="'. $link['target'] .'"' : ''; ?>>
                        <div class="card-body border-0 rounded-0 bg-transparent pos-rel z-1">
                            <?php if($image): ?>
                                <div class="card-bg absolute-fill bg-cover" style="background: url(<?php echo $image['url']; ?>) no-repeat center;"></div>
                            <?php endif; ?>
                            <?php if($logo): ?>
                                <div class="card-top pos-abs z-5 w-100">
                                    <?php echo acfImgOutput($logo, '', 'card-grid__logo pos-rel z-4'); ?>
                                </div>
                            <?php endif; ?>
                            <div class="card-bottom pos-abs z-5 w-100">
                                <div class="icon__container" <?php echo $iconStyle; ?>>
                                    <?php echo acfImgOutput($icon, 'card__grid-icons abs-centered', 'card-grid__icon'); ?>
                                </div>
                                <p class="link-text mb-0"><?php echo $link['title']; ?></p>
                            </div>
                        </div>
                        <div class="card-footer abs-centered pos-abs z-4 w-100">
                            <?php echo acfOutput($text, 'div', 'rte'); ?>
                            <p class="link-text mt-2 mb-0"><?php echo $link['title']; ?></p>
                        </div>
                    </a>
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