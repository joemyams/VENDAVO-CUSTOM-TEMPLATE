<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$isLoop = get_field('is_article');
$gallery = get_field('block_gallery');
$design = get_field('block_design');
$hasBackground = get_field('block_has_background');
$backgroundImage = get_field('block_background_image');
$blockInfo = acfGetBlockInfo($block, $design, '');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

if(!($hasBackground && $backgroundImage)):
  echo '<section '. $blockInfo .'><div class="cont '. $design['width'] . '">';
else:
  $blockInfo = acfGetBlockInfo($block, $design, 'pos-rel block--has-bg');
  echo '<section '. $blockInfo .'>
  <div class="block-bg__container absolute-fill z-2 '. $design['background'] .'">'. acfImgOutput($backgroundImage, 'block-bg__image image-cover pos-rel z-2', '') .'</div>
  <div class="cont pos-rel z-5 '. $design['width'] . '">';
endif;

echo '<div class="podcast-slider__top rte d-lg-flex align-items-lg-end"><div class="inner mr-lg-4">'. acfOutput($text['kicker'], 'p', 'kicker mb-0') . acfOutput($text['headline'], 'h2 mb-lg-0', 'half-text__headline') .'</div><div class="inner">'. acfOutput($text['subheadline'], 'div', 'half-text__subheadline') . '</div></div>';

?>
<hr class="my-4" />
<div class="podcast-slider__inner" data-slick="slick-<?php echo $block['id']; ?>">
    <?php if($isLoop):
      $query_ids = get_field('items_select', false, false);
      if($query_ids): 
        $totalItems = count( $query_ids );
        $args = array( 'post_type' => array( 'post' ), 'posts_per_page' => $totalItems, 'post__in' => $query_ids, 'orderby' => 'post__in', );
        $loop = new WP_Query( $args );
        if ( $loop->have_posts() ) :
          while ( $loop->have_posts() ) : $loop->the_post();
              get_template_part('/template-parts/cards/card-podcast-slider');
          endwhile;
        endif;
        wp_reset_postdata(); 
      endif;
    else:
      foreach ($gallery as $item):
      set_query_var('item', $item); 
          get_template_part('/template-parts/cards/card-podcast-slider-acf');
      endforeach;
    endif; ?>
</div>
<?php echo '</div></section>'; ?>

<?php endif; ?>