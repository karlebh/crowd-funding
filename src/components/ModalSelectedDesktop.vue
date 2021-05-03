<template>
	<div id="modal" class="lg:block hidden fixed overflow-y-auto gray-bg z-30 right-0 left-0 top-0 bottom-0 h-full w-full px-5 pt-32">
		<div class="bg-white py-10 px-8 rounded-xl w-2/3 mx-auto">
			<!-- Back this project -->
			<div class="flex justify-between items-center pb-3">
				<h1 class="text-2xl font-bold">Back This Project</h1>
				<span class="text-6xl text-gray-500 cursor-pointer mr-4" @click="closeModal" >&times;</span>
			</div>

			<p class="mb-7 text-gray-500">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

			<!-- Pledge with no reward -->
			<div @click="pledge1 = true" class="focus:boreder-red-500 border border-gray-400 rounded-md p-4 my-8 bg-white text-left">
				<label>
					<div class="mb-5">
						<input type="radio" name="plan" class="mx-5" />
						<h1 class="font-bold text-xl inline mr-3">Pledge with no reward</h1> <br>
					</div>

					<div class="px-2">
						<p class="px-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eaque sunt dicta quidem dolores tenetur facere, saepe laborum, beatae ab, voluptate consequuntur soluta minima recusandae sequi nesciunt. Eveniet aliquid, debitis.</p>
					</div>

					<!--  -->
					<div v-show="pledge1" class="mt-3">
					<hr class="my-7">
						<div class="flex justify-between px-5">
							<p class="text-center my-5 text-gray-500 text-gray-500">Enter your Pledge</p>
							<div>
								
								<button class="outline-none focus:outline-none rounded-full px-4 py-2 border border-gray-400 mr-6">
									<span class="px-2 text-gray-400">$</span> 
									<input type="number" min="1" placeholder="1" class="w-20 text-center p-2 outline-none font-bold"  />
								</button>

								<button style="background-color: teal;" class="outline-none focus:outline-none rounded-full px-10 py-4 text-white text-xl font-semibold">Continue</button>
							</div>
						</div>
					</div>
				</label>
			</div>

			<!-- Bamboo Stand -->
			<div class="border border-gray-400 rounded-md p-4 my-8 bg-white text-left">
				<label  @click="pledge2 =! false">
					<div class="mb-5 flex justify-between">
						<div class="flex items-center">
							<input type="radio" name="plan" class="mx-5" />
							<h1 class="font-bold text-lg inline mr-3">BambooStand</h1> <br>
							<h1 class="font-bold text-lg text-teal-dark inline ml-1">Pledge $125 or more.</h1>
						</div>
						<p><span class="font-bold text-3xl px-4">101</span><span class="text-gray-500">left</span></p>
					</div>

					<div class="px-2 text-gray-500">
						<p class="px-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eaque sunt dicta quidem dolores tenetur facere, saepe laborum, beatae ab, voluptate consequuntur soluta minima recusandae sequi nesciunt. Eveniet aliquid, debitis.</p>
					</div>

					<!--  -->
					<div v-show="pledge2" class="mt-3">
					<hr class="my-7">
						<div class="flex justify-between px-5">
							<p class="text-center my-5 text-gray-500">Enter your Pledge</p>
							<div>
								<button class="outline-none focus:outline-none rounded-full px-4 py-2 border border-gray-400 mr-6">
									<span class="px-2 text-gray-400">$</span> 
									<input type="number" min="125" placeholder="125" class="w-20 text-center p-2 outline-none font-bold"  />
								</button>
								<button style="background-color: teal;" class="outline-none focus:outline-none rounded-full px-8 py-4 text-white text-xl font-semibold">Continue</button>
							</div>
						</div>
					</div>
				</label>
			</div>

			<!-- Black Edition -->
			<div @click="pledge3 = true" class="border border-gray-400 rounded-md p-4 my-8 bg-white text-left">
				<label>
					<div class="flex justify-between px-5">
						<div class="flex items-center">
							<input type="radio" name="plan" class="mx-5" />
							<h1 class="font-bold text-lg inline mr-3">Black Edition Stand</h1> <br>
							<h1 class="font-bold text-lg text-teal-dark inline ml-1">Pledge $75 or more.</h1>
						</div>
						<p><span class="font-bold text-3xl px-4">64</span><span class="text-gray-500">left</span></p>
					</div>

					<div class="px-2 text-gray-500">
						<p class="px-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eaque sunt dicta quidem dolores tenetur facere, saepe laborum, beatae ab, voluptate consequuntur soluta minima recusandae sequi nesciunt. Eveniet aliquid, debitis.</p>
						</div>

					<!--  -->
					<div v-show="pledge3" class="mt-3">
					<hr class="my-7">
						<div class="flex justify-between px-5">
							<p class="text-center my-5 text-gray-500">Enter your Pledge</p>
							<div>
								<button class="outline-none focus:outline-none rounded-full px-4 py-2 border border-gray-400 mr-6">
									<span class="px-2 text-gray-400">$</span> 
									<input type="number" min="75" placeholder="75" class="w-20 text-center p-2 outline-none font-bold"  /></button>
								<button style="background-color: teal;" class="outline-none focus:outline-none rounded-full px-10 py-4 text-white text-xl font-semibold">Continue</button>
							</div>
						</div>
					</div>
				</label>
			</div>

			<!-- Mohogany -->
			<div>
				<div class="border border-gray-400 rounded-md p-4 mb-48 bg-white text-left opacity-25">
					<!-- <label> -->
						<div class="mb-5 flex justify-between px-5 ">
							<div class="flex items-center">
							<input type="radio" name="plan" class="mx-5" />
							<h1 class="font-bold text-lg inline mr-3">Mahogany Special Stand</h1><br>
							<h1 class="font-bold text-lg text-teal-dark inline ml-1">Pledge $200 or more.</h1>
							</div>
							<p><span class="font-bold text-3xl px-4">0</span><span class="text-gray-500">left</span></p>
						</div>

						<div class="px-2">
							<p class="px-4">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iure est tempora nihil perferendis accusantium nesciunt deleniti.
							</p>
						</div>
					<!-- </label> -->
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['isOpen'],

		data() {
			return {
				pledge1: false,
				pledge2: false,
				pledge3: false,
			}
		},

		mounted() {
			const modal = document.querySelector('#modal')
			window.addEventListener('click', function(event) {
			  if (event.target == modal) {
			    modal.style.display = "none";
			  }
			})
		},

		methods: {
			closeModal() {
				this.$emit('closeModal')
			},
		}
	}
	
</script>

<style>

</style>