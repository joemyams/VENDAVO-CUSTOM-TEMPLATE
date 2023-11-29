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
    <div class="svg__shape svg__shape-right z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/shape-right.svg) no-repeat;"></div></div>
<?php endif; 
echo '<div class="cont pos-rel z-5 '. $design['width'] . ' '. $blockAlignClass. '">';
if ($cards): ?>
    <div class="inner pos-rel z-5">
        <?php echo '<div class="centered-text__inner rte">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; ?>
        <div class="tab-container is-top--lg pos-rel">
            <div class="svg__image z-2 d-none d-lg-block" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/business-needs.svg) no-repeat;"></div>
            <div class="dropdown__container dropdown__global box-shadow bg-white pos-rel z-1">
                <?php $uniqID = uniqid(); ?>
                <?php if(get_field('block_cards_headline')): ?>
                    <?php echo acfOutput(get_field('block_cards_headline'), 'h3', 'dropdown__headline is-bottom--xs'); ?>
                <?php endif; ?>
                <div class="d-md-flex w-100">
                    <div class="dropdown">
                        <button class="btn btn-block dropdown-toggle font-weight-normal text-left" data-flip="false" role="button" id="filterby-business-needs-<?php echo $uniqID; ?>" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><?php echo $cards[0]['title']; ?></button>
                        <ul class="dropdown-menu flex-column flex-sm-row"  aria-labelledby="filterby-business-needs-<?php echo $uniqID; ?>">
                            <li>
                                <ul class="nav flex-column"  role="tablist">
                                    <?php $i = 0;
                                    foreach ($cards as $card):
                                        $isVisible = $card['is_hidden'];
                                        if($isVisible):
                                            $isHidden = 'd-none';
                                        else:
                                            $ishidden = '';
                                        endif;
                                        if ($i == 0) :
                                            $isActive = 'active is-active';
                                            $isSelected = 'true';
                                        else:
                                            $isActive = '';
                                            $isSelected = 'false';
                                        endif;
                                        echo '<li class="nav-item '. $isHidden .'"><a class="nav-link '. $isActive .'" data-index="'. $i .'" id="bn-'. sanitize_title($card['title']) .'-link" data-toggle="tab" href="#bn-'. sanitize_title($card['title']) .'" role="tab" aria-controls="bn-'. sanitize_title($card['title']) .'" aria-selected="'. $isSelected .'">' . $card['title'] . '</a></li>';
                                        $i++;
                                    endforeach; ?>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content pos-rel">
                        <?php $i = 0; 
                        foreach ($cards as $card): 
                            if ($i == 0) :
                                $isActive = 'active show';
                            else:
                                $isActive = '';
                            endif;
                            echo '<div class="tab-pane '. $isActive .'" id="bn-'. sanitize_title( $card['title']) .'" role="tabpanel" aria-labelledby="bn-'. sanitize_title($card['title']) .'-link">';
                            $link = $card['link'];
                            if(!empty($link['url']) && !empty($link['title'])): ?>
                                <a class="btn btn--primary is--blue-green-G btn-block" href="<?php echo esc_url($link['url']); ?>" title="<?php echo $link['title']; ?>" <?php echo $link['target'] == '_blank' ? 'target="'. $link['target'] .'"' : ''; ?>><?php echo $link['title']; ?></a>
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
</div>

<?php if(!empty(get_field('block_cards_bottom'))):
    echo '<div class="business-needs__bottom pos-rel z-4 mt-5 py-3"><div class="cont pos-rel text-center '. $design['width'] . '">';
    echo get_field('block_cards_bottom');
    echo '</div></div>';
endif; ?>

<?php
if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
    echo '<div class="cont pos-rel '. $design['width'] . ' '. $blockAlignClass. '">';
    set_query_var('ctas', $ctas);
    get_template_part('/template-parts/components/cta-container'); };
echo '</div></section>'; ?>

<?php endif; ?>