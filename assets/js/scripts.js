		const timeInput = document.getElementById('time');
        const optionsContainer = document.getElementById('optionsContainer');
		const continueButton = document.getElementById('continue');
		const p1 = document.getElementById('p1');
		const p2 = document.getElementById('p2');
		const p3 = document.getElementById('p3');
        let highlightedIndex = -1;

		
        const optionList = [
            "Choose Your Time", "8 AM CST", "9 AM CST", "10 AM CST", "11 AM CST",
            "12 AM CST", "1 PM CST", "2 PM CST", "3 PM CST", "4 PM CST","5 PM CST"
        ];
        
        timeInput.addEventListener('focus', () => {
            showOptions(optionList);
        });

        function showOptions(options) {
            
            optionsContainer.innerHTML = '';
            options.forEach(option => {
                const div = document.createElement('div');
                div.className = 'option';
                div.textContent = option;
                div.addEventListener('click', () => {
                    timeInput.value = option;
                    optionsContainer.style.display = 'none';
                });
                optionsContainer.appendChild(div);
            });
            
            optionsContainer.style.display = 'block';
            highlightedIndex = -1;
        }
		const pTime = document.getElementById('p-time');
        function showP2(){
			pTime.innerHTML = timeInput.value;
			p1.style.display = 'none';
			p2.style.display = 'flex';
		};
		const pFn = document.getElementById('p-fn');
		const pLn = document.getElementById('p-ln');
		const pEm = document.getElementById('p-em');
		const pPh = document.getElementById('p-ph');
		
		const p_cb = document.getElementById('p-ch');
		
		const fnInput = document.getElementById('fn');
		const lnInput = document.getElementById('ln');
		const emInput = document.getElementById('em');
		const phInput = document.getElementById('ph');
		const agree_cb = document.getElementById('agree');
		function showP3(){
			pFn.innerHTML = fnInput.value;
			pLn.innerHTML = lnInput.value;
			pEm.innerHTML = emInput.value;
			pPh.innerHTML = phInput.value;
			p_cb.innerHTML = agree_cb.checked;
			p2.style.display = 'none';
			p3.style.display = 'flex';
		};