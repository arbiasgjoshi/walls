<?php if ( is_page(5) ) { ?>
	<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/css/new-style.css" />
<?php } ?>
<?php
/**
 * Header-v1 template.
 *
 * @author     ThemeFusion
 * @copyright  (c) Copyright by ThemeFusion
 * @link       https://theme-fusion.com
 * @package    Avada
 * @subpackage Core
 */

// Do not allow directly accessing this file.
if ( ! defined( 'ABSPATH' ) ) {
	exit( 'Direct script access denied.' );
}
?>
<header>
	<nav>
		<button id="toggleMenu" type="button"></button>
		<a href="#" class="logo">
        	<img src='<?php echo get_stylesheet_directory_uri(); ?>/assets/images/main-logo.png' alt="">
        </a>
        <a href="#" class="download-icon">
        	<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA2RDE5NEI5RTdFRTExRUE4MjM3ODA4RjNDMkE1RUMzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA2RDE5NEJBRTdFRTExRUE4MjM3ODA4RjNDMkE1RUMzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDZEMTk0QjdFN0VFMTFFQTgyMzc4MDhGM0MyQTVFQzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDZEMTk0QjhFN0VFMTFFQTgyMzc4MDhGM0MyQTVFQzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5C/tnKAAAECUlEQVR42uybe0gUQRzHx1MrM+mdkhBpEYQ9KLKyzB7/SSVIghUUBgWVQVRQBJFGFBQEUUFGVERQQdD79VchRWZZUlR/SCoEPUwt7UE+sO3707lat9u7nb2duds7v/ABvdvdme/tzsxvZn4bo2kak6RUkAMywHiQBkaBwSCOH9MJWkEDqAO14CV4CD7JqFSMw4bJ3DKQC6aDfjav0wYqwR1wBdQ4VkMy7AAF4K4mR7/BNbDEiboGe4F8UKmpUznIDYXhDHBbC50ugzRVhjeCDi30agWrROsv0mnFgnNgBQsvnQDrne6laTi5BWaw8NR9sBT8dMLwaPAApLPwFo3f80FLMIaHgyowlrlDr0Em+GV2gCdAm73nIrPewOeOvwP8Gb4IpjD3iR7r46KGi0EBc6+o1y602obTeCDvdrXxCcyXQHf4LIsMDQCnAt1hGsuuS6zEOt6TemdR7WAeOCixzLngkZnht2CcxMJpTP9o+Iymkc8klvkUzPT1SOdLNktK8fHZSMllZvKFiP8M72CRq+1GwzRgz4pgw4t5c/preCWLfC3XG86LAsN5XsMUaEyKAsNZYKiHj4PRIBr7s2h9eKroQiefRTWDBLAQDFJU6WY+N2/nYWO24PnTyPAEG4YLeeHeifdkgXDPqESBsqt5vECaCN4I1j2dDI+x8Usn+InHm8BuMFAXQsaDLpNJCZko5d936QL/GLDH8PTEmtTBqlLJcLKNE/vr43HDd1RBuu4hi9eq58aMKjGUY/xx7exqjIiT0P7osT3CV0q22bzGGVAkoQ9I8vA2KUNbwV4b5x2TZLb7yfRI7lV3gZ0Cxx/gqy3S5PHRBp3WfrDZwnGl+iBfktrJ8A8F4+dhsDbAbKZEQT2+k+EGRUHDSeZ7m2YTf5RVqIkMv1MY3p03TFTWgKMKy39Pw1INU6trPJwdAk4rLruODL8IQSBfxf7leahUdRwPxlUrPgRldoAKDw/tXgUTvSisdGIQ51aAr97H6rrgIkCn7m9a2U+RGLHpY/YWkzpYUfd6u3ddOkPwLlPeVS3/O5kH8ioM0yyqkf9Py69PRGZK4IM+/+GxQH7FPofSnYKhTKC+N30lteQLJpVsAQkhMJoESgTrmmOW1CK61dLI0RTE5BqP/akJDRM4r9dWi+rNtFCo12aacXp4I0Tjsixd1Zv1dYdJUbchXs9nMG5XkdGs2R326hJzb55HGdjgczD3Y5iWRJ8z92XylIMFptFLX2JabzXzbt0NnRjtgGT7M2vFMOuOP3t23qrC2Cwll85hAfIsrRomfQazwYUwNEvpw4uYhUxaEcMk2vehTIFiG1MzGfoGVjOBXOmeALXvFYC+lzwi6jWeqHtRy2nDxiWVsHsV748AAwCHtiWj7I/vbAAAAABJRU5ErkJggg==' alt="">
        </a>
	</nav>
	
	<?php
		wp_nav_menu( array(
			'menu'   => 'Horizontal Menu',
			'menu_class' => 'menu-list',
			'link_before' => '<span class="no"></span>',
			'menu_id' => '',
			'container_id' => 'mainMenu',
			'container_class' => 'menu-wrapper'
		));
	?>
</header>


<script type="text/javascript">
	document.getElementById('toggleMenu').onclick = function() {
		this.classList.toggle('is-active');
		const menu = document.getElementById('mainMenu');
		const classes = menu.classList;
		classes.toggle('show');
	}
</script>