<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');

$variant = get_field('block_variant');

$blockInfo = acfGetBlockInfo($block, $design, '');

$blockAlign = get_field('block_alignment');
$blockAlignHead = $blockAlign['headline'];
$blockAlignCopy = $blockAlign['body'];
if($blockAlign):
    $blockAlignClass = 'is-headline--'. $blockAlignHead .' is-body--'. $blockAlignCopy; 
else:
    $blockAlignClass = 'text-left'; 
endif;

$hasBgImage = get_field('block_has_bg_image');
$bgImage = get_field('block_bg_image');
$hasBgShape = get_field('block_has_bg_shape');

$bgImgCSS = $bgImage ? ' has__bg-img' : '';
$bgShapeCSS = $hasBgShape ? ' has__bg-shape': '';

$blockInfo = acfGetBlockInfo($block, $design, 'is--'. $variant. ' '. $bgImgCSS . ' '. $bgShapeCSS);

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>';
if($hasBgImage && !empty($bgImage)): 
    echo '<div class="block-bg__imgV2 absolute-fill z-2 '. $design['background'] .'" style="background: url('. esc_url( $bgImage['url'] ) .') no-repeat; '. $bgPosCSS .';"></div>';
endif;
if($hasBgShape): ?>
    <div class="svg__shape svg__shape-left z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/shape-left-way-step1.svg) no-repeat;"></div></div>
<?php endif; 
echo '<div class="cont pos-rel z-5 '. $design['width'] . ' '. $blockAlignClass. '">';
?>
<div class="inner pos-rel z-5">
    <?php if(!empty($text['headline'])): ?>
        <div class="text__inner">
            <div class="text__inner-top d-md-flex align-items-md-center <?php echo ($variant === 'layout-right') ? 'justify-content-md-end' : ''; ?>">
                <?php echo acfImgOutput($text['number'], '', 'ws__number mr-n4'); ?>
                <?php echo acfOutput($text['kicker'], 'p', 'kicker'); ?>
                <button type="button" data-target="#steps-modal" class="btn btn-none pos-rel ws-link d-flex align-items-center w-auto pos-rel">
                    <h3 class="ws__headline mb-0 mr-2 d-inline-block is-text--<?php echo get_field('block_title_color'); ?>"><?php echo $text['headline']; ?></h3>
                    <div class="card__icon-plus svg__icon-plus d-inline-block z-2 ml-2 mb-4">
                        <?php echo Vendavo_SVG_Icons::get_svg( 'ui', 'plus', 32, 'capability__plus'); ?>
                    </div>
                    <div id="steps__info-<?php echo $block['id']; ?>" class="modal__info d-none">
                        <div class="row">
                            <?php 
                            $blockModal = get_field('block_modal');
                            $blockQuote = get_field('block_quote');
                            if($blockModal['text']): ?>
                                <div class="col-lg-6 mb-5 mb-lg-0">
                                    <?php echo acfOutput($blockModal['title'], 'h3', 'md__title'); ?>
                                    <?php echo acfOutput($blockModal['text'], 'div', 'md__body is-top--xs'); ?>         
                                </div>
                            <?php endif; ?>
                            <?php if(!empty($blockQuote['quote'])): ?>
                                <div class="col-lg-6">
                                    <blockquote class="quote__lg">
                                        <?php echo acfOutput($blockQuote['quote'], 'p', 'text-quote__quote') .
                                        acfOutput($blockQuote['author'], 'p', 'text-quote__author mb-0') . 
                                        acfOutput($blockQuote['source'], 'p', 'text-quote__source');
                                        if(!empty($blockQuote['image'])):
                                            echo acfImgOutput($blockQuote['image'], 'cs-quote__image', 'cs-quote__img z-1');
                                        endif; ?>
                                    </blockquote> 
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </button>
                <?php echo acfOutput($text['subheadline'], 'h4', 'ws__subheadline'); ?>
            </div>
            <div class="d-flex is-top--lg is-bottom--xl">
                <?php echo acfImgOutput($text['logo'], '', 'ws__logo mr-2'); ?>
                <?php echo acfOutput($text['body'], 'div', 'ws__body'); ?>
            </div>
        </div>
    <?php endif; ?>

</div>

<?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
    set_query_var('ctas', $ctas);
    get_template_part('/template-parts/components/cta-container'); };
echo '</div></section>'; ?>

<?php endif; ?>