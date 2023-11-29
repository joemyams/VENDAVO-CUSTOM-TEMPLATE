<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$video = get_field('block_video');
$blockInfo = acfGetBlockInfo($block, $design, '');
$variant = get_field('block_variant');

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
$hasBgRadial = get_field('block_has_bg_radial');

if($hasBgRadial): 
    $blockCSSRadial = 'has__bg-radial';
else:
    $blockCSSRadial = '';
endif;

$blockInfo = acfGetBlockInfo($block, $design, 'is--'. $variant .' '. $blockCSSRadial);

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>';
if($hasBgImage && !empty($bgImage)): 
    echo '<div class="block-bg__imgV2 absolute-fill z-2 '. $design['background'] .'" style="background: url('. esc_url( $bgImage['url'] ) .') no-repeat;"></div>';
endif;
if($hasBgShape): ?>
    <div class="svg__shape svg__shape-center z-2"><div class="inner" style="background: url(<?php echo get_template_directory_uri(); ?>/assets/img/shape-center-video-slider-v2.svg) no-repeat;"></div></div>
<?php endif; 
if($hasBgRadial): 
    echo '<div class="radial__bg z-3"></div>';
endif;
echo '<div class="cont pos-rel z-5 '. $design['width'] . ' ">';
if ($cards): ?>
    <div class="inner pos-rel z-5">
        <?php if(!empty($text['kicker']) || !empty($text['headline']) || !empty($text['subheadline']) || !empty($text['body'])): ?>
        <?php echo '<div class="centered-text__inner rte is-bottom--md '. $blockAlignClass. '">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; ?>
    <?php endif; ?>
    <div class="js-videoCard__slider video-slider__inner js-card__slider" data-slick="slick-<?php echo $block['id']; ?>">
        <?php foreach ($cards as $card): 
            $video = $card['video'];
            $text = $card['text'];
            ?>
            <div class="navigator__cell pos-rel item w-100">
                <div class="row align-items-center">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="video__container">
                            <?php if($video['video_link']): ?>  
                                <a class="podcast-grid__video fancybox" href="<?php echo esc_url( $video['video_link'] ); ?>">
                                    <figure class="card-podcast-img mb-0 pos-rel nooverf mb-3 mb-lg-0">
                                        <div class="podcast-play__icon abs-centered z-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 189 187">
                                              <path fill="#fff" d="M138.382 84.446c5.3 3 7.1 9.7 4.1 15-1 1.7-2.4 3.1-4.1 4.1l-60.9 35c-5.3 3-12 1.2-15-4.1-1-1.7-1.5-3.6-1.5-5.5v-70c0-6.1 4.9-11 11-11 1.9 0 3.8.5 5.5 1.5l60.9 35z"/><g fill="none" opacity=".61"><ellipse cx="94.5" cy="93.5" rx="94.5" ry="93.5"/><ellipse cx="94.5" cy="93.5" stroke="#fff" stroke-width="6" rx="91.5" ry="90.5"/></g></svg>
                                          </div>
                                          <?php echo acfImgOutput($video['image'], 'podcast-grid__image image-cover pos-rel z-2', ''); ?>
                                      </figure>
                                  </a>
                              <?php else : ?>
                                <div class="podcast-grid__video no__video">
                                    <figure class="card-podcast-img mb-0 pos-rel nooverf mb-3 mb-lg-0">
                                      <?php echo acfImgOutput($video['image'], 'podcast-grid__image image-cover pos-rel z-2', ''); ?>
                                  </figure>
                              </div>
                          <?php endif; ?>
                      </div>
                  </div>
                  <div class="half--text col-lg-6">
                    <?php if(!empty($text['headline'])): ?>
                        <?php echo '<div class="video-text__inner rte">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; ?>
                    <?php endif; ?>
                    <?php if ($ctas['primary']['type'] !== 'none' || $ctas['secondary']['type'] !== 'none') {
                        set_query_var('ctas', $ctas);
                        get_template_part('/template-parts/components/cta-container'); }; ?>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>
<?php endif;
echo '</div></section>'; ?>

<?php endif; ?>