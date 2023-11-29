<?php 
$columns = get_field('block_columns');
$blockHeader = get_field('block_header');
$variant = get_field('block_variant');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, $variant);
$blockBottom = get_field('block_bottom');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont '. $design['width'] . '">'; ?>
<div class="multicolumn-grid__inner">
	<?php if ($blockHeader['headline'] || $blockHeader['subheadline']): ?>
<div class="multicolumn-grid__header text-center">
	<?php echo acfOutput ($blockHeader['headline'], 'h2', 'multicolumn-grid__headline'); ?>
	<?php echo acfOutput ($blockHeader['subheadline'], 'h6', 'multicolumn-grid__subheadline'); ?>
</div>
	<?php endif; ?>
<?php if ($columns): ?>
    <div class="multicolumn-grid" data-count="<?php echo count($columns); ?>">
        <?php foreach ($columns as $column): ?>
            <div class="single-column">
                <div class="single-column__inner rte">
                    <?php echo acfImgOutput($column['image'], 'single-column__logo', ''); ?>
                    <?php echo acfOutput($column['headline'], 'h4', 'single-column__headline'); ?>
                    <?php echo acfOutput($column['content'], 'div', 'single-column__content'); ?>
                    <?php echo acfLinkOutput($column['link'], 'btn btn--primary is-green is-sm'); ?>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
<?php endif; ?>
<?php if ($blockBottom): ?>
    <?php echo acfOutput ($blockBottom, 'div', 'multicolumn-grid__bottom text-center'); ?>
<?php endif; ?> 
</div>

<?php echo '</div></section>'; ?>

<?php endif; ?> 