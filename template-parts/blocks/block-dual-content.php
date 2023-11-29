<?php 
$ctas = get_field('block_ctas');
$content = get_field('block_content');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, ''); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>

<section <?php echo $blockInfo; ?>>
    <div class="cont is-flex--tablet">
    <div class="half">
    <div class="dual-content__inner rte">
        <h3>The People</h3>
        <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptates hic voluptate ea ipsam vero modi a numquam, architecto, error mollitia reiciendis veniam laudantium odit repudiandae distinctio adipisci cum beatae.</p>
        </div>
        <div class="cta-container">

        <span class="btn btn--secondary is-green is-sm">Learn More</span>
    </div>
    </div>
    </div>
    <div class="half">
    <div class="dual-content__inner rte">
        <h3>The Process</h3>
        <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptates hic voluptate ea ipsam vero modi a numquam, architecto, error mollitia reiciendis veniam laudantium odit repudiandae distinctio adipisci cum beatae.</p>
        </div>
        <div class="cta-container">
        <span class="btn btn--secondary is-green is-sm">Learn More</span>
        </div>
    </div>
    </div>
    </div>
</section>

<style>
.block--dual-content .half {
}
.block--dual-content .half:first-child {
    padding-right: 1em;
}
.block--dual-content .half:nth-child(2) {
    padding-left: 1em;
}
.dual-content__inner {
    border-radius: 10px;
    border: 2px solid #f7f7f7;
    padding: 4em;
transition: 300ms ease box-shadow;
cursor: pointer;
}
.dual-content__inner:hover {
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.1);
transition: 300ms ease box-shadow;
}
</style>

<?php endif; ?>