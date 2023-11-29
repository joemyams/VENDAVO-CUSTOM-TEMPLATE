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
        <div class="tab-container">
            <ul class="tab__nav nav flex-column flex-lg-row nav-pills nav-fill" role="tablist">
                <?php $i = 0;
                foreach ($cards as $card): 
                    if ($i == 0) :
                        $isActive = 'active is-active';
                        $isSelected = 'true';
                    else:
                        $isActive = '';
                        $isSelected = 'false';
                    endif;
                    echo '<li class="nav-item mb-2 mb-lg-0"><a class="tab-link '. $isActive .'" data-index="'. $i .'" id="tt-'. sanitize_title($card['title']) .'-link" data-toggle="tab" href="#tt-'. sanitize_title($card['title']) .'" role="tab" aria-controls="tt-'. sanitize_title($card['title']) .'" aria-selected="'. $isSelected .'">' . $card['title'] . '</a></li>';
                    $i++;
                endforeach; ?>
            </ul>
            <div class="tab-content pos-rel is-top-xs">
                <?php $i = 0; 
                foreach ($cards as $card): 
                    if ($i == 0) :
                        $isActive = 'active show';
                    else:
                        $isActive = '';
                    endif;
                    echo '<div class="tab-pane fade '. $isActive .'" id="tt-'. sanitize_title( $card['title']) .'" role="tabpanel" aria-labelledby="tt-'. sanitize_title($card['title']) .'-link">';
                    echo '<div class="inner">
                        <div class="chout-card">
                            <div class="chout-card__inner">
                                <div class="chout-card__sidebar">'. acfOutput($card['title'], 'h6', 'sidebar-headline') .'</div>
                                <div class="chout-card__body">
                                    <div class="chout-card__left">
                                        <div class="chout-card__column ">'. acfOutput($card['tab']['headline_left'], 'h4', 'chout-card__headline') .' '. acfOutput($card['tab']['content_left'], 'div', 'rte') .'</div>
                                    </div>
                                    <div class="chout-card__right">
                                        <div class="chout-card__column rel z-5">
                                            '. acfOutput($card['tab']['headline_right'], 'h4', 'chout-card__headline') .'
                                            '. acfOutput($card['tab']['content_right'], 'div', 'rte') .'
                                            '. acfLinkOutput($card['link'], 'chout-card__btn btn btn--primary is--blue90-V2') .'
                                        </div> 
                                    </div>
                            </div>
                        </div>
                    </div>';
                    echo '</div></div>';
                    $i++;
                endforeach; ?>
            </div>
        </div>
    </div>
<?php endif; ?>

<?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
    set_query_var('ctas', $ctas);
    get_template_part('/template-parts/components/cta-container'); };
echo '</div></section>'; ?>

<?php endif; ?>