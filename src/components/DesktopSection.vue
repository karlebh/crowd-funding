<template>
	<section class="bg-gray-100">
		
		<thanks v-show="isThanksOpen" 
		isThanksOpen="isThanksOpen" 
		@closeModal="isThanksOpen = ! isThanksOpen" />

		<div class="hidden lg:flex flex-col w-3/5 mx-auto h-auto">
			<div class="relative -top-20 h-64 bg-white rounded-lg px-20 text-center -mb-10">
				<div class="flex justify-center items-center align-middle">
					<svg class="absolute -top-7" width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#000" cx="28" cy="28" r="28"/><g fill-rule="nonzero"><path d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z" fill="#444"/><path d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z" fill="#FFF"/></g></g></svg>
				</div>
				
				<h1 class="mt-14 font-bold text-2xl mb-4">Mastercraft Bamboo Monitor Riser</h1>
				<h1 class="text-gray-500">A beautiful & handcrafted monitor stand to reduce neck and eye strain</h1>

				<div class="flex justify-between mt-7">
					<button @click="isOpen = !isOpen" style="background-color: teal;" id="myBtn" class="focus:outline-none outline-none focus:shadow-outline hover:shadow-outline px-7 text-white rounded-full font-semibold">Back this project</button>

					<!-- Modal -->
					
					<modal-selected-desktop v-if="isOpen" isOpen="isOpen" @closeModal="isOpen = ! isOpen" />

					<!-- Modal -->

					<div class="flex flex-row-reverse">
						<button class="focus:outline-none focus:shadow-outline hover:shadow-outline text-md text-gray-800 font-semibold bg-gray-200 px-10 rounded-full">Bookmark</button>
						<svg class="-mr-6" width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
					</div>
				</div>
			</div>

			<div class="h-64 bg-white rounded-lg px-20 flex gap-5 justify-around flex-col mb-10">
				<div class=" flex justify-around items-center">
					<p class="border-l-20 border-gray-700"><span class="text-4xl font-semibold">$89,914</span><br><span class="text-gray-500"> of $100,000 backed</span></p><span class="vl"></span>
					<p class="border-l-20 border-gray-700"><span class="text-4xl font-semibold">5,007</span><br> <span class="text-gray-500">total backers</span></p><span class="vl"></span>
					<p class="border-l-20 border-gray-700"><span class="text-4xl font-semibold">56</span><br> <span class="text-gray-500">days left</span></p>
				</div>

				<div class="w-full h-5 rounded-lg bg-gray-300"><div style="width: 82%;" class="rounded-lg bg-teal-dark h-5"></div></div>
			</div>

			<div class="h-auto bg-white rounded-lg px-20 flex gap-5 justify-center flex-col">
				<div class="my-10">
					<h1 class="text-xl font-semibold mb-5">About this project</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minima dolor repellendus debitis repudiandae esse, suscipit maiores iure, perferendis et sequi ad, voluptatum ullam amet inventore est. Quas est saepe cumque mollitia porro aliquid minus commodi, voluptatibus itaque officia, vero perferendis molestias ipsam numquam voluptate tempora doloribus fuga pariatur cupiditate doloremque voluptatem! At ex dolor fugiat, magnam odit dicta! Tenetur quis distinctio similique impedit ea! Adipisci maiores, est accusamus minus at dolorum ipsam unde vel sequi. Illo distinctio dolorem placeat error voluptas explicabo quis hic magni sed! Incidunt asperiores ab quibusdam aut architecto ducimus saepe iste dicta. Est, laudantium veritatis.</p>
				</div>

				<div class="border border-gray-400 rounded p-4">
					<div class="flex justify-between mb-5">
						<h1 class="font-bold text-xl">Bamboo Stand</h1>
						<h1 class="font-bold text-teal-dark">Pledge $125 or more.</h1>
					</div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iure est tempora nihil perferendis accusantium nesciunt deleniti, libero voluptates eos repudiandae et repellendus sunt id odio veritatis tempore eligendi fugit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum excepturi modi odit nostrum id vitae, velit dolorem non sunt quod eum accusamus odio consectetur rem eligendi tempore natus, quis nesciunt, quisquam asperiores qui doloremque et repudiandae. Iusto tempore deserunt voluptates animi illum laudantium, voluptatum quidem culpa, aspernatur impedit eius sequi.

					<div class="flex justify-between items-baseline mt-10 mb-5">
						<p>
							<span class="font-bold text-3xl">101</span><span class="text-gray-500">left</span>
						</p>
						<button style="background-color: teal;" class="focus:outline-none focus:shadow-outline hover:shadow-outline px-7 py-3 font-semibold text-white rounded-full" 
						@click="isThanksOpen = !isThanksOpen">Select Reward</button>
					</div>
				</div>

				<div class="border border-gray-400 rounded p-4">
					<div class="flex justify-between mb-5">
						<h1 class="font-bold text-xl">Black Edition Stand</h1>
						<h1 class="font-bold text-teal-dark">Pledge $75 or more.</h1>
					</div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iure est tempora nihil perferendis accusantium nesciunt deleniti, libero voluptates eos repudiandae et repellendus sunt id odio veritatis tempore eligendi fugit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum excepturi modi odit nostrum id vitae, velit dolorem non sunt quod eum accusamus odio consectetur rem eligendi tempore natus, quis nesciunt, quisquam asperiores qui doloremque et repudiandae. Iusto tempore deserunt voluptates animi illum laudantium, voluptatum quidem culpa, aspernatur impedit eius sequi.

					<div class="flex justify-between mb-5 items-baseline mt-10">
						<p>
							<span class="font-bold text-3xl mr-1">64</span><span class="text-gray-500">left</span>
						</p>
						<button style="background-color: teal;" class="focus:outline-none focus:shadow-outline hover:shadow-outline px-7 py-3 font-semibold text-white rounded-full" @click="isThanksOpen = !isThanksOpen">Select Reward</button>
					</div>
				</div>

				<div class="border border-gray-400 rounded p-4 mb-48 opacity-50">
					<div class="flex justify-between mb-5">
						<h1 class="font-bold text-xl">Mahogany Special Stand</h1>
						<h1 class="font-bold text-teal-dark">Pledge $200 or more.</h1>
					</div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iure est tempora nihil perferendis accusantium nesciunt deleniti, libero voluptates eos repudiandae et repellendus sunt id odio veritatis tempore eligendi fugit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum excepturi modi odit nostrum id vitae, velit dolorem non sunt quod eum accusamus odio consectetur rem eligendi tempore natus, quis nesciunt, quisquam asperiores qui doloremque et repudiandae. Iusto tempore deserunt voluptates animi illum laudantium, voluptatum quidem culpa, aspernatur impedit eius sequi.

					<div class="flex justify-between mb-5 items-baseline mt-10">
						<p>
							<span class="font-bold text-3xl">0</span><span class="text-gray-500">left</span>
						</p>
						<button class="focus:outline-none focus:shadow-outline hover:shadow-outline bg-gray-400 px-7 py-3 font-semibold text-white rounded-full">Select Reward</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import ModalSelectedDesktop from '@/components/ModalSelectedDesktop'
	import Thanks from '@/components/Thanks'

	export default {
		data() {
			return {
				isOpen: false,
				isThanksOpen: false,
			}
		},

		components: {
			ModalSelectedDesktop,
			Thanks,
		}
	}
</script>

<style>
	.bg-teal-dark {
		background-color: hsl(176, 72%, 28%);
	}

	.text-teal-dark {
		color: hsl(176, 72%, 28%);
	}

	.vl {
		border-left: 1px solid gray;
		height: 80px;
	}
</style>