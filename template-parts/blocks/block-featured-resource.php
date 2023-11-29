<?php 
$variant = get_field('block_variant');
$text = get_field('block_text');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont '. $design['width'] . '">'; ?>
    <?php if ($text['link']): ?>
        <a href="<?php echo $text['link']; ?>" target="_blank" class="featured-resource__inner <?php echo $design['background']; ?>">
    <?php else: ?>
        <div class="featured-resource__inner <?php echo $design['background']; ?>">
    <?php endif; ?>
				<?php if ($variant !== 'no-asset'): ?>
        <div class="featured-resource__image">
            <?php if($variant == 'is-layered'): ?>
            <div class="featured-resource__aspect">
                <?php echo acfImgOutput($text['image'], 'image-cover', ''); ?>
            </div>
            <?php elseif ($variant == 'is-highlight'): ?>
            <div class="featured-resource__zoom">
              <?php if ($text['zoom_image']): ?>
                <?php echo acfImgOutput($text['zoom_image'], 'image-cover', ''); ?>
              <?php else: ?>
                <?php echo acfImgOutput($text['image'], 'image-cover', ''); ?>

                <?php endif; ?>
            </div>
            <?php endif; ?>
		
            <div class="featured-resource__aspect is-second">
                <?php echo acfImgOutput($text['image'], 'image-cover', ''); ?>
            </div>
        </div>
			<?php endif; ?>
			
        <div class="featured-resource__text">
            <?php echo acfReturnTextBlock( $text, 'featured-resource'); ?>
            <?php if ($text['link']) echo '<span class="btn btn--primary is-sm is-green">View Resource</span>'; ?>
        </div>
    <?php if (!$text['link']): ?>
    </div>
    <?php else: ?>
    </a>
    <?php endif; ?>
<?php echo '</div></section>'; ?>

<?php endif; ?>
