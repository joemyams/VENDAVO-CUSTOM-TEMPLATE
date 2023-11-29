<?php 
$text = get_field('block_text');
$image = get_field('block_image');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, 'rel');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont is-lg text-center">'; ?>
    <?php echo acfOutput($text['headline'], 'h1', 'subpage-header__headline front'); ?>
    <?php echo acfOutput($text['subheadline'], 'h3', 'subpage-header__subheadline front'); ?>
    <?php echo acfimgOutput($image, 'image-cover', 'subpage-header__image'); ?>
<?php echo '</div></section>'; ?>

<?php endif; ?>