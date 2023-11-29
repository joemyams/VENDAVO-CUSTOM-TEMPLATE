<?php 
$variant = get_field('block_variant');
$header = get_field('block_header');
$design = get_field('block_design');
$blockInfo = acfGetBlockInfo($block, $design, $variant);

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:

echo '<section '. $blockInfo .'><div class="cont '. $design['width'] . '">'; ?>
<?php if ($header['kicker']['text'] || $header['headline']['text'] || $header['subheadline']['text']): ?>
<div class="popular-resources__header is-bottom--md">
  <?php echo acfOutput($header['kicker']['text'], 'p', 'kicker ' . $header['kicker']['color']); ?>
  <?php echo acfOutput($header['headline']['text'], 'h3', 'headline ' . $header['headline']['color']); ?>
  <?php echo acfOutput($header['subheadline']['text'], 'h4', 'subheadline ' . $header['subheadline']['color']); ?>
</div>
<?php endif; ?>
<?php $resources = get_field('block_resources');
      $resourcePosts = get_field('block_resouce_posts');
      if ($resourcePosts || $resources) {
    echo '<div class="popular-resources-grid">';
    if ($resourcePosts) {
         foreach ($resourcePosts as $resource) {
      $resourceRedirect = get_field('resource_redirect', $resource);
      $details = getResource($resource);
      set_query_var('details', $details);
      get_template_part('/template-parts/cards/card-resource', 'icon'); };
    }
 
      if (get_field('use_additional')) {
        foreach ($resources as $resource) {
          set_query_var('details', $resource);
          get_template_part('/template-parts/cards/card-resource', 'icon'); };
      };
    echo '</div>'; 
  };
  
  echo '</div></section>'; ?>

  <?php endif; ?>