(function () {
  var form = document.querySelector("[data-lead-form]");
  if (!form) return;

  var panel = form.closest("[data-lead-panel]");
  var success = panel && panel.querySelector("[data-lead-success]");
  var failure = form.querySelector("[data-lead-error]");
  var button = form.querySelector("[data-lead-submit]");
  var label = button ? button.textContent : "";
  var sending = false;

  function track(data) {
    try {
      if (typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", { form_id: "demo_request", jobs_band: data.jobs || "", role: data.role || "" });
      }
      if (typeof window.clarity === "function") window.clarity("event", "demo_request_submitted");
    } catch (e) { /* analytics never blocks the form */ }
  }

  function showSuccess() {
    form.hidden = true;
    if (success) {
      success.hidden = false;
      success.setAttribute("tabindex", "-1");
      success.focus();
    }
  }

  function showError() {
    if (failure) failure.hidden = false;
    sending = false;
    if (button) { button.disabled = false; button.textContent = label; }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (sending) return;
    if (failure) failure.hidden = true;

    // Honeypot: real visitors never fill this field.
    var trap = form.querySelector('[name="website"]');
    if (trap && trap.value) { showSuccess(); return; }

    if (!form.checkValidity()) { form.reportValidity(); return; }

    sending = true;
    if (button) { button.disabled = true; button.textContent = "Sending..."; }

    var fd = new FormData(form);
    fd.delete("website");
    var summary = { jobs: fd.get("entry.1131442109"), role: fd.get("entry.1738014259") };
    var body = new URLSearchParams();
    fd.forEach(function (v, k) { body.append(k, v); });

    fetch(form.getAttribute("action"), { method: "POST", mode: "no-cors", body: body })
      .then(function () { track(summary); showSuccess(); })
      .catch(showError);
  });
})();
