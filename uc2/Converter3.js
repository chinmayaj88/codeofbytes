var tablinks = document.getElementsByClassName("tab-links");
      var tabcontents = document.getElementsByClassName("tab-contents");
      function opentab(tabname, event) {
        for (tablink of tablinks) {
          tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
          tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
        initializeVariables(tabname);
      }

      // Initialize variables for the active tab
      var activeTab = "length"; // Set the default active tab
      initializeVariables(activeTab);

      // Add event listeners for tab links
      for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", function (event) {
          activeTab = event.target.getAttribute("data-tab");
          initializeVariables(activeTab); // Initialize variables for the clicked tab
        });
      }

      function initializeVariables(tabname) {
        // Declare variables for the current tab
        var input = document.getElementById(tabname + "Input");
        var result = document.getElementById(tabname + "Result");
        var inputType = document.getElementById(tabname + "InputType");
        var resultType = document.getElementById(tabname + "ResultType");

        // Add event listeners for input and select elements in the current tab
        input.addEventListener("keyup", myResult);
        inputType.addEventListener("change", myResult);
        resultType.addEventListener("change", myResult);
      }

      function myResult() {
        var input = document.getElementById(activeTab + "Input");
        var result = document.getElementById(activeTab + "Result");
        var inputType = document.getElementById(activeTab + "InputType");
        var resultType = document.getElementById(activeTab + "ResultType");

        var inputTypeValue = inputType.value;
        var resultTypeValue = resultType.value;

        // Add your conversion logic here for each unit
        if (activeTab === "length") {
          // Length conversion logic
          if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
            result.value = Number(input.value) * 0.001;
          } else if (
            inputTypeValue === "meter" &&
            resultTypeValue === "centimeter"
          ) {
            result.value = Number(input.value) * 100;
          } else if (
            inputTypeValue === "meter" &&
            resultTypeValue === "meter"
          ) {
            result.value = input.value;
          }

          if (inputTypeValue === "kilometer" && resultTypeValue === "meter") {
            result.value = Number(input.value) * 1000;
          } else if (
            inputTypeValue === "kilometer" &&
            resultTypeValue === "centimeter"
          ) {
            result.value = Number(input.value) * 100000;
          } else if (
            inputTypeValue === "kilometer" &&
            resultTypeValue === "kilometer"
          ) {
            result.value = input.value;
          }

          if (inputTypeValue === "centimeter" && resultTypeValue === "meter") {
            result.value = Number(input.value) * 0.01;
          } else if (
            inputTypeValue === "centimeter" &&
            resultTypeValue === "kilometer"
          ) {
            result.value = Number(input.value) * 0.00001;
          } else if (
            inputTypeValue === "centimeter" &&
            resultTypeValue === "centimeter"
          ) {
            result.value = input.value;
          }
        } else if (activeTab === "temperature") {
          // Temperature conversion logic
          if (
            inputTypeValue === "celsius" &&
            resultTypeValue === "fahrenheit"
          ) {
            result.value = (Number(input.value) * 9) / 5 + 32;
          } else if (
            inputTypeValue === "celsius" &&
            resultTypeValue === "kelvin"
          ) {
            result.value = Number(input.value) + 273.15;
          } else if (
            inputTypeValue === "celsius" &&
            resultTypeValue === "celsius"
          ) {
            result.value = input.value;
          }

          if (
            inputTypeValue === "fahrenheit" &&
            resultTypeValue === "celsius"
          ) {
            result.value = ((Number(input.value) - 32) * 5) / 9;
          } else if (
            inputTypeValue === "fahrenheit" &&
            resultTypeValue === "kelvin"
          ) {
            result.value = ((Number(input.value) - 32) * 5) / 9 + 273.15;
          } else if (
            inputTypeValue === "fahrenheit" &&
            resultTypeValue === "fahrenheit"
          ) {
            result.value = input.value;
          }

          if (inputTypeValue === "kelvin" && resultTypeValue === "celsius") {
            result.value = Number(input.value) - 273.15;
          } else if (
            inputTypeValue === "kelvin" &&
            resultTypeValue === "fahrenheit"
          ) {
            result.value = ((Number(input.value) - 273.15) * 9) / 5 + 32;
          } else if (
            inputTypeValue === "kelvin" &&
            resultTypeValue === "kelvin"
          ) {
            result.value = input.value;
          }
        } else if (activeTab === "weight") {
          // Weight conversion logic
          if (inputTypeValue === "kilogram" && resultTypeValue === "gram") {
            result.value = Number(input.value) * 1000;
          } else if (
            inputTypeValue === "kilogram" &&
            resultTypeValue === "milligram"
          ) {
            result.value = Number(input.value) * 1000000;
          } else if (
            inputTypeValue === "kilogram" &&
            resultTypeValue === "pound"
          ) {
            result.value = Number(input.value) * 2.20462;
          } else if (
            inputTypeValue === "kilogram" &&
            resultTypeValue === "kilogram"
          ) {
            result.value = input.value;
          }

          if (inputTypeValue === "gram" && resultTypeValue === "kilogram") {
            result.value = Number(input.value) * 0.001;
          } else if (
            inputTypeValue === "gram" &&
            resultTypeValue === "milligram"
          ) {
            result.value = Number(input.value) * 1000;
          } else if (inputTypeValue === "gram" && resultTypeValue === "pound") {
            result.value = Number(input.value) * 0.00220462;
          } else if (inputTypeValue === "gram" && resultTypeValue === "gram") {
            result.value = input.value;
          }

          if (
            inputTypeValue === "milligram" &&
            resultTypeValue === "kilogram"
          ) {
            result.value = Number(input.value) * 0.000001;
          } else if (
            inputTypeValue === "milligram" &&
            resultTypeValue === "gram"
          ) {
            result.value = Number(input.value) * 0.001;
          } else if (
            inputTypeValue === "milligram" &&
            resultTypeValue === "pound"
          ) {
            result.value = Number(input.value) * 0.00000220462;
          } else if (
            inputTypeValue === "milligram" &&
            resultTypeValue === "milligram"
          ) {
            result.value = input.value;
          }

          if (inputTypeValue === "pound" && resultTypeValue === "kilogram") {
            result.value = Number(input.value) * 0.453592;
          } else if (inputTypeValue === "pound" && resultTypeValue === "gram") {
            result.value = Number(input.value) * 453.592;
          } else if (
            inputTypeValue === "pound" &&
            resultTypeValue === "milligram"
          ) {
            result.value = Number(input.value) * 453592;
          } else if (
            inputTypeValue === "pound" &&
            resultTypeValue === "pound"
          ) {
            result.value = input.value;
          }
        } else if (activeTab === "time") {
          // Time conversion logic
          if (inputTypeValue === "second" && resultTypeValue === "minute") {
            result.value = Number(input.value) / 60;
          } else if (
            inputTypeValue === "second" &&
            resultTypeValue === "hour"
          ) {
            result.value = Number(input.value) / 3600;
          } else if (
            inputTypeValue === "second" &&
            resultTypeValue === "second"
          ) {
            result.value = input.value;
          }

          if (inputTypeValue === "minute" && resultTypeValue === "second") {
            result.value = Number(input.value) * 60;
          } else if (
            inputTypeValue === "minute" &&
            resultTypeValue === "hour"
          ) {
            result.value = Number(input.value) / 60;
          } else if (
            inputTypeValue === "minute" &&
            resultTypeValue === "minute"
          ) {
            result.value = input.value;
          }

          if (inputTypeValue === "hour" && resultTypeValue === "second") {
            result.value = Number(input.value) * 3600;
          } else if (
            inputTypeValue === "hour" &&
            resultTypeValue === "minute"
          ) {
            result.value = Number(input.value) * 60;
          } else if (inputTypeValue === "hour" && resultTypeValue === "hour") {
            result.value = input.value;
          }
        }
      }