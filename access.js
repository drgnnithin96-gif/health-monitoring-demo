/* Demo build. No passcodes and no online database: each page opens with sample data,
   and anything you add is saved only in your own browser. */
window.AWIT_DB = { url: "", key: "" };
window.AWIT_ACCESS = { team: [], partners: {}, funders: {} };
(function () {
  window.awitHash = async function () { return ""; };
  window.awitGate = function () { return Promise.resolve(); };
  window.awitSignIn = function () { return Promise.resolve("aw"); };
  window.awitSignOut = function () { location.href = "../../"; };

  function addNotes() {
    if (document.getElementById("demo-note")) return;
    var n = document.createElement("div");
    n.id = "demo-note";
    n.setAttribute("role", "note");
    n.innerHTML = "Demo copy. Schools, names, numbers and photos are made up. <a href=\"../../\">About this demo</a>";
    document.body.insertBefore(n, document.body.firstChild);
    var f = document.createElement("footer");
    f.id = "demo-foot";
    f.innerHTML = "Built by Dr Nithin G N for the Healthy Schools Program at Arogya World India Trust. "
      + "This public copy runs on dummy data only. "
      + "<a href=\"https://www.linkedin.com/in/dr-nithin-g-n-868808218/\" target=\"_blank\" rel=\"noopener\">LinkedIn</a>";
    document.body.appendChild(f);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", addNotes); else addNotes();
})();
