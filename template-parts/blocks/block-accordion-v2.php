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
        echo '<div class="block-bg__imgV2 absolute-fill z-2 '. $design['background'] .'" style="background: url('. esc_url( $bgImage['url'] ) .') no-repeat;"></div>';
    endif;
    echo '<div class="cont pos-rel z-5 '. $design['width'] . ' '. $blockAlignClass. '">';
    if ($cards): ?>
        <div class="inner pos-rel z-5">
            <?php if(!empty($text['headline'])): ?>
                <?php echo '<div class="centered-text__inner rte is-bottom--md">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; ?>
            <?php endif; ?>
            <?php $i = 0; $uni = uniqid(); ?>
            <div id="accordion<?php echo $uni; ?>" class="accordion-v2 accordion">
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
                                <?php foreach ($card['tab'] as $tab): ?>
                                    <div class="card__inner is-top--xs is-bottom--xs">
                                        <div class="row align-items-center">
                                            <div class="col-lg-6">
                                                <?php if($tab['content_left'] && !empty($tab['content_left'])): 
                                                    echo acfOutput($tab['content_left'], 'div', 'acc-ctn__title');
                                                else: 
                                                    if($tab['content_left_img'] && !empty($tab['content_left_img'])):
                                                        echo acfImgOutput($tab['content_left_img'], 'acc-ctn__img', 'acc-ctn__image text-center z-1');
                                                    endif; 
                                                endif; ?>
                                            </div>
                                            <div class="col-lg-6 mt-4 mt-lg-0">
                                                <?php if($tab['content_right_title'] && !empty($tab['content_right_title'])): 
                                                   echo acfOutput($tab['content_right_title'], 'h4', 'acc-ctn__title');
                                               endif; 
                                               if($tab['content_right_text'] && !empty($tab['content_right_text'])):
                                                   echo acfOutput($tab['content_right_text'], 'div', 'acc-ctn__text-right');
                                               endif; 
                                               if($tab['content_right_link'] && !empty($tab['content_right_link'])): $link = $tab['content_right_link'];
                                                if(!empty($link['url']) && !empty($link['title'])): ?>
                                                    <p class="is-sm mt-2"><a class="is-text--green-10" href="<?php echo esc_url($link['url']); ?>" title="<?php echo esc_attr ( $link['title'] ); ?>" <?php echo $link['target'] == '_blank' ? 'target="'. $link['target'] .'"' : ''; ?>><?php echo esc_attr ( $link['title'] ); ?></a></p>
                                            <?php endif;
                                        endif; ?>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; ?>
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
