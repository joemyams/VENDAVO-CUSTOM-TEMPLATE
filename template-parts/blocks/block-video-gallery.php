<?php 
$text = get_field('block_text');
$ctas = get_field('block_ctas');
$video = get_field('main_video');
$gallery = get_field('block_gallery');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont '. $design['width'] . '">';
echo '<div class="centered-text__inner rte">'. acfReturnTextBlock( $text, 'half-text') . '</div>'; ?>
<div class="video-gallery__inner">
  <?php if ($video):
    preg_match('/title="(.+?)"/', $video, $matches);
    $src = $matches[1];
    $video = str_replace($src, '', $video);
    echo '<div class="main-video__aspect">'. $video . '</div>';
  endif;
  ?>
</div>
<?php if( $gallery && (count( $gallery ) > 0 ) ) : ?>
  <div class="video-gallery__grid">
    <?php foreach ($gallery as $item): ?>
      <div class="video-grid__item">
        <?php if ($item['cta_btn']['type'] == 'video'): ?>
          <a class="video-grid__inner fancybox" href="<?php echo $item['cta_btn']['video_link']; ?>">
            <?php echo acfImgOutput($item['image'], 'video-grid__image', ''); ?>
            <?php echo acfOutput($item['title'], 'h4', 'video-grid__headline'); ?>
            <?php if ($item['cta_btn']['text']) echo '<span class="btn btn--primary is-green is-sm">'. $item['cta_btn']['text'] .'</span>'; ?>
          </a>
        <?php elseif ($item['cta_btn']['type'] == 'internal'): ?>
          <a class="video-grid__inner is-sm" href="<?php echo $item['cta_btn']['internal_link']; ?>">
            <?php echo acfImgOutput($item['image'], 'video-grid__image', ''); ?>
            <?php echo acfOutput($item['title'], 'h4', 'video-grid__headline'); ?>
            <?php if ($item['cta_btn']['text']) echo '<span class="btn btn--primary is-green is-sm">'. $item['cta_btn']['text'] .'</span>'; ?>
          </a>
        <?php elseif ($item['cta_btn']['type'] == 'external'): ?>
          <a class="video-grid__inner" href="<?php echo $item['cta_btn']['external_link']; ?>">
            <?php echo acfImgOutput($item['image'], 'video-grid__image', ''); ?>
            <?php echo acfOutput($item['title'], 'h4', 'video-grid__headline'); ?>
            <?php if ($item['cta_btn']['text']) echo '<span class="btn btn--primary is-green is-sm">'. $item['cta_btn']['text'] .'</span>'; ?>
          </a>
        <?php elseif ($item['cta_btn']['type'] == 'none'): ?>
          <div class="video-grid__inner">
            <?php echo acfImgOutput($item['image'], 'video-grid__image', ''); ?>
            <?php echo acfOutput($item['title'], 'h4', 'video-grid__headline'); ?>
          </div>
        <?php endif; ?>
      </div>
    <?php endforeach; ?>
  </div>
<?php endif; ?>
<?php echo '</div></section>'; ?>

<?php endif; ?>