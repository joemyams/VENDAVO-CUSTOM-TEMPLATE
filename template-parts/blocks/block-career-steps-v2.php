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
        <div class="cards__container career__steps pos-rel">
            <?php foreach ($cards as $card): ?>
                <div class="card__inner card__step pos-rel z-3 card__step-<?php echo $i; ?>">
                    <?php switch($i % 4) : case 0 : case 1 : case 2 :?>
                        <div class="svg__shape svg__shape-bottom z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/career-step-<?php echo $i+1; ?>-bg.svg) no-repeat;"></div></div>
                        <?php break; ?>
                    <?php endswitch; ?>
                    <?php echo '<div class="cont pos-rel z-5 '. $design['width'] . ' '. $blockAlignClass. '">'; ?>
                    <div class="row pos-rel z-5 justify-content-between">
                        <div class="col-lg-5 <?php echo ($i % 2 === 0) ? 'order-lg-first' : 'order-lg-last'; ?>">
                            <?php if($card['headline'] && !empty($card['headline'])): 
                                echo acfOutput($card['headline'], 'h3', 'acc-ctn__title mb-3');
                            endif; ?>
                            <?php if($card['content'] && !empty($card['content'])): 
                                echo acfOutput($card['content'], 'div', 'acc-ctn__text');
                            endif; ?>
                        </div>
                        <div class="col-lg-6">
                            <div class="svg__image-step">
                                <div class="svg__image z-2" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/career-steps-svg.svg) no-repeat;"></div></div>                   
                            </div>
                        </div>
                    </div>
                    <?php echo '</div>';
                    $i++; 
                endforeach; ?>
                <div class="svg__shape svg__shape-line z-5 d-none d-xl-block"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/career-step-line.svg) no-repeat;"></div></div>
            </div>

        <?php endif;
    echo '</section>'; ?>

<?php endif; ?>