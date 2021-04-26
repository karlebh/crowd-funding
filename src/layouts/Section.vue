<template>
	<section>
		<desktop-section />
		<mobile-section />
	</section>
</template>

<script>
	import DesktopSection from '@/components/DesktopSection'
	import MobileSection from '@/components/MobileSection'

	export default {
		components: {
			DesktopSection,
			MobileSection,
		}
	}
</script>
