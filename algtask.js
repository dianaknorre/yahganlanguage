function checkInequalities() {
            var A = parseFloat(document.getElementById("inputA").value);
            var B = parseFloat(document.getElementById("inputB").value);
            var C = parseFloat(document.getElementById("inputC").value);

            var result = document.getElementById("result");

            if (A < B && B < C) {
                result.innerHTML = "Выполняется неравенство A < B < C";
            } else if (A < B && B > C) {
                result.innerHTML = "Выполняется неравенство A < B > C";
            } else {
                result.innerHTML = "Ни одно из неравенств не выполняется";
            }
        }
        function sendToAddressBar() {
            var A = parseFloat(document.getElementById("inputA").value);
            var B = parseFloat(document.getElementById("inputB").value);
            var C = parseFloat(document.getElementById("inputC").value);

            var result = document.getElementById("result").innerHTML;

            var url = "https://noai.duckduckgo.com/?" + "A=" + A + "&B=" + B + "&C=" + C + "&result=" + encodeURIComponent(result);

            window.location.href = url;
        }