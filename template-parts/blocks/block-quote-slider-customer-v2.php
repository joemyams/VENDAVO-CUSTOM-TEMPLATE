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

echo '<section '. $blockInfo .'>
<div class="cont pos-rel '. $design['width'] . ' '. $blockAlignClass. '">'; ?>
<div class="inner pos-rel z-5">
    <?php if(!empty($text['headline'])): ?>
        <?php echo '<div class="centered-text__inner rte is-bottom--md">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; ?>
    <?php endif; ?>
</div>
</div>
<?php if($hasBgImage && !empty($bgImage)): 
    echo '<div class="block-bg__imgV2 absolute-fill z-2 '. $design['background'] .'" style="background: url('. esc_url( $bgImage['url'] ) .') no-repeat;"></div>';
endif;
if($hasBgShape): ?>
    <div class="svg__shape svg__shape-left z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/shape-left.svg) no-repeat;"></div></div>
<?php endif; 
if ($cards): ?>
    <div class="slides__container cont is-default pos-rel z-5">
        <div class="inner inner pos-rel w-100"> 
            <?php 
            $sliderQ = $slideI = '';
            foreach ($cards as $card):
                set_query_var('card', $card); 
                $image = $card['image'];
                $text = $card['quote'];
                $author = $card['author'];
                $job = $card['job'];
                $company = $card['company'];
                $link = $card['link'];

                $slideI .= '<div class="slide__item  pos-rel item w-100"><div class="slide__c pos-rel w-100 rounded-circle nooverf"><div class="slide__inner"><div class="card-bg absolute-fill bg-cover" style="background: url('. $image['url'] .') no-repeat center;"></div></div></div></div>';
                $slideQ .= '<div class="slide__item  pos-rel item w-100">';
                $slideQ .= '<div class="card card__quoteV3">
                <div class="card-body">'. $text .'</div>
                <div class="card-footer pos-rel">
                <div class="quote__author">'. $author .'</div>
                <div class="quote__meta">'. $job .', '. $company .'</div>
                </div>';
                if($link):
                    $slideQ .= '<div class="is-top--md">'. acfLinkOutput($link, 'btn btn--primary is--blue90-V2') .'</div>';
                endif;
                $slideQ .= '</div>';
                $slideQ .= '</div>';
                ?>
            <?php endforeach; ?>
            <div class="js-quote__slider-main pos-rel">
                <div class="quote-svg__image pos-abs z-2" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/quote-customer-icon.svg) no-repeat;"></div>
                <div class="js-quote__slider-text js-card__slider pos-rel z-5" data-slick="slick-<?php echo $block['id']; ?>">
                    <?php echo $slideQ; ?>
                </div>
            </div>
            <div class="js-quote__slider-aside">
                <div class="js-quote__slider-image js-card__slider" data-slick="slick-<?php echo $block['id']; ?>">
                    <?php echo $slideI; ?>
                </div>
            </div>
        </div>
    </div>
<?php endif; ?>

<?php echo '<div class="cont pos-rel z-5 '. $design['width'] . ' '. $blockAlignClass. '">'; ?>
<?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
    set_query_var('ctas', $ctas);
    get_template_part('/template-parts/components/cta-container'); };
    echo '</div></section>'; ?>

<?php endif; ?>


