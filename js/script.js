 /*
         * ================================
         * PRODUCT POPUP
         * ================================
         */

        $(document).on("pagecreate", "#products", function () {

            $(".product-item").on("click", function (e) {

                e.preventDefault();

                var product = $(this);

                // Get product information
                var name = product.find(".product-name").text();
                var description = product.find(".product-description").text();
                var image = product.find("img").attr("src");

                // Create unique popup ID
                var popupId = "product-popup";

                // Remove previous popup
                $("#" + popupId).remove();

                // Create popup
                var popupHTML =

                    '<div data-role="popup" ' +
                    'id="' + popupId + '" ' +
                    'class="product-popup" ' +
                    'data-overlay-theme="b" ' +
                    'data-dismissible="true">' +

                        '<div class="popup-header">' +
                            '<h2>' + name + '</h2>' +
                        '</div>' +

                        '<div class="popup-content">' +

                            '<img src="' + image + '" alt="' + name + '">' +

                            '<p>' + description + '</p>' +

                            '<a href="#" ' +
                               'data-rel="back" ' +
                               'class="ui-btn ui-corner-all ui-btn-b">' +
                               'Close' +
                            '</a>' +

                        '</div>' +

                    '</div>';

                // Add popup to current page
                $(popupHTML).appendTo($.mobile.activePage);

                // Enhance popup
                $("#" + popupId).popup();

                // Open popup
                $("#" + popupId).popup("open");

            });

        });


        /*
         * ================================
         * CONTACT FORM
         * ================================
         */

        $(document).on("submit", "#contactForm", function (e) {

            e.preventDefault();

            var name = $("#name").val();

            if (name.trim() === "") {

                alert("Please enter your name.");

                return;

            }

            alert("Thank you, " + name + "! Your message has been received.");

            // Clear form
            $("#contactForm")[0].reset();

        });

       $(document).on("click", ".destination-item", function(e) {

    e.preventDefault();

    // Get information from the package that was clicked
    var name = $(this).find(".destination-name").text();
    var description = $(this).find(".destination-description").html();
    var image = $(this).find("img").attr("src");

    // Create popup
    var popup = `
        <div data-role="popup" id="tourPopup" 
             data-overlay-theme="b" 
             data-theme="a" 
             data-dismissible="true">

            <div style="padding: 20px; max-width: 400px;">

                <img src="${image}" 
                     alt="${name}" 
                     style="width:100%; border-radius:10px;">

                <h2>${name}</h2>

                <p>${description}</p>

                <a href="#booking" 
                   class="ui-btn ui-btn-b"
                   data-transition="slide">
                   Book This Tour
                </a>

            </div>

        </div>
    `;

    // Remove old popup
    $("#tourPopup").remove();

    // Add new popup
    $("body").append(popup);

    // Tell jQuery Mobile to create the popup
    $("#tourPopup").popup();

    // Open popup
    $("#tourPopup").popup("open");
});

/*
 * ================================
 * BOOKING FORM
 * ================================
 */

$(document).on("submit", "#bookingForm", function (e) {

    e.preventDefault(); 

    var name = $("#bookingName").val();
    var destination = $("#destination option:selected").text();
    var pax = $("#pax").val();
    var date = $("#date").val();

    alert("Thank you, " + name + "! Your booking for " + destination +
          " (" + pax + " person(s) on " + date + " has been successfully made.");

    $("#bookingForm")[0].reset();
    $("#destination").selectmenu("refresh");

});