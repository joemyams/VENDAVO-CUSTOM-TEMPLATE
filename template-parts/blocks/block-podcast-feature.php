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

echo '<div class="text-center rte is-sm is-bottom--md">'. acfOutput($text['kicker'], 'p', 'kicker') . acfOutput($text['headline'], 'h2', 'half-text__headline') . acfOutput($text['subheadline'], 'div', 'half-text__subheadline') . '</div>';
?>

<div class="podcast-feature__grid grid-30">
  <div class="row">
    <?php if($isLoop):
      $query_ids = get_field('items_select', false, false);
      if($query_ids): 
        $totalItems = count( $query_ids );
        $args = array( 'post_type' => array( 'post' ), 'posts_per_page' => $totalItems, 'post__in' => $query_ids, 'orderby' => 'post__in', );
        $loop = new WP_Query( $args );
        if ( $loop->have_posts() ) :
          while ( $loop->have_posts() ) : $loop->the_post();
            $i = $loop->current_post;
            if($i === 0) :
              get_template_part('/template-parts/cards/card-podcast');
            else:
              get_template_part('/template-parts/cards/card-podcast-sm');
            endif;
          endwhile;
        endif;
        wp_reset_postdata(); 
      endif;
    else:
      $i = 0;
      foreach ($gallery as $item):
      set_query_var('item', $item); 
        if($i === 0) :
          get_template_part('/template-parts/cards/card-podcast-acf');
        else:
          get_template_part('/template-parts/cards/card-podcast-acf-sm');
        endif; 
        $i++; 
      endforeach;
    endif; ?>
  </div>
</div>
<?php echo '</div></section>'; ?>

<?php endif; ?>