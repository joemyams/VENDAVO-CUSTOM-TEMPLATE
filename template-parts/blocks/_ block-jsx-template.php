<?php 
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, '');
$allowedBlocks = array( 'core/columns', 'core/column', 'core/image');
$template = array(
    array( 'core/columns', array(), array(
        array( 'core/column', array(), array(
            array( 'core/image', array() ),
        ) ),
        array( 'core/column', array(), array(
            array( 'core/image', array() ),
        ) ),
        array( 'core/column', array(), array(
            array( 'core/image', array() ),
        ) ),
        array( 'core/column', array(), array(
            array( 'core/image', array() ),
        ) ),
    ) ) 
);
echo '<section '. $blockInfo .'><div class="cont rte '. $design['width'] .'">';
echo '<InnerBlocks allowedBlocks="' . esc_attr( wp_json_encode( $allowedBlocks ) ) . '" template="' . esc_attr( wp_json_encode( $template ) ) . '" />';
echo '</div></section>'; ?>