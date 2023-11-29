<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$cards = get_field('block_tabs');
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

$bgImgCSS = $bgImage ? ' has__bg-img' : '';

$blockInfo = acfGetBlockInfo($block, $design, $bgImgCSS);

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>';
if($hasBgImage && !empty($bgImage)): 
    echo '<div class="block-bg__imgV2 absolute-fill z-2 '. $design['background'] .'" style="background: url('. esc_url( $bgImage['url'] ) .') no-repeat;"></div>';
endif;
echo '<div class="cont pos-rel z-5 '. $design['width'] . ' '. $blockAlignClass. '">';
if ($cards): ?>
    <div class="inner pos-rel z-5">
        <?php if(!empty($text['headline'])): ?>
            <?php echo '<div class="centered-text__inner rte is-bottom--md">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; ?>
        <?php endif; ?>
        <div class="tab-container">
            <div class="row">
                <div class="col-lg-3 mb-3 mb-lg-0">
                    <ul class="tab__nav nav flex-column nav-pills nav-fill" role="tablist">
                        <?php $i = 0;
                        foreach ($cards as $card): 
                            if ($i == 0) :
                                $isActive = 'active is-active';
                                $isSelected = 'true';
                            else:
                                $isActive = '';
                                $isSelected = 'false';
                            endif;
                            echo '<li class="nav-item mb-2 mb-lg-0"><a class="nav-link text-center text-lg-left '. $isActive .'" data-index="'. $i .'" id="tabV-'. sanitize_title($card['title']) .'-link" data-toggle="tab" href="#tabV-'. sanitize_title($card['title']) .'" role="tab" aria-controls="tabV-'. sanitize_title($card['title']) .'" aria-selected="'. $isSelected .'">' . $card['title'] . '</a></li>';
                            $i++;
                        endforeach; ?>
                    </ul>
                </div>
                <div class="col-lg-9 pl-lg-5">
                    <div class="tab-content pos-rel is-top-xs">
                        <?php $i = 0; 
                        foreach ($cards as $card): 
                            if ($i == 0) :
                                $isActive = 'active show';
                            else:
                                $isActive = '';
                            endif;
                            echo '<div class="tab-pane fade '. $isActive .'" id="tabV-'. sanitize_title( $card['title']) .'" role="tabpanel" aria-labelledby="tabV-'. sanitize_title($card['title']) .'-link">';
                            echo '<div class="tab-inner__text">'. $card['text'] .'</div>';
                            if($card['resources']): ?>
                                <div class="tab__related-resources mt-4">
                                    <div class="row justify-content-center">
                                        <?php foreach ($card['resources'] as $item):
                                            if(!empty($item['link'])): $link = $item['link']; ?>
                                                <div class="tab__resource col-md-6 mb-3 mb-md-0">
                                                    <a class="tab__resource-link d-flex align-items-center" href="<?php echo esc_url($link['url']); ?>" title="<?php echo esc_attr ( $link['title'] ); ?>" <?php echo $link['target'] == '_blank' ? 'target="'. $link['target'] .'"' : ''; ?>>
                                                        <?php echo acfImgOutput($item['image'], 'tb-ctn__img', 'tb-ctn__image text-center z-1'); ?>
                                                        <div class="inner">
                                                            <?php echo acfOutput($item['title'], 'p', 'tb-ctn__title font-size-h3 mb-2 font-weight-bold'); ?>
                                                            <?php echo acfOutput($item['text'], 'p', 'tb-ctn__title'); ?>
                                                        </div>
                                                    </a>
                                                </div>
                                            <?php endif;
                                        endforeach; ?>
                                    </div>
                                </div>
                            <?php endif;
                            echo '</div>';
                            $i++;
                        endforeach; ?>
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