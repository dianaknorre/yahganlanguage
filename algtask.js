function check() {
            var A = parseFloat(document.getElementById("inputA").value);
            var B = parseFloat(document.getElementById("inputB").value);
            var C = parseFloat(document.getElementById("inputC").value);

            if (A < B && B < C) {
                result = "Выполняется A < B < C";
            } else if (A < B && B > C) {
                result = "Выполняется A < B > C";
            } else {
                result = "Ни одно из неравенств не выполняется";
            }
            document.getElementById("result").value = result;
        }
        function send() {
            var A = parseFloat(document.getElementById("inputA").value);
            var B = parseFloat(document.getElementById("inputB").value);
            var C = parseFloat(document.getElementById("inputC").value);

            var result = document.getElementById("result").value;

            var url = "https://noai.duckduckgo.com/?" + "A=" + A + "&B=" + B + "&C=" + C + "&result=" + encodeURIComponent(result);

            window.location.href = url;
        }