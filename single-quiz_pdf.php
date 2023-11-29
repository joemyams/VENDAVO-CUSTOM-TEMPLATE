<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since 1.0.0
 */

get_header();
  $generate_pdf = $_GET['pdf'] ?: '';
if ($generate_pdf == 1): 
  $entry_id = $_GET['e'] ?: '';
  $data = RGFormsModel::get_lead($entry_id);
  $themeOptions = get_field('calculators', 'options');
  $headline = "Welcome Back";
  if ($data['form_id'] == $themeOptions['vend_comex']['form_id']) {
    $headline .=  ', ' . $data['57.3'];
  }
  elseif ($data['form_id'] == $themeOptions['vend_cpq']['form_id']) {
    $headline .=  ', ' . $data['44.3'];
  }
	elseif ($data['form_id'] == $themeOptions['vend_roi']['form_id']) {
    $headline .=  ', ' . $data['118.3'];
  }
?>
  
  <section id="regenerateQuiz" data-entry="<?php echo $entry_id; ?>" class="quiz-regenerate is-top--md is-bottom--md text-center is-text--blue-30">
  <div class="quiz-regenerate__inner rte">
      <h1><?php echo $headline; ?></h1>
    <h4><?php _e( 'We\'re Pulling Up Your Report', 'vendavo' ); ?>...</h4>
    <p><?php _e( 'This may take a few seconds.', 'vendavo' ); ?></p>
    <div id="pdfLink"></div>
  </div>

  </section>

<style>
.quiz-regenerate {
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
}
.quiz-regenerate__inner {
  max-width: 700px;
  width: 90%;
  padding: 5rem 2rem;
  border-radius: var(--radius-MD);
  box-shadow: var(--dropShadow-20);
}
</style>


<?php else: ?>
<?php while ( have_posts() ) :
	the_post();
	the_content();


endwhile; // End of the loop.
endif; 
get_footer();