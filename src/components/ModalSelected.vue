<template>
	<div>
		<div id="myModal" class="modal">

			<div class="modal-content w-3/5 text-justify">
				<span class="close text-4xl hover:text-gray-800">&times;</span>
				<div class="h-auto bg-white rounded-lg px-20 flex gap-5 justify-center flex-col">
					<div class="my-10">
						<h1 class="text-xl font-semibold mb-5 float-left">Back this project</h1>
						<p></p>
					</div>

					<div class="border border-gray-400 rounded p-4">
						<label class="flex items-baseline">
							<input type="radio" name="plans" class="mx-5 "  />
							<div>
								<div class="flex justify-between mb-5">
									<h1 class="font-bold text-xl">Pledge with no reward</h1>
									<!-- <h1 class="font-bold text-teal-dark">Pledge $125 or more.</h1> -->
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iure est tempora nihil perferendis accusantium nesciunt deleniti, libero voluptates eos repudiandae et repellendus sunt id odio veritatis tempore eligendi fugit! Lorem ipsum dolor sit amet.
								</p>
							</div>
						</label>
					</div>
					
					<!--  -->
					<div class="border border-gray-400 rounded p-4">
						<label class="flex items-baseline">
							<input type="radio" name="plans" class="mx-5" />
							<div>
								<div class="flex justify-between mb-5">
									<div class="">
										<h1 class="font-bold text-xl inline mr-3">Bamboo Stand</h1>
										<h1 class="font-bold text-teal-dark inline">Pledge $125 or more.</h1>
									</div>
									<p><span class="font-bold text-3xl mr-2">101</span><span class="text-gray-500">left</span></p>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eaque sunt dicta quidem dolores tenetur facere, saepe laborum, beatae ab, voluptate consequuntur soluta minima recusandae sequi nesciunt. Eveniet aliquid, debitis.</p>

								<hr class="my-5">

								<div class="flex justify-between mb-5">
									<input type="text" placeholder="Enter your pledge" class="bg-white border-0 shadow-none p-2 ">

									<div>
										<button class="mr-2 focus:outline-none focus:shadow-outline hover:shadow-outline px-5 py-3 font-semibold text-teal-dark border border-gray-400 rounded-xl">$ 25 <span class="border-r-2 border-gray-400 ml-2"></span></button>
										<button style="background-color: teal;" class="focus:outline-none focus:shadow-outline hover:shadow-outline px-7 py-3 font-semibold text-white rounded-xl">Continue</button>
									</div>
								</div>
							</div>
						</label>
					</div>
					
					<!--  -->
					<div class="border border-gray-400 rounded p-4">
						<label class="flex items-baseline">
							<input type="radio" name="plan" class="mx-5" />
							<div>
								<div class="flex justify-between mb-5">
									<div class="">
										<h1 class="font-bold text-xl inline mr-3">Black Edition Stand</h1>
										<h1 class="font-bold text-teal-dark inline">Pledge $75 or more.</h1>
									</div>
									<p><span class="font-bold text-3xl mr-2">64</span><span class="text-gray-500">left</span></p>
								</div>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eaque sunt dicta quidem dolores tenetur facere, saepe laborum, beatae ab, voluptate consequuntur soluta minima recusandae sequi nesciunt. Eveniet aliquid, debitis.</p>
							</div>
						</label>
					</div>


					<div class="border border-gray-400 rounded p-4 mb-48 opacity-50">
						<label class="flex items-baseline">
							<input type="radio" name="plan" class="mx-5" />
							<div>
								<div class="flex justify-between mb-5">
									<div>
										<h1 class="font-bold text-xl inline mr-3">Mahogany Special Stand</h1>
										<h1 class="font-bold text-teal-dark inline">Pledge $200 or more.</h1>
									</div>

									<p><span class="font-bold text-3xl">0</span><span class="text-gray-500">left</span></p>
								</div>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iure est tempora nihil perferendis accusantium nesciunt deleniti.
							</div>
						</label>
					</div>
				</div>
				<!-- Modal Content Ends here -->
			</div>  

		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			this.modal()
		},

		methods: {
			modal() {
				const modal = document.getElementById('myModal');
				const btn = document.getElementById("myBtn");
				const span = document.getElementsByClassName("close")[0];

				btn.onclick = function() {
					modal.style.display = "block";
				}

				span.onclick = function() {
					modal.style.display = "none";
				}

				window.onclick = function(event) {
					if (event.target == modal) {
						modal.style.display = "none";
					}
				}
			}
		}
	}
	
</script>

<style>

	/* Add Animation */
	@keyframes animateTop {
	  from {top: -300px; opacity: 0}
	  to {top: 0; opacity: 1}
	}

	/* The Modal (background) */
	.modal {
		display: none; /* Hidden by default */
		position: fixed; /* Stay in place */
		z-index: 1; /* Sit on top */
		left: 0;
		top: 0;
		width: 100%; /* Full width */
		height: 100%; /* Full height */
		overflow: auto; /* Enable scroll if needed */
		background-color: rgb(0,0,0); /* Fallback color */
		background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
		animation: animateTop .5s ease;
	}

	/* Modal Content/Box */
	.modal-content {
		background-color: #fefefe;
		margin: 15% auto; /* 15% from the top and centered */
		padding: 20px;
		border: 1px solid #888;
		width: 80%; /* Could be more or less, depending on screen size */
	}

	/* The Close Button */
	.close {
		color: #aaa;
		float: right;
		font-size: 28px;
		font-weight: bold;
	}

	.close:hover,
	.close:focus {
		color: black;
		text-decoration: none;
		cursor: pointer;
	}
</style>