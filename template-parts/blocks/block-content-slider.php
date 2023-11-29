<?php 
$design = get_field('block_design');
$header = get_field('block_header');
$slides = get_field('block_slides');
$blockInfo = acfGetBlockInfo($block, $design, '');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

  echo '<section '. $blockInfo .'><div class="cont '. $design['width'] . '">'; ?>
  <div class="content-slider__header text-center is-bottom--xs">
    <?php echo acfOutput($header['kicker']['text'], 'p', $header['kicker']['color'] . ' kicker'); ?>
    <?php echo acfOutput($header['headline']['text'], 'h2', $header['headline']['color']); ?>
    <?php echo acfOutput($header['subheadline']['text'], 'h4', $header['subheadline']['color']); ?>
  </div>
  <div class="content-slider__nav text-center">
    <div class="tab-group">
      <div class="tab-group__indicator" data-position="0"></div>
      <?php $tabCount = 0;
      foreach ($slides as $card) {
        if ($tabCount == 0) {
          echo '<a class=" is-active tab-link" data-index="' . $tabCount . '" data-slick="slick-'. $block['id'] . '">' . $card['headline'] . '</a>';
        } else { 
          echo '<a class="tab-link" data-index="' . $tabCount . '" data-slick="slick-'. $block['id'] . '">' . $card['headline'] . '</a>';
        };
        $tabCount++;
      }
      ?>
    </div>
  </div>
  <div class="content-slider__slick tabbed-slick" data-slick="slick-<?php echo $block['id']; ?>">
    <?php foreach ($slides as $slide): ?>
      <div class="content-slide">
        <div class="content-slide__inner">
          <div class="content-slide__image rel">
            <?php echo acfImgOutput($slide['image'], 'image-fit', 'content-slide__aspect'); ?>
          </div>
          <div class="content-slide__text">
            <div>
              <?php echo acfOutput($slide['headline'], 'h3', 'content-card__headline'); ?>
              <?php echo acfOutput($slide['content'], 'div', 'content-card__content'); ?>
              <?php if ($slide['link']) echo '<div class="cta-container">' . acfLinkOutput($slide['link'], 'btn btn--primary is-green') . '</div>'; ?>
            </div>
          </div>
        </div>
      </div>
    <?php endforeach; ?>
  </div>

  <?php echo '</div></section>'; ?>

  <?php endif; ?>