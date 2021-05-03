<template>
	<div class="modal z-40 fixed w-full h-full gray-bg inset-0 flex justify-center items-center">
		<div class="flex flex-col items-center justify-center bg-white w-72 sm:w-96 h-96 px-4 rounded-lg mx-auto">
			<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
				<g fill="none" fill-rule="evenodd"><circle fill="#3CB3AB" cx="32" cy="32" r="32"/>
					<path stroke="#FFF" stroke-width="5" d="M20 31.86L28.093 40 44 24"/>
				</g>
			</svg>

			<br>

			<h1 class="font-bold text-xl">Thanks for your support!</h1>

			<br>

			<p class="text-center text-gray-500">
				Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is complete.
			</p>
			
			<br>

			<button class="closeModal outline-none focus:shadow-outline rounded-full bg-teal-dark py-4 px-8 font-semibold text-white outline-none focus:outline-none">Got it!</button>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			document.querySelector('.closeModal')
			.addEventListener('click', () => {
				document.querySelector('.modal').style.display = "none"
			})

			const modal = document.querySelector('.modal')
			window.addEventListener('click', function(event) {
			  if (event.target == modal) {
			    modal.style.display = "none";
			  }
			})
		}
	}
</script>

