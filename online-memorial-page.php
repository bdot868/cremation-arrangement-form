<?php
/**
 * Template Name: Online Memorial App
 */
get_header();
?>
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

OMA App page template

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->

<main class="py-90">
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	<article class="container">
		<div class="post" id="post-<?php the_ID(); ?>">
			<div class="entry">
				<div class="oma-app">
					<?php the_field('marketing_headline'); ?>

				    <div id="react-app"></div><!-- #react-app -->

					<?php the_field('marketing_footer'); ?>

			    </div><!-- .entry-content -->
			</div><!--entry -->
		</div><!--post-->
	</article>
<?php endwhile; endif; ?>
</main>
<?php $language = ICL_LANGUAGE_CODE; ?>
<?php get_footer(); ?>

<script>
	document.cookie = "<?php echo "language=" . $language; ?>";
</script>
