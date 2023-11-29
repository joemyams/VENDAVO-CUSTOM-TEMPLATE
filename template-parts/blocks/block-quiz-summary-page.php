<?php 
$content = get_field('block_header');
$contacts = get_field('block_contact');
$design = get_field('block_design');
$slideDesign = get_field('quiz_design');
$blockInfo = acfGetBlockInfo($block, $design, 'quiz-page'); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
?>
<section <?php echo $blockInfo; ?>>
  <div class="quiz-cont">
    <?php if ($content['image']): ?>
      <div class="summary-image rel">
        <img src="<?php echo $content['image']['url']; ?>" class="image-fit" />
      </div>
    <?php endif; ?>
    <div class="summary-banner <?php echo $content['headline']['color']; ?>">
      <?php echo acfOutput($content['headline']['text'], 'h6', ''); ?>
    </div>
    <div class="summary__body">
      <div class="summary-left">
        <?php the_field('left_column'); ?>
      </div>
      <div class="summary-right">
        <?php the_field('right_column');
          if ($contacts) {
          echo '<div class="summary__contacts">';
          foreach ($contacts as $contact) {
            set_query_var('contact', $contact);
            get_template_part('/template-parts/quizzes/quiz-contact-card');
          };
          echo '</div>';
        }; ?>
      </div>
    </div>
  </div>
  <?php if ($slideDesign['show_footer']) get_template_part('template-parts/quizzes/quiz-slide-footer'); ?>
</section>

<?php endif; ?>