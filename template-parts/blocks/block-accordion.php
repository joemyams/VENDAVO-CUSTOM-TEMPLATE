<?php 
$dropdowns = get_field('block_accordions');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont '. $design['width'] . '">'; ?>
<?php if ($dropdowns):
    $countL = 1;
    $countR = 1; ?>
    <div class="accordion-container">
    <?php if (get_field('block_columns') == 2): ?>
        <div class="half">
        <?php foreach ($dropdowns as $dropdown) {
            if ($countL % 2 !== 0) {
                set_query_var('dropdown', $dropdown);
                get_template_part('/template-parts/components/accordion');
            }
            $countL++;
            }; ?>
        </div>
        <div class="half">
        <?php foreach ($dropdowns as $dropdown) {
            if ($countR % 2 == 0) {
                set_query_var('dropdown', $dropdown);
                get_template_part('/template-parts/components/accordion');
            }
            $countR++;
            }; ?>
        </div> 
    </div>
    <?php else: ?>
        <div class="accordion-container__inner">
         <?php foreach ($dropdowns as $dropdown) {
                set_query_var('dropdown', $dropdown);
                get_template_part('/template-parts/components/accordion');
            } ?>
            </div>
    <?php endif; ?>   
<?php endif; ?>
<?php echo '</div></section>'; ?>

<?php endif; ?>