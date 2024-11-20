const toggleButton = document.getElementById('toggleButton');
            const toggleImage = document.getElementById('toggleImage');

            let isImage1 = true;

            toggleButton.addEventListener('click', () => {
                if (isImage1) {
                    toggleImage.src="image/pngwing.com.png";
                } else {
                    toggleImage.src="image/pngwing.com (1).png";
                }
                isImage1 = !isImage1;
            });