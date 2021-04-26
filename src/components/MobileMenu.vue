<template>
	<div>
		<!-- The Modal -->
		<div id="myBtn" class="modal">

			<!-- Modal content -->
			<nav class="modal-content w-4/5 rounded-lg flex flex-col text-3xl font-semibold ">
				<a href="#" class="mb-10">About</a>
				<hr>
				<hr>
				<hr>
				<br>
				<a href="#" class="mb-10">Discover</a>
				<hr>
				<hr>
				<hr>
				<br>
				<a href="#" class="mb-10">Get Started</a>
			</nav>  

		</div>
	</div>
</template>

<script>
	export default {
		props: {
			isOpen: Boolean,
		},

		mounted() {
			this.modal()
		},

		methods: {
			modal() {
				const modal = document.getElementById('myBtn');
				const btn = document.getElementById("openNav");
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

<style scoped>

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