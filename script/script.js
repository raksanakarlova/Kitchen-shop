document.addEventListener('DOMContentLoaded', () => {
	// Tabs
	
	const tabs = document.querySelectorAll('.title');
	const decorLine = document.querySelectorAll('.decorative-line');
	const tabsContent = document.querySelectorAll('.product-content');
	const parentTabs = document.querySelector('.product-title');

	const cartHoverItem = document.querySelector('.cart');
	const modal = document.querySelector('.modal');
	const btnClosed = document.querySelector('.btn-continue-modal');

	function hideTabContent () {
		tabs.forEach((item) => {
			item.classList.remove('title-active');
		});

		tabsContent.forEach((item) => {
			item.classList.add('hide-content');
			item.classList.remove('show-content');
		});

		decorLine.forEach((item) => {
			item.classList.add('hide-line');
			item.classList.remove('show-line');
		});
	};

	function showTabContent (i = 0) {
		tabs[i].classList.add('title-active');

		decorLine[i].classList.add('show-line');
		decorLine[i].classList.remove('hide-line');

		tabsContent[i].classList.add('show-content');
		tabsContent[i].classList.remove('hide-content');
	}

	hideTabContent();
	showTabContent();

	parentTabs.addEventListener('click', (event) => {
		event.preventDefault();
		const target = event.target;

		if(target && target.classList.contains('title')) {
			tabs.forEach((item, i) => {
				if(target == item) {
					hideTabContent();
					showTabContent(i);
				};
			});
		};
	});

	// Modal

	function showContent () {
		cartHoverItem.addEventListener('mouseenter', (event) => {
			event.preventDefault();

			modal.classList.remove('mod-hidden');
		});
	};

	function hideContent () {
		modal.addEventListener('mouseleave', (event) => {
			event.preventDefault();

			modal.classList.add('mod-hidden');
		});
	}

	btnClosed.addEventListener('click', (event) => {
		event.preventDefault();

		modal.classList.add('mod-hidden');
	});

	showContent();
	hideContent();
});

