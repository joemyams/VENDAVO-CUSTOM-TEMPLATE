<?php 
$ctas = get_field('block_ctas');
$content = get_field('block_content');
$design = get_field('block_design');
$results = get_field('block_results');
$blockInfo = acfGetBlockInfo($block, $design, ''); 

$isHidden = get_field('block_is_hidden');
if($isHidden && !(is_user_logged_in())):
else:
	?>
	<style>
		.swoop-slide:not(:nth-child(3)) {
			display: none;
		}</style>
		<section <?php echo $blockInfo; ?>>
			<div class="outcome-graph__header">
				<div class="cont is-default">
					<?php echo acfOutput($content['headline'], 'h2', 'outcome-graph__headline'); ?>
					<?php if ($results): ?>
						<div class="tab-group">
							<div class="tab-group__indicator" data-position="0"></div>
							<?php 
							$count = 0;
							foreach ($results as $result) {
								if ($count == 0) {
									echo '<a class="is-active tab-link" data-index="'. $count .'" href="">' . $result['tab_label'] . '</a>';
								} else {
									echo '<a class="tab-link" data-index="'. $count .'" href="">' . $result['tab_label'] . '</a>';
								}
								$count++;
							}; ?>
						</div>
					<?php endif; ?>
				</div>
			</div>
			<div class="cont is-default">
				<div class="outcome-graph-container rel">
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="0 0 1042.94 358.37" style="enable-background:new 0 0 1042.94 358.37;" xml:space="preserve">
					<style type="text/css">
						.svg1{fill:none;stroke:#E5E5E5;stroke-miterlimit:10;}
						.svg2{fill:none;stroke:#E5E5E5;stroke-miterlimit:10;stroke-dasharray:2.9122,2.9122,2.9122,2.9122;}
						.st2{fill:none;stroke:#E5E5E5;stroke-miterlimit:10;stroke-dasharray:2.9122,2.9122,2.9122,2.9122,2.9122,2.9122;}
						.st3{fill:#FFFFFF;stroke:#E5E5E5;stroke-miterlimit:10;}
						.st4{fill:#132D52;}
						.st5{font-family:'Manrope'; font-weight: 700; }
						.st6{font-size:12px;}
						.st7{font-size:32.6751px;}
						.st8{font-size:16.3377px;}
						.st9{fill:none;stroke:#64BC46;stroke-width:2;stroke-miterlimit:10;}
						.svg20{fill:#FFFFFF;stroke:#64BC46;stroke-width:2;stroke-miterlimit:10;}
						.svg21{fill:#7167AE;}
						.svg22{fill:#2996D3;}
						.svg23{fill:#99D8E3;}
						.svg24{fill:none;stroke:#E5E5E5;stroke-miterlimit:10;stroke-dasharray:3.0827,3.0827,3.0827,3.0827;}
						.svg25{fill:none;stroke:#E5E5E5;stroke-miterlimit:10;stroke-dasharray:3.0827,3.0827,3.0827,3.0827,3.0827,3.0827;}
						.svg26{font-size:18.5px;}
						.svg27{fill:#DA3C64;}
						.svg28{fill:#F8BA28;}
						.dashline{fill:none;stroke:#E5E5E5;stroke-miterlimit:10;stroke-dasharray:3;}
						.dashline-solid{fill:none;stroke:#fff;}
						.swoop{fill:none;stroke:#64BC46;stroke-width:2;stroke-miterlimit:10;}
						.outer-circle{fill:#FFFFFF;stroke:#64BC46;stroke-width:2;stroke-miterlimit:10;}
						.is-yellow{fill:#F8BA28;}
						.is-purple{fill:#7167AE;}
						.is-blue{fill:#2996D3;}
						.is-ltBlue{fill:#99D8E3;}
						.is-pink{fill:#DA3C64;}
						.bubble{fill:#FFFFFF;stroke:#E5E5E5;stroke-miterlimit:10;}
						.stat {fill:#132D52; font-family: "Manrope", sans-serif; font-weight: 700; }
						.stat--label {font-size:12px; }
						.stat--large {font-size:32px !important; white-space: nowrap; }
						.stat--large.is-long {font-size:22px !important; white-space: nowrap; padding-top: .75rem; padding-bottom: .75rem; }
						.stat--large.is-sm {font-size:20px !important; padding: .75rem; }
						.stat--small {font-size:12px !important; margin-top: 1rem; width: 80%; margin: .75rem auto 0 auto !important; line-height: 1.2; max-width: 100px; }
						.test { width: 155px; height: 50%; text-align: center; }
						.test.step-two { height: 65%;  }
						.test.step-three { height: 75%;  }
						.test.step-four { height: 90%;  }
						.test.step-five { height: 100%;  }
						.test-two { width: 100%; }
						.swoop-group { position: relative; z-index: 10;}
						.test-three {border: 1px solid var(--gray-20); text-align: center; border-radius: 10px; padding: .25rem .75rem; width: 90%; margin: 0 auto; background-color: rgba(255,255,255,1); }
						.stat--large sup { font-size: 16px; margin-left: 2px; display: inline-block; }
						.stat::before,		
						.stat::after {
							content: attr(data-append);
							font-size: 45%;
							display: inline-block;
							vertical-align: text-top;
							margin-top: 5px;
							margin-left: 2px;
						}
						.stat::before {
							content: attr(data-prepend);
							margin-left: 0;
							margin-right: 2px;

						}
					</style>
					<g class="swoop-base">
						<path class="swoop swoop--top" d="M0.07,196.06c57.49,35.79,113.44,74.88,175.29,102.64c41.68,18.7,86.86,27.99,132.76,28.16c45.31,0.17,89.93-12.81,132.69-26.54c33.93-10.89,67.45-23.06,100.84-35.5c203.27-75.73,409.06-143.89,501.2-173.85"/>
						<path class="swoop swoop--bottom" d="M0.07,201.62c39.43,24.4,78.05,50.11,117.82,73.98c56.05,33.65,116.91,58.19,182.88,61.1c66.93,2.96,130.67-21.12,193.51-40.71c14.39-4.49,28.79-8.97,43.22-13.33c4.32-1.3,8.63-2.6,12.95-3.9c213.5-64.02,408.17-126.3,492.39-153.52"/>
					</g>


					<?php 
					$slideCount = 0;
					foreach ($results as $result): ?>
						<g class="swoop-slide" data-index="<?php echo $slideCount; $slideCount++; ?>">

							<?php if ($result['stats'][0]): ?>

								<g class="swoop-group">
									<g class="is-second">
										<foreignObject x="40%" y="35%" width="155" height="65%" class="test step-two">
											<div class="test-two">
												<p data-append="<?php echo $result['stats'][0]['append']; ?>" data-prepend="<?php echo $result['stats'][0]['prepend']; ?>" class="stat stat--large test-three"><?php echo $result['stats'][0]['stat']; ?></p>
											</div>
											<p class="stat stat--small"><?php echo $result['stats'][0]['label']; ?></p>
										</foreignObject>
									</g>
									<g class="circle-icon" transform="matrix(1 0 0 1 495 296)">
										<circle class="svg20" cx="0" cy="0" r="8"/>
										<circle class="svg22" cx="0" cy="0" r="4"/>
									</g>
								</g>

							<?php endif; ?>
							<?php if ($result['stats'][1]): ?>

								<g class="swoop-group">
									<g class="is-second">
										<foreignObject x="55%" y="25%" width="155" height="75%" class="test step-three">
											<div class="test-two">
												<p data-append="<?php echo $result['stats'][1]['append']; ?>" data-prepend="<?php echo $result['stats'][1]['prepend']; ?>" class="stat stat--large test-three"><?php echo $result['stats'][1]['stat']; ?></p>
											</div>
											<p class="stat stat--small"><?php echo $result['stats'][1]['label']; ?></p>
										</foreignObject>
									</g>
									<g class="circle-icon" transform="matrix(1 0 0 1 650 225)">
										<circle class="svg20" cx="0" cy="0" r="8"/>
										<circle class="is-pink" cx="0" cy="0" r="4"/>
									</g>
								</g>
							<?php endif; ?>
							<?php if ($result['stats'][2]): ?>


								<g class="swoop-group">
									<g class="is-second">
										<foreignObject x="70%" y="10%" width="155" height="90%" class="test step-four">
											<div class="test-two">
												<p data-append="<?php echo $result['stats'][2]['append']; ?>" data-prepend="<?php echo $result['stats'][2]['prepend']; ?>" class="<?php if (strlen($result['stats'][2]['stat']) > 5) echo 'is-long '; ?>stat stat--large test-three"><?php echo $result['stats'][2]['stat']; ?></p>
											</div>
											<p class="stat stat--small"><?php echo $result['stats'][2]['label']; ?></p>
										</foreignObject>	 
									</g>
									<g class="circle-icon" transform="matrix(1 0 0 1 806 200)">
										<circle class="svg20" cx="0" cy="0" r="8"/>
										<circle class="is-yellow" cx="0" cy="0" r="4"/>
									</g>
								</g>
							<?php endif; ?>
							<?php if ($result['stats'][3]): ?>

								<g class="swoop-group">
									<g class="is-second">

										<foreignObject x="85%" y="0" width="155" height="100%" class="test step-five">
											<div class="test-two">
												<p data-append="<?php echo $result['stats'][3]['append']; ?>" data-prepend="<?php echo $result['stats'][3]['prepend']; ?>" class="stat stat--large test-three"><?php echo $result['stats'][3]['stat']; ?></p>
											</div>
											<p  class="stat stat--small"><?php echo $result['stats'][3]['label']; ?></p>
										</foreignObject>
										
									</g>
									<g class="circle-icon" transform="matrix(1 0 0 1 965 116)">
										<circle class="svg20" cx="0" cy="0" r="8"/>
										<circle class="is-purple" cx="0" cy="0" r="4"/>
									</g>
								</g>
							<?php endif; ?>


						</g>
					<?php endforeach; ?>

				</svg>

			</div>
			
		</div>
	</section>

	<?php endif; ?>