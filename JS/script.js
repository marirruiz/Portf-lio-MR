/* typing animation */
var typed = new Typed(".typing", {
    strings: ["", "Desenvolvedora Front-end", "UX/UI designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

/* aside */
const nav = document.querySelector(".nav"),
        navList = nav.querySelectorAll("li"),
        totalNavList = navList.length,
        allSection = document.querySelectorAll(".section"),
        totalSection = allSection.length;
        for (let index = 0; index < totalNavList; index++) 
        {
            const a = navList[index].querySelector("a");
            a.addEventListener("click", function() 
            {
                removeBackSection();
                for(let j=0; j<totalNavList; j++)
                {
                    if(navList[j].querySelector("a").classList.contains("active"))
                    {
                        addBackSection(j);
                        // allSection[j].classList.add("back-section");
                    }
                    navList[j].querySelector("a").classList.remove("active");
                }
                this.classList.add("active")
                showSection(this);
                if(window.innerWidth < 1200)
                {
                    asideSectionTogglerBtn();
                }
            })
        }
        function removeBackSection() {
            for (let index=0; index < totalSection; index++)
            {
                allSection[index].classList.remove("back-section");
            }
        }
        function addBackSection() 
        {
            
        }
        function showSection(element)
        {
            for (let index = 0; index < totalSection; index++)
            {
                allSection[index].classList.remove("active");
            }
            const target = element.getAttribute("href").split("#")[1];
            document.querySelector("#" + target).classList.add("active")
        }
        function updateNav(element) {
            for (let index = 0; index < totalNavList; index++) 
            {
                navList[index].querySelector("a").classList.remove("active");
                const target = element.getAttribute("href").split("#")[1];
                if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
                {
                    navList[index].querySelector("a").classList.add("active");
                }
            }
        }

        document.querySelector(".contate-me").addEventListener("click", function() {
            const sectionIndex = this.getAttribute("data-section-index");
            //console.log(sectionIndex);
            showSection(this);
            updateNav(this);
            removeBackSection();
            addBackSection(sectionIndex);
        })
        const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", () => {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn() 
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let index = 0; index < totalSection; index++)
                {
                    allSection[index].classList.toggle("open");
                }
            }