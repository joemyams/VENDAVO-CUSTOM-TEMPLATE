<?php 
$text = get_field('block_text');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont is-flex--tablet '. $design['width'] . '">'; ?>
<div class="half--image">
    <?php echo acfImgOutput(get_field('block_image'), '', 'employee-spotlight__image'); ?>
</div>
<div class="half--text">
    <?php echo acfReturnTextBlock( $text, 'spotlight'); ?>
</div>
<?php echo '</div></section>'; ?>

<?php endif; ?>