<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'>'; 
$terms = get_terms( 'glossary-type', array( 'orderby' => 'name', 'order' => 'ASC', 'hide_empty' => true ) );
if($terms && count($terms) > 0) : ?>
  <div class="block__glossary-nav pos-rel z-3">
    <div class="cont pos-rel z-5 <?php echo $design['width'] ; ?>">
      <?php
      $outList = '';
      $terms = get_terms( 'glossary-type', array( 'orderby' => 'name', 'order' => 'ASC', 'hide_empty' => false ) );
      foreach ( $terms as $term ) :
        if ( $term->count > 0 ) :
          $outList .= '<li class="nav-item active"><a class="nav-link pl-0 font-weight-normal" href="'. esc_url( home_url( '/' ) ) .'glossary/#'. $term->slug .'" title="Glossary '. $term->name.'">'. $term->name .'</a></li>';
        else: 
          $outList .= '<li class="nav-item"><span class="nav-link disabled pl-0 font-weight-normal" disabled>'. $term->name .'</span></li>';
        endif;
      endforeach; ?>
      <?php if( !empty( $outList ) ): ?>
        <ul class="nav navbar-nav flex-row nav-glossary justify-content-center"><?php echo $outList; ?></ul>
      <?php endif; ?>
    </div>
  </div>
<?php endif; ?>

<?php echo '</section>'; ?>

<?php endif; ?>

