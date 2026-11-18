
document.addEventListener("DOMContentLoaded", function () {

    // =================================
    // PROJECT CATEGORY FILTERING
    // =================================

    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectItems = document.querySelectorAll(".project-item");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedCategory = this.getAttribute("data-filter");

            // Update active button
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            // Filter project cards
            projectItems.forEach(function (project) {

                const projectCategory =
                    project.getAttribute("data-category");

                const shouldDisplay =
                    selectedCategory === "all" ||
                    selectedCategory === projectCategory;

                project.hidden = !shouldDisplay;

            });

        });

    });


    // =================================
    // PROJECT DETAILS MODAL
    // =================================

    const projectModal = document.getElementById("projectModal");

    if (projectModal) {

        projectModal.addEventListener("show.bs.modal", function (event) {

            const button = event.relatedTarget;

            document.getElementById("modalTitle").textContent =
                button.dataset.title || "Project Details";

            document.getElementById("modalDescription").textContent =
                button.dataset.description || "No description available.";

            document.getElementById("modalTech").textContent =
                button.dataset.tech || "Not specified.";

        });

    }

});
