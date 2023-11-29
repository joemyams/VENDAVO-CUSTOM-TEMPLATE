<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$cards = get_field('block_tabs');


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

$bgImgCSS = $bgImage ? ' has__bg-img' : '';

$blockInfo = acfGetBlockInfo($block, $design, $bgImgCSS);

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>';
if($hasBgImage && !empty($bgImage)): 
    echo '<div class="block-bg__imgV2 absolute-fill z-2 '. $design['background'] .'" style="background: url('. esc_url( $bgImage['url'] ) .') no-repeat; '. $bgPosCSS .';"></div>';
endif;
echo '<div class="cont pos-rel z-5 '. $design['width'] . ' '. $blockAlignClass. '">';
if ($cards): ?>
    <div class="inner pos-rel z-5">
        <?php if(!empty($text['headline'])): ?>
            <?php echo '<div class="centered-text__inner rte is-bottom--md">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; ?>
        <?php endif; ?>
        <?php $i = 0; $uni = uniqid(); ?>
        <div id="accordion<?php echo $uni; ?>" class="faq-v2 accordion">
            <?php
            foreach ($cards as $card): 
                if ($i == 0) :
                    $isActive = '';
                    $isSelected = 'show';
                else:
                    $isActive = 'collapsed';
                    $isSelected = '';
                endif; ?>
                <div class="card border-0 rounded-0 card-accordion">
                    <header class="card-header bg-transparent border-0 rounded-0 p-0" id="accHead<?php echo $uni .'-'. $i; ?>">
                        <h3 class="mb-0">
                            <button class="btn btn-block btn-accordion <?php echo $isActive; ?>" data-toggle="collapse" data-target="#accCollapse<?php echo $uni .'-'. $i; ?>" aria-expanded="true" aria-controls="accCollapse<?php echo $uni .'-'. $i; ?>"><?php echo $card['title']; ?>
                            <div class="collapse-icon"><div class="symbol-plus"></div></div>
                        </h3>
                    </header>
                    <section id="accCollapse<?php echo $uni .'-'. $i; ?>" class="collapse <?php echo $isSelected; ?>" aria-labelledby="accHead<?php echo $uni .'-'. $i; ?>" data-parent="#accordion<?php echo $uni; ?>">
                        <div class="card-body accordion-body pos-rel">
                            <div class="card__inner is-bottom--md">
                                <?php echo $card['tab']; ?>
                            </div>
                        </div>
                    </section>
                </div>
                <?php $i++;
            endforeach; ?>
        </div>

    </div>

<?php endif; ?>

<?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
    set_query_var('ctas', $ctas);
    get_template_part('/template-parts/components/cta-container'); };
    echo '</div></section>'; ?>

<?php endif; ?>

